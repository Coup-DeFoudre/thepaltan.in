import { Urbanist } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"


const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "The Paltan",
  description: "offician website of The Paltan Media. The Paltan is a modern digital media channel focused on delivering news and content with an India-first perspective. It aims to be an open platform for digital and mobile journalism, providing its audience with timely and relevant information tailored to their interests and needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#050505] text-gray-100">
      <body className={urbanist.className}>
       
        {children}
        
        <div className="absolute inset-0 -z-50 max-h-screen background-gradient"></div>
        <div className="absolute pointer-events-none inset-0 -z-40 h-full opacity-20 mix-blend-soft-light"></div>
        <SpeedInsights/>
      </body>
    </html>
  );
}
