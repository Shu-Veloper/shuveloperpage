import "./index.css";
import PortfolioSite from "./components/PortfolioSite";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import TimeboxPrivacyPolicy from "./components/TimeboxPrivacyPolicy";
import TimeboxTermsOfService from "./components/TimeboxTermsOfService";
import TimeboxDetail from "./components/TimeboxDetail";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<PortfolioSite />} />
          <Route path="/timebox/detail" element={<TimeboxDetail />} />
          <Route
            path="/timebox/privacypolicy"
            element={<TimeboxPrivacyPolicy />}
          />
          <Route
            path="/timebox/termsofservice"
            element={<TimeboxTermsOfService />}
          />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
