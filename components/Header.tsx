"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(250, 250, 250, 0.75)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "15px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            src="https://framerusercontent.com/images/bXMOr7XsiZrkPerKbj6ppMcZx0.png"
            alt="Lucy Strada Logo"
            width={47}
            height={47}
            style={{ borderRadius: "50%" }}
          />
          <span
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: "var(--color-primary)",
            }}
          >
            Lucy Strada
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 30,
          }}
          className="desktop-nav"
        >
          <Link
            href="/"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--color-dark)",
            }}
          >
            Home
          </Link>
          <Link
            href="/#services"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--color-dark)",
            }}
          >
            Servi&ccedil;os
          </Link>
          <Link
            href="/#about"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--color-dark)",
            }}
          >
            Sobre
          </Link>
          <Link
            href="/depoimentos"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--color-dark)",
            }}
          >
            Depoimentos
          </Link>
          <Link
            href="/#cta"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "#fff",
              backgroundColor: "var(--color-primary)",
              padding: "10px 20px",
              borderRadius: 8,
            }}
          >
            Agende uma Consulta
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 10,
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          style={{
            display: "none",
            flexDirection: "column",
            padding: "20px 40px",
            backgroundColor: "rgba(250, 250, 250, 0.95)",
            gap: 20,
          }}
          className="mobile-nav"
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: 16,
              fontWeight: 500,
              color: "var(--color-dark)",
            }}
          >
            Home
          </Link>
          <Link
            href="/#services"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: 16,
              fontWeight: 500,
              color: "var(--color-dark)",
            }}
          >
            Servi&ccedil;os
          </Link>
          <Link
            href="/#about"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: 16,
              fontWeight: 500,
              color: "var(--color-dark)",
            }}
          >
            Sobre
          </Link>
          <Link
            href="/depoimentos"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: 16,
              fontWeight: 500,
              color: "var(--color-dark)",
            }}
          >
            Depoimentos
          </Link>
          <Link
            href="/#cta"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: 16,
              fontWeight: 500,
              color: "#fff",
              backgroundColor: "var(--color-primary)",
              padding: "12px 24px",
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            Agende uma Consulta
          </Link>
        </nav>
      )}

      <style jsx global>{`
        @media (max-width: 809px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-nav {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
