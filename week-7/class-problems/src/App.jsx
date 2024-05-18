import "./App.css";
import React, { Suspense } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <p>
                  <i>Loading...</i>
                </p>
              }
            >
              <Landing />
            </Suspense>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
