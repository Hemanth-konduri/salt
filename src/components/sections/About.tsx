"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useViewport } from "@/hooks/useViewport";

const STATS = [
  { value: "2024", label: "Opened" },
  { value: "2,297+", label: "Reviews" },
  { value: "4.2★", label: "Rating" },
];

// About section that explains the restaurant story, visual language, and credibility.
export default function About() {
  const { isMobile, isTablet } = useViewport();

  return (
    <section
      id="about"
      style={{
        position: "relative",
        background: "#f4efe7",
        padding: isMobile ? "100px 0 40px 0" : "160px 0 60px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 5vw",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "repeat(auto-fit, minmax(400px, 1fr))",
            gap: isMobile ? "48px" : "100px",
            alignItems: "center",
          }}
        >
          {/* Left: Images Composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1 }}
            style={{ position: "relative", height: isMobile ? "420px" : isTablet ? "560px" : "700px" }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "80%",
                height: "85%",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 30px 60px rgba(0,0,0,0.4)"
              }}
            >
              <Image 
                src="/images/interior.png"
                alt="Salt Interior"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                width: "60%",
                height: "55%",
                borderRadius: "24px",
                overflow: "hidden",
                border: "12px solid #f4efe7",
                boxShadow: "0 30px 60px rgba(0,0,0,0.5)"
              }}
            >
              <Image 
                src="/images/dish.png"
                alt="Exquisite Dish"
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "32px",
              }}
            >
              <span style={{ width: "40px", height: "1px", backgroundColor: "#DCD5C9" }} />
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#8f877b",
                }}
              >
                Our Story
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: 700,
                fontSize: "clamp(3rem, 4.5vw, 4.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#090b0d",
                margin: "0 0 40px",
              }}
            >
              A sharp identity,
              <br />
              <span style={{ fontStyle: "italic", color: "#5d564d", fontWeight: 400 }}>warmly delivered.</span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "#5d564d",
                margin: "0 0 24px",
                fontWeight: 300
              }}
            >
              Salt Progressive Kitchen blends our signature black and salt‑white palette with rounded architecture and restrained detailing. We step away from flashy luxury, offering a mood that feels undeniably ours.
            </p>

            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "#5d564d",
                margin: "0 0 50px",
                fontWeight: 300
              }}
            >
              Dark framing, timber tones, and calm lighting set the stage for an authentic fine‑dining experience—tailored specific to Rajahmundry.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                gap: isMobile ? "18px" : "24px",
                paddingTop: "40px",
                borderTop: "1px solid rgba(9, 11, 13, 0.1)"
              }}
            >
              {STATS.map((item, index) => (
                <div key={item.label}>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "2rem",
                      fontWeight: 600,
                      color: "#090b0d",
                    }}
                  >
                    {item.value}
                  </p>
                  <p
                    style={{
                      margin: "8px 0 0",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#8f877b",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
