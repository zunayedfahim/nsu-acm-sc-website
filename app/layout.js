import Footer from "./Footer";
import Navbar from "./Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Vectors from "./sections/Vectors";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NSU ACM SC",
  description: "Developed by NSU ACM SC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full text-white bg-[#1B1F44] font-quantico relative overflow-hidden">
          {/* <Vectors /> */}
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
