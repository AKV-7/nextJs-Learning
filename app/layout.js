import {  Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Providers from "./providers";

const roboto = Roboto({ weight:[ '400' ,'700'] , subsets: ["latin"] });

export const metadata = {
  title: "PORTFO",
  description: "Let's Discover!",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>

        <main className="p-20 max-w-6xl mx-auto">

          <Providers>
            {children}

          </Providers>
        </main>

        </body>
    </html>
  );
}
