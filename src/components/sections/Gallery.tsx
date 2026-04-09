"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GALLERY_IMAGES = [
  {
    src: "/images/ambiance.png",
    alt: "Dining ambiance at Salt",
    title: "The Room",
    note: "Muted light, long conversations, a slower pace.",
  },
  {
    src: "/images/interior.png",
    alt: "Interior architecture",
    title: "Architecture",
    note: "Curves, stone textures, and restraint.",
  },
  {
    src: "/images/wine.png",
    alt: "Wine and drinks",
    title: "The Pour",
    note: "Cocktails and pairings with depth and polish.",
  },
  {
    src: "/images/dish.png",
    alt: "Signature dish plating",
    title: "The Plate",
    note: "Precision in every edge, warmth in every finish.",
  },
  {
    src: "/images/chef.png",
    alt: "Chef plating",
    title: "The Pass",
    note: "Quiet movement before the table sees the dish.",
  },
  {
    src: "/images/tiramisu.png",
    alt: "Dessert at Salt",
    title: "Final Course",
    note: "A soft landing to end the night.",
  },
];

// Gallery section that frames the restaurant through imagery, mood, and visual storytelling.
export default function Gallery() {
  const [featured, ...supporting] = GALLERY_IMAGES;

  return (
    <section
      id="gallery"
      style={{
        position: "relative",
        padding: "120px 0 150px",
        background:
          "linear-gradient(180deg, #f4efe7 0%, rgba(239,231,219,0.92) 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-8%",
          width: "34vw",
          height: "34vw",
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(201,184,158,0.2) 0%, rgba(201,184,158,0) 72%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1380px",
          margin: "0 auto",
          padding: "0 5vw",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.9fr) minmax(320px, 1.1fr)",
            gap: "42px",
            alignItems: "end",
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
                Gallery
              </span>
            </div>

            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(3.3rem, 5.8vw, 5.5rem)",
                lineHeight: 0.96,
                letterSpacing: "-0.05em",
                color: "#090b0d",
              }}
            >
              The visual rhythm
              <br />
              of Salt.
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
            Not just dishes, but light, texture, glass, motion, and the calm
            restraint that gives the room its signature mood.
          </motion.p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.18fr) minmax(320px, 0.82fr)",
            gap: "28px",
            alignItems: "stretch",
          }}
        >
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85 }}
            style={{
              position: "relative",
              minHeight: "740px",
              borderRadius: "36px",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(73, 59, 39, 0.12)",
            }}
          >
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              style={{ objectFit: "cover" }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(9,11,13,0.04) 0%, rgba(9,11,13,0.12) 44%, rgba(9,11,13,0.74) 100%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: "32px",
                right: "32px",
                bottom: "30px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0 0 10px",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(244,239,231,0.78)",
                  }}
                >
                  {featured.title}
                </p>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "clamp(2.4rem, 4vw, 4rem)",
                    lineHeight: 0.95,
                    color: "#f4efe7",
                  }}
                >
                  Moments at Salt.
                </h3>
              </div>

              <p
                style={{
                  margin: 0,
                  maxWidth: "320px",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "rgba(244,239,231,0.82)",
                }}
              >
                {featured.note}
              </p>
            </div>
          </motion.article>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            {supporting.map((image, idx) => (
              <motion.article
                key={image.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.7, delay: idx * 0.07 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: idx === 0 ? "0.92 / 1.28" : idx === 1 ? "0.92 / 0.92" : "0.92 / 1.04",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 22px 50px rgba(73, 59, 39, 0.1)",
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div>
                  <p
                    style={{
                      margin: "0 0 6px",
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "1.35rem",
                      color: "#090b0d",
                    }}
                  >
                    {image.title}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: "#5d564d",
                    }}
                  >
                    {image.note}
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
