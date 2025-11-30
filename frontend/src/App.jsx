import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import DrugLibrary from "./pages/DrugLibrary/DrugLibrary";
import Home from "./pages/Home/Home";
import Resources from "./pages/Resources/Resources";

function App() {
  // Vite exposes the configured `base` as import.meta.env.BASE_URL
  // Use it as the BrowserRouter basename so routes work when site is served
  // from a subpath (like GitHub Pages) and also work locally.
  const basename = import.meta.env.BASE_URL || "/";

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/drug-library" element={<DrugLibrary />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
