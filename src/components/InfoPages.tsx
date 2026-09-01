'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  BookOpen,
  Eye,
  Cpu,
  Home,
  Building2,
  Factory,
  Sprout,
  Check,
  ChevronDown,
  Earth,
  GitBranch,
  ArrowLeftRight,
  Thermometer,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CircleCheckBig,
  ArrowRight,
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/* ================================================================
   SHARED STYLES
   ================================================================ */

const sectionWrap = 'py-16 md:py-24 px-6';
const container = 'max-w-7xl mx-auto';
const headingClass =
  'font-[family-name:var(--font-space-grotesk)] font-bold text-3xl md:text-5xl text-white';
const subheadingClass =
  'font-[family-name:var(--font-inter)] text-[#8A9A8F] text-lg md:text-xl mt-4 max-w-3xl';
const cardBase =
  'bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 hover:border-[rgba(124,255,107,0.15)] transition-all';
const greenBtn =
  'bg-[#7CFF6B] text-[#07100D] font-semibold rounded-lg hover:bg-[#6AE85B] transition px-6 py-3';

/* ================================================================
   1. ABOUT PAGE
   ================================================================ */

export function AboutPage() {
  return (
    <div className="bg-[#07100D] min-h-screen">
      {/* Hero */}
      <section className={`${sectionWrap} pt-32`}>
        <div className={container}>
          <h1 className={`${headingClass} leading-tight`}>
            BUILDING A SMARTER
            <br />
            <span className="text-[#7CFF6B]">ENERGY FUTURE</span>
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className={sectionWrap}>
        <div className={`${container} max-w-4xl space-y-6`}>
          <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] text-lg leading-relaxed">
            GEO◉THERM is a student-level geothermal energy startup concept
            focused on making geothermal technology easier to understand, estimate
            and manage.
          </p>
          <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] text-lg leading-relaxed">
            Our goal is to combine geothermal engineering with simple digital
            tools — allowing anyone to explore whether geothermal is right for
            their property, get preliminary cost estimates, and understand how
            these systems work.
          </p>
          <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] text-lg leading-relaxed">
            This platform demonstrates how geothermal energy solutions can be
            presented clearly and transparently, from initial enquiry through to
            project monitoring.
          </p>
          <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] text-lg leading-relaxed">
            As a student project, GEO◉THERM does not represent an operational
            business. All data shown is illustrative or simulated for educational
            purposes.
          </p>
        </div>
      </section>

      {/* Value Cards */}
      <section className={sectionWrap}>
        <div className={`${container} grid grid-cols-1 md:grid-cols-3 gap-6`}>
          <Card className={`${cardBase} text-center`}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-[rgba(124,255,107,0.1)] flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-[#7CFF6B]" />
              </div>
            </div>
            <CardHeader className="pb-2 px-0 pt-0">
              <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-white text-xl">
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F]">
                Making geothermal technology understandable for everyone.
              </p>
            </CardContent>
          </Card>

          <Card className={`${cardBase} text-center`}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-[rgba(124,255,107,0.1)] flex items-center justify-center">
                <Eye className="w-7 h-7 text-[#7CFF6B]" />
              </div>
            </div>
            <CardHeader className="pb-2 px-0 pt-0">
              <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-white text-xl">
                Transparency
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F]">
                Clear costs, honest estimates, no hidden surprises.
              </p>
            </CardContent>
          </Card>

          <Card className={`${cardBase} text-center`}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-[rgba(124,255,107,0.1)] flex items-center justify-center">
                <Cpu className="w-7 h-7 text-[#7CFF6B]" />
              </div>
            </div>
            <CardHeader className="pb-2 px-0 pt-0">
              <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-white text-xl">
                Technology
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F]">
                Combining engineering with modern digital tools.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Disclaimer */}
      <section className={`${sectionWrap} pb-32`}>
        <div className={container}>
          <div className="bg-[rgba(255,179,71,0.06)] border border-[rgba(255,179,71,0.15)] rounded-xl p-6 text-center">
            <p className="font-[family-name:var(--font-inter)] text-[#FFB347] text-sm">
              ⚠ This is a student project / prototype. No real services are offered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================================================================
   2. SOLUTIONS PAGE
   ================================================================ */

interface SolutionItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  useCases: string[];
  benefits: string[];
}

