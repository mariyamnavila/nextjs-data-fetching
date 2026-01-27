import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700","700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    default: "Learning Next.js",
    template: "%s | Learning Next.js",
  },
  keywords: ["Next.js", "React", "JavaScript", "Web Development","Learning",'Playground'],
  description: "Trying out Next.js features and functionalities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased  ${poppins.variable}`}
      >
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
