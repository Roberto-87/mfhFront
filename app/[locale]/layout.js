import "../../styles/globals.css";
import { useLocale } from "next-intl";
import Navigation from "./components/Navigation/Navigation";
import SessionProviders from "../sessionProvider";
import {comfortaa} from './fonts/fonts'
import Footer from "./components/Footer/Footer";


export const metadata = {
  title: "Maria Ferrari Hardoy",
  description: "Generated by Next.js",
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();

/*   if (params.locale !== locale) {
    notFound();
  } */

  return (
    <html lang='en' className={comfortaa.className} >
      <head>
        <title>Maria Ferrari Hardoy</title>
      </head>

      <body>
        <header>
          <Navigation />
        </header>
        <SessionProviders>{children}</SessionProviders>
      </body>
    </html>
  );
}
