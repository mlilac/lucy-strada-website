import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 40px",
        backgroundColor: "var(--color-background)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 60,
        }}
      >
        {/* Image */}
        <div
          style={{
            flex: "1 1 400px",
            position: "relative",
            minHeight: 500,
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <Image
            src="https://framerusercontent.com/images/Ap2d5XbasOm81c1rwgAmcRYhY.jpeg"
            alt="Lucy Strada"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            flex: "1 1 400px",
          }}
        >
          <h2
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              color: "var(--color-primary)",
              marginBottom: 24,
            }}
          >
            Sobre Lucy Strada
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              color: "var(--color-gray)",
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            H&aacute; mais de 15 anos, Lucy Strada dedica-se ao estudo e &agrave; pr&aacute;tica de diversas disciplinas
            esot&eacute;ricas e terap&ecirc;uticas, integrando-as no m&eacute;todo M.A.P.A.S. (M&eacute;todo de Alinhamento
            aos Potenciais de Alma e Self).
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              color: "var(--color-gray)",
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            Sua miss&atilde;o &eacute; auxiliar pessoas a reconhecerem e ativarem seus potenciais de luz,
            promovendo um profundo autoconhecimento e transforma&ccedil;&atilde;o pessoal atrav&eacute;s de consultas
            personalizadas.
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              color: "var(--color-gray)",
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            Com uma abordagem acolhedora e profissional, Lucy acompanha cada cliente em sua
            jornada de autodescoberta, utilizando ferramentas ancestrais com uma vis&atilde;o
            contempor&acirc;nea.
          </p>
          <div
            style={{
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: 36,
                  fontWeight: 700,
                  color: "var(--color-primary)",
                }}
              >
                15+
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "var(--color-gray)",
                }}
              >
                Anos de experi&ecirc;ncia
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: 36,
                  fontWeight: 700,
                  color: "var(--color-primary)",
                }}
              >
                1000+
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "var(--color-gray)",
                }}
              >
                Consultas realizadas
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: 36,
                  fontWeight: 700,
                  color: "var(--color-primary)",
                }}
              >
                7
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "var(--color-gray)",
                }}
              >
                Disciplinas integradas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
