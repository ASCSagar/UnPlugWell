import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Unplugwell",
  description:
    "Empowering mindful technology use for a balanced digital lifestyle.",
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
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
