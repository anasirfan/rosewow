import { Geist } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "../redux/provider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata = {
  title: "RoseWow - Luxury Lip Care",
  description: "Delicate lip balms crafted from rose petals to nourish and enhance your lips.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased bg-rose-50/30 min-h-screen flex flex-col`}>
        <ReduxProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
