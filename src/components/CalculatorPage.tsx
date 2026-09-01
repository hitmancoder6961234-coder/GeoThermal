'use client';

import { useState } from 'react';
import { useAppStore } from '@/lib/store';
import {
  calculateSystem,
  getCostBreakdown,
  formatCurrency,
  type CalcInput,
  type CalcResult,
  type CostBreakdown,
} from '@/lib/calculator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import {
  ArrowLeft,
  Home,
  Building2,
  Hotel,
  GraduationCap,
  Hospital,
  Factory,
  HelpCircle,
  Check,
  ChevronDown,
  Zap,
  Thermometer,
  IndianRupee,
  TrendingUp,
  Clock,
  Gauge,
  ArrowRight,
} from 'lucide-react';

type View = 'calculator' | 'cost-estimator';

const PROPERTY_TYPES = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'office', label: 'Office', icon: Building2 },
  { key: 'hotel', label: 'Hotel', icon: Hotel },
  { key: 'school', label: 'School', icon: GraduationCap },
  { key: 'hospital', label: 'Hospital', icon: Hospital },
  { key: 'factory', label: 'Factory', icon: Factory },
  { key: 'other', label: 'Other', icon: HelpCircle },
];

const STEPS = ['PROPERTY', 'BUILDING', 'ENERGY', 'RESULTS'];

const COOLING_SYSTEMS = ['AC', 'Central AC', 'VRF', 'Chiller', 'Other', 'None'];

