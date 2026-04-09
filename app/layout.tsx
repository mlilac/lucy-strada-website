import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucy Strada - M.A.P.A.S.",
  description:
    "M.A.P.A.S. integra Astrologia, Numerologia Cabalística, Tarot, Zi Wei Dou Shu, Feng Shui Tradicional, Qi Men Dun Jia e Cura Reconectiva, com o objetivo de oportunizar um alinhamento energético aos potenciais de Luz pessoais.",
  icons: {
    icon: "https://framerusercontent.com/images/bXMOr7XsiZrkPerKbj6ppMcZx0.png",
  },
  openGraph: {
    type: "website",
    title: "Lucy Strada - M.A.P.A.S.",
    description:
      "M.A.P.A.S. integra Astrologia, Numerologia Cabalística, Tarot, Zi Wei Dou Shu, Feng Shui Tradicional, Qi Men Dun Jia e Cura Reconectiva, com o objetivo de oportunizar um alinhamento energético aos potenciais de Luz pessoais.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucy Strada - M.A.P.A.S.",
    description:
      "M.A.P.A.S. integra Astrologia, Numerologia Cabalística, Tarot, Zi Wei Dou Shu, Feng Shui Tradicional, Qi Men Dun Jia e Cura Reconectiva, com o objetivo de oportunizar um alinhamento energético aos potenciais de Luz pessoais.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
