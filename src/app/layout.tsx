import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Vamsi Sai Ranga Sri Harsha Mangina | AI/ML Engineer",
  description: "AI/ML Engineer specializing in production-grade LLM, NLP, and Computer Vision systems. Proven track record of improving model accuracy by 19pp, reducing latency <500ms, and deploying systems serving 50K+ daily predictions. Expert in PyTorch, LangChain, RAG, GraphRAG, MLOps on AWS/Azure/GCP.",
  keywords: [
    "AI Engineer", "ML Engineer", "LLM", "RAG", "GraphRAG", "Computer Vision", "MLOps", "PyTorch", "LangChain", "Fine-tuning", "Agentic AI", "Vamsi Mangina", "Harsha Mangina"
  ],
  authors: [{ name: "Vamsi Sai Ranga Sri Harsha Mangina" }],
  openGraph: {
    title: "Vamsi Sai Ranga Sri Harsha Mangina | AI/ML Engineer",
    description: "Building mission-critical AI products. 50K+ daily predictions | +19pp accuracy lifts | Sub-500ms inference.",
    images: [{ url: "/og-image.png" }], // Add og-image.png to public/ for best results
  },
  twitter: {
    card: "summary_large_image",
    title: "Vamsi Sai Ranga Sri Harsha Mangina | AI/ML Engineer",
    description: "Production LLM & Agent Systems | MLOps Expert",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-zinc-950 text-zinc-200 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
