import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-primary)",
        color: "#fff",
        padding: "60px 40px 30px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        {/* Logo and Description */}
        <div style={{ maxWidth: 300 }}>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 20,
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
                color: "#fff",
              }}
            >
              Lucy Strada
            </span>
          </Link>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            M.A.P.A.S. integra diversas disciplinas esot&eacute;ricas com o objetivo de oportunizar
            um alinhamento energ&eacute;tico aos potenciais de Luz pessoais.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              marginBottom: 20,
            }}
          >
            Links R&aacute;pidos
          </h4>
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <Link
              href="/"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Home
            </Link>
            <Link
              href="/#services"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Servi&ccedil;os
            </Link>
            <Link
              href="/#about"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Sobre
            </Link>
            <Link
              href="/depoimentos"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Depoimentos
            </Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              marginBottom: 20,
            }}
          >
            Contato
          </h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                color: "rgba(255, 255, 255, 0.8)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:contato@lucystrada.com"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                color: "rgba(255, 255, 255, 0.8)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          maxWidth: 1200,
          margin: "40px auto 0",
          paddingTop: 20,
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          &copy; {new Date().getFullYear()} Lucy Strada. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
