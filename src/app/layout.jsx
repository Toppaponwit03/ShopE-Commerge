import { Inter } from "next/font/google";
import "./globals.css";
import Nav from './components/nav';
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop E-Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=G-GYHYCE4RG6`}></script>
      <script 
            dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-GYHYCE4RG6');
            `
          }}
      />
      </head>

    <Script
     id="inline-script"
     src="https://kit.fontawesome.com/4a73777019.js" crossorigin="anonymous"
    >
    </Script>

      <body className={inter.className}>
      {/* nav */}
      <Nav/>
      <div className="bg-base-100">
        {children}
      </div>
        
        </body>
    </html>
  );
}
