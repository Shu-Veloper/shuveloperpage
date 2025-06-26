import "./index.css";
import PortfolioSite from "./components/PortfolioSite";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import TimeboxPrivacyPolicy from "./components/TimeboxPrivacyPolicy";
import TimeboxTermsOfService from "./components/TimeboxTermsOfService";
import TimeboxDetail from "./components/TimeboxDetail";
import { timeboxData } from "./data/timeboxData";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  // const timebox = timeboxData;
  return (
    <>
      <BrowserRouter basename="/shuveloperpage">
        <Routes>
          <Route path="/" element={<PortfolioSite />} />
          {/* <Route path={`/${timebox.slug}/detail`} element={<TimeboxDetail />} /> */}
          <Route
            path={`/${timeboxData.slug}/detail`}
            element={<ProjectDetail projectData={timeboxData} />}
          />
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
      </BrowserRouter>
    </>
  );
}

export default App;
