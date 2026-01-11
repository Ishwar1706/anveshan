import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "../components/Header";
import LaunchScreen from "../components/LaunchScreen";
import Footer from "../components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata = {
  title: "ANVESHAN 2026",
  description: "Hotel Transylvania themed tech fest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className={`${poppins.className} app-background`}>
        <LaunchScreen />
        <Header />

        {/* Global overflow-safe wrapper */}
        <main className="w-full max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
