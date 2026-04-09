"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { num: "2,297+", label: "Guest Notes" },
  { num: "4.2", label: "City Rating" },
  { num: "12 PM", label: "Doors Open" },
];

const INFO_ROWS = [
  { label: "Mood", value: "Stone textures, warm timber, and a room that settles into evening slowly." },
  { label: "Cuisine", value: "Progressive plates shaped by modern technique and local appetite." },
  { label: "Service", value: "Curated dining, cocktails, and a composed pace from welcome to final course." },
];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      if (headingRef.current) {
        gsap.from(headingRef.current.children, {
          y: 48,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.25,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "118svh",
        overflow: "hidden",
        backgroundColor: "#f4efe7",
      }}
    >
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: 0,
          transform: "scale(1.06)",
          backgroundImage:
            "linear-gradient(90deg, rgba(9,11,13,0.78) 0%, rgba(9,11,13,0.46) 34%, rgba(9,11,13,0.2) 58%, rgba(9,11,13,0.42) 100%), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(9,11,13,0.2) 0%, rgba(9,11,13,0) 20%, rgba(9,11,13,0) 72%, rgba(9,11,13,0.18) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "22%",
          background: "linear-gradient(to top, #f4efe7 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 3,
          minHeight: "118svh",
          display: "flex",
          alignItems: "center",
          paddingTop: "124px",
          paddingBottom: "96px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1560px",
            margin: "0 auto",
            padding: "0 5vw",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(320px, 0.85fr)",
            gap: "40px",
            alignItems: "end",
          }}
        >
          <div style={{ maxWidth: "860px" }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "26px",
              }}
            >
              <span
                style={{
                  width: "40px",
                  height: "1px",
                  backgroundColor: "rgba(244,239,231,0.76)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#d8cec0",
                }}
              >
                Progressive Kitchen
              </span>
              <span style={{ color: "#b8ada0", fontSize: "0.72rem" }}>•</span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#d8cec0",
                }}
              >
                Rajahmundry
              </span>
            </motion.div>

            <div ref={headingRef} style={{ display: "grid", gap: "10px" }}>
              <div
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 700,
                  fontSize: "clamp(4.2rem, 8vw, 8.6rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.055em",
                  color: "#f4efe7",
                }}
              >
                Salt, after
              </div>
              <div
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 600,
                  fontStyle: "italic",
                  fontSize: "clamp(4.2rem, 8vw, 8.6rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.06em",
                  color: "#efe7dc",
                }}
              >
                dark.
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.7 }}
              style={{
                margin: "28px 0 0",
                maxWidth: "760px",
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(1.45rem, 2.2vw, 2rem)",
                lineHeight: 1.5,
                fontStyle: "italic",
                color: "#d9cec0",
              }}
            >
              A modern dining room shaped by shadow, warmth, and a menu that
              unfolds at a measured pace.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.85 }}
              style={{
                margin: "18px 0 0",
                maxWidth: "620px",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(244,239,231,0.82)",
              }}
            >
              Global technique, local instinct, and an atmosphere built for long
              evenings, quiet detail, and conversation that stays at the table.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 1 }}
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "34px",
              }}
            >
              <button
                onClick={() => scrollTo("contact")}
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#090b0d",
                  background: "#f4efe7",
                  border: "none",
                  borderRadius: "999px",
                  padding: "16px 30px",
                  cursor: "pointer",
                }}
              >
                Reserve a Table
              </button>
              <button
                onClick={() => scrollTo("menu")}
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#f4efe7",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(244,239,231,0.22)",
                  borderRadius: "999px",
                  padding: "16px 30px",
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                }}
              >
                Explore Menu
              </button>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            style={{
              justifySelf: "end",
              width: "100%",
              maxWidth: "430px",
              background: "rgba(9,11,13,0.64)",
              border: "1px solid rgba(244,239,231,0.14)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              borderRadius: "34px",
              padding: "30px 28px",
              boxShadow: "0 28px 70px rgba(0,0,0,0.22)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#bdb5a8",
              }}
            >
              Tonight at Salt
            </p>

            <div style={{ display: "grid", gap: "16px", marginTop: "22px" }}>
              {INFO_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "78px minmax(0, 1fr)",
                    gap: "16px",
                    paddingBottom: "16px",
                    borderBottom:
                      i < INFO_ROWS.length - 1
                        ? "1px solid rgba(244,239,231,0.1)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "0.66rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#8f877b",
                      paddingTop: "2px",
                    }}
                  >
                    {row.label}
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.94rem",
                      lineHeight: 1.7,
                      color: "#efe7dc",
                    }}
                  >
                    {row.value}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "16px",
                marginTop: "24px",
                paddingTop: "22px",
                borderTop: "1px solid rgba(244,239,231,0.1)",
              }}
            >
              {STATS.map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "1.7rem",
                      color: "#f4efe7",
                      lineHeight: 1,
                    }}
                  >
                    {item.num}
                  </p>
                  <p
                    style={{
                      margin: "8px 0 0",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "0.58rem",
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#8f877b",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "26px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#f4efe7",
            opacity: 0.55,
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{
            originY: 0,
            width: "1px",
            height: "34px",
            background: "linear-gradient(to bottom, #f4efe7, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
