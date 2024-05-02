import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/MainLayout/header";
import Footer from "@/components/MainLayout/footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "ISA60 International: Empowering Lives in Ethiopia", // Tailored to specific location
  description:
    "Experience God's love in action. Discover transformative training programs empowering individuals and strengthening communities across Ethiopia.",
  url: "https://isa60minethio.com", // Updated with your website URL
  // Add more meta tags if needed, like social media specific ones
  openGraph: {
    url: "https://isa60minethio.com",
    title: "ISA60 International: Empowering Lives in Ethiopia",
    description:
      "Experience God's love in action. Discover transformative training programs empowering individuals and strengthening communities across Ethiopia.",
    images: [
      {
        url: "https://isa60minethio.com/assets/family.jpg", // Replace with image URL
        width: 800,
        height: 600,
        alt: "ISA60 International - Social Media Image",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          poppins.className +
          " flex flex-col min-h-screen  max-w-[1920px] mx-auto"
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader showSpinner={false} />
          <Header />
          <div className="min-h-screen max-w-screen overflow-x-hidden">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
