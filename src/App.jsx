import "./index.css";
import PortfolioSite from "./components/PortfolioSite";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { timeboxData } from "./data/timeboxData";
import ProjectDetail from "./components/ProjectDetail";
import { timeboxPrivacyPolicyData } from "./data/timeboxPrivacyPolicyData";
import { timeboxTermsOfServiceData } from "./data/timeboxTermsOfServiceData";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

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
            path="/timebox/privacypolicy"
            element={<PrivacyPolicy data={timeboxPrivacyPolicyData} />}
          />
          <Route
            path="/timebox/termsofservice"
            element={<TermsOfService data={timeboxTermsOfServiceData} />}
          />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
