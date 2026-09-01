// Demo pricing configuration (per sq.ft basis for India market)
export const DEFAULT_PRICES = {
  heatPumpPerKw: 45000,    // ₹ per kW
  drillingPerMetre: 3500,  // ₹ per metre
  pipePerMetre: 800,       // ₹ per metre
  installationPerSqft: 150, // ₹ per sq.ft
  engineering: 80000,       // flat ₹
  transport: 25000,        // flat ₹
  civilWork: 100,          // ₹ per sq.ft
  electrical: 80,          // ₹ per sq.ft
  other: 30000,            // flat ₹
};

// Watts per sq.ft for different property types
const WATTS_PER_SQFT: Record<string, number> = {
  home: 12,
  office: 15,
  hotel: 18,
  school: 14,
  hospital: 20,
  factory: 22,
  other: 15,
};

// COP values (Coefficient of Performance)
const COP_HEATING = 4.0;
const COP_COOLING = 4.5;

// Borehole depth per kW
const METRES_PER_KW = 15;

// Electricity rate ₹/kWh (India average)
const ELECTRICITY_RATE = 8.5;

// Operating hours per year
const ANNUAL_HOURS_HEATING = 3000;
const ANNUAL_HOURS_COOLING = 2500;

export interface CalcInput {
  propertyType: string;
  buildingArea: number; // sq.ft
  floors?: number;
  monthlyBill?: number; // ₹
  currentSystem?: string;
  monthlyConsumption?: number; // kWh
}

export interface CalcResult {
  systemCapacityKw: number;
  systemType: string;
  estimatedCostMin: number;
  estimatedCostMax: number;
  annualSavingsMin: number;
  annualSavingsMax: number;
  paybackYears: number;
  cop: number;
  boreholeDepth: number;
  groundLoopLength: number;
}

export function calculateSystem(input: CalcInput): CalcResult {
  const wattsPerSqft = WATTS_PER_SQFT[input.propertyType] || 15;
  const totalArea = input.buildingArea * (input.floors || 1);
  const totalLoadWatts = totalArea * wattsPerSqft;
  const systemCapacityKw = Math.ceil(totalLoadWatts / 1000);

  const boreholeDepth = systemCapacityKw * METRES_PER_KW;
  const groundLoopLength = boreholeDepth * 2;

  // Cost calculation
  const heatPumpCost = systemCapacityKw * DEFAULT_PRICES.heatPumpPerKw;
  const drillingCost = boreholeDepth * DEFAULT_PRICES.drillingPerMetre;
  const pipeCost = groundLoopLength * DEFAULT_PRICES.pipePerMetre;
  const installationCost = totalArea * DEFAULT_PRICES.installationPerSqft;
  const civilCost = totalArea * DEFAULT_PRICES.civilWork;
  const electricalCost = totalArea * DEFAULT_PRICES.electrical;
  const baseCost =
    heatPumpCost +
    drillingCost +
    pipeCost +
    installationCost +
    civilCost +
    electricalCost +
    DEFAULT_PRICES.engineering +
    DEFAULT_PRICES.transport +
    DEFAULT_PRICES.other;

  const estimatedCostMin = Math.round(baseCost * 0.9);
  const estimatedCostMax = Math.round(baseCost * 1.15);

  // Savings calculation
  const cop = (COP_HEATING + COP_COOLING) / 2;
  const annualHeatingNeed = (systemCapacityKw * ANNUAL_HOURS_HEATING) / COP_HEATING;
  const annualCoolingNeed = (systemCapacityKw * ANNUAL_HOURS_COOLING) / COP_COOLING;
  const geoAnnualEnergy = annualHeatingNeed + annualCoolingNeed;
  const geoAnnualCost = geoAnnualEnergy * ELECTRICITY_RATE;

  // Compare with conventional system (COP ~1 for resistance heating, ~2.5 for AC)
  const convAnnualEnergy =
    systemCapacityKw * ANNUAL_HOURS_HEATING +
    (systemCapacityKw * ANNUAL_HOURS_COOLING) / 2.5;
  const convAnnualCost = convAnnualEnergy * ELECTRICITY_RATE;

  const annualSavings = convAnnualCost - geoAnnualCost;
  const annualSavingsMin = Math.round(annualSavings * 0.8);
  const annualSavingsMax = Math.round(annualSavings * 1.1);

  const avgSavings = (annualSavingsMin + annualSavingsMax) / 2;
  const avgCost = (estimatedCostMin + estimatedCostMax) / 2;
  const paybackYears =
    avgSavings > 0 ? parseFloat((avgCost / avgSavings).toFixed(1)) : 99;

  return {
    systemCapacityKw,
    systemType: "Ground Source Heat Pump (GSHP)",
    estimatedCostMin,
    estimatedCostMax,
    annualSavingsMin,
    annualSavingsMax,
    paybackYears,
    cop: parseFloat(cop.toFixed(1)),
    boreholeDepth,
    groundLoopLength,
  };
}

