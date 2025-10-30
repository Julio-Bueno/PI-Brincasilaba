import "./globals.css";
import {Montserrat} from "next/font/google";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "300"],
  display: "swap",
})

export const metadata = {
  title: "BrincaSilaba",
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className = {montserrat.variable}
    >
      
      <body>
        <Header className = "display flex items-center justify-center"/>
        {children}
        <Footer/>
      </body>
      
    </html>
  );
}
