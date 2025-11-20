import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DrugLibrary from "./pages/DrugLibrary";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/drug-library" element={<DrugLibrary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
