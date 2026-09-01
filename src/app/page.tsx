"use client";

import { useAppStore } from "@/lib/store";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import CalculatorPage from "@/components/CalculatorPage";
import {
  AboutPage,
  SolutionsPage,
  HowItWorksPage,
  ProjectsPage,
  LearnPage,
  FAQPage,
  ContactPage,
} from "@/components/InfoPages";
import {
  CustomerLoginPage,
  AdminLoginPage,
  CustomerDashboard,
  CustomerProjectPage,
  CustomerPaymentsPage,
  CustomerMonitoringPage,
  AdminDashboard,
  AdminEnquiriesPage,
  AdminProjectsPage,
  AdminCostsPage,
  AdminPaymentsPage,
  AdminQuotationsPage,
  AdminSettingsPage,
} from "@/components/DashboardPages";

function PageRouter() {
  const currentPage = useAppStore((s) => s.currentPage);

  switch (currentPage) {
    case "home":
      return <HomePage />;
    case "about":
      return <AboutPage />;
    case "solutions":
      return <SolutionsPage />;
    case "how-it-works":
      return <HowItWorksPage />;
    case "calculator":
      return <CalculatorPage />;
    case "cost-estimator":
      return <CalculatorPage />;
    case "projects":
      return <ProjectsPage />;
    case "learn":
      return <LearnPage />;
    case "faq":
      return <FAQPage />;
    case "contact":
      return <ContactPage />;
    case "customer-login":
      return <CustomerLoginPage />;
    case "customer-dashboard":
      return <CustomerDashboard />;
    case "customer-project":
      return <CustomerProjectPage />;
    case "customer-payments":
      return <CustomerPaymentsPage />;
    case "customer-monitoring":
      return <CustomerMonitoringPage />;
    case "admin-login":
      return <AdminLoginPage />;
    case "admin-dashboard":
      return <AdminDashboard />;
    case "admin-enquiries":
      return <AdminEnquiriesPage />;
    case "admin-projects":
      return <AdminProjectsPage />;
    case "admin-costs":
      return <AdminCostsPage />;
    case "admin-payments":
      return <AdminPaymentsPage />;
    case "admin-quotations":
      return <AdminQuotationsPage />;
    case "admin-settings":
      return <AdminSettingsPage />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-geo-dark text-foreground">
      <Navbar />
      <main className="flex-1">
        <PageRouter />
      </main>
      <Footer />
    </div>
  );
}