import "@fontsource/poppins";
import "@fontsource-variable/cairo";
import NavBar from "./components/NavBar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import TrackingShipmentPage from "./pages/TrackingShipmentPage";
import ErrorPage from "./pages/ErrorPage";
import { useEffect, useState } from "react";
import i18next from "i18next";

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  useEffect(() => {
    const languageChange = () => {
      setCurrentLanguage(i18next.language);
    };

    i18next.on("languageChanged", languageChange);

    return () => {
      i18next.off("languageChanged", languageChange);
    };
  }, []);

  return (
    <div dir={currentLanguage == "ar" ? "rtl" : "ltr"}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tracker/:id" element={<TrackingShipmentPage />} />
          <Route path="*" element={<ErrorPage />  } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
