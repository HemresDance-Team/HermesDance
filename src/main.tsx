import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.tsx";
import Teacher from "./Teacher.tsx";

const HermesNavigation = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Teacher" element={<Teacher />} />
    </Routes>
  </Router>
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HermesNavigation />
  </StrictMode>,
);
