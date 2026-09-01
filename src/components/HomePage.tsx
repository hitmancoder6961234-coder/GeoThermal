'use client';

import React, { useState, useRef, useCallback } from 'react';
import { useAppStore } from '@/lib/store';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Building2,
  Thermometer,
  GitBranch,
  Globe,
  Zap,
  Clock,
  Wifi,
  Home,
  Factory,
  Sprout,
  BookOpen,
  GitFork,
  TrendingUp,
  Eye,
  Calculator,
  Wrench,
  ChevronDown,
  ArrowRight,
  Activity,
  Droplets,
  Power,
  Gauge,
  GraduationCap,
  Building,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Intersection-Observer hook for scroll-triggered fade-in           */
/* ------------------------------------------------------------------ */
function useInView(threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      nodeRef.current = node;
      if (node) {
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisible(true);
              obs.unobserve(node);
            }
          },
          { threshold }
        );
        obs.observe(node);
      }
    },
    [threshold]
  );

  return [setRef, visible] as const;
}

/* ------------------------------------------------------------------ */
/*  FAQ type                                                           */
/* ------------------------------------------------------------------ */
interface FAQItem {
  q: string;
  a: string;
}

const faqData: FAQItem[] = [
  {
    q: 'What is geothermal energy?',
    a: 'Geothermal energy is heat energy stored beneath the Earth\'s surface. For building applications, we use the relatively stable ground temperature (typically 15-25°C at depth) to help provide efficient heating and cooling.',
  },
  {
    q: 'What is a ground-source heat pump?',
    a: 'A Ground Source Heat Pump (GSHP) is a system that exchanges heat with the ground to help heat or cool a building. It circulates fluid through underground pipes, transferring thermal energy between the ground and the building.',
  },
  {
    q: 'How much does geothermal cost?',
    a: 'Costs vary based on building size, property type, and ground conditions. Use our calculator for a preliminary estimate. Costs typically range based on system capacity and installation complexity.',
  },
  {
    q: 'Can geothermal provide cooling?',
    a: 'Yes. Geothermal systems can provide both heating in winter and cooling in summer by reversing the heat transfer direction. This makes them a year-round solution.',
  },
  {
    q: 'Can geothermal work in India?',
    a: 'Yes. Many parts of India have suitable ground conditions for geothermal systems. The technology is particularly effective where there is a significant difference between ground temperature and desired indoor temperature.',
  },
  {
    q: 'What is COP?',
    a: 'COP (Coefficient of Performance) measures heat pump efficiency. A COP of 4.0 means the system produces 4 units of heating/cooling for every 1 unit of electrical energy input. Geothermal systems typically achieve COP of 3.5-5.0.',
  },
];

/* ------------------------------------------------------------------ */
/*  Simulated energy bar-chart data (6 months)                        */
/* ------------------------------------------------------------------ */
const energyBars = [
  { month: 'Jan', value: 72 },
  { month: 'Feb', value: 65 },
  { month: 'Mar', value: 50 },
  { month: 'Apr', value: 38 },
  { month: 'May', value: 30 },
  { month: 'Jun', value: 25 },
];

