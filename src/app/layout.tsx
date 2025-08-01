import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { Theme } from "./Theme/Theme";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Header from "./components/Header";
import Sidebtn from "./components/Sidebtn";
import Chatbot from "./components/chatbot";
import "@mantine/core/styles.css";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-Manrope",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Template_1",
  description: "FrontEnd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link> */}

        <title>Superprops</title>
      </head>
      <body className={`  ${inter.className} ${manrope.className} inter`}>
        <div className=" relative inter">
          <MantineProvider theme={Theme}>
            {/* <Header/> */}
            {children}
            <Footer />
          </MantineProvider>
          <Sidebtn />
          <Chatbot />
        </div>
      </body>
    </html>
  );
}
