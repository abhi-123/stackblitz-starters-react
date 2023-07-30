import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Plarform from "./pages/plarform";
import PlatformHomePage from "./pages/platform-home-page";
import PersonalInfo from "./pages/personal-info";
import { useEffect } from "react";
import * as React from 'react';


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/platform-home-page":
        title = "";
        metaDescription = "";
        break;
      case "/personal-info":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Plarform />} />
      <Route path="/platform-home-page" element={<PlatformHomePage />} />
      <Route path="/personal-info" element={<PersonalInfo />} />
    </Routes>
  );
}
export default App;
