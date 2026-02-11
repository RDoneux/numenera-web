import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Header from "./fragments/header/header";
import Dashboard from "./pages/Dashboard";
import Footer from "./fragments/footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <main className="flex-1">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
