"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useViewport } from "@/hooks/useViewport";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "about" },
  { label: "Menu", href: "menu" },
  { label: "Gallery", href: "gallery" },
  { label: "Testimonials", href: "testimonials" }
];

// Persistent navigation bar that anchors the user to major sections and the contact page.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { isMobile, isTablet } = useViewport();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    if (href === "contact") {
      setMenuOpen(false);
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
            gridTemplateColumns: isMobile ? "1fr auto" : "auto 1fr auto",
            alignItems: "center",
            gap: "18px",
            minHeight: isMobile ? "58px" : "68px",
            padding: isMobile ? "10px 14px" : "14px 18px",
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
              justifySelf: "start",
            }}
          >
            <div
              style={{
                width: isMobile ? "42px" : "50px",
                height: isMobile ? "42px" : "50px",
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
                  fontSize: isMobile ? "18px" : "22px",
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
                  fontSize: isMobile ? "1.1rem" : "1.4rem",
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
                  fontSize: isMobile ? "0.5rem" : "0.62rem",
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
              display: isMobile ? "none" : "flex",
              listStyle: "none",
              margin: 0,
              padding: "12px 18px",
              alignItems: "center",
              justifyContent: "center",
              gap: isTablet ? "16px 18px" : "24px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.68)",
              border: "1px solid rgba(9,11,13,0.08)",
              minHeight: "52px",
              minWidth: 0,
              width: "100%",
            }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: isMobile ? "0.66rem" : "0.76rem",
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
              display: isMobile ? "none" : "block",
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
              justifySelf: "end",
              width: "auto",
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

          {isMobile && (
            <button
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "999px",
                border: "1px solid rgba(9,11,13,0.12)",
                background: "rgba(255,255,255,0.78)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <span
                style={{
                  position: "relative",
                  width: "16px",
                  height: "12px",
                  display: "block",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      position: "absolute",
                      left: 0,
                      width: "16px",
                      height: "1.5px",
                      borderRadius: "999px",
                      background: "#090b0d",
                      transition: "transform 0.25s ease, opacity 0.25s ease, top 0.25s ease",
                      top: i === 0 ? 0 : i === 1 ? "5px" : "10px",
                      transform: menuOpen
                        ? i === 0
                          ? "translateY(5px) rotate(45deg)"
                          : i === 1
                            ? "scaleX(0)"
                            : "translateY(-5px) rotate(-45deg)"
                        : "none",
                      opacity: menuOpen && i === 1 ? 0 : 1,
                    }}
                  />
                ))}
              </span>
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              margin: "10px auto 0",
              width: "90vw",
              maxWidth: "1560px",
              borderRadius: "24px",
              background: "rgba(244,239,231,0.98)",
              border: "1px solid rgba(9,11,13,0.1)",
              boxShadow: "0 18px 40px rgba(73, 59, 39, 0.08)",
              padding: "12px 14px 14px",
            }}
          >
            <div
              style={{
                display: "grid",
                gap: "6px",
              }}
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "12px 10px",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(9,11,13,0.06)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#2d2823",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => handleNavClick("contact")}
                style={{
                  marginTop: "8px",
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "999px",
                  border: "none",
                  background: "#090b0d",
                  color: "#f4efe7",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
