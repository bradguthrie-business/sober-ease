import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import DrugLibrary from "./pages/DrugLibrary/DrugLibrary";
import Home from "./pages/Home/Home";
import Resources from "./pages/Resources/Resources";
import GlobalNav from "./components/GlobalNav/GlobalNav";
import { AuthProvider } from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";

function App() {
  // Vite exposes the configured `base` as import.meta.env.BASE_URL
  // Use it as the BrowserRouter basename so routes work when site is served
  // from a subpath (like GitHub Pages) and also work locally.
  const basename = import.meta.env.BASE_URL || "/";

  return (
    <BrowserRouter basename={basename}>
      <AuthProvider>
        <GlobalNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/drug-library"
            element={
              <ProtectedRoute>
                <DrugLibrary />
              </ProtectedRoute>
            }
          />

          <Route
            path="/resources"
            element={
              <ProtectedRoute>
                <Resources />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
