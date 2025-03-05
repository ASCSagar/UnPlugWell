import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

export const metadata = {
  icons: {
    icon: [
      { url: "/unplugwell.png" },
      { url: "/unplugwell.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/unplugwell.png", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T02TC97Y4Y"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-T02TC97Y4Y');
            `,
          }}
        />
        {/* Google Adsense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2283636579212292"
          crossOrigin="anonymous"
        />
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="-vEQwCv3N-7CYJlks9qASX9zmgZ-7sbhBPfH4JKkxT4"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