const solutions: SolutionItem[] = [
  {
    icon: <Home className="w-7 h-7 text-[#7CFF6B]" />,
    title: 'RESIDENTIAL SOLUTIONS',
    description:
      'Geothermal systems for homes and villas provide year-round heating and cooling with minimal environmental impact. A ground-source heat pump taps into the stable underground temperature to keep your living spaces comfortable in every season, while significantly reducing energy bills and carbon emissions.',
    useCases: ['New construction', 'Retrofit', 'Villa estates', 'Apartments'],
    benefits: [
      'Year-round comfort',
      'Lower energy bills',
      'Reduced carbon footprint',
      'Quiet operation',
    ],
  },
  {
    icon: <Building2 className="w-7 h-7 text-[#7CFF6B]" />,
    title: 'COMMERCIAL SOLUTIONS',
    description:
      'Commercial buildings have high heating and cooling demands that make geothermal energy an excellent fit. From office towers to hotels, geothermal systems deliver reliable, scalable climate control that can be centrally managed and monitored for maximum efficiency.',
    useCases: ['Office buildings', 'Hotels', 'Shopping centers', 'Schools'],
    benefits: [
      'Scalable systems',
      'Central management',
      'Lower operating costs',
      'Green building certification',
    ],
  },
  {
    icon: <Factory className="w-7 h-7 text-[#7CFF6B]" />,
    title: 'INDUSTRIAL SOLUTIONS',
    description:
      'Industrial facilities require large amounts of heating and cooling energy. Geothermal systems can meet these demands efficiently, whether for space heating, process heating, or district heating networks that serve multiple buildings from a single ground loop array.',
    useCases: [
      'Manufacturing facilities',
      'Warehouses',
      'Process heating',
      'District heating',
    ],
    benefits: [
      'High-capacity output',
      'Consistent performance',
      'Reduced fuel dependency',
      'Long system lifespan',
    ],
  },
  {
    icon: <Sprout className="w-7 h-7 text-[#7CFF6B]" />,
    title: 'AGRICULTURAL SOLUTIONS',
    description:
      'Agriculture benefits enormously from stable ground temperatures. Geothermal energy can warm greenhouses in winter, maintain ideal water temperatures for aquaculture, and provide soil warming for early-season planting — all at a fraction of conventional energy costs.',
    useCases: ['Greenhouses', 'Aquaculture', 'Soil warming', 'Dairy farms'],
    benefits: [
      'Extended growing seasons',
      'Lower heating costs',
      'Improved yields',
      'Sustainable operations',
    ],
  },
];

