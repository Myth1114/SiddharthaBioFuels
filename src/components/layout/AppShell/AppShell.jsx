import { Outlet } from "react-router-dom";

import Header from "../Header/Header";

function AppShell() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
    </>
  );
}

export default AppShell;
