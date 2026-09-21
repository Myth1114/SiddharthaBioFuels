import { Route, Routes } from "react-router-dom";

import AppShell from "./components/layout/AppShell";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";
import Industries from "./pages/Industries/Industries";
import Process from "./pages/Process/Process";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import RequestQuote from "./pages/RequestQuote/RequestQuote";
import Sustainability from "./pages/Sustainability/Sustainability";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/manufacturing-process" element={<Process />} />
          <Route path="sustainability" element={<Sustainability />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="request-a-quote" element={<RequestQuote />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
