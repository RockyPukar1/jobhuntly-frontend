import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DashboardCompanySettingsTeam = React.lazy(
  () => import("pages/DashboardCompanySettingsTeam"),
);
const DashboardCompanySettingsSocialLinks = React.lazy(
  () => import("pages/DashboardCompanySettingsSocialLinks"),
);
const DashboardCompanySettingsOverview = React.lazy(
  () => import("pages/DashboardCompanySettingsOverview"),
);
const DashboardCompanyPostAJobJobDescription1 = React.lazy(
  () => import("pages/DashboardCompanyPostAJobJobDescription1"),
);
const DashboardCompanyPostAJobJobDescription = React.lazy(
  () => import("pages/DashboardCompanyPostAJobJobDescription"),
);
const DashboardCompanyPostAJob = React.lazy(
  () => import("pages/DashboardCompanyPostAJob"),
);
const DashboardCompanyInterviewSchedule = React.lazy(
  () => import("pages/DashboardCompanyInterviewSchedule"),
);
const DashboardCompanyAnalytics = React.lazy(
  () => import("pages/DashboardCompanyAnalytics"),
);
const DashboardCompanyApplicantsJobDetails = React.lazy(
  () => import("pages/DashboardCompanyApplicantsJobDetails"),
);
const DashboardCompanyApplicants = React.lazy(
  () => import("pages/DashboardCompanyApplicants"),
);
const DashboardCompanyApplicantsTableView = React.lazy(
  () => import("pages/DashboardCompanyApplicantsTableView"),
);
const DashboardCompanyJobListing = React.lazy(
  () => import("pages/DashboardCompanyJobListing"),
);
const DashboardCompanyApplicantProfile3 = React.lazy(
  () => import("pages/DashboardCompanyApplicantProfile3"),
);
const DashboardCompanyApplicantProfile2 = React.lazy(
  () => import("pages/DashboardCompanyApplicantProfile2"),
);
const DashboardCompanyApplicantProfile1 = React.lazy(
  () => import("pages/DashboardCompanyApplicantProfile1"),
);
const DashboardCompanyApplicantProfile = React.lazy(
  () => import("pages/DashboardCompanyApplicantProfile"),
);
const DashboardCompanyAllApplicants = React.lazy(
  () => import("pages/DashboardCompanyAllApplicants"),
);
const DashboardCompanyCompanyProfile = React.lazy(
  () => import("pages/DashboardCompanyCompanyProfile"),
);
const DashboardCompanyMessages = React.lazy(
  () => import("pages/DashboardCompanyMessages"),
);
const DashboardCompany = React.lazy(() => import("pages/DashboardCompany"));
const DashboardNotifications = React.lazy(
  () => import("pages/DashboardNotifications"),
);
const DashboardHelp = React.lazy(() => import("pages/DashboardHelp"));
const DashboardSettingsNotifications = React.lazy(
  () => import("pages/DashboardSettingsNotifications"),
);
const DashboardSettingsLoginDetails = React.lazy(
  () => import("pages/DashboardSettingsLoginDetails"),
);
const DashboardSettingsAccountSettings = React.lazy(
  () => import("pages/DashboardSettingsAccountSettings"),
);
const DashboardProfile = React.lazy(() => import("pages/DashboardProfile"));
const DashboardBrowseCompanies = React.lazy(
  () => import("pages/DashboardBrowseCompanies"),
);
const DashboardJobDescriptions = React.lazy(
  () => import("pages/DashboardJobDescriptions"),
);
const DashboardFindJobsGrid = React.lazy(
  () => import("pages/DashboardFindJobsGrid"),
);
const DashboardFindJobsList = React.lazy(
  () => import("pages/DashboardFindJobsList"),
);
const DashboardApplicationsHistory = React.lazy(
  () => import("pages/DashboardApplicationsHistory"),
);
const DashboardMessage = React.lazy(() => import("pages/DashboardMessage"));
const DashboardApplicant = React.lazy(() => import("pages/DashboardApplicant"));
const Login = React.lazy(() => import("pages/Login"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const CompanyProfile = React.lazy(() => import("pages/CompanyProfile"));
const JobDescriptions = React.lazy(() => import("pages/JobDescriptions"));
const SearchCompaniesResults = React.lazy(
  () => import("pages/SearchCompaniesResults"),
);
const BrowseCompanies = React.lazy(() => import("pages/BrowseCompanies"));
const FindJobs = React.lazy(() => import("pages/FindJobs"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/findjobs" element={<FindJobs />} />
          <Route path="/browsecompanies" element={<BrowseCompanies />} />
          <Route
            path="/searchcompaniesresults"
            element={<SearchCompaniesResults />}
          />
          <Route path="/jobdescriptions" element={<JobDescriptions />} />
          <Route path="/companyprofile" element={<CompanyProfile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboardapplicant" element={<DashboardApplicant />} />
          <Route path="/dashboardmessage" element={<DashboardMessage />} />
          <Route
            path="/dashboardapplicationshistory"
            element={<DashboardApplicationsHistory />}
          />
          <Route
            path="/dashboardfindjobslist"
            element={<DashboardFindJobsList />}
          />
          <Route
            path="/dashboardfindjobsgrid"
            element={<DashboardFindJobsGrid />}
          />
          <Route
            path="/dashboardjobdescriptions"
            element={<DashboardJobDescriptions />}
          />
          <Route
            path="/dashboardbrowsecompanies"
            element={<DashboardBrowseCompanies />}
          />
          <Route path="/dashboardprofile" element={<DashboardProfile />} />
          <Route
            path="/dashboardsettingsaccountsettings"
            element={<DashboardSettingsAccountSettings />}
          />
          <Route
            path="/dashboardsettingslogindetails"
            element={<DashboardSettingsLoginDetails />}
          />
          <Route
            path="/dashboardsettingsnotifications"
            element={<DashboardSettingsNotifications />}
          />
          <Route path="/dashboardhelp" element={<DashboardHelp />} />
          <Route
            path="/dashboardnotifications"
            element={<DashboardNotifications />}
          />
          <Route path="/dashboardcompany" element={<DashboardCompany />} />
          <Route
            path="/dashboardcompanymessages"
            element={<DashboardCompanyMessages />}
          />
          <Route
            path="/dashboardcompanycompanyprofile"
            element={<DashboardCompanyCompanyProfile />}
          />
          <Route
            path="/dashboardcompanyallapplicants"
            element={<DashboardCompanyAllApplicants />}
          />
          <Route
            path="/dashboardcompanyapplicantprofile"
            element={<DashboardCompanyApplicantProfile />}
          />
          <Route
            path="/dashboardcompanyapplicantprofile1"
            element={<DashboardCompanyApplicantProfile1 />}
          />
          <Route
            path="/dashboardcompanyapplicantprofile2"
            element={<DashboardCompanyApplicantProfile2 />}
          />
          <Route
            path="/dashboardcompanyapplicantprofile3"
            element={<DashboardCompanyApplicantProfile3 />}
          />
          <Route
            path="/dashboardcompanyjoblisting"
            element={<DashboardCompanyJobListing />}
          />
          <Route
            path="/dashboardcompanyapplicantstableview"
            element={<DashboardCompanyApplicantsTableView />}
          />
          <Route
            path="/dashboardcompanyapplicants"
            element={<DashboardCompanyApplicants />}
          />
          <Route
            path="/dashboardcompanyapplicantsjobdetails"
            element={<DashboardCompanyApplicantsJobDetails />}
          />
          <Route
            path="/dashboardcompanyanalytics"
            element={<DashboardCompanyAnalytics />}
          />
          <Route
            path="/dashboardcompanyinterviewschedule"
            element={<DashboardCompanyInterviewSchedule />}
          />
          <Route
            path="/dashboardcompanypostajob"
            element={<DashboardCompanyPostAJob />}
          />
          <Route
            path="/dashboardcompanypostajobjobdescription"
            element={<DashboardCompanyPostAJobJobDescription />}
          />
          <Route
            path="/dashboardcompanypostajobjobdescription1"
            element={<DashboardCompanyPostAJobJobDescription1 />}
          />
          <Route
            path="/dashboardcompanysettingsoverview"
            element={<DashboardCompanySettingsOverview />}
          />
          <Route
            path="/dashboardcompanysettingssociallinks"
            element={<DashboardCompanySettingsSocialLinks />}
          />
          <Route
            path="/dashboardcompanysettingsteam"
            element={<DashboardCompanySettingsTeam />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
