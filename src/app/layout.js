import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles/custom.css";
// import "./styles/inter.css";
import "./styles/output.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://adijulias.my.id"),

  title: {
    default: "Adi Julia | Data Analyst",
    template: "%s | Adi Julia",
  },

  verivication:{
    google: "BahFocBnRSmohpfrOLlHZyc78dH2EQ2BzUlp2BVrjrk",
  },

  description:
    "Personal website of Adi Julia. Showcasing projects, experience, and skills in data analysis and web development.",

  authors: [{ name: "Adi Julia" }],
  creator: "Adi Julia",
  publisher: "Adi Julia",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://adijulia.my.id",
    title: "Adi Julia | Personal Website",
    description: "Portfolio of Adi Julia - Data Analyst",
    url: "https://adijulias.my.id",
    siteName: "Adi Julia",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Adi Julia Personal Website",
      },
    ],
  },

  alternate: {
    canonical: "https://adijulias.my.id",
  },

  keywords: [
    "Adi Julia",
    "Adi Saputra",
    "adi julia",
    "adi saputra",
    "adijulia",
    "adisaputra",
    "adijulias",
    "adijuliasaputra",
    "adi julia saputra",
    "Adi Julia Saputra",
    "Data Analyst",
    "Web Developer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Adi Julia",
              alternateName: [
                "Adi Julia",
                "Adi Saputra",
                "adi julia",
                "adi saputra",
                "adijulia",
                "adisaputra",
                "adijulias",
                "adijuliasaputra",
                "adi julia saputra",
                "Adi Julia Saputra",
                "Data Analyst",
                "Web Developer",
              ],
              url: "https://adijulias.my.id",
              sameAs: [
                "https://www.linkedin.com/in/adijulias",
                "https://github.com/AdiJulia/",
                "https://medium.com/@adijulias",
                "https://www.instagram.com/adijulia_s/",
                "adiadijulia@gmail.com",
              ],
              jobTitle: "Data Analyst",
            }),
          }}
        />
      </body>
    </html>
  );
}
