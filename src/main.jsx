import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SoundManagerProvider } from "./utils/soundManager.jsx";
import { BrowserRouter } from "react-router-dom";
import { LevelProvider } from "./utils/levelContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SoundManagerProvider>
        <LevelProvider>
          <App />
        </LevelProvider>
      </SoundManagerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
