import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { SendMoney } from "./pages/SendMoney";
import { Dashboard } from "./pages/Dashboard";
import { ProtectedRoute } from "./pages/ProtectedRoute"; // Adjust the import path as necessary

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/send" element={<SendMoney />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
