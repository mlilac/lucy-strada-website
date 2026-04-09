import Image from "next/image";

const services = [
  {
    title: "Astrologia",
    description:
      "An\u00e1lise profunda do mapa natal para compreender os padr\u00f5es energ\u00e9ticos e potenciais de vida.",
    icon: "\u2728",
  },
  {
    title: "Numerologia Cabal\u00edstica",
    description:
      "Decodifica\u00e7\u00e3o dos n\u00fameros que regem sua vida e revelam seu prop\u00f3sito e miss\u00e3o.",
    icon: "\u2728",
  },
  {
    title: "Tarot",
    description:
      "Or\u00e1culo para acessar orienta\u00e7\u00f5es e insights sobre quest\u00f5es espec\u00edficas da vida.",
    icon: "\u2728",
  },
  {
    title: "Zi Wei Dou Shu",
    description:
      "Astrologia chinesa milenar que revela o destino e as oportunidades de vida.",
    icon: "\u2728",
  },
  {
    title: "Feng Shui Tradicional",
    description:
      "Harmoniza\u00e7\u00e3o de ambientes para otimizar o fluxo de energia e bem-estar.",
    icon: "\u2728",
  },
  {
    title: "Qi Men Dun Jia",
    description:
      "Arte oracular chinesa para tomada de decis\u00f5es e escolha de datas auspiciosas.",
    icon: "\u2728",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        padding: "100px 40px",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              color: "var(--color-primary)",
              marginBottom: 16,
            }}
          >
            Servi&ccedil;os
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "var(--color-gray)",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Conhe&ccedil;a as ferramentas que comp&otilde;em o M.A.P.A.S. e como cada uma pode
            contribuir para seu autoconhecimento e evolu&ccedil;&atilde;o.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 30,
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "var(--color-background)",
                borderRadius: 16,
                padding: 32,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 12,
                  backgroundColor: "var(--color-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                  fill="#fff"
                >
                  <path d="m224 96 16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--color-dark)",
                  marginBottom: 12,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "var(--color-gray)",
                  lineHeight: 1.6,
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
