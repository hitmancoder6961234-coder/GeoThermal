'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
  LogOut,
  ArrowLeft,
  Mail,
  FolderKanban,
  IndianRupee,
  Clock,
  Thermometer,
  ThermometerSun,
  Droplets,
  Zap,
  Activity,
  CheckCircle,
  Download,
  Plus,
  Eye,
  Settings,
  LayoutDashboard,
  MessageSquare,
  CreditCard,
  FileText,
  ChevronDown,
  ChevronUp,
  Home,
  BarChart3,
  User,
  TrendingUp,
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { formatCurrency } from '@/lib/calculator';
import { toast } from '@/hooks/use-toast';

// ============================================================
// 1. CUSTOMER LOGIN PAGE
// ============================================================

export function CustomerLoginPage() {
  const store = useAppStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    store.login('customer');
    store.navigate('customer-dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundColor: '#07100D' }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">
            GEO<span className="text-[#7CFF6B]">◉</span>THERM
          </h1>
        </div>

        {/* Login Card */}
        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">
              CUSTOMER LOGIN
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label className="text-[#8A9A8F]">Email</Label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#0D241B] border border-[rgba(124,255,107,0.15)] rounded-lg text-white placeholder:text-[#8A9A8F]/50"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[#8A9A8F]">Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#0D241B] border border-[rgba(124,255,107,0.15)] rounded-lg text-white placeholder:text-[#8A9A8F]/50"
              />
            </div>
            <Button
              onClick={handleLogin}
              className="w-full bg-[#7CFF6B] text-[#07100D] font-semibold hover:bg-[#7CFF6B]/90 h-11"
            >
              LOGIN
            </Button>
            <p className="text-xs text-center text-[#8A9A8F]">
              Demo: Use any email/password to login
            </p>
          </CardContent>
        </Card>

        {/* Back link */}
        <div className="text-center mt-6">
          <button
            onClick={() => store.navigate('home')}
            className="text-[#8A9A8F] hover:text-[#7CFF6B] text-sm transition-colors inline-flex items-center gap-1"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 2. ADMIN LOGIN PAGE
// ============================================================

export function AdminLoginPage() {
  const store = useAppStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    store.login('admin');
    store.navigate('admin-dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundColor: '#07100D' }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">
            GEO<span className="text-[#7CFF6B]">◉</span>THERM
          </h1>
        </div>

        {/* Login Card */}
        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">
              ADMIN LOGIN
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label className="text-[#8A9A8F]">Email</Label>
              <Input
                type="email"
                placeholder="admin@geotherm.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#0D241B] border border-[rgba(124,255,107,0.15)] rounded-lg text-white placeholder:text-[#8A9A8F]/50"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[#8A9A8F]">Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#0D241B] border border-[rgba(124,255,107,0.15)] rounded-lg text-white placeholder:text-[#8A9A8F]/50"
              />
            </div>
            <Button
              onClick={handleLogin}
              className="w-full bg-[#7CFF6B] text-[#07100D] font-semibold hover:bg-[#7CFF6B]/90 h-11"
            >
              LOGIN
            </Button>
            <p className="text-xs text-center text-[#8A9A8F]">
              Demo: Use any email/password to login
            </p>
          </CardContent>
        </Card>

        {/* Back link */}
        <div className="text-center mt-6">
          <button
            onClick={() => store.navigate('home')}
            className="text-[#8A9A8F] hover:text-[#7CFF6B] text-sm transition-colors inline-flex items-center gap-1"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 3. CUSTOMER DASHBOARD
// ============================================================

const TIMELINE_ITEMS = [
  { name: 'Enquiry', status: 'completed' as const },
  { name: 'Assessment', status: 'completed' as const },
  { name: 'Design', status: 'current' as const },
  { name: 'Quotation', status: 'upcoming' as const },
  { name: 'Procurement', status: 'upcoming' as const },
  { name: 'Installation', status: 'upcoming' as const },
  { name: 'Testing', status: 'upcoming' as const },
  { name: 'Handover', status: 'upcoming' as const },
];

const PAYMENT_MILESTONES = [
  { name: 'Booking', pct: 20, amount: 450000, paid: true, date: '15 Jan 2025' },
  { name: 'Equipment', pct: 30, amount: 450000, paid: true, date: '02 Feb 2025' },
  { name: 'Installation', pct: 30, amount: 675000, paid: false, date: '—' },
  { name: 'Commissioning', pct: 10, amount: 225000, paid: false, date: '—' },
  { name: 'Handover', pct: 10, amount: 225000, paid: false, date: '—' },
];

function TimelineItem({ item, isLast }: { item: typeof TIMELINE_ITEMS[number]; isLast: boolean }) {
  const dotColor =
    item.status === 'completed'
      ? 'bg-[#7CFF6B]'
      : item.status === 'current'
        ? 'bg-[#7CFF6B] animate-pulse'
        : 'bg-[#8A9A8F]/40';

  const textColor =
    item.status === 'completed'
      ? 'text-[#7CFF6B]'
      : item.status === 'current'
        ? 'text-[#7CFF6B] font-semibold'
        : 'text-[#8A9A8F]';

  const indicator =
    item.status === 'completed'
      ? '✓'
      : item.status === 'current'
        ? '🟢'
        : '○';

  return (
    <div className="flex gap-4">
      {/* Line + Dot */}
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full ${dotColor} shrink-0 mt-1.5`} />
        {!isLast && (
          <div
            className="w-px flex-1 min-h-[2rem]"
            style={{
              backgroundColor:
                item.status === 'completed' ? 'rgba(124,255,107,0.3)' : 'rgba(138,154,143,0.2)',
            }}
          />
        )}
      </div>
      {/* Text */}
      <div className="pb-6">
        <span className={`text-sm font-[family-name:var(--font-inter)] ${textColor}`}>
          {indicator} {item.name}
          {item.status === 'completed' && ' — Completed'}
          {item.status === 'current' && ' — Current'}
          {item.status === 'upcoming' && ' — Upcoming'}
        </span>
      </div>
    </div>
  );
}

function CustomerMobileNav() {
  const store = useAppStore();
  const navItems = [
    { label: 'Home', icon: Home, page: 'customer-dashboard' as const },
    { label: 'Project', icon: FolderKanban, page: 'customer-project' as const },
    { label: 'Monitor', icon: BarChart3, page: 'customer-monitoring' as const },
    { label: 'Payments', icon: CreditCard, page: 'customer-payments' as const },
    { label: 'Profile', icon: User, page: 'customer-dashboard' as const },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0A1A13] border-t border-[rgba(124,255,107,0.08)] md:hidden z-50">
      <div className="flex justify-around py-2 px-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => store.navigate(item.page)}
            className="flex flex-col items-center gap-0.5 px-2 py-1 text-[#8A9A8F] hover:text-[#7CFF6B] transition-colors"
          >
            <item.icon className="size-5" />
            <span className="text-[10px]">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function CustomerDashboard() {
  const store = useAppStore();

  if (!store.isLoggedIn || store.userRole !== 'customer') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: '#07100D' }}>
        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-8 text-center max-w-sm w-full">
          <p className="text-[#8A9A8F] mb-4">Please log in to view your dashboard.</p>
          <Button
            onClick={() => store.navigate('customer-login')}
            className="bg-[#7CFF6B] text-[#07100D] font-semibold hover:bg-[#7CFF6B]/90"
          >
            Go to Login
          </Button>
        </Card>
      </div>
    );
  }

  const totalProject = 2250000;
  const totalPaid = 900000;
  const remaining = totalProject - totalPaid;
  const paidPct = Math.round((totalPaid / totalProject) * 100);

  return (
    <div className="pb-20 md:pb-0" style={{ backgroundColor: '#07100D' }}>
      <div className="py-8 md:py-12 px-6 max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">
              Welcome, Demo Customer
            </h1>
            <p className="text-[#8A9A8F] text-sm mt-1 font-[family-name:var(--font-inter)]">
              Track your geothermal project
            </p>
          </div>
          <Button
            variant="ghost"
            onClick={() => store.logout()}
            className="text-[#8A9A8F] hover:text-[#F0F0F0]"
          >
            <LogOut className="size-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6">
            <p className="text-xs text-[#8A9A8F] uppercase tracking-wider mb-1 font-[family-name:var(--font-inter)]">Project ID</p>
            <p className="text-xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">GEO-DEMO-001</p>
          </Card>
          <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6">
            <p className="text-xs text-[#8A9A8F] uppercase tracking-wider mb-1 font-[family-name:var(--font-inter)]">Status</p>
            <Badge className="bg-[#7CFF6B]/15 text-[#7CFF6B] border-0 mt-1">
              Site Assessment
            </Badge>
          </Card>
          <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6">
            <p className="text-xs text-[#8A9A8F] uppercase tracking-wider mb-1 font-[family-name:var(--font-inter)]">Estimated Cost</p>
            <p className="text-xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">{formatCurrency(totalProject)}</p>
          </Card>
          <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6">
            <p className="text-xs text-[#8A9A8F] uppercase tracking-wider mb-1 font-[family-name:var(--font-inter)]">Next Step</p>
            <p className="text-xl font-bold text-[#FFB347] font-[family-name:var(--font-space-grotesk)]">Design Phase</p>
          </Card>
        </div>

        {/* Project Progress */}
        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)] mb-4">
            PROJECT PROGRESS
          </h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Overall Progress</span>
              <span className="text-[#7CFF6B] font-semibold font-[family-name:var(--font-inter)]">60% Complete</span>
            </div>
            <div className="h-3 w-full bg-[#0D241B] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: '60%',
                  background: 'linear-gradient(90deg, #7CFF6B, #47B5FF)',
                }}
              />
            </div>
          </div>
        </Card>

        {/* Project Timeline */}
        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)] mb-6">
            PROJECT TIMELINE
          </h2>
          <div>
            {TIMELINE_ITEMS.map((item, i) => (
              <TimelineItem
                key={item.name}
                item={item}
                isLast={i === TIMELINE_ITEMS.length - 1}
              />
            ))}
          </div>
        </Card>

        {/* Payment Status */}
        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)] mb-6">
            PAYMENT STATUS
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-xs text-[#8A9A8F] mb-1 font-[family-name:var(--font-inter)]">Total</p>
              <p className="text-lg font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">
                {formatCurrency(totalProject)}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#8A9A8F] mb-1 font-[family-name:var(--font-inter)]">Paid</p>
              <p className="text-lg font-bold text-[#7CFF6B] font-[family-name:var(--font-space-grotesk)]">
                {formatCurrency(totalPaid)}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#8A9A8F] mb-1 font-[family-name:var(--font-inter)]">Remaining</p>
              <p className="text-lg font-bold text-[#FFB347] font-[family-name:var(--font-space-grotesk)]">
                {formatCurrency(remaining)}
              </p>
            </div>
          </div>

          {/* Payment progress bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Payment Progress</span>
              <span className="text-[#7CFF6B] font-semibold font-[family-name:var(--font-inter)]">{paidPct}% paid</span>
            </div>
            <div className="h-3 w-full bg-[#0D241B] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${paidPct}%`,
                  background: 'linear-gradient(90deg, #7CFF6B, #FFB347)',
                }}
              />
            </div>
          </div>

          {/* Payment Milestones */}
          <div className="space-y-3">
            {PAYMENT_MILESTONES.map((ms) => (
              <div
                key={ms.name}
                className="flex items-center justify-between py-2 border-b border-[rgba(124,255,107,0.06)] last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#F0F0F0] text-sm font-medium font-[family-name:var(--font-inter)]">
                    {ms.name} ({ms.pct}%)
                  </span>
                  {ms.paid ? (
                    <Badge className="bg-[#7CFF6B]/15 text-[#7CFF6B] border-0 text-[10px]">Completed</Badge>
                  ) : (
                    <Badge className="bg-[#FFB347]/15 text-[#FFB347] border-0 text-[10px]">Pending</Badge>
                  )}
                </div>
                <span className="text-sm text-[#F0F0F0] font-[family-name:var(--font-inter)]">
                  {formatCurrency(ms.amount)}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Quotation Link Card */}
        <Card
          className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 cursor-pointer hover:border-[rgba(124,255,107,0.25)] transition-colors"
          onClick={() => store.navigate('customer-project')}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#F0F0F0] font-semibold font-[family-name:var(--font-space-grotesk)]">
                View Quotation
              </p>
              <p className="text-sm text-[#8A9A8F] font-[family-name:var(--font-inter)]">
                See full project quotation and details
              </p>
            </div>
            <span className="text-[#7CFF6B] text-xl">→</span>
          </div>
        </Card>
      </div>

      <CustomerMobileNav />
    </div>
  );
}

// ============================================================
// 4. CUSTOMER PROJECT PAGE
// ============================================================

const QUOTATION_ITEMS = [
  { name: 'Equipment', amount: 1080000 },
  { name: 'Installation', amount: 300000 },
  { name: 'Engineering', amount: 80000 },
  { name: 'Other Costs', amount: 55000 },
];

const SUBTOTAL = 1515000;
const TAX = 272700;
const DISCOUNT = 50000;
const FINAL_PRICE = 1737700;

export function CustomerProjectPage() {
  const store = useAppStore();

  if (!store.isLoggedIn || store.userRole !== 'customer') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: '#07100D' }}>
        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-8 text-center max-w-sm w-full">
          <p className="text-[#8A9A8F] mb-4">Please log in to view your project.</p>
          <Button
            onClick={() => store.navigate('customer-login')}
            className="bg-[#7CFF6B] text-[#07100D] font-semibold hover:bg-[#7CFF6B]/90"
          >
            Go to Login
          </Button>
        </Card>
      </div>
    );
  }

  const handleDownload = () => {
    toast({
      title: 'Demo Feature',
      description: 'PDF generation is a demo feature',
    });
  };

  return (
    <div className="pb-20 md:pb-0" style={{ backgroundColor: '#07100D' }}>
      <div className="py-8 md:py-12 px-6 max-w-7xl mx-auto">
        {/* Back + Heading */}
        <button
          onClick={() => store.navigate('customer-dashboard')}
          className="text-[#8A9A8F] hover:text-[#7CFF6B] text-sm transition-colors inline-flex items-center gap-1 mb-6 font-[family-name:var(--font-inter)]"
        >
          <ArrowLeft className="size-4" />
          Back to Dashboard
        </button>

        <h1 className="text-2xl md:text-3xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)] mb-8">
          MY PROJECT
        </h1>

        {/* Project Details Card */}
        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)] mb-4">
            PROJECT DETAILS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-[#8A9A8F] mb-1 font-[family-name:var(--font-inter)]">Project ID</p>
              <p className="text-sm text-[#F0F0F0] font-[family-name:var(--font-inter)]">GEO-DEMO-001</p>
            </div>
            <div>
              <p className="text-xs text-[#8A9A8F] mb-1 font-[family-name:var(--font-inter)]">Property</p>
              <p className="text-sm text-[#F0F0F0] font-[family-name:var(--font-inter)]">Residential, 2,000 sq.ft</p>
            </div>
            <div>
              <p className="text-xs text-[#8A9A8F] mb-1 font-[family-name:var(--font-inter)]">System</p>
              <p className="text-sm text-[#F0F0F0] font-[family-name:var(--font-inter)]">24 kW Ground Source Heat Pump</p>
            </div>
            <div>
              <p className="text-xs text-[#8A9A8F] mb-1 font-[family-name:var(--font-inter)]">Status</p>
              <Badge className="bg-[#7CFF6B]/15 text-[#7CFF6B] border-0">Design Phase</Badge>
            </div>
            <div>
              <p className="text-xs text-[#8A9A8F] mb-1 font-[family-name:var(--font-inter)]">Start Date</p>
              <p className="text-sm text-[#F0F0F0] font-[family-name:var(--font-inter)]">Jan 2025 (demo)</p>
            </div>
          </div>
        </Card>

        {/* Quotation Section */}
        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-lg font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">
              QUOTATION
            </h2>
            <Badge className="bg-[#FFB347]/15 text-[#FFB347] border-0">DEMO</Badge>
          </div>

          <div className="space-y-3">
            {QUOTATION_ITEMS.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between py-2 font-[family-name:var(--font-inter)]"
              >
                <span className="text-[#8A9A8F] text-sm">{item.name}</span>
                <span className="text-[#F0F0F0] text-sm">{formatCurrency(item.amount)}</span>
              </div>
            ))}

            <Separator className="bg-[rgba(124,255,107,0.1)]" />

            <div className="flex items-center justify-between py-2 font-[family-name:var(--font-inter)]">
              <span className="text-[#8A9A8F] text-sm">Subtotal</span>
              <span className="text-[#F0F0F0] text-sm">{formatCurrency(SUBTOTAL)}</span>
            </div>
            <div className="flex items-center justify-between py-2 font-[family-name:var(--font-inter)]">
              <span className="text-[#8A9A8F] text-sm">Tax (18%)</span>
              <span className="text-[#F0F0F0] text-sm">{formatCurrency(TAX)}</span>
            </div>
            <div className="flex items-center justify-between py-2 font-[family-name:var(--font-inter)]">
              <span className="text-[#8A9A8F] text-sm">Discount</span>
              <span className="text-[#7CFF6B] text-sm">-{formatCurrency(DISCOUNT)}</span>
            </div>

            <Separator className="bg-[rgba(124,255,107,0.1)]" />

            <div className="flex items-center justify-between py-3 font-[family-name:var(--font-space-grotesk)]">
              <span className="text-[#F0F0F0] font-bold text-lg">Final Price</span>
              <span className="text-[#7CFF6B] font-bold text-lg">{formatCurrency(FINAL_PRICE)}</span>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={handleDownload}
            className="mt-6 border-[#7CFF6B]/30 text-[#7CFF6B] hover:bg-[#7CFF6B]/10 hover:text-[#7CFF6B]"
          >
            <Download className="size-4 mr-2" />
            DOWNLOAD QUOTATION (PDF)
          </Button>
        </Card>
      </div>

      <CustomerMobileNav />
    </div>
  );
}

