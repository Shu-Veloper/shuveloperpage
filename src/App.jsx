import "./index.css";
import PortfolioSite from "./components/PortfolioSite";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { timeboxData } from "./data/timeboxData";
import { campusLinkData } from "./data/mobile/campuslink/campusLinkData";
import ProjectDetail from "./components/ProjectDetail";
import { timeboxPrivacyPolicyData } from "./data/timeboxPrivacyPolicyData";
import { timeboxTermsOfServiceData } from "./data/timeboxTermsOfServiceData";
import { campusLinkPrivacyPolicyData } from "./data/mobile/campuslink/campusLinkPrivacyPolicyData";
import { campusLinkTermsOfServiceData } from "./data/mobile/campuslink/campusLinkTermsOfServiceData";
import { campusLinkSupportData } from "./data/mobile/campuslink/campusLinkSupportData";
import { campusLinkSafetyData } from "./data/mobile/campuslink/campusLinkSafetyData";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Support from "./components/Support";
import Safety from "./components/Safety";

function App() {
  const basename =
    import.meta.env.MODE === "production" ? "/shuveloperpage" : "";
  console.log("@@@ basename:", basename);
  return (
    <>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<PortfolioSite />} />
          <Route
            path={`/${timeboxData.slug}/detail`}
            element={<ProjectDetail projectData={timeboxData} />}
          />
          <Route
            path={`/${campusLinkData.link}/detail`}
            element={<ProjectDetail projectData={campusLinkData} />}
          />
          <Route
            path="/timebox/privacypolicy"
            element={<PrivacyPolicy data={timeboxPrivacyPolicyData} />}
          />
          <Route
            path="/timebox/termsofservice"
            element={<TermsOfService data={timeboxTermsOfServiceData} />}
          />
          <Route
            path="/campuslink/privacypolicy"
            element={<PrivacyPolicy data={campusLinkPrivacyPolicyData} />}
          />
          <Route
            path="/campuslink/termsofservice"
            element={<TermsOfService data={campusLinkTermsOfServiceData} />}
          />
          <Route
            path="/campuslink/support"
            element={<Support data={campusLinkSupportData} />}
          />
          <Route
            path="/campuslink/safety"
            element={<Safety data={campusLinkSafetyData} />}
          />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
