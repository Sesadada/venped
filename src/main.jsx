import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import global_es from "../src/translations/es/global.json";
import global_en from "../src/translations/en/global.json";

import i18n from "i18next";
import {
  useTranslation,
  initReactI18next,
  I18nextProvider,
} from "react-i18next";

i18n.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Router>
        <App />
      </Router>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
