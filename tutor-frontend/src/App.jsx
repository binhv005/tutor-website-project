import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import TuitionPage from "./pages/TuitionPage";
import ScrollToTop from "./components/ScrollToTop";
import ParentPage from "./pages/ParentPage";
import TutorPage from "./pages/TutorPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="tuitions" element={<TuitionPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="parents" element={<ParentPage />} />
          <Route path="tutors" element={<TutorPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
