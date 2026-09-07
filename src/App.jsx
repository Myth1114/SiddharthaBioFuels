import { Route, Routes } from "react-router-dom";

import AppShell from "./components/layout/AppShell";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Home />} />

        <Route path="biomass-briquettes" element={<Product />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