export function formatCurrency(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2)} L`;
  }
  return `₹${amount.toLocaleString("en-IN")}`;
}

export interface CostBreakdown {
  category: string;
  amount: number;
  items: { name: string; cost: number }[];
}

export function getCostBreakdown(result: CalcResult): CostBreakdown[] {
  const totalArea = result.systemCapacityKw * 70;
  return [
    {
      category: "Heat Pump",
      amount: result.systemCapacityKw * DEFAULT_PRICES.heatPumpPerKw,
      items: [
        { name: "Ground Source Heat Pump Unit", cost: result.systemCapacityKw * DEFAULT_PRICES.heatPumpPerKw * 0.7 },
        { name: "Accessories & Controls", cost: result.systemCapacityKw * DEFAULT_PRICES.heatPumpPerKw * 0.3 },
      ],
    },
    {
      category: "Ground Loop",
      amount: result.groundLoopLength * DEFAULT_PRICES.pipePerMetre,
      items: [
        { name: "HDPE Pipe", cost: result.groundLoopLength * DEFAULT_PRICES.pipePerMetre * 0.5 },
        { name: "Fittings & Headers", cost: result.groundLoopLength * DEFAULT_PRICES.pipePerMetre * 0.2 },
        { name: "Grouting", cost: result.groundLoopLength * DEFAULT_PRICES.pipePerMetre * 0.15 },
        { name: "Installation Labour", cost: result.groundLoopLength * DEFAULT_PRICES.pipePerMetre * 0.15 },
      ],
    },
    {
      category: "Drilling",
      amount: result.boreholeDepth * DEFAULT_PRICES.drillingPerMetre,
      items: [
        { name: "Borehole Drilling", cost: result.boreholeDepth * DEFAULT_PRICES.drillingPerMetre * 0.75 },
        { name: "Mobilisation", cost: result.boreholeDepth * DEFAULT_PRICES.drillingPerMetre * 0.1 },
        { name: "Grouting & Testing", cost: result.boreholeDepth * DEFAULT_PRICES.drillingPerMetre * 0.15 },
      ],
    },
    {
      category: "Piping",
      amount: totalArea * DEFAULT_PRICES.pipePerMetre * 0.5,
      items: [
        { name: "Distribution Piping", cost: totalArea * DEFAULT_PRICES.pipePerMetre * 0.3 },
        { name: "Fittings & Valves", cost: totalArea * DEFAULT_PRICES.pipePerMetre * 0.2 },
      ],
    },
    {
      category: "Electrical",
      amount: totalArea * DEFAULT_PRICES.electrical,
      items: [
        { name: "Electrical Wiring", cost: totalArea * DEFAULT_PRICES.electrical * 0.6 },
        { name: "Panel & Controls", cost: totalArea * DEFAULT_PRICES.electrical * 0.4 },
      ],
    },
    {
      category: "Civil Work",
      amount: totalArea * DEFAULT_PRICES.civilWork,
      items: [
        { name: "Trenching & Backfilling", cost: totalArea * DEFAULT_PRICES.civilWork * 0.5 },
        { name: "Equipment Pad", cost: totalArea * DEFAULT_PRICES.civilWork * 0.3 },
        { name: "Restoration", cost: totalArea * DEFAULT_PRICES.civilWork * 0.2 },
      ],
    },
    {
      category: "Installation",
      amount: totalArea * DEFAULT_PRICES.installationPerSqft,
      items: [
        { name: "Mechanical Installation", cost: totalArea * DEFAULT_PRICES.installationPerSqft * 0.6 },
        { name: "Electrical Work", cost: totalArea * DEFAULT_PRICES.installationPerSqft * 0.25 },
        { name: "Commissioning", cost: totalArea * DEFAULT_PRICES.installationPerSqft * 0.15 },
      ],
    },
    {
      category: "Engineering",
      amount: DEFAULT_PRICES.engineering,
      items: [
        { name: "System Design", cost: DEFAULT_PRICES.engineering * 0.5 },
        { name: "Documentation", cost: DEFAULT_PRICES.engineering * 0.3 },
        { name: "Supervision", cost: DEFAULT_PRICES.engineering * 0.2 },
      ],
    },
    {
      category: "Other",
      amount: DEFAULT_PRICES.transport + DEFAULT_PRICES.other,
      items: [
        { name: "Transport", cost: DEFAULT_PRICES.transport },
        { name: "Contingency", cost: DEFAULT_PRICES.other },
      ],
    },
  ];
}