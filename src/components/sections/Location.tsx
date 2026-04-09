"use client";

import { motion } from "framer-motion";
import { useViewport } from "@/hooks/useViewport";

// Location section with the address, timings, contact details, and map embed.
export default function Location() {
  const { isMobile, isTablet } = useViewport();

  return (
    <section
      id="location"
      style={{
        background: "#f4efe7",
        padding: isMobile ? "96px 0" : "160px 0",
        position: "relative",
        borderTop: "1px solid rgba(9, 11, 13, 0.08)"
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 5vw" }}>
        
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: isTablet ? "1fr" : "repeat(auto-fit, minmax(400px, 1fr))", 
            gap: isMobile ? "40px" : "80px",
            alignItems: "center"
          }}
        >
          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
              Find Us
            </span>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#090b0d",
                margin: "12px 0 48px",
              }}
            >
              Salt Progressive <br />
              <span style={{ fontStyle: "italic", color: "#5d564d", fontWeight: 400 }}>Kitchen</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              
              <div>
                <h4 style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8f877b", margin: "0 0 12px 0" }}>Address</h4>
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: isMobile ? "1.2rem" : "1.45rem", lineHeight: 1.5, color: "#090b0d", margin: 0 }}>
                  123 Culinary Avenue, Grand Road<br />
                  Rajahmundry, Andhra Pradesh
                </p>
              </div>

              <div>
                <h4 style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8f877b", margin: "0 0 12px 0" }}>Hours</h4>
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: isMobile ? "1.2rem" : "1.45rem", lineHeight: 1.5, color: "#090b0d", margin: 0 }}>
                  Monday - Sunday<br />
                  12:00 PM – 11:30 PM
                </p>
              </div>

              <div>
                <h4 style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8f877b", margin: "0 0 12px 0" }}>Contact</h4>
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: isMobile ? "1.2rem" : "1.45rem", lineHeight: 1.5, color: "#090b0d", margin: 0 }}>
                  reservations@saltkitchen.in<br />
                  +91 98765 43210
                </p>
              </div>

            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                marginTop: isMobile ? "40px" : "56px",
                padding: "16px 36px",
                background: "#F4EFE7",
                color: "#090b0d",
                border: "none",
                borderRadius: "100px",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Get Directions
            </motion.button>
          </motion.div>

          {/* Real Embedded Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative", height: isMobile ? "360px" : isTablet ? "460px" : "600px" }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "24px",
                overflow: "hidden",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(244, 239, 231, 0.05)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                position: "relative"
              }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.79120014023!2d81.70517228805273!3d17.000508686616093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a371ba2b9573%3A0xc3dcbc41bca9ccfc!2sRajahmundry%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1714152542562!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{
                  border: 0,
                  // CSS trick to force Google Maps into a matching Dark Mode!
                  filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)"
                }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
