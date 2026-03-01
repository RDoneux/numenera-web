import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Footer from "./fragments/footer/Footer";
import Header from "./fragments/header/Header";

function App() {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      {!isLogin && <Header />}
      <main className="flex flex-1">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
