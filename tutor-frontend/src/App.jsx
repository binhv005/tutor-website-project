import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import TuitionPage from "./pages/TuitionPage";
function App() {
  return (
    <BrowserRouter>
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
