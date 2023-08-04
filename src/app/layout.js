import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuDrawer from "@/components/MenuDrawer";
import { Poppins } from "next/font/google";

import { Providers } from "@/redux/provider";

import "@/styles/index.scss";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata = {
  title: "Pufi - Home",
  description: "Pufi - Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Providers>
          <Header />
          <MenuDrawer />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
