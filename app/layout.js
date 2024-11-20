import "./globals.css";
import { Delicious_Handrawn, Montserrat } from 'next/font/google'
import Footer from "./components/footer"
import Navbar from './components/navbar'

const delicious = Delicious_Handrawn({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-delicious-handrawn",
})

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"], // Define the weights you want to use
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat", // Create a CSS variable for Montserrat
});


export const metadata = {
  title: "Scrp Labs",
  description: "A new-age Creative Space run by young adults.",
};

export const revalidate = 60;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-primary ${montserrat.variable} ${delicious.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