// ============================================================
// 5. CUSTOMER PAYMENTS PAGE
// ============================================================

export function CustomerPaymentsPage() {
  const store = useAppStore();

  if (!store.isLoggedIn || store.userRole !== 'customer') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: '#07100D' }}>
        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-8 text-center max-w-sm w-full">
          <p className="text-[#8A9A8F] mb-4">Please log in to view payments.</p>
          <Button
            onClick={() => store.navigate('customer-login')}
            className="bg-[#7CFF6B] text-[#07100D] font-semibold hover:bg-[#7CFF6B]/90"
          >
            Go to Login
          </Button>
        </Card>
      </div>
    );
  }

  const totalProject = 2250000;
  const totalPaid = 900000;
  const remaining = totalProject - totalPaid;
  const paidPct = Math.round((totalPaid / totalProject) * 100);

  return (
    <div className="pb-20 md:pb-0" style={{ backgroundColor: '#07100D' }}>
      <div className="py-8 md:py-12 px-6 max-w-7xl mx-auto">
        {/* Back + Heading */}
        <button
          onClick={() => store.navigate('customer-dashboard')}
          className="text-[#8A9A8F] hover:text-[#7CFF6B] text-sm transition-colors inline-flex items-center gap-1 mb-6 font-[family-name:var(--font-inter)]"
        >
          <ArrowLeft className="size-4" />
          Back to Dashboard
        </button>

        <h1 className="text-2xl md:text-3xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)] mb-8">
          PAYMENT TRACKING
        </h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 text-center">
            <p className="text-xs text-[#8A9A8F] uppercase tracking-wider mb-2 font-[family-name:var(--font-inter)]">
              Total Project
            </p>
            <p className="text-2xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">
              {formatCurrency(totalProject)}
            </p>
          </Card>
          <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 text-center">
            <p className="text-xs text-[#8A9A8F] uppercase tracking-wider mb-2 font-[family-name:var(--font-inter)]">
              Amount Paid
            </p>
            <p className="text-2xl font-bold text-[#7CFF6B] font-[family-name:var(--font-space-grotesk)]">
              {formatCurrency(totalPaid)}
            </p>
          </Card>
          <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 text-center">
            <p className="text-xs text-[#8A9A8F] uppercase tracking-wider mb-2 font-[family-name:var(--font-inter)]">
              Remaining
            </p>
            <p className="text-2xl font-bold text-[#FFB347] font-[family-name:var(--font-space-grotesk)]">
              {formatCurrency(remaining)}
            </p>
          </Card>
        </div>

        {/* Payment Progress */}
        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Overall Payment Progress</span>
            <span className="text-[#7CFF6B] font-semibold font-[family-name:var(--font-inter)]">{paidPct}%</span>
          </div>
          <div className="h-3 w-full bg-[#0D241B] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${paidPct}%`,
                background: 'linear-gradient(90deg, #7CFF6B, #FFB347)',
              }}
            />
          </div>
        </Card>

        {/* Detailed Milestones */}
        <div className="space-y-4">
          {PAYMENT_MILESTONES.map((ms) => (
            <Card
              key={ms.name}
              className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      ms.paid ? 'bg-[#7CFF6B]/15' : 'bg-[#FFB347]/15'
                    }`}
                  >
                    {ms.paid ? (
                      <CheckCircle className="size-5 text-[#7CFF6B]" />
                    ) : (
                      <Clock className="size-5 text-[#FFB347]" />
                    )}
                  </div>
                  <div>
                    <p className="text-[#F0F0F0] font-semibold font-[family-name:var(--font-space-grotesk)]">
                      {ms.name}
                    </p>
                    <p className="text-xs text-[#8A9A8F] font-[family-name:var(--font-inter)]">
                      {ms.pct}% of total project cost
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:text-right">
                  <div>
                    {ms.paid ? (
                      <Badge className="bg-[#7CFF6B]/15 text-[#7CFF6B] border-0">Completed</Badge>
                    ) : (
                      <Badge className="bg-[#FFB347]/15 text-[#FFB347] border-0">Pending</Badge>
                    )}
                    <p className="text-xs text-[#8A9A8F] mt-1 font-[family-name:var(--font-inter)]">{ms.date}</p>
                  </div>
                  <div className="sm:ml-4">
                    <p className="text-xs text-[#8A9A8F] font-[family-name:var(--font-inter)]">Expected</p>
                    <p className="text-sm font-semibold text-[#F0F0F0] font-[family-name:var(--font-inter)]">
                      {formatCurrency(ms.amount)}
                    </p>
                  </div>
                  <div className="sm:ml-4">
                    <p className="text-xs text-[#8A9A8F] font-[family-name:var(--font-inter)]">Paid</p>
                    <p className="text-sm font-semibold text-[#7CFF6B] font-[family-name:var(--font-inter)]">
                      {ms.paid ? formatCurrency(ms.amount) : '—'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <CustomerMobileNav />
    </div>
  );
}

// ============================================================
// 6. CUSTOMER MONITORING PAGE
// ============================================================

const MONITORING_METRICS = [
  { label: 'Ground Temperature', value: '24.2°C', color: '#7CFF6B', icon: Thermometer },
  { label: 'System Temperature', value: '18.5°C', color: '#47B5FF', icon: ThermometerSun },
  { label: 'Flow Rate', value: '46 L/min', color: '#47B5FF', icon: Droplets },
  { label: 'Power Consumption', value: '21.4 kW', color: '#FFB347', icon: Zap },
  { label: 'COP', value: '4.3', color: '#7CFF6B', icon: Activity },
  { label: 'Status', value: '● SYSTEM NORMAL', color: '#7CFF6B', icon: CheckCircle },
];

const ENERGY_BARS = [
  { month: 'Jan', kw: 18 },
  { month: 'Feb', kw: 20 },
  { month: 'Mar', kw: 22 },
  { month: 'Apr', kw: 15 },
  { month: 'May', kw: 10 },
  { month: 'Jun', kw: 21 },
];

export function CustomerMonitoringPage() {
  const store = useAppStore();

  if (!store.isLoggedIn || store.userRole !== 'customer') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: '#07100D' }}>
        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-8 text-center max-w-sm w-full">
          <p className="text-[#8A9A8F] mb-4">Please log in to view monitoring.</p>
          <Button
            onClick={() => store.navigate('customer-login')}
            className="bg-[#7CFF6B] text-[#07100D] font-semibold hover:bg-[#7CFF6B]/90"
          >
            Go to Login
          </Button>
        </Card>
      </div>
    );
  }

  const maxKw = Math.max(...ENERGY_BARS.map((b) => b.kw));

  return (
    <div className="pb-20 md:pb-0" style={{ backgroundColor: '#07100D' }}>
      <div className="py-8 md:py-12 px-6 max-w-7xl mx-auto">
        {/* Back + Heading */}
        <button
          onClick={() => store.navigate('customer-dashboard')}
          className="text-[#8A9A8F] hover:text-[#7CFF6B] text-sm transition-colors inline-flex items-center gap-1 mb-6 font-[family-name:var(--font-inter)]"
        >
          <ArrowLeft className="size-4" />
          Back to Dashboard
        </button>

        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">
            SMART GEOTHERMAL MONITORING
          </h1>
          <Badge className="bg-[#FFB347]/15 text-[#FFB347] border-0 shrink-0">
            SIMULATED DATA
          </Badge>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {MONITORING_METRICS.map((metric) => (
            <Card
              key={metric.label}
              className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${metric.color}15` }}
                >
                  <metric.icon className="size-5" style={{ color: metric.color }} />
                </div>
                <p className="text-xs text-[#8A9A8F] uppercase tracking-wider font-[family-name:var(--font-inter)]">
                  {metric.label}
                </p>
              </div>
              <p
                className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]"
                style={{ color: metric.color }}
              >
                {metric.value}
              </p>
            </Card>
          ))}
        </div>

        {/* Energy Chart (CSS-only bar chart) */}
        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6">
          <h2 className="text-lg font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)] mb-6">
            ENERGY / POWER (LAST 6 MONTHS)
          </h2>
          <div className="flex items-end justify-around gap-4 h-64">
            {ENERGY_BARS.map((bar) => {
              const heightPct = (bar.kw / maxKw) * 100;
              return (
                <div key={bar.month} className="flex flex-col items-center gap-2 flex-1">
                  <span className="text-xs text-[#8A9A8F] font-[family-name:var(--font-inter)]">
                    {bar.kw}kW
                  </span>
                  <div
                    className="w-full max-w-[48px] rounded-t-lg"
                    style={{
                      height: `${heightPct * 0.75}%`,
                      background: 'linear-gradient(180deg, #7CFF6B, #132E1F)',
                      minHeight: '8px',
                    }}
                  />
                  <span className="text-xs text-[#8A9A8F] font-[family-name:var(--font-inter)]">
                    {bar.month}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <CustomerMobileNav />
    </div>
  );
}

// ============================================================
// 7. ADMIN DASHBOARD
// ============================================================

const ADMIN_NAV_ITEMS = [
  { label: 'Dashboard', page: 'admin-dashboard' as const, icon: LayoutDashboard },
  { label: 'Enquiries', page: 'admin-enquiries' as const, icon: MessageSquare },
  { label: 'Projects', page: 'admin-projects' as const, icon: FolderKanban },
  { label: 'Costs', page: 'admin-costs' as const, icon: IndianRupee },
  { label: 'Payments', page: 'admin-payments' as const, icon: CreditCard },
  { label: 'Quotations', page: 'admin-quotations' as const, icon: FileText },
  { label: 'Settings', page: 'admin-settings' as const, icon: Settings },
];

const ENQUIRY_DATA = [
  { name: 'Rahul Sharma', email: 'rahul@email.com', type: 'Home', date: '15 Jan 2025', status: 'New' as const },
  { name: 'Priya Patel', email: 'priya@email.com', type: 'Office', date: '12 Jan 2025', status: 'Contacted' as const },
  { name: 'Amit Kumar', email: 'amit@email.com', type: 'Hotel', date: '10 Jan 2025', status: 'New' as const },
  { name: 'Sneha Reddy', email: 'sneha@email.com', type: 'School', date: '8 Jan 2025', status: 'In Progress' as const },
  { name: 'Vikram Singh', email: 'vikram@email.com', type: 'Hospital', date: '5 Jan 2025', status: 'New' as const },
];

const PROJECT_DATA = [
  { id: 'GEO-DEMO-001', customer: 'Rahul Sharma', type: 'Residential', capacity: '24 kW', status: 'Design' },
  { id: 'GEO-DEMO-002', customer: 'Priya Patel', type: 'Commercial', capacity: '150 kW', status: 'Assessment' },
  { id: 'GEO-DEMO-003', customer: 'Amit Kumar', type: 'Hotel', capacity: '80 kW', status: 'Enquiry' },
];

const RECENT_PAYMENTS = [
  { project: 'GEO-DEMO-001', milestone: 'Booking', amount: '₹4.5 L', status: 'Completed' as const },
  { project: 'GEO-DEMO-001', milestone: 'Equipment', amount: '₹4.5 L', status: 'Completed' as const },
  { project: 'GEO-DEMO-002', milestone: 'Booking', amount: '₹15.0 L', status: 'Pending' as const },
];

function EnquiryStatusBadge({ status }: { status: string }) {
  const map: Record<string, { bg: string; text: string }> = {
    New: { bg: 'bg-[#7CFF6B]/15', text: 'text-[#7CFF6B]' },
    Contacted: { bg: 'bg-[#47B5FF]/15', text: 'text-[#47B5FF]' },
    'In Progress': { bg: 'bg-[#FFB347]/15', text: 'text-[#FFB347]' },
    Completed: { bg: 'bg-[#8A9A8F]/15', text: 'text-[#8A9A8F]' },
  };
  const s = map[status] || map['New'];
  return <Badge className={`${s.bg} ${s.text} border-0 text-xs`}>{status}</Badge>;
}

function PaymentStatusBadge({ status }: { status: string }) {
  if (status === 'Completed') {
    return <Badge className="bg-[#7CFF6B]/15 text-[#7CFF6B] border-0 text-xs">Completed</Badge>;
  }
  return <Badge className="bg-[#FFB347]/15 text-[#FFB347] border-0 text-xs">Pending</Badge>;
}

export function AdminDashboard() {
  const store = useAppStore();

  useEffect(() => {
    if (!store.isLoggedIn || store.userRole !== 'admin') {
      store.navigate('admin-login');
    }
  }, [store.isLoggedIn, store.userRole, store]);

  if (!store.isLoggedIn || store.userRole !== 'admin') {
    return null;
  }

  return (
    <div style={{ backgroundColor: '#07100D' }}>
      <div className="py-8 md:py-12 px-6 max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">
            ADMIN DASHBOARD
          </h1>
          <Button
            variant="ghost"
            onClick={() => store.logout()}
            className="text-[#8A9A8F] hover:text-[#F0F0F0]"
          >
            <LogOut className="size-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Navigation: Desktop sidebar style, Mobile horizontal tabs */}
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <div className="flex gap-2 mb-8 flex-wrap">
            {ADMIN_NAV_ITEMS.map((item) => (
              <Button
                key={item.page}
                variant={store.currentPage === item.page ? 'default' : 'ghost'}
                onClick={() => store.navigate(item.page)}
                className={
                  store.currentPage === item.page
                    ? 'bg-[#7CFF6B] text-[#07100D] hover:bg-[#7CFF6B]/90'
                    : 'text-[#8A9A8F] hover:text-[#7CFF6B] hover:bg-[#7CFF6B]/10'
                }
              >
                <item.icon className="size-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile horizontal tabs */}
        <div className="lg:hidden mb-8 overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {ADMIN_NAV_ITEMS.map((item) => (
              <Button
                key={item.page}
                variant="ghost"
                size="sm"
                onClick={() => store.navigate(item.page)}
                className={
                  store.currentPage === item.page
                    ? 'bg-[#7CFF6B]/15 text-[#7CFF6B]'
                    : 'text-[#8A9A8F] hover:text-[#7CFF6B]'
                }
              >
                <item.icon className="size-4" />
                <span className="ml-1 text-xs">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-[#8A9A8F] uppercase tracking-wider mb-1 font-[family-name:var(--font-inter)]">
                  New Enquiries
                </p>
                <p className="text-3xl font-bold text-[#7CFF6B] font-[family-name:var(--font-space-grotesk)]">
                  12
                </p>
              </div>
              <Mail className="size-8 text-[#7CFF6B]/30" />
            </div>
          </Card>
          <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-[#8A9A8F] uppercase tracking-wider mb-1 font-[family-name:var(--font-inter)]">
                  Active Projects
                </p>
                <p className="text-3xl font-bold text-[#47B5FF] font-[family-name:var(--font-space-grotesk)]">
                  4
                </p>
              </div>
              <FolderKanban className="size-8 text-[#47B5FF]/30" />
            </div>
          </Card>
          <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-[#8A9A8F] uppercase tracking-wider mb-1 font-[family-name:var(--font-inter)]">
                  Project Value
                </p>
                <p className="text-3xl font-bold text-[#FFB347] font-[family-name:var(--font-space-grotesk)]">
                  ₹88.5 L
                </p>
              </div>
              <IndianRupee className="size-8 text-[#FFB347]/30" />
            </div>
          </Card>
          <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-[#8A9A8F] uppercase tracking-wider mb-1 font-[family-name:var(--font-inter)]">
                  Pending Payments
                </p>
                <p className="text-3xl font-bold text-[#FFB347] font-[family-name:var(--font-space-grotesk)]">
                  ₹32.0 L
                </p>
              </div>
              <Clock className="size-8 text-[#FFB347]/30" />
            </div>
          </Card>
        </div>

        {/* Recent Enquiries Table */}
        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl overflow-hidden mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">
              RECENT ENQUIRIES
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#0D241B] border-none hover:bg-[#0D241B]">
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Name</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Email</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Property Type</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Date</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ENQUIRY_DATA.map((eq) => (
                    <TableRow
                      key={eq.email}
                      className="border-b border-[rgba(124,255,107,0.06)] hover:bg-[#0D241B]/50"
                    >
                      <TableCell className="text-[#F0F0F0] font-[family-name:var(--font-inter)]">
                        {eq.name}
                      </TableCell>
                      <TableCell className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">
                        {eq.email}
                      </TableCell>
                      <TableCell className="text-[#F0F0F0] font-[family-name:var(--font-inter)]">
                        {eq.type}
                      </TableCell>
                      <TableCell className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">
                        {eq.date}
                      </TableCell>
                      <TableCell>
                        <EnquiryStatusBadge status={eq.status} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Recent Projects Table */}
        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl overflow-hidden mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">
              RECENT PROJECTS
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#0D241B] border-none hover:bg-[#0D241B]">
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Project ID</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Customer</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Type</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Capacity</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {PROJECT_DATA.map((proj) => (
                    <TableRow
                      key={proj.id}
                      className="border-b border-[rgba(124,255,107,0.06)] hover:bg-[#0D241B]/50"
                    >
                      <TableCell className="text-[#7CFF6B] font-medium font-[family-name:var(--font-inter)]">
                        {proj.id}
                      </TableCell>
                      <TableCell className="text-[#F0F0F0] font-[family-name:var(--font-inter)]">
                        {proj.customer}
                      </TableCell>
                      <TableCell className="text-[#F0F0F0] font-[family-name:var(--font-inter)]">
                        {proj.type}
                      </TableCell>
                      <TableCell className="text-[#F0F0F0] font-[family-name:var(--font-inter)]">
                        {proj.capacity}
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-[#47B5FF]/15 text-[#47B5FF] border-0 text-xs">
                          {proj.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Recent Payments */}
        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">
              RECENT PAYMENTS
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#0D241B] border-none hover:bg-[#0D241B]">
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Project</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Milestone</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Amount</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {RECENT_PAYMENTS.map((p, i) => (
                    <TableRow
                      key={i}
                      className="border-b border-[rgba(124,255,107,0.06)] hover:bg-[#0D241B]/50"
                    >
                      <TableCell className="text-[#7CFF6B] font-medium font-[family-name:var(--font-inter)]">
                        {p.project}
                      </TableCell>
                      <TableCell className="text-[#F0F0F0] font-[family-name:var(--font-inter)]">
                        {p.milestone}
                      </TableCell>
                      <TableCell className="text-[#F0F0F0] font-[family-name:var(--font-inter)]">
                        {p.amount}
                      </TableCell>
                      <TableCell>
                        <PaymentStatusBadge status={p.status} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ============================================================
// 8. ADMIN ENQUIRIES PAGE
// ============================================================

const FULL_ENQUIRIES = [
  { name: 'Rahul Sharma', email: 'rahul@email.com', phone: '+91 98765 43210', property: 'Home', area: '2,000 sq.ft', date: '15 Jan 2025', status: 'New', message: 'I am interested in installing a geothermal system for my new home in Pune. The house is under construction and we want to include a ground source heat pump for heating and cooling.' },
  { name: 'Priya Patel', email: 'priya@email.com', phone: '+91 87654 32109', property: 'Office', area: '5,000 sq.ft', date: '12 Jan 2025', status: 'Contacted', message: 'We are looking for a commercial geothermal solution for our office space in Mumbai. Currently using conventional AC which is very expensive to run.' },
  { name: 'Amit Kumar', email: 'amit@email.com', phone: '+91 76543 21098', property: 'Hotel', area: '12,000 sq.ft', date: '10 Jan 2025', status: 'New', message: 'Planning to install geothermal for our boutique hotel in Jaipur. Need heating in winter and cooling in summer for 30 rooms.' },
  { name: 'Sneha Reddy', email: 'sneha@email.com', phone: '+91 65432 10987', property: 'School', area: '8,000 sq.ft', date: '8 Jan 2025', status: 'In Progress', message: 'Our school wants to go green with geothermal HVAC. We have a 2-story building with classrooms and an auditorium.' },
  { name: 'Vikram Singh', email: 'vikram@email.com', phone: '+91 54321 09876', property: 'Hospital', area: '15,000 sq.ft', date: '5 Jan 2025', status: 'New', message: 'Looking for a reliable geothermal system for our hospital. Need 24/7 heating and cooling with high reliability.' },
  { name: 'Neha Gupta', email: 'neha@email.com', phone: '+91 43210 98765', property: 'Home', area: '3,500 sq.ft', date: '3 Jan 2025', status: 'Contacted', message: 'Own a villa in Bangalore and want to reduce electricity bills. Heard geothermal is great for year-round comfort.' },
  { name: 'Rajesh Nair', email: 'rajesh@email.com', phone: '+91 32109 87654', property: 'Factory', area: '20,000 sq.ft', date: '1 Jan 2025', status: 'New', message: 'Need heating for our manufacturing facility. Current gas heating is too expensive and we want a cleaner alternative.' },
  { name: 'Anita Desai', email: 'anita@email.com', phone: '+91 21098 76543', property: 'Home', area: '1,800 sq.ft', date: '28 Dec 2024', status: 'Completed', message: 'Already received a quotation. Reviewing financing options before proceeding with the installation.' },
];

export function AdminEnquiriesPage() {
  const store = useAppStore();
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  useEffect(() => {
    if (!store.isLoggedIn || store.userRole !== 'admin') {
      store.navigate('admin-login');
    }
  }, [store.isLoggedIn, store.userRole, store]);

  if (!store.isLoggedIn || store.userRole !== 'admin') return null;

  return (
    <div style={{ backgroundColor: '#07100D' }}>
      <div className="py-8 md:py-12 px-6 max-w-7xl mx-auto">
        <button
          onClick={() => store.navigate('admin-dashboard')}
          className="text-[#8A9A8F] hover:text-[#7CFF6B] text-sm transition-colors inline-flex items-center gap-1 mb-6 font-[family-name:var(--font-inter)]"
        >
          <ArrowLeft className="size-4" />
          Back to Dashboard
        </button>

        <h1 className="text-2xl md:text-3xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)] mb-8">
          ENQUIRIES
        </h1>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#0D241B] border-none hover:bg-[#0D241B]">
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Name</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Email</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Phone</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Property</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Area</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Date</TableHead>
                    <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Status</TableHead>
                    <TableHead className="w-10"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {FULL_ENQUIRIES.map((eq, i) => (
                    <>
                      <TableRow
                        key={eq.email}
                        className="border-b border-[rgba(124,255,107,0.06)] hover:bg-[#0D241B]/50 cursor-pointer"
                        onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
                      >
                        <TableCell className="text-[#F0F0F0] font-[family-name:var(--font-inter)]">
                          {eq.name}
                        </TableCell>
                        <TableCell className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">
                          {eq.email}
                        </TableCell>
                        <TableCell className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">
                          {eq.phone}
                        </TableCell>
                        <TableCell className="text-[#F0F0F0] font-[family-name:var(--font-inter)]">
                          {eq.property}
                        </TableCell>
                        <TableCell className="text-[#F0F0F0] font-[family-name:var(--font-inter)]">
                          {eq.area}
                        </TableCell>
                        <TableCell className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">
                          {eq.date}
                        </TableCell>
                        <TableCell>
                          <EnquiryStatusBadge status={eq.status} />
                        </TableCell>
                        <TableCell>
                          {expandedIdx === i ? (
                            <ChevronUp className="size-4 text-[#8A9A8F]" />
                          ) : (
                            <ChevronDown className="size-4 text-[#8A9A8F]" />
                          )}
                        </TableCell>
                      </TableRow>
                      {expandedIdx === i && (
                        <TableRow key={`${eq.email}-msg`} className="bg-[#0D241B]/30 hover:bg-[#0D241B]/30">
                          <TableCell colSpan={8} className="py-4 px-6">
                            <p className="text-sm text-[#8A9A8F] font-[family-name:var(--font-inter)]">
                              <span className="text-[#F0F0F0] font-semibold">Message: </span>
                              {eq.message}
                            </p>
                          </TableCell>
                        </TableRow>
                      )}
                    </>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {FULL_ENQUIRIES.map((eq, i) => (
            <Card
              key={eq.email}
              className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-4 cursor-pointer"
              onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-[#F0F0F0] font-semibold text-sm font-[family-name:var(--font-space-grotesk)]">
                    {eq.name}
                  </p>
                  <p className="text-xs text-[#8A9A8F] font-[family-name:var(--font-inter)]">
                    {eq.email} · {eq.phone}
                  </p>
                </div>
                <EnquiryStatusBadge status={eq.status} />
              </div>
              <div className="flex gap-3 text-xs text-[#8A9A8F] font-[family-name:var(--font-inter)]">
                <span>{eq.property}</span>
                <span>·</span>
                <span>{eq.area}</span>
                <span>·</span>
                <span>{eq.date}</span>
              </div>
              {expandedIdx === i && (
                <div className="mt-3 pt-3 border-t border-[rgba(124,255,107,0.06)]">
                  <p className="text-sm text-[#8A9A8F] font-[family-name:var(--font-inter)]">
                    <span className="text-[#F0F0F0] font-semibold">Message: </span>
                    {eq.message}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 9. ADMIN PROJECTS PAGE
// ============================================================

const ADMIN_PROJECTS = [
  {
    id: 'GEO-DEMO-001',
    customer: 'Rahul Sharma',
    type: 'Residential',
    area: '2,000 sq.ft',
    capacity: '24 kW',
    status: 'Design',
    progress: 30,
    cost: {
      equipment: 1080000,
      installation: 300000,
      engineering: 80000,
      other: 55000,
    },
  },
  {
    id: 'GEO-DEMO-002',
    customer: 'Priya Patel',
    type: 'Commercial',
    area: '5,000 sq.ft',
    capacity: '150 kW',
    status: 'Assessment',
    progress: 15,
    cost: {
      equipment: 6750000,
      installation: 750000,
      engineering: 200000,
      other: 150000,
    },
  },
  {
    id: 'GEO-DEMO-003',
    customer: 'Amit Kumar',
    type: 'Hotel',
    area: '12,000 sq.ft',
    capacity: '80 kW',
    status: 'Enquiry',
    progress: 5,
    cost: {
      equipment: 3600000,
      installation: 1800000,
      engineering: 150000,
      other: 100000,
    },
  },
];

export function AdminProjectsPage() {
  const store = useAppStore();

  useEffect(() => {
    if (!store.isLoggedIn || store.userRole !== 'admin') {
      store.navigate('admin-login');
    }
  }, [store.isLoggedIn, store.userRole, store]);

  if (!store.isLoggedIn || store.userRole !== 'admin') return null;

  return (
    <div style={{ backgroundColor: '#07100D' }}>
      <div className="py-8 md:py-12 px-6 max-w-7xl mx-auto">
        <button
          onClick={() => store.navigate('admin-dashboard')}
          className="text-[#8A9A8F] hover:text-[#7CFF6B] text-sm transition-colors inline-flex items-center gap-1 mb-6 font-[family-name:var(--font-inter)]"
        >
          <ArrowLeft className="size-4" />
          Back to Dashboard
        </button>

        <h1 className="text-2xl md:text-3xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)] mb-8">
          PROJECTS
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ADMIN_PROJECTS.map((proj) => {
            const totalCost =
              proj.cost.equipment +
              proj.cost.installation +
              proj.cost.engineering +
              proj.cost.other;

            return (
              <Card
                key={proj.id}
                className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#7CFF6B] font-bold text-sm font-[family-name:var(--font-space-grotesk)]">
                    {proj.id}
                  </span>
                  <Badge className="bg-[#47B5FF]/15 text-[#47B5FF] border-0 text-xs">
                    {proj.status}
                  </Badge>
                </div>

                <p className="text-[#F0F0F0] font-semibold font-[family-name:var(--font-space-grotesk)] mb-1">
                  {proj.customer}
                </p>
                <p className="text-xs text-[#8A9A8F] mb-4 font-[family-name:var(--font-inter)]">
                  {proj.type} · {proj.area} · {proj.capacity}
                </p>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Progress</span>
                    <span className="text-[#7CFF6B] font-semibold font-[family-name:var(--font-inter)]">
                      {proj.progress}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-[#0D241B] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${proj.progress}%`,
                        background: 'linear-gradient(90deg, #7CFF6B, #47B5FF)',
                      }}
                    />
                  </div>
                </div>

                {/* Cost Breakdown */}
                <Separator className="bg-[rgba(124,255,107,0.08)] mb-3" />
                <p className="text-xs text-[#8A9A8F] uppercase tracking-wider mb-2 font-[family-name:var(--font-inter)]">
                  Cost Summary
                </p>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-[family-name:var(--font-inter)]">
                    <span className="text-[#8A9A8F]">Equipment</span>
                    <span className="text-[#F0F0F0]">{formatCurrency(proj.cost.equipment)}</span>
                  </div>
                  <div className="flex justify-between text-xs font-[family-name:var(--font-inter)]">
                    <span className="text-[#8A9A8F]">Installation</span>
                    <span className="text-[#F0F0F0]">{formatCurrency(proj.cost.installation)}</span>
                  </div>
                  <div className="flex justify-between text-xs font-[family-name:var(--font-inter)]">
                    <span className="text-[#8A9A8F]">Engineering</span>
                    <span className="text-[#F0F0F0]">{formatCurrency(proj.cost.engineering)}</span>
                  </div>
                  <div className="flex justify-between text-xs font-[family-name:var(--font-inter)]">
                    <span className="text-[#8A9A8F]">Other</span>
                    <span className="text-[#F0F0F0]">{formatCurrency(proj.cost.other)}</span>
                  </div>
                  <Separator className="bg-[rgba(124,255,107,0.08)]" />
                  <div className="flex justify-between text-sm font-[family-name:var(--font-space-grotesk)]">
                    <span className="text-[#F0F0F0] font-semibold">Total</span>
                    <span className="text-[#7CFF6B] font-bold">{formatCurrency(totalCost)}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 10. ADMIN COSTS PAGE
// ============================================================

interface CostInputs {
  equipment: string;
  drilling: string;
  piping: string;
  civil: string;
  electrical: string;
  labour: string;
  transport: string;
  engineering: string;
  other: string;
  customerPrice: string;
}

const DEFAULT_COSTS: CostInputs = {
  equipment: '1080000',
  drilling: '1260000',
  piping: '240000',
  civil: '200000',
  electrical: '160000',
  labour: '300000',
  transport: '25000',
  engineering: '80000',
  other: '30000',
  customerPrice: '2250000',
};

const PROJECT_OPTIONS = ['GEO-DEMO-001', 'GEO-DEMO-002', 'GEO-DEMO-003'];

export function AdminCostsPage() {
  const store = useAppStore();
  const [selectedProject, setSelectedProject] = useState('GEO-DEMO-001');
  const [costs, setCosts] = useState<CostInputs>(DEFAULT_COSTS);

  useEffect(() => {
    if (!store.isLoggedIn || store.userRole !== 'admin') {
      store.navigate('admin-login');
    }
  }, [store.isLoggedIn, store.userRole, store]);

  if (!store.isLoggedIn || store.userRole !== 'admin') return null;

  const totalCost = Object.keys(costs)
    .filter((k) => k !== 'customerPrice')
    .reduce((sum, k) => sum + (Number(costs[k as keyof CostInputs]) || 0), 0);

  const customerPrice = Number(costs.customerPrice) || 0;
  const profit = customerPrice - totalCost;

  const updateCost = (field: keyof CostInputs, value: string) => {
    setCosts((prev) => ({ ...prev, [field]: value }));
  };

  const costFields: { key: keyof CostInputs; label: string; exclude?: boolean }[] = [
    { key: 'equipment', label: 'Equipment Cost' },
    { key: 'drilling', label: 'Drilling Cost' },
    { key: 'piping', label: 'Piping Cost' },
    { key: 'civil', label: 'Civil Cost' },
    { key: 'electrical', label: 'Electrical Cost' },
    { key: 'labour', label: 'Labour Cost' },
    { key: 'transport', label: 'Transport Cost' },
    { key: 'engineering', label: 'Engineering Cost' },
    { key: 'other', label: 'Other Cost' },
  ];

  return (
    <div style={{ backgroundColor: '#07100D' }}>
      <div className="py-8 md:py-12 px-6 max-w-7xl mx-auto">
        <button
          onClick={() => store.navigate('admin-dashboard')}
          className="text-[#8A9A8F] hover:text-[#7CFF6B] text-sm transition-colors inline-flex items-center gap-1 mb-6 font-[family-name:var(--font-inter)]"
        >
          <ArrowLeft className="size-4" />
          Back to Dashboard
        </button>

        <h1 className="text-2xl md:text-3xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)] mb-8">
          PROJECT COST MANAGEMENT
        </h1>

        {/* Project Selector */}
        <div className="mb-8">
          <Label className="text-[#8A9A8F] mb-2 block font-[family-name:var(--font-inter)]">Select Project</Label>
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="bg-[#0D241B] border border-[rgba(124,255,107,0.15)] rounded-lg text-white px-4 py-2.5 text-sm w-full max-w-xs font-[family-name:var(--font-inter)]"
          >
            {PROJECT_OPTIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cost Input Form */}
          <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)] mb-4">
              COST INPUTS — {selectedProject}
            </h2>
            <div className="space-y-3">
              {costFields.map((field) => (
                <div key={field.key} className="space-y-1">
                  <Label className="text-[#8A9A8F] text-xs font-[family-name:var(--font-inter)]">
                    {field.label} (₹)
                  </Label>
                  <Input
                    type="text"
                    value={costs[field.key]}
                    onChange={(e) => updateCost(field.key, e.target.value.replace(/[^0-9]/g, ''))}
                    className="bg-[#0D241B] border border-[rgba(124,255,107,0.15)] rounded-lg text-white text-sm font-[family-name:var(--font-inter)]"
                  />
                </div>
              ))}

              <Separator className="bg-[rgba(124,255,107,0.08)]" />

              <div className="flex items-center justify-between py-1">
                <span className="text-[#F0F0F0] font-bold font-[family-name:var(--font-space-grotesk)]">
                  TOTAL PROJECT COST
                </span>
                <span className="text-[#FFB347] font-bold font-[family-name:var(--font-space-grotesk)]">
                  {formatCurrency(totalCost)}
                </span>
              </div>

              <div className="space-y-1">
                <Label className="text-[#8A9A8F] text-xs font-[family-name:var(--font-inter)]">
                  Customer Price (₹)
                </Label>
                <Input
                  type="text"
                  value={costs.customerPrice}
                  onChange={(e) => updateCost('customerPrice', e.target.value.replace(/[^0-9]/g, ''))}
                  className="bg-[#0D241B] border border-[rgba(124,255,107,0.15)] rounded-lg text-white text-sm font-[family-name:var(--font-inter)]"
                />
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-[#F0F0F0] font-bold font-[family-name:var(--font-space-grotesk)]">
                  ESTIMATED PROFIT
                </span>
                <span
                  className={`font-bold font-[family-name:var(--font-space-grotesk)] ${profit >= 0 ? 'text-[#7CFF6B]' : 'text-red-400'}`}
                >
                  {profit >= 0 ? '+' : ''}{formatCurrency(Math.abs(profit))}
                </span>
              </div>
            </div>
          </Card>

          {/* Visual Bars */}
          <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)] mb-6">
              PROFIT VISUALIZATION
            </h2>

            <div className="space-y-6">
              {/* Project Value Bar */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#7CFF6B] font-semibold font-[family-name:var(--font-inter)]">PROJECT VALUE</span>
                  <span className="text-[#7CFF6B] font-semibold font-[family-name:var(--font-inter)]">
                    {formatCurrency(customerPrice)}
                  </span>
                </div>
                <div className="h-8 w-full bg-[#0D241B] rounded-lg overflow-hidden">
                  <div
                    className="h-full rounded-lg flex items-center justify-end pr-3"
                    style={{
                      width: customerPrice > 0 ? '100%' : '0%',
                      background: 'linear-gradient(90deg, #132E1F, #7CFF6B)',
                    }}
                  >
                    <span className="text-xs text-[#07100D] font-bold font-[family-name:var(--font-inter)]">
                      Customer Price
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Cost Bar */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#FFB347] font-semibold font-[family-name:var(--font-inter)]">PROJECT COST</span>
                  <span className="text-[#FFB347] font-semibold font-[family-name:var(--font-inter)]">
                    {formatCurrency(totalCost)}
                  </span>
                </div>
                <div className="h-8 w-full bg-[#0D241B] rounded-lg overflow-hidden">
                  <div
                    className="h-full rounded-lg flex items-center justify-end pr-3"
                    style={{
                      width: customerPrice > 0 ? `${Math.min((totalCost / customerPrice) * 100, 100)}%` : '0%',
                      background: 'linear-gradient(90deg, #132E1F, #FFB347)',
                    }}
                  >
                    <span className="text-xs text-[#07100D] font-bold font-[family-name:var(--font-inter)]">
                      {formatCurrency(totalCost)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Profit Highlight */}
              <Card className="bg-[#0D241B] border border-[rgba(124,255,107,0.15)] rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className={`size-6 ${profit >= 0 ? 'text-[#7CFF6B]' : 'text-red-400'}`} />
                  <div>
                    <p className="text-xs text-[#8A9A8F] font-[family-name:var(--font-inter)]">Estimated Profit</p>
                    <p
                      className={`text-2xl font-bold font-[family-name:var(--font-space-grotesk)] ${profit >= 0 ? 'text-[#7CFF6B]' : 'text-red-400'}`}
                    >
                      {profit >= 0 ? '+' : ''}{formatCurrency(Math.abs(profit))}
                    </p>
                  </div>
                </div>
                {customerPrice > 0 && (
                  <p className="text-xs text-[#8A9A8F] mt-2 font-[family-name:var(--font-inter)]">
                    Margin: {((profit / customerPrice) * 100).toFixed(1)}%
                  </p>
                )}
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 11. ADMIN PAYMENTS PAGE
// ============================================================

const ALL_PAYMENTS = [
  { project: 'GEO-DEMO-001', customer: 'Rahul Sharma', milestone: 'Booking', expected: '₹4.5 L', paid: '₹4.5 L', status: 'Completed', date: '15 Jan 2025' },
  { project: 'GEO-DEMO-001', customer: 'Rahul Sharma', milestone: 'Equipment', expected: '₹4.5 L', paid: '₹4.5 L', status: 'Completed', date: '02 Feb 2025' },
  { project: 'GEO-DEMO-001', customer: 'Rahul Sharma', milestone: 'Installation', expected: '₹6.75 L', paid: '—', status: 'Pending', date: '—' },
  { project: 'GEO-DEMO-001', customer: 'Rahul Sharma', milestone: 'Commissioning', expected: '₹2.25 L', paid: '—', status: 'Pending', date: '—' },
  { project: 'GEO-DEMO-001', customer: 'Rahul Sharma', milestone: 'Handover', expected: '₹2.25 L', paid: '—', status: 'Pending', date: '—' },
  { project: 'GEO-DEMO-002', customer: 'Priya Patel', milestone: 'Booking', expected: '₹15.0 L', paid: '—', status: 'Pending', date: '—' },
  { project: 'GEO-DEMO-002', customer: 'Priya Patel', milestone: 'Equipment', expected: '₹22.5 L', paid: '—', status: 'Pending', date: '—' },
  { project: 'GEO-DEMO-002', customer: 'Priya Patel', milestone: 'Installation', expected: '₹22.5 L', paid: '—', status: 'Pending', date: '—' },
  { project: 'GEO-DEMO-003', customer: 'Amit Kumar', milestone: 'Booking', expected: '₹11.5 L', paid: '₹11.5 L', status: 'Completed', date: '20 Jan 2025' },
  { project: 'GEO-DEMO-003', customer: 'Amit Kumar', milestone: 'Equipment', expected: '₹17.25 L', paid: '—', status: 'Pending', date: '—' },
];

export function AdminPaymentsPage() {
  const store = useAppStore();

  useEffect(() => {
    if (!store.isLoggedIn || store.userRole !== 'admin') {
      store.navigate('admin-login');
    }
  }, [store.isLoggedIn, store.userRole, store]);

  if (!store.isLoggedIn || store.userRole !== 'admin') return null;

  return (
    <div style={{ backgroundColor: '#07100D' }}>
      <div className="py-8 md:py-12 px-6 max-w-7xl mx-auto">
        <button
          onClick={() => store.navigate('admin-dashboard')}
          className="text-[#8A9A8F] hover:text-[#7CFF6B] text-sm transition-colors inline-flex items-center gap-1 mb-6 font-[family-name:var(--font-inter)]"
        >
          <ArrowLeft className="size-4" />
          Back to Dashboard
        </button>

        <h1 className="text-2xl md:text-3xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)] mb-8">
          PAYMENTS
        </h1>

        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#0D241B] border-none hover:bg-[#0D241B]">
                  <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Project</TableHead>
                  <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Customer</TableHead>
                  <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Milestone</TableHead>
                  <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Expected</TableHead>
                  <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Paid</TableHead>
                  <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Status</TableHead>
                  <TableHead className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ALL_PAYMENTS.map((p, i) => (
                  <TableRow
                    key={i}
                    className="border-b border-[rgba(124,255,107,0.06)] hover:bg-[#0D241B]/50"
                  >
                    <TableCell className="text-[#7CFF6B] font-medium font-[family-name:var(--font-inter)]">
                      {p.project}
                    </TableCell>
                    <TableCell className="text-[#F0F0F0] font-[family-name:var(--font-inter)]">
                      {p.customer}
                    </TableCell>
                    <TableCell className="text-[#F0F0F0] font-[family-name:var(--font-inter)]">
                      {p.milestone}
                    </TableCell>
                    <TableCell className="text-[#F0F0F0] font-[family-name:var(--font-inter)]">
                      {p.expected}
                    </TableCell>
                    <TableCell className="text-[#F0F0F0] font-[family-name:var(--font-inter)]">
                      {p.paid}
                    </TableCell>
                    <TableCell>
                      <PaymentStatusBadge status={p.status} />
                    </TableCell>
                    <TableCell className="text-[#8A9A8F] font-[family-name:var(--font-inter)]">
                      {p.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Summary */}
          <div className="border-t border-[rgba(124,255,107,0.08)] p-4">
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-xs text-[#8A9A8F] font-[family-name:var(--font-inter)]">Total Expected</p>
                <p className="text-lg font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">
                  ₹109.0 L
                </p>
              </div>
              <div>
                <p className="text-xs text-[#8A9A8F] font-[family-name:var(--font-inter)]">Total Received</p>
                <p className="text-lg font-bold text-[#7CFF6B] font-[family-name:var(--font-space-grotesk)]">
                  ₹20.5 L
                </p>
              </div>
              <div>
                <p className="text-xs text-[#8A9A8F] font-[family-name:var(--font-inter)]">Total Pending</p>
                <p className="text-lg font-bold text-[#FFB347] font-[family-name:var(--font-space-grotesk)]">
                  ₹88.5 L
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

// ============================================================
// 12. ADMIN QUOTATIONS PAGE
// ============================================================

interface Quotation {
  id: string;
  customer: string;
  project: string;
  date: string;
  amount: string;
  status: string;
}

const DEMO_QUOTATIONS: Quotation[] = [
  { id: 'QT-2025-001', customer: 'Rahul Sharma', project: 'GEO-DEMO-001', date: '20 Jan 2025', amount: '₹17.38 L', status: 'Sent' },
  { id: 'QT-2025-002', customer: 'Priya Patel', project: 'GEO-DEMO-002', date: '18 Jan 2025', amount: '₹75.0 L', status: 'Draft' },
  { id: 'QT-2025-003', customer: 'Amit Kumar', project: 'GEO-DEMO-003', date: '15 Jan 2025', amount: '₹44.5 L', status: 'Approved' },
];

export function AdminQuotationsPage() {
  const store = useAppStore();
  const [selectedQuotation, setSelectedQuotation] = useState<string | null>(null);

  useEffect(() => {
    if (!store.isLoggedIn || store.userRole !== 'admin') {
      store.navigate('admin-login');
    }
  }, [store.isLoggedIn, store.userRole, store]);

  if (!store.isLoggedIn || store.userRole !== 'admin') return null;

  const selected = DEMO_QUOTATIONS.find((q) => q.id === selectedQuotation);

  return (
    <div style={{ backgroundColor: '#07100D' }}>
      <div className="py-8 md:py-12 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <button
              onClick={() => store.navigate('admin-dashboard')}
              className="text-[#8A9A8F] hover:text-[#7CFF6B] text-sm transition-colors inline-flex items-center gap-1 mb-2 font-[family-name:var(--font-inter)]"
            >
              <ArrowLeft className="size-4" />
              Back to Dashboard
            </button>
            <h1 className="text-2xl md:text-3xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)]">
              QUOTATIONS
            </h1>
          </div>
          <Button
            onClick={() => toast({ title: 'Demo', description: 'Quotation creation is a demo feature' })}
            className="bg-[#7CFF6B] text-[#07100D] font-semibold hover:bg-[#7CFF6B]/90"
          >
            <Plus className="size-4 mr-2" />
            CREATE QUOTATION
          </Button>
        </div>

        {selectedQuotation && selected ? (
          /* Quotation Detail View */
          <div>
            <button
              onClick={() => setSelectedQuotation(null)}
              className="text-[#8A9A8F] hover:text-[#7CFF6B] text-sm transition-colors inline-flex items-center gap-1 mb-6 font-[family-name:var(--font-inter)]"
            >
              <ArrowLeft className="size-4" />
              Back to Quotations
            </button>

            <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-[#7CFF6B] font-bold text-sm font-[family-name:var(--font-space-grotesk)]">
                    {selected.id}
                  </p>
                  <p className="text-[#F0F0F0] font-semibold font-[family-name:var(--font-space-grotesk)]">
                    {selected.customer} — {selected.project}
                  </p>
                </div>
                <Badge className="bg-[#47B5FF]/15 text-[#47B5FF] border-0">{selected.status}</Badge>
              </div>

              <div className="space-y-3">
                {QUOTATION_ITEMS.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between py-2 font-[family-name:var(--font-inter)]"
                  >
                    <span className="text-[#8A9A8F] text-sm">{item.name}</span>
                    <span className="text-[#F0F0F0] text-sm">{formatCurrency(item.amount)}</span>
                  </div>
                ))}

                <Separator className="bg-[rgba(124,255,107,0.1)]" />

                <div className="flex items-center justify-between py-2 font-[family-name:var(--font-inter)]">
                  <span className="text-[#8A9A8F] text-sm">Subtotal</span>
                  <span className="text-[#F0F0F0] text-sm">{formatCurrency(SUBTOTAL)}</span>
                </div>
                <div className="flex items-center justify-between py-2 font-[family-name:var(--font-inter)]">
                  <span className="text-[#8A9A8F] text-sm">Tax (18%)</span>
                  <span className="text-[#F0F0F0] text-sm">{formatCurrency(TAX)}</span>
                </div>
                <div className="flex items-center justify-between py-2 font-[family-name:var(--font-inter)]">
                  <span className="text-[#8A9A8F] text-sm">Discount</span>
                  <span className="text-[#7CFF6B] text-sm">-{formatCurrency(DISCOUNT)}</span>
                </div>

                <Separator className="bg-[rgba(124,255,107,0.1)]" />

                <div className="flex items-center justify-between py-3 font-[family-name:var(--font-space-grotesk)]">
                  <span className="text-[#F0F0F0] font-bold text-lg">Final Price</span>
                  <span className="text-[#7CFF6B] font-bold text-lg">{formatCurrency(FINAL_PRICE)}</span>
                </div>
              </div>

              <Button
                onClick={() => toast({ title: 'Demo', description: 'Quotation generation is a demo feature' })}
                className="mt-6 bg-[#7CFF6B] text-[#07100D] font-semibold hover:bg-[#7CFF6B]/90"
              >
                GENERATE QUOTATION
              </Button>
            </Card>
          </div>
        ) : (
          /* Quotation List */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DEMO_QUOTATIONS.map((q) => (
              <Card
                key={q.id}
                className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#7CFF6B] font-bold text-sm font-[family-name:var(--font-space-grotesk)]">
                    {q.id}
                  </span>
                  <Badge
                    className={`${
                      q.status === 'Approved'
                        ? 'bg-[#7CFF6B]/15 text-[#7CFF6B]'
                        : q.status === 'Sent'
                          ? 'bg-[#47B5FF]/15 text-[#47B5FF]'
                          : 'bg-[#FFB347]/15 text-[#FFB347]'
                    } border-0 text-xs`}
                  >
                    {q.status}
                  </Badge>
                </div>

                <p className="text-[#F0F0F0] font-semibold font-[family-name:var(--font-space-grotesk)]">
                  {q.customer}
                </p>
                <p className="text-xs text-[#8A9A8F] mb-1 font-[family-name:var(--font-inter)]">
                  {q.project}
                </p>
                <p className="text-xs text-[#8A9A8F] mb-4 font-[family-name:var(--font-inter)]">
                  {q.date}
                </p>

                <p className="text-xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)] mb-4">
                  {q.amount}
                </p>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedQuotation(q.id)}
                    className="flex-1 border-[#7CFF6B]/30 text-[#7CFF6B] hover:bg-[#7CFF6B]/10 hover:text-[#7CFF6B] text-xs"
                  >
                    <Eye className="size-3 mr-1" />
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toast({ title: 'Demo', description: 'PDF download is a demo feature' })}
                    className="flex-1 border-[#7CFF6B]/30 text-[#7CFF6B] hover:bg-[#7CFF6B]/10 hover:text-[#7CFF6B] text-xs"
                  >
                    <Download className="size-3 mr-1" />
                    Download
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// 13. ADMIN SETTINGS PAGE
// ============================================================

interface PriceConfig {
  heatPumpPerKw: string;
  drillingPerMetre: string;
  pipePerMetre: string;
  installationPerSqft: string;
  engineering: string;
  transport: string;
  civilWorkPerSqft: string;
  electricalPerSqft: string;
  other: string;
}

const DEFAULT_PRICE_CONFIG: PriceConfig = {
  heatPumpPerKw: '45000',
  drillingPerMetre: '3500',
  pipePerMetre: '800',
  installationPerSqft: '150',
  engineering: '80000',
  transport: '25000',
  civilWorkPerSqft: '100',
  electricalPerSqft: '80',
  other: '30000',
};

const PRICE_FIELDS: { key: keyof PriceConfig; label: string }[] = [
  { key: 'heatPumpPerKw', label: 'Heat Pump Price (₹/kW)' },
  { key: 'drillingPerMetre', label: 'Drilling Cost (₹/metre)' },
  { key: 'pipePerMetre', label: 'Pipe Cost (₹/metre)' },
  { key: 'installationPerSqft', label: 'Installation (₹/sq.ft)' },
  { key: 'engineering', label: 'Engineering (flat ₹)' },
  { key: 'transport', label: 'Transport (flat ₹)' },
  { key: 'civilWorkPerSqft', label: 'Civil Work (₹/sq.ft)' },
  { key: 'electricalPerSqft', label: 'Electrical (₹/sq.ft)' },
  { key: 'other', label: 'Other (flat ₹)' },
];

export function AdminSettingsPage() {
  const store = useAppStore();
  const [prices, setPrices] = useState<PriceConfig>(DEFAULT_PRICE_CONFIG);

  useEffect(() => {
    if (!store.isLoggedIn || store.userRole !== 'admin') {
      store.navigate('admin-login');
    }
  }, [store.isLoggedIn, store.userRole, store]);

  if (!store.isLoggedIn || store.userRole !== 'admin') return null;

  const handleSave = () => {
    toast({
      title: 'Settings Saved',
      description: 'Price configuration has been updated successfully.',
    });
  };

  const updatePrice = (field: keyof PriceConfig, value: string) => {
    setPrices((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{ backgroundColor: '#07100D' }}>
      <div className="py-8 md:py-12 px-6 max-w-7xl mx-auto">
        <button
          onClick={() => store.navigate('admin-dashboard')}
          className="text-[#8A9A8F] hover:text-[#7CFF6B] text-sm transition-colors inline-flex items-center gap-1 mb-6 font-[family-name:var(--font-inter)]"
        >
          <ArrowLeft className="size-4" />
          Back to Dashboard
        </button>

        <h1 className="text-2xl md:text-3xl font-bold text-[#F0F0F0] font-[family-name:var(--font-space-grotesk)] mb-2">
          SETTINGS
        </h1>
        <p className="text-[#8A9A8F] mb-8 font-[family-name:var(--font-inter)]">
          PRICE MANAGEMENT
        </p>

        <Card className="bg-[#0A1A13] border border-[rgba(124,255,107,0.08)] rounded-xl p-6 max-w-2xl">
          <div className="space-y-4">
            {PRICE_FIELDS.map((field) => (
              <div key={field.key} className="space-y-1.5">
                <Label className="text-[#8A9A8F] text-sm font-[family-name:var(--font-inter)]">
                  {field.label}
                </Label>
                <Input
                  type="text"
                  value={prices[field.key]}
                  onChange={(e) => updatePrice(field.key, e.target.value.replace(/[^0-9]/g, ''))}
                  className="bg-[#0D241B] border border-[rgba(124,255,107,0.15)] rounded-lg text-white text-sm font-[family-name:var(--font-inter)]"
                />
              </div>
            ))}

            <Separator className="bg-[rgba(124,255,107,0.08)]" />

            <Button
              onClick={handleSave}
              className="bg-[#7CFF6B] text-[#07100D] font-semibold hover:bg-[#7CFF6B]/90"
            >
              SAVE SETTINGS
            </Button>

            <p className="text-xs text-[#8A9A8F] font-[family-name:var(--font-inter)]">
              These prices are used by the calculator. Changes will affect new estimates.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
