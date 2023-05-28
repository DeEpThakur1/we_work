import { Footer } from "./Components/Footer.jsx";
import { Header } from "./Components/Header.jsx";
import "./Styles/global.scss";
export const metadata = {
  title: "we work",
  description: "we work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
