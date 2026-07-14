import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import TuitionPage from "./pages/TuitionPage";
import ScrollToTop from "./components/ScrollToTop";
import ParentPage from "./pages/ParentPage";
import TutorPage from "./pages/TutorPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TempTempAdminRoute from "./route/TempTempAdminRoute";
import Forbidden from "./pages/Forbidden";
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
        <Route
          path="/dashboard"
          element={
            <TempAdminRoute>
              <DashboardPage />
            </TempAdminRoute>
          }
        />
        <Route path="/403" element={<Forbidden />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
