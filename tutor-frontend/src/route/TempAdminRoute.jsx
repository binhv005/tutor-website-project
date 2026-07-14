import { Navigate } from "react-router-dom";

export default function TempAdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (user.role !== "ADMIN") {
    return <Navigate to="/403" replace />;
  }

  return children;
}
