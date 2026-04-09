"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CONTACT_CHANNELS = [
  {
    title: "Reservations & Private Dining",
    value: "+91 98765 43210",
    detail: "For intimate dinners, private tastings, and curated evenings.",
  },
  {
    title: "General Enquiries",
    value: "hello@saltkitchen.in",
    detail: "Menus, timings, collaborations, and anything else you need.",
  },
  {
    title: "Visit Us",
    value: "Rajahmundry, Andhra Pradesh",
    detail: "A modern dining room built for slower nights and longer tables.",
  },
];

export default function ContactPage() {
  const heroImageRef = useRef<HTMLDivElement>(null);
  const revealRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(heroImageRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: "#contact-page",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      if (revealRootRef.current) {
        const items = revealRootRef.current.querySelectorAll("[data-reveal]");
        items.forEach((item, index) => {
          gsap.from(item, {
            y: 44,
            opacity: 0,
            duration: 0.9,
            delay: index * 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          });
        });
      }
    }, revealRootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      id="contact-page"
      ref={revealRootRef}
      style={{
        background: "#f4efe7",
        color: "#090b0d",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          position: "relative",
          minHeight: "92svh",
          overflow: "hidden",
          background: "#090b0d",
        }}
      >
        <div
          ref={heroImageRef}
          style={{
            position: "absolute",
            inset: 0,
            transform: "scale(1.05)",
            backgroundImage:
              "linear-gradient(90deg, rgba(9,11,13,0.82) 0%, rgba(9,11,13,0.52) 44%, rgba(9,11,13,0.34) 100%), url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=85')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "24%",
            background: "linear-gradient(to top, #f4efe7 0%, transparent 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1520px",
            margin: "0 auto",
            padding: "32px 5vw 96px",
            display: "flex",
            flexDirection: "column",
            minHeight: "92svh",
          }}
        >
          <div
            data-reveal
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#f4efe7",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.76rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Back to Home
            </Link>

            <span
              style={{
                color: "#d8cec0",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.76rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Contact Salt
            </span>
          </div>

          <div
            style={{
              marginTop: "auto",
              maxWidth: "900px",
              paddingTop: "80px",
            }}
          >
            <p
              data-reveal
              style={{
                margin: "0 0 20px",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.78rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#d8cec0",
              }}
            >
              Reach the dining room
            </p>

            <h1
              data-reveal
              style={{
                margin: 0,
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(4rem, 8vw, 8rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.055em",
                color: "#f4efe7",
              }}
            >
              Let&apos;s plan
              <br />
              your evening.
            </h1>

            <p
              data-reveal
              style={{
                margin: "26px 0 0",
                maxWidth: "700px",
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(1.4rem, 2.1vw, 1.95rem)",
                lineHeight: 1.55,
                fontStyle: "italic",
                color: "#d8cec0",
              }}
            >
              Reservations, private dinners, collaborations, or a simple question
              before you arrive. We&apos;ll point you in the right direction.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1520px",
          margin: "0 auto",
          padding: "72px 5vw 120px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.05fr) minmax(320px, 0.95fr)",
            gap: "32px",
            alignItems: "start",
          }}
        >
          <div style={{ display: "grid", gap: "18px" }}>
            {CONTACT_CHANNELS.map((item) => (
              <article
                key={item.title}
                data-reveal
                style={{
                  padding: "28px 30px",
                  borderRadius: "30px",
                  background: "rgba(255,255,255,0.62)",
                  border: "1px solid rgba(9,11,13,0.08)",
                  boxShadow: "0 18px 40px rgba(73, 59, 39, 0.06)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.74rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "#8f877b",
                  }}
                >
                  {item.title}
                </p>
                <h2
                  style={{
                    margin: "12px 0 10px",
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    lineHeight: 1,
                    color: "#090b0d",
                  }}
                >
                  {item.value}
                </h2>
                <p
                  style={{
                    margin: 0,
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    color: "#5d564d",
                  }}
                >
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          <aside
            data-reveal
            style={{
              padding: "34px 32px",
              borderRadius: "34px",
              background: "#090b0d",
              color: "#f4efe7",
              boxShadow: "0 24px 60px rgba(73, 59, 39, 0.12)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.74rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#bdb5a8",
              }}
            >
              Write to us
            </p>

            <div style={{ display: "grid", gap: "14px", marginTop: "22px" }}>
              <input
                type="text"
                placeholder="Your name"
                style={{
                  padding: "16px 0",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(244,239,231,0.16)",
                  color: "#f4efe7",
                  fontSize: "1rem",
                  outline: "none",
                }}
              />
              <input
                type="email"
                placeholder="Email address"
                style={{
                  padding: "16px 0",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(244,239,231,0.16)",
                  color: "#f4efe7",
                  fontSize: "1rem",
                  outline: "none",
                }}
              />
              <textarea
                placeholder="Tell us what you need"
                rows={5}
                style={{
                  marginTop: "8px",
                  padding: "16px 0",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(244,239,231,0.16)",
                  color: "#f4efe7",
                  fontSize: "1rem",
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </div>

            <button
              type="button"
              style={{
                marginTop: "26px",
                padding: "16px 24px",
                borderRadius: "999px",
                border: "none",
                background: "#f4efe7",
                color: "#090b0d",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.76rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Send Enquiry
            </button>

            <p
              style={{
                margin: "18px 0 0",
                fontSize: "0.92rem",
                lineHeight: 1.7,
                color: "#bdb5a8",
              }}
            >
              This is a styled contact page for now. We can wire the form action
              and reservation workflow next.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
