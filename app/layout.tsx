import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cyber-portfolio.vercel.app"),
  title: {
    default: "Matheus Bacetic | Cybersecurity Portfolio",
    template: "%s | Cybersecurity Portfolio",
  },
  description:
    "Portfólio de cybersecurity com projetos práticos, laboratórios, pesquisas, writeups e ferramentas de segurança.",
  keywords: [
    "cybersecurity",
    "blue team",
    "SOC",
    "security research",
    "penetration testing",
    "portfolio",
  ],
  authors: [{ name: "Matheus Bacetic" }],
  creator: "Matheus Bacetic",
  openGraph: {
    title: "Matheus Bacetic | Cybersecurity Portfolio",
    description: "Projetos, laboratórios e pesquisas práticas em cybersecurity.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Bacetic | Cybersecurity Portfolio",
    description: "Projetos, laboratórios e pesquisas práticas em cybersecurity.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050706",
  colorScheme: "dark",
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