export default function CalculatorPage() {
  const navigate = useAppStore((s) => s.navigate);
  const [view, setView] = useState<View>('calculator');
  const [step, setStep] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState('');
  const [buildingArea, setBuildingArea] = useState('');
  const [floors, setFloors] = useState('');
  const [people, setPeople] = useState('');
  const [monthlyBill, setMonthlyBill] = useState('');
  const [currentSystem, setCurrentSystem] = useState('');
  const [monthlyConsumption, setMonthlyConsumption] = useState('');
  const [result, setResult] = useState<CalcResult | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleCalculate = () => {
    const input: CalcInput = {
      propertyType: selectedProperty,
      buildingArea: Number(buildingArea) || 2000,
      floors: Number(floors) || undefined,
      monthlyBill: Number(monthlyBill) || undefined,
      currentSystem: currentSystem || undefined,
      monthlyConsumption: Number(monthlyConsumption) || undefined,
    };
    const res = calculateSystem(input);
    setResult(res);
    setStep(3);
  };

  const handleReset = () => {
    setStep(0);
    setSelectedProperty('');
    setBuildingArea('');
    setFloors('');
    setPeople('');
    setMonthlyBill('');
    setCurrentSystem('');
    setMonthlyConsumption('');
    setResult(null);
    setExpandedCategory(null);
  };

  const handleViewCostBreakdown = () => {
    if (!result) {
      const defaultResult = calculateSystem({
        propertyType: 'home',
        buildingArea: 2000,
      });
      setResult(defaultResult);
    }
    setView('cost-estimator');
  };

  const costBreakdown: CostBreakdown[] = result
    ? getCostBreakdown(result)
    : getCostBreakdown(
        calculateSystem({ propertyType: 'home', buildingArea: 2000 })
      );

  const totalCost = costBreakdown.reduce((sum, c) => sum + c.amount, 0);

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: '#07100D' }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          backgroundColor: '#0A1A13',
          borderColor: 'rgba(124,255,107,0.1)',
        }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-[#8A9A8F] hover:text-[#7CFF6B] hover:bg-[#132E1F]"
              onClick={() => navigate('home')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1
              className="text-lg font-bold tracking-wider text-[#F0F0F0] md:text-xl"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              {view === 'calculator'
                ? 'GEOTHERMAL CALCULATOR'
                : 'COST ESTIMATOR'}
            </h1>
          </div>
          <div className="flex items-center gap-1 rounded-lg p-1" style={{ backgroundColor: '#132E1F' }}>
            <Button
              size="sm"
              className={`rounded-md px-3 text-xs font-semibold transition-all md:px-4 md:text-sm ${
                view === 'calculator'
                  ? 'text-[#07100D]'
                  : 'text-[#8A9A8F] hover:text-[#F0F0F0]'
              }`}
              style={
                view === 'calculator'
                  ? { backgroundColor: '#7CFF6B' }
                  : { backgroundColor: 'transparent' }
              }
              onClick={() => setView('calculator')}
            >
              Calculator
            </Button>
            <Button
              size="sm"
              className={`rounded-md px-3 text-xs font-semibold transition-all md:px-4 md:text-sm ${
                view === 'cost-estimator'
                  ? 'text-[#07100D]'
                  : 'text-[#8A9A8F] hover:text-[#F0F0F0]'
              }`}
              style={
                view === 'cost-estimator'
                  ? { backgroundColor: '#7CFF6B' }
                  : { backgroundColor: 'transparent' }
              }
              onClick={handleViewCostBreakdown}
            >
              Cost Estimator
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6 md:py-10">
        {/* ============ CALCULATOR VIEW ============ */}
        {view === 'calculator' && (
          <div>
            {/* Progress Indicator */}
            {step < 3 && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  {STEPS.map((s, i) => (
                    <div key={s} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${
                            i < step
                              ? 'text-[#07100D]'
                              : i === step
                                ? 'text-[#07100D]'
                                : 'border border-[#8A9A8F]/30 text-[#8A9A8F]'
                          }`}
                          style={
                            i <= step
                              ? { backgroundColor: '#7CFF6B' }
                              : undefined
                          }
                        >
                          {i < step ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            i + 1
                          )}
                        </div>
                        <span
                          className={`mt-1.5 text-[10px] font-semibold tracking-wider ${
                            i <= step ? 'text-[#7CFF6B]' : 'text-[#8A9A8F]'
                          }`}
                          style={{ fontFamily: 'var(--font-space-grotesk)' }}
                        >
                          {s}
                        </span>
                      </div>
                      {i < STEPS.length - 1 && (
                        <div
                          className={`mx-2 mb-5 h-0.5 w-6 md:w-12 ${
                            i < step ? 'bg-[#7CFF6B]' : 'bg-[#8A9A8F]/20'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <Progress
                  value={((step + 1) / STEPS.length) * 100}
                  className="h-1.5"
                  style={
                    {
                      '--progress-foreground': '#7CFF6B',
                      '--progress-background': '#132E1F',
                    } as React.CSSProperties
                  }
                />
              </div>
            )}

            {/* STEP 1 — PROPERTY */}
            {step === 0 && (
              <div className="animate-in fade-in duration-300">
                <h2
                  className="mb-6 text-center text-2xl font-bold text-[#F0F0F0] md:text-3xl"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  What type of property is this?
                </h2>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                  {PROPERTY_TYPES.map((pt) => {
                    const Icon = pt.icon;
                    const isSelected = selectedProperty === pt.key;
                    return (
                      <Card
                        key={pt.key}
                        className={`group cursor-pointer border transition-all duration-200 hover:scale-[1.02] ${
                          isSelected
                            ? 'border-[#7CFF6B] shadow-[0_0_15px_rgba(124,255,107,0.2)]'
                            : 'border-[#8A9A8F]/15 hover:border-[#8A9A8F]/30'
                        }`}
                        style={{ backgroundColor: '#0A1A13' }}
                        onClick={() => setSelectedProperty(pt.key)}
                      >
                        <CardContent className="flex flex-col items-center gap-3 py-6">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                              isSelected
                                ? 'bg-[#7CFF6B]/15 text-[#7CFF6B]'
                                : 'bg-[#132E1F] text-[#8A9A8F] group-hover:text-[#F0F0F0]'
                            }`}
                          >
                            <Icon className="h-6 w-6" />
                          </div>
                          <span
                            className={`text-sm font-semibold ${
                              isSelected ? 'text-[#7CFF6B]' : 'text-[#F0F0F0]'
                            }`}
                            style={{ fontFamily: 'var(--font-space-grotesk)' }}
                          >
                            {pt.label}
                          </span>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    className="rounded-lg px-6 font-bold text-[#07100D] hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#7CFF6B' }}
                    disabled={!selectedProperty}
                    onClick={() => setStep(1)}
                  >
                    NEXT <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2 — BUILDING */}
            {step === 1 && (
              <div className="animate-in fade-in duration-300 max-w-lg mx-auto">
                <h2
                  className="mb-6 text-center text-2xl font-bold text-[#F0F0F0] md:text-3xl"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Building Details
                </h2>
                <Card style={{ backgroundColor: '#0A1A13' }} className="border-[#8A9A8F]/15">
                  <CardContent className="space-y-5 pt-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-[#F0F0F0]">
                        Building area <span className="text-[#8A9A8F]">(sq.ft)</span>
                      </Label>
                      <Input
                        type="number"
                        placeholder="e.g. 2000"
                        value={buildingArea}
                        onChange={(e) => setBuildingArea(e.target.value)}
                        className="border-[#8A9A8F]/20 bg-[#0D241B] text-[#F0F0F0] placeholder:text-[#8A9A8F]/50 focus:border-[#7CFF6B] focus:ring-[#7CFF6B]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-[#F0F0F0]">
                        Number of floors{' '}
                        <span className="text-[#8A9A8F]">(optional)</span>
                      </Label>
                      <Input
                        type="number"
                        placeholder="e.g. 2"
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                        className="border-[#8A9A8F]/20 bg-[#0D241B] text-[#F0F0F0] placeholder:text-[#8A9A8F]/50 focus:border-[#7CFF6B] focus:ring-[#7CFF6B]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-[#F0F0F0]">
                        Number of people/users{' '}
                        <span className="text-[#8A9A8F]">(optional)</span>
                      </Label>
                      <Input
                        type="number"
                        placeholder="e.g. 10"
                        value={people}
                        onChange={(e) => setPeople(e.target.value)}
                        className="border-[#8A9A8F]/20 bg-[#0D241B] text-[#F0F0F0] placeholder:text-[#8A9A8F]/50 focus:border-[#7CFF6B] focus:ring-[#7CFF6B]/20"
                      />
                    </div>
                  </CardContent>
                </Card>
                <div className="mt-6 flex justify-between">
                  <Button
                    variant="outline"
                    className="rounded-lg border-[#8A9A8F]/20 text-[#8A9A8F] hover:border-[#8A9A8F]/40 hover:text-[#F0F0F0] hover:bg-[#132E1F]"
                    onClick={() => setStep(0)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> BACK
                  </Button>
                  <Button
                    className="rounded-lg px-6 font-bold text-[#07100D] hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#7CFF6B' }}
                    disabled={!buildingArea}
                    onClick={() => setStep(2)}
                  >
                    NEXT <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3 — ENERGY */}
            {step === 2 && (
              <div className="animate-in fade-in duration-300 max-w-lg mx-auto">
                <h2
                  className="mb-6 text-center text-2xl font-bold text-[#F0F0F0] md:text-3xl"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Energy Details
                </h2>
                <Card style={{ backgroundColor: '#0A1A13' }} className="border-[#8A9A8F]/15">
                  <CardContent className="space-y-5 pt-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-[#F0F0F0]">
                        Average monthly electricity bill{' '}
                        <span className="text-[#8A9A8F]">(₹)</span>
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9A8F] text-sm">
                          ₹
                        </span>
                        <Input
                          type="number"
                          placeholder="e.g. 15000"
                          value={monthlyBill}
                          onChange={(e) => setMonthlyBill(e.target.value)}
                          className="border-[#8A9A8F]/20 bg-[#0D241B] pl-8 text-[#F0F0F0] placeholder:text-[#8A9A8F]/50 focus:border-[#7CFF6B] focus:ring-[#7CFF6B]/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-[#F0F0F0]">
                        Current cooling/heating system
                      </Label>
                      <Select value={currentSystem} onValueChange={setCurrentSystem}>
                        <SelectTrigger
                          className="border-[#8A9A8F]/20 bg-[#0D241B] text-[#F0F0F0] focus:border-[#7CFF6B] focus:ring-[#7CFF6B]/20"
                        >
                          <SelectValue placeholder="Select system type" />
                        </SelectTrigger>
                        <SelectContent className="border-[#8A9A8F]/20 bg-[#0A1A13]">
                          {COOLING_SYSTEMS.map((sys) => (
                            <SelectItem
                              key={sys}
                              value={sys}
                              className="text-[#F0F0F0] focus:bg-[#132E1F] focus:text-[#7CFF6B]"
                            >
                              {sys}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-[#F0F0F0]">
                        Monthly electricity consumption{' '}
                        <span className="text-[#8A9A8F]">(kWh, optional)</span>
                      </Label>
                      <Input
                        type="number"
                        placeholder="e.g. 1800"
                        value={monthlyConsumption}
                        onChange={(e) => setMonthlyConsumption(e.target.value)}
                        className="border-[#8A9A8F]/20 bg-[#0D241B] text-[#F0F0F0] placeholder:text-[#8A9A8F]/50 focus:border-[#7CFF6B] focus:ring-[#7CFF6B]/20"
                      />
                    </div>
                  </CardContent>
                </Card>
                <div className="mt-6 flex justify-between">
                  <Button
                    variant="outline"
                    className="rounded-lg border-[#8A9A8F]/20 text-[#8A9A8F] hover:border-[#8A9A8F]/40 hover:text-[#F0F0F0] hover:bg-[#132E1F]"
                    onClick={() => setStep(1)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> BACK
                  </Button>
                  <Button
                    className="rounded-lg px-6 font-bold text-[#07100D] hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#7CFF6B' }}
                    onClick={handleCalculate}
                  >
                    CALCULATE <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 4 — RESULTS */}
            {step === 3 && result && (
              <div className="animate-in fade-in duration-300">
                <div className="mb-8 text-center">
                  <h2
                    className="text-2xl font-bold text-[#F0F0F0] md:text-3xl"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    YOUR PRELIMINARY ESTIMATE
                  </h2>
                  <Badge
                    className="mt-3 border-[#FFB347]/30 bg-[#FFB347]/10 text-[#FFB347]"
                  >
                    ILLUSTRATIVE ESTIMATE
                  </Badge>
                </div>

                {/* Result Cards */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* Card 1: System Capacity */}
                  <Card
                    style={{ backgroundColor: '#0A1A13' }}
                    className="border-[#8A9A8F]/15"
                  >
                    <CardContent className="pt-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7CFF6B]/10">
                          <Zap className="h-5 w-5 text-[#7CFF6B]" />
                        </div>
                        <span className="text-sm text-[#8A9A8F]">
                          Estimated System Capacity
                        </span>
                      </div>
                      <p
                        className="text-3xl font-bold text-[#7CFF6B]"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {result.systemCapacityKw} kW
                      </p>
                    </CardContent>
                  </Card>

                  {/* Card 2: System Type */}
                  <Card
                    style={{ backgroundColor: '#0A1A13' }}
                    className="border-[#8A9A8F]/15"
                  >
                    <CardContent className="pt-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#47B5FF]/10">
                          <Thermometer className="h-5 w-5 text-[#47B5FF]" />
                        </div>
                        <span className="text-sm text-[#8A9A8F]">
                          Possible System
                        </span>
                      </div>
                      <p
                        className="text-xl font-bold text-[#47B5FF]"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {result.systemType}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Card 3: Project Cost */}
                  <Card
                    style={{ backgroundColor: '#0A1A13' }}
                    className="border-[#8A9A8F]/15"
                  >
                    <CardContent className="pt-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7CFF6B]/10">
                          <IndianRupee className="h-5 w-5 text-[#7CFF6B]" />
                        </div>
                        <span className="text-sm text-[#8A9A8F]">
                          Estimated Project Cost
                        </span>
                      </div>
                      <p
                        className="text-2xl font-bold text-[#7CFF6B] md:text-3xl"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {formatCurrency(result.estimatedCostMin)} –{' '}
                        {formatCurrency(result.estimatedCostMax)}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Card 4: Annual Savings */}
                  <Card
                    style={{ backgroundColor: '#0A1A13' }}
                    className="border-[#8A9A8F]/15"
                  >
                    <CardContent className="pt-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7CFF6B]/10">
                          <TrendingUp className="h-5 w-5 text-[#7CFF6B]" />
                        </div>
                        <span className="text-sm text-[#8A9A8F]">
                          Estimated Annual Savings
                        </span>
                      </div>
                      <p
                        className="text-2xl font-bold text-[#7CFF6B] md:text-3xl"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {formatCurrency(result.annualSavingsMin)} –{' '}
                        {formatCurrency(result.annualSavingsMax)}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Card 5: Payback */}
                  <Card
                    style={{ backgroundColor: '#0A1A13' }}
                    className="border-[#8A9A8F]/15"
                  >
                    <CardContent className="pt-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFB347]/10">
                          <Clock className="h-5 w-5 text-[#FFB347]" />
                        </div>
                        <span className="text-sm text-[#8A9A8F]">
                          Estimated Payback
                        </span>
                      </div>
                      <p
                        className="text-3xl font-bold text-[#FFB347]"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {result.paybackYears} years
                      </p>
                    </CardContent>
                  </Card>

                  {/* Card 6: COP */}
                  <Card
                    style={{ backgroundColor: '#0A1A13' }}
                    className="border-[#8A9A8F]/15"
                  >
                    <CardContent className="pt-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#47B5FF]/10">
                          <Gauge className="h-5 w-5 text-[#47B5FF]" />
                        </div>
                        <span className="text-sm text-[#8A9A8F]">
                          System COP
                        </span>
                      </div>
                      <p
                        className="text-3xl font-bold text-[#47B5FF]"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {result.cop}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Additional Details */}
                <Card
                  className="mt-6"
                  style={{ backgroundColor: '#0D241B' }}
                >
                  <CardContent className="pt-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
                      <div>
                        <span className="text-sm text-[#8A9A8F]">
                          Borehole Depth
                        </span>
                        <p
                          className="text-lg font-bold text-[#F0F0F0]"
                          style={{ fontFamily: 'var(--font-space-grotesk)' }}
                        >
                          {result.boreholeDepth} metres
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-[#8A9A8F]">
                          Ground Loop Length
                        </span>
                        <p
                          className="text-lg font-bold text-[#F0F0F0]"
                          style={{ fontFamily: 'var(--font-space-grotesk)' }}
                        >
                          {result.groundLoopLength} metres
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Disclaimer */}
                <p className="mt-4 text-center text-xs leading-relaxed text-[#8A9A8F]">
                  These results are preliminary estimates for educational and
                  planning purposes. Final system sizing, ground-loop design,
                  installation requirements, cost and performance require
                  professional site assessment and engineering.
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button
                    className="rounded-lg px-6 font-bold text-[#07100D] hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#7CFF6B' }}
                    onClick={() => navigate('contact')}
                  >
                    REQUEST PROFESSIONAL ASSESSMENT{' '}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-lg border-[#7CFF6B]/30 text-[#7CFF6B] hover:bg-[#7CFF6B]/10 hover:text-[#7CFF6B]"
                    onClick={handleViewCostBreakdown}
                  >
                    VIEW COST BREAKDOWN <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Start Over */}
                <div className="mt-6 text-center">
                  <Button
                    variant="ghost"
                    className="text-sm text-[#8A9A8F] hover:text-[#F0F0F0] hover:bg-[#132E1F]"
                    onClick={handleReset}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> START OVER
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============ COST ESTIMATOR VIEW ============ */}
        {view === 'cost-estimator' && (
          <div className="animate-in fade-in duration-300">
            <div className="mb-8 text-center">
              <h2
                className="text-2xl font-bold text-[#F0F0F0] md:text-3xl"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                UNDERSTAND YOUR PROJECT COST
              </h2>
              <p className="mt-2 text-sm text-[#8A9A8F]">
                See how your geothermal project investment is distributed across
                different categories.
              </p>
            </div>

            {/* Cost Category Cards */}
            <div className="space-y-3">
              {costBreakdown.map((cat) => {
                const isExpanded = expandedCategory === cat.category;
                const percentage =
                  totalCost > 0
                    ? parseFloat(((cat.amount / totalCost) * 100).toFixed(1))
                    : 0;

                return (
                  <Card
                    key={cat.category}
                    className="border-[#8A9A8F]/15 overflow-hidden transition-all duration-200"
                    style={{ backgroundColor: '#0A1A13' }}
                  >
                    <button
                      className="flex w-full items-center justify-between px-5 py-4 text-left"
                      onClick={() =>
                        setExpandedCategory(
                          isExpanded ? null : cat.category
                        )
                      }
                    >
                      <span
                        className="text-sm font-semibold text-[#F0F0F0]"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {cat.category}
                      </span>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-sm font-bold text-[#F0F0F0]"
                          style={{ fontFamily: 'var(--font-space-grotesk)' }}
                        >
                          {formatCurrency(cat.amount)}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 text-[#8A9A8F] transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>
                    <div className="px-5">
                      <Progress
                        value={percentage}
                        className="h-1.5"
                        style={
                          {
                            '--progress-foreground': '#7CFF6B',
                            '--progress-background': '#132E1F',
                          } as React.CSSProperties
                        }
                      />
                    </div>
                    {/* Expandable Content */}
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: isExpanded
                          ? `${cat.items.length * 40 + 16}px`
                          : '0px',
                      }}
                    >
                      <div className="px-5 py-4 space-y-2">
                        {cat.items.map((item) => (
                          <p
                            key={item.name}
                            className="text-sm text-[#8A9A8F]"
                            style={{ fontFamily: 'var(--font-inter)' }}
                          >
                            <span className="text-[#7CFF6B]">•</span>{' '}
                            {item.name}:{' '}
                            <span className="text-[#F0F0F0] font-medium">
                              {formatCurrency(item.cost)}
                            </span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Total */}
            <Card
              className="mt-6"
              style={{ backgroundColor: '#0D241B', borderColor: 'rgba(124,255,107,0.2)' }}
            >
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-[#8A9A8F] mb-1">ESTIMATED TOTAL</p>
                <p
                  className="text-3xl font-bold text-[#7CFF6B] md:text-4xl"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {formatCurrency(totalCost)}
                </p>
                <Badge
                  className="mt-3 border-[#FFB347]/30 bg-[#FFB347]/10 text-[#FFB347]"
                >
                  ILLUSTRATIVE ESTIMATE
                </Badge>
                <p className="mt-3 text-xs text-[#8A9A8F] max-w-md mx-auto leading-relaxed">
                  All prices are estimated and for planning purposes. Actual
                  costs depend on site conditions, equipment selection, and
                  project scope.
                </p>
              </CardContent>
            </Card>

            {/* Back to Calculator */}
            <div className="mt-6 text-center">
              <Button
                variant="ghost"
                className="text-sm text-[#8A9A8F] hover:text-[#F0F0F0] hover:bg-[#132E1F]"
                onClick={() => setView('calculator')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> BACK TO CALCULATOR
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
