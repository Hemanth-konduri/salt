"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "About", href: "about" },
  { label: "Menu", href: "menu" },
  { label: "Gallery", href: "gallery" },
  { label: "Testimonials", href: "testimonials" },
  { label: "Contact", href: "contact" },
];

// Persistent navigation bar that anchors the user to major sections and the contact page.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    if (href === "contact") {
      router.push("/contact");
      return;
    }

    scrollTo(href);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "18px 0",
        transition: "all 0.35s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1560px",
          margin: "0 auto",
          padding: "0 5vw",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "center",
            gap: "18px",
            minHeight: "68px",
            padding: "14px 18px",
            borderRadius: "28px",
            background: "rgba(244,239,231,0.97)",
            border: "1px solid rgba(9,11,13,0.1)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: scrolled
              ? "0 18px 40px rgba(73, 59, 39, 0.08)"
              : "0 14px 34px rgba(73, 59, 39, 0.08)",
          }}
        >
          <button
            onClick={() => scrollTo("home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "18px 18px 8px 8px",
                border: "1px solid rgba(9,11,13,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.78)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#090b0d",
                }}
              >
                S
              </span>
            </div>

            <div style={{ textAlign: "left" }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.4rem",
                  lineHeight: 1,
                  letterSpacing: "0.14em",
                  color: "#090b0d",
                }}
              >
                SALT
              </p>
              <p
                style={{
              margin: "4px 0 0",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#6f665a",
                }}
              >
                Progressive Kitchen
              </p>
            </div>
          </button>

          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: "12px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.68)",
              border: "1px solid rgba(9,11,13,0.08)",
              minHeight: "52px",
              minWidth: 0,
            }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#2d2823",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px 0",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#090b0d";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#2d2823";
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => router.push("/contact")}
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.76rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#f4efe7",
              background: "#090b0d",
              border: "1px solid rgba(9,11,13,0.12)",
              borderRadius: "999px",
              padding: "16px 24px",
              cursor: "pointer",
              transition: "background 0.25s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1b1f22";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#090b0d";
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
