"use client";

import { motion } from "framer-motion";

const EXPLORE_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
];

// Footer section closing the experience with links, signup, and the brand signature.
export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "#090b0d",
        color: "#f4efe7",
        padding: "96px 0 32px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "min(1440px, 100%)",
          margin: "0 auto",
          padding: "0 5vw",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) repeat(2, minmax(180px, 0.7fr))",
            gap: "48px",
            alignItems: "start",
          }}
        >
          <div style={{ maxWidth: "640px" }}>
            <p
              style={{
                fontSize: "clamp(1.3rem, 2vw, 1.75rem)",
                lineHeight: 1.35,
                color: "#e8dfd2",
                marginBottom: "28px",
              }}
            >
              A progressive dining room in Rajahmundry where sharp technique,
              warm hospitality, and a modern local palate meet.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                alignItems: "flex-end",
              }}
            >
              <input
                type="email"
                placeholder="Join our guestlist"
                style={{
                  flex: "1 1 280px",
                  minWidth: "240px",
                  padding: "14px 0",
                  border: "none",
                  borderBottom: "1px solid rgba(244, 239, 231, 0.22)",
                  background: "transparent",
                  fontSize: "1rem",
                  color: "#f4efe7",
                  outline: "none",
                }}
              />
              <button
                style={{
                  border: "none",
                  borderBottom: "1px solid rgba(244, 239, 231, 0.5)",
                  background: "transparent",
                  padding: "14px 0",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  color: "#f4efe7",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#a89f93",
                marginBottom: "20px",
                fontWeight: 700,
              }}
            >
              Explore
            </p>
            <div style={{ display: "grid", gap: "14px" }}>
              {EXPLORE_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "#f4efe7",
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#a89f93",
                marginBottom: "20px",
                fontWeight: 700,
              }}
            >
              Socials
            </p>
            <div style={{ display: "grid", gap: "14px", marginBottom: "32px" }}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "#f4efe7",
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div style={{ color: "#bdb5a8", lineHeight: 1.7, fontSize: "0.98rem" }}>
              <p>Rajahmundry, Andhra Pradesh</p>
              <p>Open for curated evenings</p>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "56px",
            paddingTop: "28px",
            borderTop: "1px solid rgba(244, 239, 231, 0.14)",
          }}
        >
          <motion.div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(6.5rem, 24vw, 20rem)",
              lineHeight: 0.82,
              letterSpacing: "-0.06em",
              fontWeight: 700,
              whiteSpace: "nowrap",
              textAlign: "center",
              color: "#f4efe7",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 32,
                  letterSpacing: "-0.12em",
                  filter: "blur(8px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  letterSpacing: "-0.06em",
                  filter: "blur(0px)",
                  transition: {
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              style={{ display: "inline-block" }}
            >
              SALT
            </motion.span>
            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.3,
                  y: -18,
                  filter: "blur(6px)",
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    delay: 0.45,
                    duration: 0.75,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              animate={{
                opacity: [1, 0.82, 1],
                scale: [1, 0.96, 1],
              }}
              transition={{
                opacity: {
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1.2,
                },
                scale: {
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1.2,
                },
              }}
              style={{
                display: "inline-block",
                transformOrigin: "center 70%",
              }}
            >
              .
            </motion.span>
          </motion.div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
              marginTop: "16px",
              color: "#bdb5a8",
              fontSize: "0.95rem",
            }}
          >
            <span>&copy; {new Date().getFullYear()} Salt Progressive Kitchen</span>
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Privacy Policy
              </a>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
