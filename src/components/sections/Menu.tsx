"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const MENU_CATEGORIES = ["Appetizers", "Mains", "Desserts", "Drinks"] as const;

const MENU_ITEMS: Record<
  (typeof MENU_CATEGORIES)[number],
  { name: string; description: string; price: string; image: string; note: string }[]
> = {
  Appetizers: [
    {
      name: "Truffle Arancini",
      description: "Wild mushroom, truffle aioli, aged parmesan",
      price: "Rs. 650",
      image: "/images/dish.png",
      note: "Crisp outside, molten center",
    },
    {
      name: "Burrata & Heirloom",
      description: "Balsamic caviar, basil oil",
      price: "Rs. 850",
      image: "/images/ambiance.png",
      note: "Bright and creamy",
    },
    {
      name: "Charred Octopus",
      description: "Romesco sauce, smoked paprika",
      price: "Rs. 1,100",
      image: "/images/chef.png",
      note: "Smoky and precise",
    },
    {
      name: "Crispy Calamari",
      description: "Lemon zest, garlic aioli, parsley",
      price: "Rs. 750",
      image: "/images/dish.png",
      note: "Light, salty, addictive",
    },
  ],
  Mains: [
    {
      name: "Pan Seared Sea Bass",
      description: "Saffron risotto, lemon butter sauce",
      price: "Rs. 1,800",
      image: "/images/dish.png",
      note: "Elegant and delicate",
    },
    {
      name: "Sous Vide Lamb Shank",
      description: "Potato puree, rosemary jus",
      price: "Rs. 2,100",
      image: "/images/interior.png",
      note: "Slow cooked depth",
    },
    {
      name: "Wild Mushroom Risotto",
      description: "Porcini dust, truffle oil",
      price: "Rs. 1,450",
      image: "/images/ambiance.png",
      note: "Earthy and silky",
    },
    {
      name: "Truffle Ricotta Gnocchi",
      description: "Brown butter, sage, parmesan",
      price: "Rs. 1,550",
      image: "/images/chef.png",
      note: "Soft, rich, aromatic",
    },
  ],
  Desserts: [
    {
      name: "Deconstructed Tiramisu",
      description: "Espresso gel, mascarpone foam",
      price: "Rs. 750",
      image: "/images/tiramisu.png",
      note: "Bittersweet finish",
    },
    {
      name: "Dark Chocolate Fondant",
      description: "Vanilla bean ice cream",
      price: "Rs. 850",
      image: "/images/dish.png",
      note: "Warm center, cold contrast",
    },
    {
      name: "Lemon Basil Tart",
      description: "Meringue kisses, mint syrup",
      price: "Rs. 700",
      image: "/images/interior.png",
      note: "Clean and citrusy",
    },
    {
      name: "Pistachio Panna Cotta",
      description: "Rose water, crushed pistachios",
      price: "Rs. 650",
      image: "/images/ambiance.png",
      note: "Soft floral finish",
    },
  ],
  Drinks: [
    {
      name: "Smoked Old Fashioned",
      description: "Bourbon, hickory smoke",
      price: "Rs. 950",
      image: "/images/wine.png",
      note: "Dark and aromatic",
    },
    {
      name: "Elderflower Spritz",
      description: "Gin, elderflower liqueur, cucumber",
      price: "Rs. 850",
      image: "/images/ambiance.png",
      note: "Bright terrace energy",
    },
    {
      name: "Salt Signature Margarita",
      description: "Black salt rim, activated charcoal",
      price: "Rs. 900",
      image: "/images/wine.png",
      note: "Sharp and theatrical",
    },
    {
      name: "Classic Negroni",
      description: "Gin, Campari, sweet vermouth",
      price: "Rs. 800",
      image: "/images/interior.png",
      note: "Bitter in the best way",
    },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof MENU_CATEGORIES)[number]>("Appetizers");

  const featuredItem = MENU_ITEMS[activeCategory][0];

  return (
    <section
      id="menu"
      style={{
        position: "relative",
        padding: "120px 0",
        background:
          "radial-gradient(circle at top left, rgba(221,212,198,0.55), transparent 36%), #f4efe7",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "0 auto auto 0",
          width: "38vw",
          height: "38vw",
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(199,182,154,0.18) 0%, rgba(199,182,154,0) 72%)",
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
            gridTemplateColumns: "minmax(0, 0.95fr) minmax(320px, 1.05fr)",
            gap: "40px",
            alignItems: "start",
            marginBottom: "56px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: "620px" }}
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
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "#8f877b",
                }}
              >
                Signature Menu
              </span>
            </div>

            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(3.4rem, 6vw, 5.8rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.05em",
                color: "#090b0d",
              }}
            >
              A menu built
              <br />
              for long evenings.
            </h2>

            <p
              style={{
                margin: "26px 0 0",
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(1.35rem, 2vw, 1.85rem)",
                lineHeight: 1.5,
                fontStyle: "italic",
                color: "#5d564d",
              }}
            >
              Progressive plates, polished classics, and drinks designed to move
              from first pour to final course without losing the room&apos;s mood.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            style={{
              background: "rgba(255,255,255,0.52)",
              border: "1px solid rgba(9,11,13,0.08)",
              borderRadius: "32px",
              padding: "22px",
              boxShadow: "0 24px 60px rgba(73, 59, 39, 0.08)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(130px, 180px) minmax(0, 1fr)",
                gap: "22px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1 / 1.12",
                  borderRadius: "22px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={featuredItem.image}
                  alt={featuredItem.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.72rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#8f877b",
                    fontWeight: 700,
                  }}
                >
                  Featured {activeCategory.slice(0, -1)}
                </p>
                <h3
                  style={{
                    margin: "10px 0 8px",
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    lineHeight: 1,
                    color: "#090b0d",
                  }}
                >
                  {featuredItem.name}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    color: "#5d564d",
                  }}
                >
                  {featuredItem.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "18px",
                    marginTop: "18px",
                    paddingTop: "18px",
                    borderTop: "1px solid rgba(9,11,13,0.08)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.18rem",
                      fontStyle: "italic",
                      color: "#6f665a",
                    }}
                  >
                    {featuredItem.note}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "1.5rem",
                      color: "#090b0d",
                    }}
                  >
                    {featuredItem.price}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
            marginBottom: "24px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: "13px 22px",
                  borderRadius: "999px",
                  border:
                    activeCategory === category
                      ? "1px solid #090b0d"
                      : "1px solid rgba(9,11,13,0.1)",
                  background:
                    activeCategory === category ? "#090b0d" : "rgba(255,255,255,0.45)",
                  color: activeCategory === category ? "#f4efe7" : "#5d564d",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <p
            style={{
              margin: 0,
              color: "#8f877b",
              fontSize: "0.95rem",
              letterSpacing: "0.04em",
            }}
          >
            Curated selection for intimate dining and conversation.
          </p>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(9,11,13,0.09)",
            paddingTop: "10px",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                columnGap: "42px",
              }}
            >
              {MENU_ITEMS[activeCategory].map((item, idx) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "84px minmax(0, 1fr)",
                    gap: "18px",
                    alignItems: "center",
                    padding: "28px 0",
                    borderBottom: "1px solid rgba(9,11,13,0.08)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "84px",
                      height: "84px",
                      borderRadius: "18px",
                      overflow: "hidden",
                      boxShadow: "0 16px 28px rgba(73, 59, 39, 0.08)",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "14px",
                        marginBottom: "8px",
                      }}
                    >
                      <h3
                        style={{
                          margin: 0,
                          fontFamily: "var(--font-playfair), serif",
                          fontSize: "1.55rem",
                          lineHeight: 1,
                          color: "#090b0d",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.name}
                      </h3>
                      <div
                        style={{
                          flex: 1,
                          borderBottom: "1px dotted rgba(9,11,13,0.14)",
                          minWidth: "20px",
                          transform: "translateY(-3px)",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-playfair), serif",
                          fontSize: "1.25rem",
                          color: "#090b0d",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.price}
                      </span>
                    </div>

                    <p
                      style={{
                        margin: "0 0 8px",
                        fontSize: "0.98rem",
                        lineHeight: 1.7,
                        color: "#5d564d",
                      }}
                    >
                      {item.description}
                    </p>

                    <span
                      style={{
                        display: "inline-block",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "0.72rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#8f877b",
                        fontWeight: 700,
                      }}
                    >
                      {item.note}
                    </span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
