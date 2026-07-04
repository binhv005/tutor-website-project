import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import TuitionPage from "./pages/TuitionPage";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="tuitions" element={<TuitionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
