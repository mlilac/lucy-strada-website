import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const testimonials = [
  {
    name: "Maria Clara",
    role: "Empresária",
    text: "A consulta com Lucy foi transformadora. Através do M.A.P.A.S., consegui entender padrões que se repetiam em minha vida e finalmente pude trabalhar para mudá-los. Recomendo a todos que buscam autoconhecimento genuíno.",
    image: "https://framerusercontent.com/images/8N0yWW6MUh1H5Iaa276SQ6QYY.jpg",
  },
  {
    name: "João Paulo",
    role: "Advogado",
    text: "Inicialmente cético, fui surpreendido pela profundidade e precisão da leitura. Lucy tem um dom especial para traduzir símbolos ancestrais em orientações práticas para o dia a dia.",
    image: "https://framerusercontent.com/images/KCdvxlyHlsBLHMu62oTydDHILI.jpeg",
  },
  {
    name: "Ana Beatriz",
    role: "Terapeuta",
    text: "Como profissional da área de saúde mental, fiquei impressionada com a metodologia do M.A.P.A.S. A integração das diferentes ferramentas oferece uma visão holística e complementar ao trabalho terapêutico.",
    image: "https://framerusercontent.com/images/HZWVllUNqiBU2Hm2fwS9JOvZl8.jpg",
  },
];

export default function DepoimentosPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", paddingTop: 100 }}>
        {/* Hero Section */}
        <section
          style={{
            padding: "60px 40px",
            backgroundColor: "var(--color-background)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 700,
              color: "var(--color-primary)",
              marginBottom: 16,
            }}
          >
            Depoimentos
          </h1>
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
            Conhe&ccedil;a as experi&ecirc;ncias de pessoas que passaram pelo M.A.P.A.S. e
            transformaram suas vidas.
          </p>
        </section>

        {/* Testimonials Grid */}
        <section
          style={{
            padding: "60px 40px 100px",
            backgroundColor: "#fff",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: 30,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "var(--color-background)",
                  borderRadius: 24,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Quote Icon */}
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="var(--color-primary)"
                  style={{ marginBottom: 20, opacity: 0.2 }}
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Testimonial Text */}
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 16,
                    color: "var(--color-gray)",
                    lineHeight: 1.8,
                    marginBottom: 24,
                    flex: 1,
                  }}
                >
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "Satoshi, sans-serif",
                        fontSize: 16,
                        fontWeight: 700,
                        color: "var(--color-dark)",
                      }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 14,
                        color: "var(--color-gray)",
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section
          style={{
            padding: "80px 40px",
            backgroundColor: "var(--color-background)",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
                color: "var(--color-primary)",
                marginBottom: 16,
              }}
            >
              Depoimentos em V&iacute;deo
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 16,
                color: "var(--color-gray)",
                marginBottom: 40,
              }}
            >
              Assista aos relatos de transforma&ccedil;&atilde;o de nossos clientes.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: 300,
                backgroundColor: "var(--color-primary)",
                borderRadius: 24,
                color: "#fff",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                  style={{ opacity: 0.5 }}
                >
                  <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z" />
                </svg>
                <p
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: 18,
                    marginTop: 16,
                    opacity: 0.7,
                  }}
                >
                  V&iacute;deos em breve
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            padding: "80px 40px",
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "var(--color-primary)",
              marginBottom: 16,
            }}
          >
            Fa&ccedil;a parte dessa transforma&ccedil;&atilde;o
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              color: "var(--color-gray)",
              maxWidth: 500,
              margin: "0 auto 32px",
              lineHeight: 1.6,
            }}
          >
            Agende sua consulta e descubra como o M.A.P.A.S. pode ajud&aacute;-lo em sua jornada de
            autoconhecimento.
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: 16,
              fontWeight: 500,
              color: "#fff",
              backgroundColor: "var(--color-primary)",
              padding: "16px 32px",
              borderRadius: 8,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar Consulta
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
