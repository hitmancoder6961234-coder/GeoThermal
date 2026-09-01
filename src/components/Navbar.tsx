"use client";

import { useAppStore } from "@/lib/store";
import { Menu, X, ThermometerSun } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", page: "home" as const },
  { label: "Solutions", page: "solutions" as const },
  { label: "How It Works", page: "how-it-works" as const },
  { label: "Calculator", page: "calculator" as const },
  { label: "Projects", page: "projects" as const },
  { label: "About", page: "about" as const },
  { label: "Contact", page: "contact" as const },
];

export default function Navbar() {
  const {
    currentPage,
    navigate,
    mobileMenuOpen,
    setMobileMenuOpen,
    isLoggedIn,
    userRole,
  } = useAppStore();

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full"
        style={{
          background: "rgba(7, 16, 13, 0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(124, 255, 107, 0.08)",
        }}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <button
            onClick={() => navigate("home")}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <ThermometerSun className="h-5 w-5 text-[#7CFF6B]" />
            <span
              className="text-xl font-bold tracking-tight text-[#7CFF6B]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              GEO◉THERM
            </span>
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <li key={link.page}>
                  <button
                    onClick={() => navigate(link.page)}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#7CFF6B]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop Right Section */}
          <div className="hidden items-center gap-3 md:flex">
            {isLoggedIn && userRole === "customer" && (
              <button
                onClick={() => navigate("customer-dashboard")}
                className="rounded-lg bg-[#7CFF6B] px-4 py-2 text-sm font-medium text-[#07100D] transition-colors hover:bg-[#6AE85B]"
              >
                DASHBOARD
              </button>
            )}
            {isLoggedIn && userRole === "admin" && (
              <button
                onClick={() => navigate("admin-dashboard")}
                className="rounded-lg bg-[#7CFF6B] px-4 py-2 text-sm font-medium text-[#07100D] transition-colors hover:bg-[#6AE85B]"
              >
                ADMIN
              </button>
            )}
            {!isLoggedIn && (
              <button
                onClick={() => navigate("contact")}
                className="rounded-lg bg-[#7CFF6B] px-4 py-2 text-sm font-medium text-[#07100D] transition-colors hover:bg-[#6AE85B]"
              >
                GET ESTIMATE →
              </button>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-colors hover:text-white md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 md:hidden"
          style={{
            background: "rgba(7, 16, 13, 0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute right-4 top-4 rounded-md p-2 text-gray-400 transition-colors hover:text-white"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Logo in overlay */}
          <div
            className="mb-8 text-2xl font-bold tracking-tight text-[#7CFF6B]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            GEO◉THERM
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <li key={link.page}>
                  <button
                    onClick={() => navigate(link.page)}
                    className={`text-lg font-medium transition-colors ${
                      isActive
                        ? "text-[#7CFF6B]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA / Auth button */}
          <div className="mt-4">
            {isLoggedIn && userRole === "customer" && (
              <button
                onClick={() => navigate("customer-dashboard")}
                className="rounded-lg bg-[#7CFF6B] px-6 py-3 text-sm font-medium text-[#07100D] transition-colors hover:bg-[#6AE85B]"
              >
                DASHBOARD
              </button>
            )}
            {isLoggedIn && userRole === "admin" && (
              <button
                onClick={() => navigate("admin-dashboard")}
                className="rounded-lg bg-[#7CFF6B] px-6 py-3 text-sm font-medium text-[#07100D] transition-colors hover:bg-[#6AE85B]"
              >
                ADMIN
              </button>
            )}
            {!isLoggedIn && (
              <button
                onClick={() => navigate("contact")}
                className="rounded-lg bg-[#7CFF6B] px-6 py-3 text-sm font-medium text-[#07100D] transition-colors hover:bg-[#6AE85B]"
              >
                GET ESTIMATE →
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
