import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
              <div className='wrapper'>
                <Header />
                <App />
                <Footer />
              </div>
    </BrowserRouter>
  </React.StrictMode>,
);
