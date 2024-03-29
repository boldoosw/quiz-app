import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <h1>This is the main layout</h1> */}
        <Navbar />
        <div className="container px-5 py-5 mx-auto flex justify-center flex-wrap bg-gray-100">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
