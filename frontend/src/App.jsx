import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DrugLibrary from "./pages/DrugLibrary";
import Home from "./pages/Home";
import Resources from "./pages/Resources";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/drug-library" element={<DrugLibrary />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
