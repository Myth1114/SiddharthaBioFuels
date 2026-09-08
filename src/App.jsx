import { Navigate, Route, Routes } from "react-router-dom";

import AppShell from "./components/layout/AppShell";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";
import Industries from "./pages/Industries/Industries";
import Process from "./pages/Process/Process";

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/manufacturing-process" element={<Process />} />
        <Route
          path="biomass-briquettes"
          element={<Navigate to="/products" replace />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
