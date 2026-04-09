import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100,
        paddingBottom: 60,
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="https://framerusercontent.com/images/v1V6rIzu0yMkuT7pfTN1tvQxy0g.jpg"
          alt="Background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
        />
        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(250, 250, 250, 0.9) 0%, rgba(250, 250, 250, 0.7) 50%, rgba(250, 250, 250, 0.95) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontSize: "clamp(40px, 8vw, 80px)",
            fontWeight: 700,
            color: "var(--color-primary)",
            marginBottom: 24,
            lineHeight: 1.1,
          }}
        >
          M.A.P.A.S.
        </h1>
        <p
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontSize: "clamp(18px, 3vw, 24px)",
            fontWeight: 500,
            color: "var(--color-gray)",
            marginBottom: 16,
            maxWidth: 800,
            margin: "0 auto 16px",
          }}
        >
          M&eacute;todo de Alinhamento aos Potenciais de Alma e Self
        </p>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "var(--color-gray)",
            maxWidth: 700,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          Integra Astrologia, Numerologia Cabal&iacute;stica, Tarot, Zi Wei Dou Shu, Feng Shui
          Tradicional, Qi Men Dun Jia e Cura Reconectiva, com o objetivo de oportunizar um
          alinhamento energ&eacute;tico aos potenciais de Luz pessoais.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="#cta"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: 16,
              fontWeight: 500,
              color: "#fff",
              backgroundColor: "var(--color-primary)",
              padding: "16px 32px",
              borderRadius: 8,
              display: "inline-block",
            }}
          >
            Agende uma Consulta
          </Link>
          <Link
            href="#services"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: 16,
              fontWeight: 500,
              color: "var(--color-primary)",
              backgroundColor: "transparent",
              padding: "16px 32px",
              borderRadius: 8,
              border: "2px solid var(--color-primary)",
              display: "inline-block",
            }}
          >
            Conhe&ccedil;a os Servi&ccedil;os
          </Link>
        </div>
      </div>
    </section>
  );
}
