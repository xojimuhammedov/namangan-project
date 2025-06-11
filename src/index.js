import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { Suspense } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<>Loading</>}>
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
