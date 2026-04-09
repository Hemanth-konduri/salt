"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Aarav Sharma",
    role: "Food Critic",
    text: "An unparalleled dining experience in Rajahmundry. The detail in plating and flavor feels metro-level, yet the room still carries its own local calm.",
  },
  {
    name: "Priya Desai",
    role: "Local Guide",
    text: "Salt redefined what a night out here could feel like. Refined without being stiff, and every course arrives with real confidence.",
  },
  {
    name: "Vikram Reddy",
    role: "Regular Guest",
    text: "It is not just a meal, it is rhythm. The lighting, cocktails, pacing, and service all work together beautifully.",
  },
  {
    name: "Anjali Rao",
    role: "Event Planner",
    text: "I recommend Salt for intimate dinners because it feels polished from the first welcome to the final course.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        position: "relative",
        padding: "120px 0 150px",
        background:
          "radial-gradient(circle at bottom left, rgba(210,193,167,0.18), transparent 32%), #f4efe7",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1380px",
          margin: "0 auto",
          padding: "0 5vw",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.92fr) minmax(320px, 1.08fr)",
            gap: "44px",
            alignItems: "start",
            marginBottom: "56px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  width: "42px",
                  height: "1px",
                  background: "#8f877b",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#8f877b",
                }}
              >
                Testimonials
              </span>
            </div>

            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(3.2rem, 5.6vw, 5.3rem)",
                lineHeight: 0.96,
                letterSpacing: "-0.05em",
                color: "#090b0d",
              }}
            >
              Guests remember
              <br />
              how the room felt.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              margin: 0,
              maxWidth: "560px",
              justifySelf: "end",
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(1.3rem, 2vw, 1.75rem)",
              lineHeight: 1.55,
              fontStyle: "italic",
              color: "#5d564d",
            }}
          >
            The food matters, but so does the hush between courses, the warmth of
            service, and the feeling that the evening has been carefully composed.
          </motion.p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
            gap: "28px",
            alignItems: "start",
          }}
        >
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85 }}
            style={{
              background: "#090b0d",
              color: "#f4efe7",
              borderRadius: "34px",
              padding: "42px 40px",
              minHeight: "100%",
              boxShadow: "0 28px 70px rgba(73, 59, 39, 0.12)",
            }}
          >
            <div style={{ display: "flex", gap: "8px", marginBottom: "28px" }}>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "999px",
                    background: "#d7ccbc",
                    opacity: 0.9,
                  }}
                />
              ))}
            </div>

            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)",
                lineHeight: 1.45,
                fontStyle: "italic",
                color: "#f4efe7",
              }}
            >
              &quot;{TESTIMONIALS[0].text}&quot;
            </p>

            <div
              style={{
                marginTop: "34px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(244,239,231,0.14)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.35rem",
                  color: "#f4efe7",
                }}
              >
                {TESTIMONIALS[0].name}
              </p>
              <p
                style={{
                  margin: "6px 0 0",
                  fontSize: "0.78rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#bdb5a8",
                  fontWeight: 700,
                }}
              >
                {TESTIMONIALS[0].role}
              </p>
            </div>
          </motion.article>

          <div
            style={{
              display: "grid",
              gap: "18px",
            }}
          >
            {TESTIMONIALS.slice(1).map((item, idx) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                style={{
                  background: "rgba(255,255,255,0.58)",
                  border: "1px solid rgba(9,11,13,0.08)",
                  borderRadius: "28px",
                  padding: "26px 26px 24px",
                  boxShadow: "0 18px 40px rgba(73, 59, 39, 0.06)",
                }}
              >
                <div style={{ display: "flex", gap: "6px", marginBottom: "16px" }}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "999px",
                        background: "#090b0d",
                        opacity: 0.75,
                      }}
                    />
                  ))}
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    color: "#3f3a34",
                  }}
                >
                  {item.text}
                </p>

                <div
                  style={{
                    marginTop: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "18px",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "1.15rem",
                      color: "#090b0d",
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.74rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#8f877b",
                      fontWeight: 700,
                    }}
                  >
                    {item.role}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
