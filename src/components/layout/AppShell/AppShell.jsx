import { Outlet } from "react-router-dom";
import StructuredData from "../../seo/StructuredData";
import Footer from "../Footer";

import Header from "../Header/Header";

function AppShell() {
  return (
    <>
      <StructuredData />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppShell;
