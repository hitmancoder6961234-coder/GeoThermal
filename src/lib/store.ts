"use client";

import { create } from "zustand";

type PageKey =
  | "home"
  | "about"
  | "solutions"
  | "how-it-works"
  | "calculator"
  | "cost-estimator"
  | "projects"
  | "learn"
  | "faq"
  | "contact"
  | "customer-login"
  | "customer-dashboard"
  | "customer-project"
  | "customer-payments"
  | "customer-monitoring"
  | "admin-login"
  | "admin-dashboard"
  | "admin-enquiries"
  | "admin-projects"
  | "admin-costs"
  | "admin-payments"
  | "admin-quotations"
  | "admin-settings";

interface AppState {
  currentPage: PageKey;
  navigate: (page: PageKey) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  isLoggedIn: boolean;
  userRole: "customer" | "admin" | null;
  login: (role: "customer" | "admin") => void;
  logout: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentPage: "home",
  navigate: (page) => {
    set({ currentPage: page, mobileMenuOpen: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  isLoggedIn: false,
  userRole: null,
  login: (role) => set({ isLoggedIn: true, userRole: role }),
  logout: () =>
    set({
      isLoggedIn: false,
      userRole: null,
      currentPage: "home",
    }),
}));
