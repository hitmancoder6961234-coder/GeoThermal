"use client";

import { useAppStore } from "@/lib/store";

const exploreLinks = [
  { label: "Solutions", page: "solutions" as const },
  { label: "How It Works", page: "how-it-works" as const },
  { label: "Calculator", page: "calculator" as const },
  { label: "Projects", page: "projects" as const },
];

const companyLinks = [
  { label: "About", page: "about" as const },
  { label: "Contact", page: "contact" as const },
  { label: "Learn", page: "learn" as const },
  { label: "FAQ", page: "faq" as const },
];

const legalLinks = [
  { label: "Privacy Policy", page: null },
  { label: "Terms of Service", page: null },
  { label: "Disclaimer", page: null },
];

export default function Footer() {
  const { navigate } = useAppStore();

  const handleLegalClick = (label: string) => {
    alert(`${label} \u2013 Coming soon`);
  };

  return (
    <footer
      className="mt-auto"
      style={{
        background: "#050C09",
        borderTop: "1px solid rgba(124, 255, 107, 0.08)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 \u2013 Brand */}
          <div className="space-y-3">
            <div
              className="text-xl font-bold tracking-tight text-[#7CFF6B]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              GEO\u25C9THERM
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Energy from below. Comfort above.
            </p>
            <p className="text-xs italic text-gray-600">
              Student Project / Prototype
            </p>
          </div>

          {/* Column 2 \u2013 Explore */}
          <div>
            <h4
              className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-sm text-gray-400 transition-colors hover:text-[#7CFF6B]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 \u2013 Company */}
          <div>
            <h4
              className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-sm text-gray-400 transition-colors hover:text-[#7CFF6B]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 \u2013 Legal & Contact */}
          <div className="space-y-6">
            <div>
              <h4
                className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Legal
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLegalClick(link.label)}
                      className="text-sm text-gray-400 transition-colors hover:text-[#7CFF6B]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-gray-500">
                <span className="text-gray-400">Phone:</span> +254 700 000 000
              </p>
              <p className="text-xs text-gray-500">
                <span className="text-gray-400">Email:</span>{" "}
                info@geotherm.co.ke
              </p>
              <p className="text-xs text-gray-500">
                <span className="text-gray-400">WhatsApp:</span> +254 700 000 000
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 border-t pt-6 text-center text-xs text-gray-600"
          style={{
            borderTop: "1px solid rgba(124, 255, 107, 0.08)",
          }}
        >
          <p>
            Copyright \u00A9 2024 GEO\u25C9THERM. All rights reserved. | Built
            as a student project.
          </p>
        </div>
      </div>
    </footer>
  );
}