/* ------------------------------------------------------------------ */
/*  Animated section wrapper                                            */
/* ------------------------------------------------------------------ */
function AnimatedSection({
  id,
  children,
  className = '',
  sectionRef,
  isVisible,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  sectionRef: (node: HTMLDivElement | null) => void;
  isVisible: boolean;
}) {
  return (
    <section
      id={id}
      ref={sectionRef}
      className={`py-16 md:py-24 px-6 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
      }}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

/* ================================================================== */
/*  HomePage Component                                                 */
/* ================================================================== */
export default function HomePage() {
  const navigate = useAppStore((s) => s.navigate);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* Each section observer */
  const [heroRef, heroVis] = useInView();
  const [metricsRef, metricsVis] = useInView();
  const [whyRef, whyVis] = useInView();
  const [howRef, howVis] = useInView();
  const [appsRef, appsVis] = useInView();
  const [calcRef, calcVis] = useInView();
  const [savingsRef, savingsVis] = useInView();
  const [projectsRef, projectsVis] = useInView();
  const [monitorRef, monitorVis] = useInView();
  const [learnRef, learnVis] = useInView();
  const [faqRef, faqVis] = useInView();
  const [trustRef, trustVis] = useInView();
  const [ctaRef, ctaVis] = useInView();

  const toggleFaq = useCallback((idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  }, []);

  return (
    <div className="bg-[#07100D] min-h-screen">
      {/* ============================================================ */}
      {/*  1. HERO SECTION                                              */}
      {/* ============================================================ */}
      <section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 gap-10 md:gap-16 pt-24 pb-16"
        style={{
          opacity: heroVis ? 1 : 0,
          transform: heroVis ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        }}
      >
        {/* Left (60 %) */}
        <div className="flex-1 md:max-w-[60%] flex flex-col gap-6 z-10">
          <h1
            className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl font-bold leading-[1.05] text-[#F0F0F0]"
          >
            ENERGY FROM{' '}
            <span className="text-[#7CFF6B] text-glow-green">BELOW</span>.
            <br />
            COMFORT ABOVE.
          </h1>

          <p
            className="font-[family-name:var(--font-inter)] text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Smart geothermal heating and cooling solutions designed around your
            building, your land and your energy needs.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <button
              onClick={() => navigate('calculator')}
              className="bg-[#7CFF6B] text-[#07100D] font-semibold rounded-lg hover:bg-[#6AE85B] transition px-6 py-3 text-sm md:text-base"
            >
              CALCULATE MY SYSTEM &rarr;
            </button>
            <button
              onClick={() => navigate('how-it-works')}
              className="border border-[rgba(124,255,107,0.3)] text-[#7CFF6B] rounded-lg hover:bg-[rgba(124,255,107,0.1)] transition px-6 py-3 text-sm md:text-base"
            >
              HOW IT WORKS
            </button>
          </div>
        </div>

        {/* Right (40 %) – Geothermal system visual */}
        <div className="flex-1 md:max-w-[40%] flex flex-col items-center gap-0 relative">
          {/* Vertical connector line */}
          <div className="absolute left-1/2 top-[60px] bottom-[60px] w-px bg-gradient-to-b from-[#7CFF6B33] via-[#7CFF6B] to-[#FFB347] -translate-x-1/2 z-0" />

          {/* Heat particle travelling down the line */}
          <div className="absolute left-1/2 top-[60px] w-3 h-3 -translate-x-1/2 z-10">
            <div className="w-3 h-3 rounded-full bg-[#7CFF6B] shadow-[0_0_12px_rgba(124,255,107,0.7)] heat-particle" />
          </div>

          {/* BUILDING box */}
          <div className="glass-card rounded-xl px-8 py-5 flex items-center gap-4 w-full max-w-[280px] z-10 mb-4 border border-[rgba(124,255,107,0.15)]">
            <div className="w-10 h-10 rounded-lg bg-[rgba(124,255,107,0.1)] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[#7CFF6B]" />
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#F0F0F0] text-sm tracking-wider">
              BUILDING
            </span>
          </div>

          {/* HEAT PUMP box */}
          <div className="glass-card rounded-xl px-8 py-5 flex items-center gap-4 w-full max-w-[280px] z-10 mb-4 border border-[rgba(124,255,107,0.15)]">
            <div className="w-10 h-10 rounded-lg bg-[rgba(124,255,107,0.1)] flex items-center justify-center">
              <Thermometer className="w-5 h-5 text-[#47B5FF]" />
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#F0F0F0] text-sm tracking-wider">
              HEAT PUMP
            </span>
          </div>

          {/* GROUND LOOP box */}
          <div className="glass-card rounded-xl px-8 py-5 flex items-center gap-4 w-full max-w-[280px] z-10 mb-4 border border-[rgba(124,255,107,0.15)]">
            <div className="w-10 h-10 rounded-lg bg-[rgba(124,255,107,0.1)] flex items-center justify-center">
              <GitBranch className="w-5 h-5 text-[#7CFF6B]" />
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#F0F0F0] text-sm tracking-wider">
              GROUND LOOP
            </span>
          </div>

          {/* EARTH box – gradient to suggest heat */}
          <div
            className="rounded-xl px-8 py-5 flex items-center gap-4 w-full max-w-[280px] z-10 border border-[rgba(255,179,71,0.2)]"
            style={{
              background:
                'linear-gradient(135deg, rgba(10,26,19,0.85) 0%, rgba(19,46,31,0.9) 50%, rgba(42,30,10,0.9) 100%)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-[rgba(255,179,71,0.15)] flex items-center justify-center">
              <Globe className="w-5 h-5 text-[#FFB347]" />
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#F0F0F0] text-sm tracking-wider">
              EARTH
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. DEMO SYSTEM METRICS                                       */}
      {/* ============================================================ */}
      <AnimatedSection id="metrics" sectionRef={metricsRef} isVisible={metricsVis}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 – Geothermal System (span 2) */}
          <div className="md:col-span-2 bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 hover:border-[rgba(124,255,107,0.2)] transition-all duration-300">
            <p className="text-[#8A9A8F] text-xs uppercase tracking-widest mb-2">
              Simulated Data
            </p>
            <h3
              className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#F0F0F0] text-lg mb-4"
            >
              GEOTHERMAL SYSTEM
            </h3>
            {/* Visual: temperature flow concept */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FFB347]" />
                <span className="text-[#8A9A8F] text-sm">Heat Source</span>
              </div>
              <div className="flex-1 h-1 rounded-full bg-gradient-to-r from-[#FFB347] via-[#7CFF6B] to-[#47B5FF] min-w-[120px]" />
              <div className="flex items-center gap-2">
                <span className="text-[#8A9A8F] text-sm">Cooling</span>
                <div className="w-3 h-3 rounded-full bg-[#47B5FF]" />
              </div>
            </div>
            <p className="text-[#8A9A8F] text-sm mt-4">
              Ground temperature remains stable year-round, providing a consistent
              thermal source for the heat pump system.
            </p>
          </div>

          {/* Card 2 – Ground Temp */}
          <div className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 hover:border-[rgba(124,255,107,0.2)] transition-all duration-300">
            <p className="text-[#8A9A8F] text-xs uppercase tracking-widest mb-2">
              Simulated Data
            </p>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-[#7CFF6B]"
              >
                24.2°C
              </span>
              <span className="w-2 h-2 rounded-full bg-[#7CFF6B] pulse-dot" />
            </div>
            <p className="text-[#8A9A8F] text-sm">Ground Temperature</p>
          </div>

          {/* Card 3 – COP */}
          <div className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 hover:border-[rgba(124,255,107,0.2)] transition-all duration-300">
            <p className="text-[#8A9A8F] text-xs uppercase tracking-widest mb-2">
              Simulated Data
            </p>
            <span
              className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-[#47B5FF]"
            >
              4.3 COP
            </span>
            <p className="text-[#8A9A8F] text-sm mt-1">Example Efficiency</p>
          </div>

          {/* Card 4 – Smart Monitoring (span 2) */}
          <div className="md:col-span-2 bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 hover:border-[rgba(124,255,107,0.2)] transition-all duration-300">
            <p className="text-[#8A9A8F] text-xs uppercase tracking-widest mb-2">
              Simulated Data
            </p>
            <h3
              className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#F0F0F0] text-lg mb-5"
            >
              SMART MONITORING
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Temperature */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#8A9A8F] text-sm">Temperature</span>
                  <span className="text-[#7CFF6B] text-sm font-semibold">24.2°C</span>
                </div>
                <Progress value={72} className="h-2 [&>div]:bg-[#7CFF6B]" />
              </div>
              {/* Flow */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#8A9A8F] text-sm">Flow</span>
                  <span className="text-[#47B5FF] text-sm font-semibold">46 L/min</span>
                </div>
                <Progress value={58} className="h-2 [&>div]:bg-[#47B5FF]" />
              </div>
              {/* Power */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#8A9A8F] text-sm">Power</span>
                  <span className="text-[#FFB347] text-sm font-semibold">21.4 kW</span>
                </div>
                <Progress value={45} className="h-2 [&>div]:bg-[#FFB347]" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/*  3. WHY GEOTHERMAL                                           */}
      {/* ============================================================ */}
      <AnimatedSection id="why-geothermal" sectionRef={whyRef} isVisible={whyVis}>
        <h2
          className="font-[family-name:var(--font-space-grotesk)] font-bold text-3xl md:text-4xl text-[#F0F0F0] mb-4 animate-fade-in-up"
        >
          WHY LOOK BELOW THE SURFACE?
        </h2>
        <p
          className="font-[family-name:var(--font-inter)] text-gray-400 max-w-2xl mb-10 text-lg"
        >
          Geothermal systems use the relatively stable temperature of the ground to
          help provide heating and cooling for buildings.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: '01',
              title: 'EFFICIENT',
              desc: 'Use the ground as a thermal source/sink.',
              Icon: Zap,
            },
            {
              num: '02',
              title: 'LONG-TERM',
              desc: 'Designed for long-term building energy applications.',
              Icon: Clock,
            },
            {
              num: '03',
              title: 'COMFORT',
              desc: 'Can support both heating and cooling.',
              Icon: Thermometer,
            },
            {
              num: '04',
              title: 'SMART',
              desc: 'Can be combined with digital monitoring.',
              Icon: Wifi,
            },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 hover:border-[rgba(124,255,107,0.15)] transition-all duration-300"
            >
              <span
                className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold text-[#8A9A8F] block mb-4"
              >
                {item.num}
              </span>
              <item.Icon className="w-5 h-5 text-[#7CFF6B] mb-3" />
              <h4
                className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#F0F0F0] mb-2"
              >
                {item.title}
              </h4>
              <p className="font-[family-name:var(--font-inter)] text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/*  4. HOW GEOTHERMAL WORKS                                     */}
      {/* ============================================================ */}
      <AnimatedSection id="how-it-works" sectionRef={howRef} isVisible={howVis}>
        <h2
          className="font-[family-name:var(--font-space-grotesk)] font-bold text-3xl md:text-4xl text-[#F0F0F0] mb-12 animate-fade-in-up"
        >
          HOW GEOTHERMAL WORKS
        </h2>

        {/* Desktop: horizontal layout */}
        <div className="hidden md:flex items-start justify-between gap-0">
          {[
            {
              num: '01',
              title: 'GROUND',
              desc: 'The ground provides a relatively stable thermal environment.',
            },
            {
              num: '02',
              title: 'GROUND LOOP',
              desc: 'Pipes circulate fluid underground.',
            },
            {
              num: '03',
              title: 'HEAT EXCHANGE',
              desc: 'Heat is transferred between the ground and the system.',
            },
            {
              num: '04',
              title: 'HEAT PUMP',
              desc: 'The heat pump transfers useful thermal energy.',
            },
            {
              num: '05',
              title: 'BUILDING',
              desc: 'The building receives heating or cooling.',
            },
          ].map((step, idx, arr) => (
            <React.Fragment key={step.num}>
              <div className="flex flex-col items-center text-center flex-1">
                {/* Circle */}
                <div className="w-12 h-12 rounded-full border-2 border-[#7CFF6B] flex items-center justify-center mb-4">
                  <span
                    className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#7CFF6B] text-sm"
                  >
                    {step.num}
                  </span>
                </div>
                <h4
                  className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#F0F0F0] text-sm mb-2"
                >
                  {step.title}
                </h4>
                <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] text-xs leading-relaxed max-w-[160px]">
                  {step.desc}
                </p>
              </div>
              {/* Connector line (not after last) */}
              {idx < arr.length - 1 && (
                <div className="flex-1 flex items-start pt-6">
                  <div className="w-full h-px bg-gradient-to-r from-[#7CFF6B66] via-[#7CFF6B] to-[#7CFF6B66]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: vertical layout */}
        <div className="flex md:hidden flex-col gap-0">
          {[
            {
              num: '01',
              title: 'GROUND',
              desc: 'The ground provides a relatively stable thermal environment.',
            },
            {
              num: '02',
              title: 'GROUND LOOP',
              desc: 'Pipes circulate fluid underground.',
            },
            {
              num: '03',
              title: 'HEAT EXCHANGE',
              desc: 'Heat is transferred between the ground and the system.',
            },
            {
              num: '04',
              title: 'HEAT PUMP',
              desc: 'The heat pump transfers useful thermal energy.',
            },
            {
              num: '05',
              title: 'BUILDING',
              desc: 'The building receives heating or cooling.',
            },
          ].map((step, idx, arr) => (
            <React.Fragment key={step.num}>
              <div className="flex items-center gap-5 py-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#7CFF6B] flex items-center justify-center shrink-0">
                  <span
                    className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#7CFF6B] text-sm"
                  >
                    {step.num}
                  </span>
                </div>
                <div>
                  <h4
                    className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#F0F0F0] text-sm mb-1"
                  >
                    {step.title}
                  </h4>
                  <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
              {/* Vertical connector line */}
              {idx < arr.length - 1 && (
                <div className="ml-6 h-6 w-px step-line" />
              )}
            </React.Fragment>
          ))}
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/*  5. APPLICATIONS                                              */}
      {/* ============================================================ */}
      <AnimatedSection id="applications" sectionRef={appsRef} isVisible={appsVis}>
        <h2
          className="font-[family-name:var(--font-space-grotesk)] font-bold text-3xl md:text-4xl text-[#F0F0F0] mb-4 animate-fade-in-up"
        >
          WHERE CAN GEOTHERMAL BE USED?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            {
              title: 'RESIDENTIAL',
              desc: 'Homes and villas.',
              Icon: Home,
            },
            {
              title: 'COMMERCIAL',
              desc: 'Offices, hotels, schools and other buildings.',
              Icon: Building2,
            },
            {
              title: 'INDUSTRIAL',
              desc: 'Suitable industrial heating/cooling applications.',
              Icon: Factory,
            },
            {
              title: 'AGRICULTURE',
              desc: 'Greenhouses and other suitable applications.',
              Icon: Sprout,
            },
          ].map((item) => (
            <div
              key={item.title}
              onClick={() => navigate('solutions')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') navigate('solutions');
              }}
              className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 hover:border-[rgba(124,255,107,0.15)] hover:translate-y-[-4px] glow-green-sm transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[rgba(124,255,107,0.08)] flex items-center justify-center mb-4">
                <item.Icon className="w-7 h-7 text-[#7CFF6B]" />
              </div>
              <h4
                className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#F0F0F0] mb-2"
              >
                {item.title}
              </h4>
              <p className="font-[family-name:var(--font-inter)] text-gray-400 text-sm mb-4">
                {item.desc}
              </p>
              <span
                className="text-[#7CFF6B] text-sm font-medium inline-flex items-center gap-1"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/*  6. CALCULATOR CTA                                           */}
      {/* ============================================================ */}
      <section
        id="calc-cta"
        ref={calcRef}
        className="py-16 md:py-24 px-6 underground-gradient relative overflow-hidden"
        style={{
          opacity: calcVis ? 1 : 0,
          transform: calcVis ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        }}
      >
        {/* Subtle underground visual with CSS gradients */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,179,71,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 30% 80%, rgba(124,255,107,0.05) 0%, transparent 60%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2
            className="font-[family-name:var(--font-space-grotesk)] font-bold text-3xl md:text-5xl text-[#F0F0F0] mb-4 animate-fade-in-up"
          >
            IS GEOTHERMAL RIGHT FOR YOUR PROPERTY?
          </h2>
          <p
            className="font-[family-name:var(--font-inter)] text-gray-400 text-lg max-w-xl mx-auto mb-8"
          >
            Get a preliminary estimate using a few simple details.
          </p>
          <button
            onClick={() => navigate('calculator')}
            className="bg-[#7CFF6B] text-[#07100D] font-semibold rounded-lg hover:bg-[#6AE85B] transition px-8 py-4 text-base md:text-lg"
          >
            CALCULATE MY POTENTIAL &rarr;
          </button>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7. SAVINGS PREVIEW                                          */}
      {/* ============================================================ */}
      <AnimatedSection id="savings" sectionRef={savingsRef} isVisible={savingsVis}>
        <h2
          className="font-[family-name:var(--font-space-grotesk)] font-bold text-3xl md:text-4xl text-[#F0F0F0] mb-4 animate-fade-in-up"
        >
          UNDERSTAND YOUR PROJECT COST
        </h2>
        <p
          className="font-[family-name:var(--font-inter)] text-gray-400 max-w-xl mb-10 text-lg"
        >
          Get a transparent breakdown of where your investment goes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {/* Up to 70% */}
          <div className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 text-center hover:border-[rgba(124,255,107,0.15)] transition-all duration-300">
            <span
              className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-[#7CFF6B] block mb-2"
            >
              Up to 70%
            </span>
            <p className="text-[#8A9A8F] text-sm">Energy Savings vs Conventional</p>
          </div>
          {/* 4.0-4.5 COP */}
          <div className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 text-center hover:border-[rgba(124,255,107,0.15)] transition-all duration-300">
            <span
              className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-[#47B5FF] block mb-2"
            >
              4.0-4.5 COP
            </span>
            <p className="text-[#8A9A8F] text-sm">System Efficiency Rating</p>
          </div>
          {/* 5-8 Years */}
          <div className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 text-center hover:border-[rgba(124,255,107,0.15)] transition-all duration-300">
            <span
              className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-[#FFB347] block mb-2"
            >
              5-8 Years
            </span>
            <p className="text-[#8A9A8F] text-sm">Estimated Payback Period</p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('cost-estimator')}
            className="border border-[rgba(124,255,107,0.3)] text-[#7CFF6B] rounded-lg hover:bg-[rgba(124,255,107,0.1)] transition px-6 py-3 text-sm md:text-base"
          >
            ESTIMATE MY COST &rarr;
          </button>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/*  8. CONCEPT PROJECTS                                         */}
      {/* ============================================================ */}
      <AnimatedSection id="concept-projects" sectionRef={projectsRef} isVisible={projectsVis}>
        <h2
          className="font-[family-name:var(--font-space-grotesk)] font-bold text-3xl md:text-4xl text-[#F0F0F0] mb-2 animate-fade-in-up"
        >
          CONCEPT PROJECTS
        </h2>
        <p
          className="font-[family-name:var(--font-inter)] text-gray-400 max-w-xl mb-10 text-lg"
        >
          Example geothermal system designs for different building types.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'RESIDENTIAL CONCEPT',
              desc: 'Example geothermal system for a house.',
              detail: '2,000 sq.ft home, 24 kW system',
              Icon: Building2,
            },
            {
              title: 'COMMERCIAL CONCEPT',
              desc: 'Example office building system.',
              detail: '10,000 sq.ft office, 150 kW system',
              Icon: Building,
            },
            {
              title: 'CAMPUS CONCEPT',
              desc: 'Example educational building.',
              detail: '5,000 sq.ft campus, 70 kW system',
              Icon: GraduationCap,
            },
          ].map((item) => (
            <div
              key={item.title}
              onClick={() => navigate('projects')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') navigate('projects');
              }}
              className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 hover:border-[rgba(124,255,107,0.15)] transition-all duration-300 cursor-pointer"
            >
              <Badge className="bg-[rgba(124,255,107,0.08)] text-[#7CFF6B] border-[rgba(124,255,107,0.15)] text-[10px] uppercase tracking-wider mb-4">
                Concept / Demo
              </Badge>
              <div className="w-12 h-12 rounded-lg bg-[rgba(124,255,107,0.08)] flex items-center justify-center mb-4">
                <item.Icon className="w-6 h-6 text-[#7CFF6B]" />
              </div>
              <h4
                className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#F0F0F0] mb-2"
              >
                {item.title}
              </h4>
              <p className="font-[family-name:var(--font-inter)] text-gray-400 text-sm mb-3">
                {item.desc}
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[#8A9A8F] text-xs">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/*  9. SMART MONITORING DEMO                                    */}
      {/* ============================================================ */}
      <AnimatedSection id="monitoring-demo" sectionRef={monitorRef} isVisible={monitorVis}>
        <div className="flex items-center gap-3 mb-2">
          <h2
            className="font-[family-name:var(--font-space-grotesk)] font-bold text-3xl md:text-4xl text-[#F0F0F0] animate-fade-in-up"
          >
            SMART GEOTHERMAL MONITORING
          </h2>
          <Badge className="bg-[rgba(255,179,71,0.1)] text-[#FFB347] border-[rgba(255,179,71,0.2)] text-[10px] uppercase tracking-wider">
            Simulated Data
          </Badge>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {[
            { label: 'Ground Temp', value: '24.2°C', color: 'text-[#7CFF6B]', Icon: Thermometer },
            { label: 'System Temp', value: '18.5°C', color: 'text-[#47B5FF]', Icon: Thermometer },
            { label: 'Flow Rate', value: '46 L/min', color: 'text-[#47B5FF]', Icon: Droplets },
            { label: 'Power', value: '21.4 kW', color: 'text-[#FFB347]', Icon: Power },
            { label: 'COP', value: '4.3', color: 'text-[#7CFF6B]', Icon: Gauge },
            { label: 'Status', value: 'SYSTEM NORMAL', color: 'text-[#7CFF6B]', Icon: Activity },
          ].map((m) => (
            <div
              key={m.label}
              className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-4 flex flex-col items-center text-center hover:border-[rgba(124,255,107,0.15)] transition-all duration-300"
            >
              <m.Icon className={`w-4 h-4 ${m.color} mb-2 opacity-60`} />
              <span className={`font-[family-name:var(--font-space-grotesk)] text-lg font-bold ${m.color} mb-1`}>
                {m.value}
              </span>
              <span className="text-[#8A9A8F] text-xs">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Simple bar chart – Energy over 6 months */}
        <div className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6">
          <h4
            className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#F0F0F0] text-sm mb-6"
          >
            Energy Consumption (kWh) — Simulated
          </h4>
          <div className="flex items-end gap-4 h-40">
            {energyBars.map((bar) => (
              <div
                key={bar.month}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <span className="text-[#8A9A8F] text-xs">{bar.value}</span>
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-[#7CFF6B33] to-[#7CFF6B] transition-all duration-500"
                  style={{ height: `${(bar.value / 100) * 100}%` }}
                />
                <span className="text-[#8A9A8F] text-xs">{bar.month}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/*  10. LEARN GEOTHERMAL                                        */}
      {/* ============================================================ */}
      <AnimatedSection id="learn" sectionRef={learnRef} isVisible={learnVis}>
        <h2
          className="font-[family-name:var(--font-space-grotesk)] font-bold text-3xl md:text-4xl text-[#F0F0F0] mb-10 animate-fade-in-up"
        >
          LEARN GEOTHERMAL
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: 'GEOTHERMAL BASICS',
              desc: 'Understand geothermal energy.',
              Icon: BookOpen,
              nav: 'learn' as const,
            },
            {
              title: 'SYSTEM TYPES',
              desc: 'Horizontal vs vertical systems.',
              Icon: GitFork,
              nav: 'learn' as const,
            },
            {
              title: 'COST & SAVINGS',
              desc: 'Understand project economics.',
              Icon: TrendingUp,
              nav: 'cost-estimator' as const,
            },
          ].map((item) => (
            <div
              key={item.title}
              onClick={() => navigate(item.nav)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') navigate(item.nav);
              }}
              className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 hover:border-[rgba(124,255,107,0.15)] transition-all duration-300 cursor-pointer"
            >
              <item.Icon className="w-6 h-6 text-[#7CFF6B] mb-4" />
              <h4
                className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#F0F0F0] mb-2"
              >
                {item.title}
              </h4>
              <p className="font-[family-name:var(--font-inter)] text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/*  11. FAQ                                                     */}
      {/* ============================================================ */}
      <AnimatedSection id="faq" sectionRef={faqRef} isVisible={faqVis}>
        <h2
          className="font-[family-name:var(--font-space-grotesk)] font-bold text-3xl md:text-4xl text-[#F0F0F0] mb-10 animate-fade-in-up"
        >
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="max-w-3xl flex flex-col gap-3">
          {faqData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl overflow-hidden hover:border-[rgba(124,255,107,0.15)] transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span
                    className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#F0F0F0] text-sm md:text-base pr-4"
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7CFF6B] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="px-6 pb-5 font-[family-name:var(--font-inter)] text-gray-400 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <button
            onClick={() => navigate('faq')}
            className="border border-[rgba(124,255,107,0.3)] text-[#7CFF6B] rounded-lg hover:bg-[rgba(124,255,107,0.1)] transition px-6 py-3 text-sm md:text-base"
          >
            VIEW ALL FAQ &rarr;
          </button>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/*  12. TRUST SECTION                                           */}
      {/* ============================================================ */}
      <AnimatedSection id="trust" sectionRef={trustRef} isVisible={trustVis}>
        <h2
          className="font-[family-name:var(--font-space-grotesk)] font-bold text-3xl md:text-4xl text-[#F0F0F0] mb-10 animate-fade-in-up"
        >
          CLEAR. SIMPLE. TRANSPARENT.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: 'CLEAR COSTS',
              desc: 'Understand where your project money goes.',
              Icon: Eye,
            },
            {
              title: 'SIMPLE ESTIMATES',
              desc: 'Get a preliminary idea before requesting a detailed assessment.',
              Icon: Calculator,
            },
            {
              title: 'ENGINEERING FIRST',
              desc: 'Final designs require professional site assessment.',
              Icon: Wrench,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 hover:border-[rgba(124,255,107,0.15)] transition-all duration-300"
            >
              <item.Icon className="w-6 h-6 text-[#7CFF6B] mb-4" />
              <h4
                className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#F0F0F0] mb-2"
              >
                {item.title}
              </h4>
              <p className="font-[family-name:var(--font-inter)] text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/*  13. FINAL CTA                                               */}
      {/* ============================================================ */}
      <section
        id="final-cta"
        ref={ctaRef}
        className="py-16 md:py-24 px-6"
        style={{
          opacity: ctaVis ? 1 : 0,
          transform: ctaVis ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="font-[family-name:var(--font-space-grotesk)] font-bold text-3xl md:text-5xl text-[#F0F0F0] mb-4 animate-fade-in-up"
          >
            READY TO EXPLORE WHAT'S BELOW?
          </h2>
          <p
            className="font-[family-name:var(--font-inter)] text-gray-400 text-lg max-w-xl mx-auto mb-8"
          >
            Tell us about your property and get a preliminary geothermal estimate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('calculator')}
              className="bg-[#7CFF6B] text-[#07100D] font-semibold rounded-lg hover:bg-[#6AE85B] transition px-6 py-3 text-sm md:text-base"
            >
              CALCULATE MY POTENTIAL &rarr;
            </button>
            <button
              onClick={() => navigate('contact')}
              className="border border-[rgba(124,255,107,0.3)] text-[#7CFF6B] rounded-lg hover:bg-[rgba(124,255,107,0.1)] transition px-6 py-3 text-sm md:text-base"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