function SolutionCard({ solution }: { solution: SolutionItem }) {
  return (
    <Card className={`${cardBase} flex flex-col lg:flex-row gap-6 items-start`}>
      <div className="shrink-0">
        <div className="w-16 h-16 rounded-full bg-[rgba(124,255,107,0.1)] flex items-center justify-center">
          {solution.icon}
        </div>
      </div>
      <div className="flex-1 space-y-4">
        <CardHeader className="p-0">
          <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-white text-xl md:text-2xl">
            {solution.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 space-y-4">
          <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] leading-relaxed">
            {solution.description}
          </p>

          {/* Use Cases */}
          <div>
            <p className="font-[family-name:var(--font-space-grotesk)] text-[#8A9A8F] text-sm uppercase tracking-wider mb-2">
              Use Cases
            </p>
            <div className="flex flex-wrap gap-2">
              {solution.useCases.map((uc) => (
                <Badge
                  key={uc}
                  className="bg-[#0D241B] text-[#7CFF6B] border-[rgba(124,255,107,0.15)] hover:bg-[#132E1F]"
                >
                  {uc}
                </Badge>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <p className="font-[family-name:var(--font-space-grotesk)] text-[#8A9A8F] text-sm uppercase tracking-wider mb-2">
              Benefits
            </p>
            <ul className="space-y-2">
              {solution.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 font-[family-name:var(--font-inter)] text-[#F0F0F0] text-sm"
                >
                  <Check className="w-4 h-4 text-[#7CFF6B] shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export function SolutionsPage() {
  const navigate = useAppStore((s) => s.navigate);
  return (
    <div className="bg-[#07100D] min-h-screen">
      {/* Header */}
      <section className={`${sectionWrap} pt-32`}>
        <div className={container}>
          <h1 className={headingClass}>GEOTHERMAL SOLUTIONS</h1>
          <p className={subheadingClass}>
            Explore how geothermal energy can be applied across different building
            types and use cases.
          </p>
        </div>
      </section>

      {/* Solution Cards */}
      <section className={`${sectionWrap} pt-8`}>
        <div className={`${container} space-y-8`}>
          {solutions.map((s) => (
            <SolutionCard key={s.title} solution={s} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={`${sectionWrap} pb-32`}>
        <div className={container}>
          <div className="bg-[#0A1A13] border border-[rgba(124,255,107,0.12)] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-2xl md:text-4xl text-white mb-4">
              NOT SURE WHICH SOLUTION FITS?
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] mb-8 max-w-xl mx-auto">
              Use our calculator to get a quick estimate based on your building
              type and area.
            </p>
            <Button
              className={greenBtn}
              onClick={() => navigate('calculator')}
            >
              CALCULATE MY SYSTEM <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================================================================
   3. HOW IT WORKS PAGE
   ================================================================ */

const howSteps = [
  {
    num: 1,
    title: 'THE GROUND',
    icon: <Earth className="w-8 h-8 text-[#7CFF6B]" />,
    description:
      "A few metres below the Earth's surface, the temperature remains remarkably stable year-round — typically between 15 °C and 25 °C depending on location and depth. This thermal stability is the foundation of geothermal energy: regardless of freezing winters or scorching summers, the ground provides a consistent heat source in winter and a heat sink in summer.",
  },
  {
    num: 2,
    title: 'GROUND LOOP',
    icon: <GitBranch className="w-8 h-8 text-[#7CFF6B]" />,
    description:
      'A network of high-density polyethylene (HDPE) pipes is buried underground — either in shallow horizontal trenches or deep vertical boreholes. A water-antifreeze mixture circulates through these pipes, absorbing heat from the ground in heating mode and releasing heat into the ground in cooling mode. This closed loop has no contact with the environment and can last 50+ years.',
  },
  {
    num: 3,
    title: 'HEAT EXCHANGE',
    icon: <ArrowLeftRight className="w-8 h-8 text-[#7CFF6B]" />,
    description:
      'Inside the heat pump unit, the fluid from the ground loop passes through a heat exchanger where thermal energy is transferred to a refrigerant circuit. In heating mode, the refrigerant absorbs heat from the ground fluid and evaporates. In cooling mode, the process reverses — the refrigerant absorbs heat from the building and rejects it to the ground.',
  },
  {
    num: 4,
    title: 'HEAT PUMP',
    icon: <Thermometer className="w-8 h-8 text-[#7CFF6B]" />,
    description:
      "The compressor in the heat pump pressurises the refrigerant gas, raising its temperature significantly — from around 10-15 °C to 40-60 °C. A second heat exchanger then transfers this heat to the building's water or air distribution system. Because the pump only moves existing heat rather than generating it from fuel, it delivers 3-5 units of energy for every 1 unit of electricity consumed (COP of 3-5).",
  },
  {
    num: 5,
    title: 'DISTRIBUTION',
    icon: <Building2 className="w-8 h-8 text-[#7CFF6B]" />,
    description:
      'The heated or cooled energy is distributed throughout the building via underfloor heating pipes, radiators, fan-coil units, or ducted air systems. The same geothermal system can provide both heating in winter and air conditioning in summer by simply reversing the refrigerant cycle — offering true all-in-one climate control from a single, efficient unit.',
  },
];

const systemTypes = [
  {
    title: 'Horizontal Loop',
    description:
      'Pipes are laid in shallow trenches 1-2 metres deep across a wide area. This approach requires more land but avoids deep drilling, making it cheaper to install. It is best suited for larger properties where land is available. Trenches can be straight or coiled ("slinky" layout) to reduce the total trench length needed.',
    pros: ['Lower drilling cost', 'Easier maintenance access', 'Simpler installation'],
    cons: [
      'Requires more land area',
      'Less efficient in very cold climates',
      'Can be affected by surface temperature swings',
    ],
  },
  {
    title: 'Vertical Loop',
    description:
      'Deep boreholes (typically 60-150 m) are drilled vertically, and U-shaped pipe loops are inserted. This is the most common type for residential and commercial installations where land area is limited. Vertical loops reach deeper, more stable ground temperatures and deliver consistent performance year-round.',
    pros: [
      'Minimal land required',
      'More stable temperatures at depth',
      'Most common for buildings',
      'Consistent year-round performance',
    ],
    cons: [
      'Higher drilling cost',
      'Requires specialised drilling equipment',
      'Site geology affects cost',
    ],
  },
];

const keyTerms = [
  {
    term: 'COP (Coefficient of Performance)',
    explanation:
      'A measure of heat pump efficiency. A COP of 4 means the system delivers 4 kWh of heating for every 1 kWh of electricity consumed. Geothermal heat pumps typically achieve COPs of 3-5, far exceeding conventional heaters.',
  },
  {
    term: 'Ground Loop',
    explanation:
      "The closed-circuit pipe network buried underground through which a heat-transfer fluid circulates. It is the interface between the building's heat pump and the Earth's thermal energy.",
  },
  {
    term: 'Heat Pump',
    explanation:
      'A mechanical device that transfers heat from a cooler source (the ground) to a warmer destination (the building) using a refrigerant cycle and compressor. It can reverse the cycle to provide cooling.',
  },
  {
    term: 'Borehole',
    explanation:
      'A deep narrow hole drilled into the ground (usually 60-150 m) into which a U-shaped ground loop pipe is inserted. Multiple boreholes may be needed depending on the heating/cooling load.',
  },
  {
    term: 'Thermal Conductivity',
    explanation:
      'A measure of how well soil and rock transfer heat. Higher thermal conductivity means the ground can supply or absorb heat more efficiently, potentially reducing the number or depth of boreholes needed.',
  },
];

export function HowItWorksPage() {
  return (
    <div className="bg-[#07100D] min-h-screen">
      {/* Header */}
      <section className={`${sectionWrap} pt-32`}>
        <div className={container}>
          <h1 className={headingClass}>HOW GEOTHERMAL WORKS</h1>
          <p className={subheadingClass}>
            Geothermal energy harnesses the stable temperature found just below
            the Earth&apos;s surface to heat and cool buildings efficiently.
            Here&apos;s a step-by-step look at the process.
          </p>
        </div>
      </section>

      {/* Steps Timeline - Desktop */}
      <section className={`${sectionWrap} pt-8`}>
        <div className={container}>
          {/* Desktop horizontal timeline */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative">
            {/* Connector line */}
            <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-[rgba(124,255,107,0.2)]" />

            {howSteps.map((step) => (
              <div
                key={step.num}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-[#0D241B] border-2 border-[rgba(124,255,107,0.3)] flex items-center justify-center relative z-10 mb-4">
                  {step.icon}
                </div>
                <span className="font-[family-name:var(--font-space-grotesk)] text-[#7CFF6B] text-xs tracking-widest mb-1">
                  STEP {step.num}
                </span>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-white font-bold text-lg mb-3">
                  {step.title}
                </h3>
                <Card className={`${cardBase} text-left`}>
                  <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden space-y-8">
            {howSteps.map((step) => (
              <div key={step.num} className="flex gap-4 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#0D241B] border-2 border-[rgba(124,255,107,0.3)] flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  {step.num < 5 && (
                    <div className="w-0.5 flex-1 bg-[rgba(124,255,107,0.15)] mt-2" />
                  )}
                </div>
                <Card className={`${cardBase} flex-1`}>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-[#7CFF6B] text-xs tracking-widest">
                    STEP {step.num}
                  </span>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-white font-bold text-lg mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Types */}
      <section className={sectionWrap}>
        <div className={container}>
          <h2 className={`${headingClass} text-2xl md:text-3xl mb-10`}>
            TYPES OF GEOTHERMAL SYSTEMS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {systemTypes.map((st) => (
              <Card key={st.title} className={cardBase}>
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-white text-xl">
                    {st.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] text-sm leading-relaxed">
                    {st.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-[family-name:var(--font-space-grotesk)] text-[#7CFF6B] text-xs uppercase tracking-wider mb-2">
                        Pros
                      </p>
                      <ul className="space-y-1">
                        {st.pros.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-2 text-sm text-[#F0F0F0] font-[family-name:var(--font-inter)]"
                          >
                            <Check className="w-4 h-4 text-[#7CFF6B] shrink-0 mt-0.5" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-space-grotesk)] text-[#FFB347] text-xs uppercase tracking-wider mb-2">
                        Cons
                      </p>
                      <ul className="space-y-1">
                        {st.cons.map((c) => (
                          <li
                            key={c}
                            className="flex items-start gap-2 text-sm text-[#8A9A8F] font-[family-name:var(--font-inter)]"
                          >
                            <span className="text-[#FFB347] shrink-0 mt-0.5">
                              •
                            </span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Terms */}
      <section className={`${sectionWrap} pb-32`}>
        <div className={container}>
          <h2 className={`${headingClass} text-2xl md:text-3xl mb-10`}>
            KEY TERMS EXPLAINED
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyTerms.map((kt) => (
              <Card key={kt.term} className={cardBase}>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-[#7CFF6B] font-bold text-base mb-2">
                  {kt.term}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] text-sm leading-relaxed">
                  {kt.explanation}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================================================================
   4. PROJECTS PAGE
   ================================================================ */

interface ProjectItem {
  title: string;
  type: string;
  area: string;
  system: string;
  loop: string;
  cost: string;
  status: string;
}

const projects: ProjectItem[] = [
  {
    title: 'RESIDENTIAL CONCEPT',
    type: 'Single-family home',
    area: '2,000 sq.ft',
    system: '24 kW Ground Source Heat Pump',
    loop: '4 vertical boreholes × 90m',
    cost: '₹18–22 Lakh',
    status: 'CONCEPT',
  },
  {
    title: 'COMMERCIAL CONCEPT',
    type: 'Office building',
    area: '10,000 sq.ft',
    system: '150 kW GSHP',
    loop: '25 vertical boreholes × 90m',
    cost: '₹85–105 Lakh',
    status: 'CONCEPT',
  },
  {
    title: 'CAMPUS CONCEPT',
    type: 'Educational campus',
    area: '5,000 sq.ft',
    system: '70 kW GSHP',
    loop: '12 vertical boreholes × 90m',
    cost: '₹45–55 Lakh',
    status: 'CONCEPT',
  },
];

function ProjectCard({ project }: { project: ProjectItem }) {
  const fields: { label: string; value: string; highlight?: boolean }[] = [
    { label: 'Building Type', value: project.type },
    { label: 'Area', value: project.area },
    { label: 'System', value: project.system, highlight: true },
    { label: 'Ground Loop', value: project.loop },
    { label: 'Est. Cost', value: project.cost, highlight: true },
  ];
  return (
    <Card className={cardBase}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-white text-xl md:text-2xl">
          {project.title}
        </CardTitle>
        <Badge className="bg-[rgba(124,255,107,0.1)] text-[#7CFF6B] border-[rgba(124,255,107,0.25)] w-fit">
          {project.status}
        </Badge>
      </div>
      <div className="space-y-4">
        {fields.map((f) => (
          <div
            key={f.label}
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-[rgba(124,255,107,0.06)] pb-3 last:border-0 last:pb-0"
          >
            <span className="font-[family-name:var(--font-space-grotesk)] text-[#8A9A8F] text-sm uppercase tracking-wider shrink-0 sm:w-36">
              {f.label}
            </span>
            <span
              className={`font-[family-name:var(--font-inter)] text-base ${f.highlight ? 'text-[#7CFF6B] font-semibold' : 'text-[#F0F0F0]'}`}
            >
              {f.value}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ProjectsPage() {
  return (
    <div className="bg-[#07100D] min-h-screen">
      {/* Header */}
      <section className={`${sectionWrap} pt-32`}>
        <div className={container}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <h1 className={headingClass}>CONCEPT PROJECTS</h1>
            <Badge className="bg-[rgba(255,179,71,0.1)] text-[#FFB347] border-[rgba(255,179,71,0.25)] w-fit text-sm">
              ALL PROJECTS ARE CONCEPT / DEMO
            </Badge>
          </div>
          <p className={subheadingClass}>
            Example geothermal system designs for educational purposes.
          </p>
        </div>
      </section>

      {/* Project Cards */}
      <section className={`${sectionWrap} pt-8 pb-32`}>
        <div className={`${container} grid grid-cols-1 lg:grid-cols-3 gap-8`}>
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

/* ================================================================
   5. LEARN PAGE
   ================================================================ */

interface LearnTopic {
  category: string;
  items: { question: string; answer: string }[];
}

const learnTopics: LearnTopic[] = [
  {
    category: 'GEOTHERMAL BASICS',
    items: [
      {
        question: 'What is geothermal energy?',
        answer:
          "Geothermal energy is heat energy stored beneath the Earth's surface. For building applications, we use shallow geothermal energy — the stable temperature found just a few metres underground (typically 15-25 °C) — to heat and cool buildings using a ground-source heat pump. This is different from deep geothermal energy used for electricity generation.",
      },
      {
        question: 'How deep do pipes go?',
        answer:
          'For vertical ground loops, boreholes are typically drilled 60 to 150 metres deep depending on the heating and cooling load and the local soil/rock thermal conductivity. Horizontal loops are much shallower, buried 1-2 metres deep in trenches, but require significantly more land area.',
      },
      {
        question: 'What temperature can we expect underground?',
        answer:
          'At depths below about 2-3 metres, the ground temperature remains remarkably stable throughout the year. In most regions, this ranges from 15 °C to 25 °C. This stability is the key advantage — it provides a consistent heat source in winter and a consistent heat sink in summer.',
      },
      {
        question: 'Is geothermal renewable?',
        answer:
          'Yes. Geothermal energy for heat pump applications is considered renewable because the Earth continuously absorbs solar energy that replenishes the shallow ground heat. The heat pump only "borrows" this energy — it does not deplete it. The small amount of electricity used to run the pump can also come from renewable sources, making the entire system virtually carbon-free.',
      },
    ],
  },
  {
    category: 'SYSTEM TYPES',
    items: [
      {
        question: 'Horizontal ground loops',
        answer:
          'Horizontal loops consist of pipes buried in shallow trenches (1-2 m deep) across a wide area. They are the least expensive to install since no deep drilling is needed, but they require significant land — roughly 2-3 times the building footprint. Performance can vary seasonally since shallow ground is more affected by surface temperatures.',
      },
      {
        question: 'Vertical ground loops',
        answer:
          'Vertical loops use deep boreholes (60-150 m) with U-shaped pipe inserts. They are the most popular option for residential and commercial buildings because they need very little surface land. The deeper ground provides more stable temperatures, yielding consistent efficiency year-round. However, drilling costs are higher than horizontal installation.',
      },
      {
        question: 'Pond/lake loops',
        answer:
          'If a sufficiently deep pond or lake is available nearby, a closed-loop coil can be submerged in the water instead of buried in the ground. Water is an excellent heat transfer medium, making these systems very efficient and often cheaper to install. However, they require a water body that meets minimum depth and volume requirements year-round.',
      },
      {
        question: 'Open-loop systems',
        answer:
          'Open-loop systems pump groundwater directly from a well through the heat pump and then discharge it back into the ground or a surface water body. They can be very efficient because groundwater temperatures are stable. However, they require an abundant, clean water supply and are subject to environmental regulations regarding water use and discharge.',
      },
    ],
  },
  {
    category: 'COST & SAVINGS',
    items: [
      {
        question: 'What affects geothermal cost?',
        answer:
          'The main cost factors include: building size and heating/cooling load, type of ground loop (horizontal vs. vertical), local drilling conditions and rock type, depth and number of boreholes, heat pump capacity and brand, distribution system (underfloor, radiators, ducts), and local labour rates. Site-specific geological surveys can significantly reduce uncertainty in cost estimates.',
      },
      {
        question: 'How to estimate savings?',
        answer:
          'Geothermal heat pumps typically achieve COPs of 3-5, meaning they deliver 3-5 kWh of heating for every 1 kWh of electricity. Compared to conventional electric heating (COP ~ 1) or gas boilers (efficiency 80-95%), geothermal can reduce heating costs by 50-70%. Cooling savings are equally impressive since the system rejects heat to the cool ground rather than hot outdoor air.',
      },
      {
        question: 'What is payback period?',
        answer:
          'The payback period is the time it takes for energy savings to recover the upfront installation cost. For residential systems, this is typically 5-10 years depending on local energy prices, building insulation, and available incentives. Commercial buildings with higher energy usage often see shorter payback periods of 3-7 years.',
      },
      {
        question: 'Government incentives',
        answer:
          'Many governments offer incentives for geothermal installations, including tax credits, grants, low-interest loans, and favourable electricity tariffs. In India, programmes like the Ministry of New and Renewable Energy (MNRE) subsidies and state-level green building incentives can reduce the effective cost by 20-30%. Always check current schemes as they change frequently.',
      },
    ],
  },
];

export function LearnPage() {
  const [openTopic, setOpenTopic] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleTopic = (cat: string) => {
    setOpenTopic((prev) => (prev === cat ? null : cat));
  };

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-[#07100D] min-h-screen">
      {/* Header */}
      <section className={`${sectionWrap} pt-32`}>
        <div className={container}>
          <h1 className={headingClass}>LEARN GEOTHERMAL</h1>
          <p className={subheadingClass}>
            Deep-dive into geothermal energy concepts, system types, costs, and
            more.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className={`${sectionWrap} pt-8 pb-32`}>
        <div className={`${container} space-y-6`}>
          {learnTopics.map((topic) => (
            <Card key={topic.category} className={`${cardBase} overflow-hidden`}>
              <button
                onClick={() => toggleTopic(topic.category)}
                className="w-full flex items-center justify-between text-left cursor-pointer"
              >
                <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-white text-lg md:text-xl">
                  {topic.category}
                </h2>
                <ChevronDown
                  className={`w-5 h-5 text-[#7CFF6B] transition-transform duration-300 shrink-0 ${openTopic === topic.category ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${openTopic === topic.category ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
              >
                <div className="space-y-0 divide-y divide-[rgba(124,255,107,0.06)]">
                  {topic.items.map((item) => {
                    const key = `${topic.category}-${item.question}`;
                    const isOpen = openItems[key] ?? false;
                    return (
                      <div key={key}>
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full flex items-center justify-between text-left py-4 cursor-pointer"
                        >
                          <span className="font-[family-name:var(--font-inter)] text-[#F0F0F0] text-sm md:text-base pr-4">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-[#8A9A8F] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] text-sm leading-relaxed pb-4">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ================================================================
   6. FAQ PAGE
   ================================================================ */

const faqItems = [
  {
    q: 'What is geothermal energy?',
    a: "Geothermal energy is heat derived from beneath the Earth's surface. For building applications, we use a ground-source heat pump to tap into the stable underground temperature (15-25 °C) and use it to efficiently heat and cool indoor spaces.",
  },
  {
    q: 'What is a ground-source heat pump?',
    a: 'A ground-source heat pump (GSHP) is a device that transfers heat between a building and the ground using a refrigeration cycle. In winter it extracts heat from the ground to warm the building; in summer it reverses the process to provide cooling. It typically delivers 3-5 units of heat per unit of electricity consumed.',
  },
  {
    q: 'How does a geothermal system work?',
    a: 'A fluid circulates through pipes buried underground, absorbing the Earth\'s stable heat. This heat is concentrated by the heat pump\'s compressor and distributed through the building via underfloor heating, radiators, or air ducts. In cooling mode the process reverses, dumping building heat into the cooler ground.',
  },
  {
    q: 'How much does geothermal cost?',
    a: 'Costs vary widely based on building size, loop type, and local conditions. As a rough guide for India: a residential system (2,000 sq.ft) may cost Rs.18-22 Lakh, a commercial office (10,000 sq.ft) Rs.85-105 Lakh. Our cost estimator tool can give you a more tailored preliminary figure.',
  },
  {
    q: 'How much land is required?',
    a: 'Vertical systems (boreholes) need very little surface land — often just the space for a small drilling rig. Horizontal systems need roughly 2-3 times the building footprint in open land. If land is limited, vertical boreholes are the preferred option.',
  },
  {
    q: 'Can geothermal provide cooling?',
    a: 'Yes. By reversing the refrigeration cycle, the same geothermal system that heats your building in winter can provide efficient air conditioning in summer. Because it rejects heat to the cool ground (rather than hot outdoor air), geothermal cooling is significantly more efficient than conventional AC.',
  },
  {
    q: 'Can geothermal work in India?',
    a: 'Absolutely. India has suitable ground temperatures across most regions for geothermal heat pump operation. The technology is well-proven globally and is increasingly being adopted in India for both residential and commercial applications, supported by MNRE incentives.',
  },
  {
    q: 'How long can the system operate?',
    a: 'The indoor heat pump unit typically lasts 20-25 years. The underground ground loop — being made of durable HDPE pipe with no moving parts — can last 50+ years. This makes geothermal one of the longest-lasting HVAC options available.',
  },
  {
    q: 'What is COP?',
    a: 'COP stands for Coefficient of Performance. It is the ratio of heating or cooling output to electrical energy input. A COP of 4 means the system delivers 4 kW of heating for every 1 kW of electricity. Geothermal heat pumps typically achieve COPs of 3-5, compared to 0.8-0.95 for conventional boilers.',
  },
  {
    q: 'How is the project cost calculated?',
    a: 'Project cost depends on building area, heating/cooling load, loop type (horizontal/vertical), number and depth of boreholes, heat pump capacity, and the distribution system. A detailed site survey and thermal conductivity test provide the most accurate estimates.',
  },
  {
    q: 'Can I request an assessment?',
    a: 'This platform is a student prototype, so no real assessments are available. However, the contact form can be used to explore the workflow. In a real scenario, you would submit your property details and a geothermal engineer would conduct a site survey and provide a detailed feasibility report and cost estimate.',
  },
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#07100D] min-h-screen">
      {/* Header */}
      <section className={`${sectionWrap} pt-32`}>
        <div className={container}>
          <h1 className={headingClass}>FREQUENTLY ASKED QUESTIONS</h1>
          <p className={subheadingClass}>
            Common questions about geothermal energy, answered in plain
            language.
          </p>
        </div>
      </section>

      {/* FAQ Items */}
      <section className={`${sectionWrap} pt-8 pb-32`}>
        <div className={`${container} max-w-3xl space-y-0 divide-y divide-[rgba(124,255,107,0.06)]`}>
          {faqItems.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left py-6 cursor-pointer group"
                >
                  <span className="font-[family-name:var(--font-inter)] text-[#F0F0F0] text-base md:text-lg pr-4 group-hover:text-[#7CFF6B] transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7CFF6B] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] text-sm md:text-base leading-relaxed pb-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

/* ================================================================
   7. CONTACT PAGE
   ================================================================ */

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    propertyType: '',
    buildingArea: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, propertyType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      propertyType: '',
      buildingArea: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-[#7CFF6B]" />,
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
    },
    {
      icon: <Mail className="w-5 h-5 text-[#7CFF6B]" />,
      label: 'Email',
      value: 'hello@geotherm.example.com',
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-[#7CFF6B]" />,
      label: 'WhatsApp',
      value: '+91 XXXXX XXXXX',
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#7CFF6B]" />,
      label: 'Location',
      value: 'Demo Location, City, India',
    },
  ];

  return (
    <div className="bg-[#07100D] min-h-screen">
      {/* Header */}
      <section className={`${sectionWrap} pt-32`}>
        <div className={container}>
          <h1 className={headingClass}>LET&apos;S EXPLORE GEOTHERMAL</h1>
          <p className={subheadingClass}>
            Tell us about your property and get a preliminary geothermal
            estimate.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className={`${sectionWrap} pt-8 pb-32`}>
        <div className={`${container} grid grid-cols-1 lg:grid-cols-5 gap-12`}>
          {/* LEFT - Form */}
          <div className="lg:col-span-3">
            <Card className={cardBase}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-[rgba(124,255,107,0.1)] flex items-center justify-center mb-6">
                    <CircleCheckBig className="w-10 h-10 text-[#7CFF6B]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-white text-2xl md:text-3xl mb-3">
                    THANK YOU
                  </h2>
                  <p className="font-[family-name:var(--font-inter)] text-[#F0F0F0] text-lg mb-2">
                    Your enquiry has been received.
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] mb-8 max-w-md">
                    Your project details have been saved for review.
                  </p>
                  <Button className={greenBtn} onClick={handleReset}>
                    SEND ANOTHER ENQUIRY
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="font-[family-name:var(--font-space-grotesk)] text-[#F0F0F0] text-sm"
                    >
                      Name <span className="text-[#FFB347]">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-[#0D241B] border-[rgba(124,255,107,0.12)] text-[#F0F0F0] placeholder:text-[#8A9A8F] focus:border-[#7CFF6B] rounded-lg"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="font-[family-name:var(--font-space-grotesk)] text-[#F0F0F0] text-sm"
                    >
                      Email <span className="text-[#FFB347]">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="bg-[#0D241B] border-[rgba(124,255,107,0.12)] text-[#F0F0F0] placeholder:text-[#8A9A8F] focus:border-[#7CFF6B] rounded-lg"
                    />
                  </div>

                  {/* Phone & Location Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="font-[family-name:var(--font-space-grotesk)] text-[#8A9A8F] text-sm"
                      >
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="bg-[#0D241B] border-[rgba(124,255,107,0.12)] text-[#F0F0F0] placeholder:text-[#8A9A8F] focus:border-[#7CFF6B] rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="location"
                        className="font-[family-name:var(--font-space-grotesk)] text-[#8A9A8F] text-sm"
                      >
                        Location
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, State"
                        className="bg-[#0D241B] border-[rgba(124,255,107,0.12)] text-[#F0F0F0] placeholder:text-[#8A9A8F] focus:border-[#7CFF6B] rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Property Type & Area Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="font-[family-name:var(--font-space-grotesk)] text-[#8A9A8F] text-sm">
                        Property Type
                      </Label>
                      <Select
                        value={formData.propertyType}
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger className="bg-[#0D241B] border-[rgba(124,255,107,0.12)] text-[#F0F0F0] focus:border-[#7CFF6B] rounded-lg">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0A1A13] border-[rgba(124,255,107,0.12)]">
                          <SelectItem value="home">Home</SelectItem>
                          <SelectItem value="office">Office</SelectItem>
                          <SelectItem value="hotel">Hotel</SelectItem>
                          <SelectItem value="school">School</SelectItem>
                          <SelectItem value="hospital">Hospital</SelectItem>
                          <SelectItem value="factory">Factory</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="buildingArea"
                        className="font-[family-name:var(--font-space-grotesk)] text-[#8A9A8F] text-sm"
                      >
                        Building Area (sq.ft)
                      </Label>
                      <Input
                        id="buildingArea"
                        name="buildingArea"
                        type="number"
                        value={formData.buildingArea}
                        onChange={handleChange}
                        placeholder="e.g. 2000"
                        className="bg-[#0D241B] border-[rgba(124,255,107,0.12)] text-[#F0F0F0] placeholder:text-[#8A9A8F] focus:border-[#7CFF6B] rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="font-[family-name:var(--font-space-grotesk)] text-[#8A9A8F] text-sm"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="bg-[#0D241B] border-[rgba(124,255,107,0.12)] text-[#F0F0F0] placeholder:text-[#8A9A8F] focus:border-[#7CFF6B] rounded-lg resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className={`${greenBtn} w-full sm:w-auto`}
                  >
                    SEND ENQUIRY <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* RIGHT - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className={cardBase}>
              <CardHeader className="p-0 pb-6">
                <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-white text-xl">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                {contactInfo.map((ci) => (
                  <div key={ci.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[rgba(124,255,107,0.1)] flex items-center justify-center shrink-0">
                      {ci.icon}
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-space-grotesk)] text-[#8A9A8F] text-xs uppercase tracking-wider mb-1">
                        {ci.label}
                      </p>
                      <p className="font-[family-name:var(--font-inter)] text-[#F0F0F0] text-sm">
                        {ci.value}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Placeholder note */}
            <div className="bg-[rgba(255,179,71,0.06)] border border-[rgba(255,179,71,0.15)] rounded-xl p-5">
              <p className="font-[family-name:var(--font-inter)] text-[#FFB347] text-sm leading-relaxed">
                These are placeholder contact details for the student project
                prototype.
              </p>
            </div>

            {/* Bottom note */}
            <div className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-5">
              <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] text-sm leading-relaxed">
                Student Project / Prototype — No real services are currently
                offered.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
