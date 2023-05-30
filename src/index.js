import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ModalContextProvider } from "./context/modalContext";
import React from "react";
import ReactDOM from "react-dom/client";
import AppContextProvider from "./context/appContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <ModalContextProvider>
              <div className='wrapper'>
                <Header />
                <App />
                <Footer />
              </div>
        </ModalContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
