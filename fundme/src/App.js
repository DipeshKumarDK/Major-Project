import "./App.css";
import "./pages/Home/HomePage";
import HomePage from "./pages/Home/HomePage";
import AllPage from "./pages/AllCampaigns/AllPage";
import CampDetails from "./pages/CampaignDetails/CampDetails";
import CreateCampaign from "./pages/CreateCamp/CreateCampaign";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import FreeAbout from "./pages/FreeAbout/FreeAbout";
import FreeAllFreelancers from "./pages/FreeAllFreelancers/FreeAllFreelancers";
import FreeAllJobs from "./pages/FreeAllJobs/FreeAllJobs";
import FreelancePage from "./pages/FreelancePage/FreelancePage";
import FreeHomePage from "./pages/FreeHome/FreeHomePage";
import FreeCreateResume from "./pages/FreeCreateResume/FreeCreateResume"
import FreeJobPage from "./pages/FreeJobPage/FreeJobPage";
import FreeCreateJob from './pages/FreeCreateJob/FreeCreateJob'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import FreeUpdateResume from "./pages/FreeUpdateResume/FreeUpdateResume";
import FreeCompanyProfile from "./pages/FreeCompanyProfile/FreeCompanyProfile";
import { motion , AnimatePresence } from "framer-motion"
import FreeMyJobs from "./pages/FreeMyJobs/FreeMyJobs";

function App() {
  // const location = useLocation()
  return (
    <div className="bg-[#1a1818]">
      <BrowserRouter>
        {/* <Routes location={location} key={location.key}> */}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/all" element={<AllPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/freehome" element={<FreeHomePage />} />
          <Route path="/allfreelancers" element={<FreeAllFreelancers/>} />
          <Route path="/about" element={<FreeAbout/>} />
          <Route path="/freelancer" element={<FreelancePage/>} />
          <Route path="/createresume" element={<FreeCreateResume/> } />
          <Route path="/updateresume" element={<FreeUpdateResume/> } />
          <Route path="/job" element={<FreeJobPage/>} />
          <Route path="/createjob" element={<FreeCreateJob/>} />
          <Route path="/alljobs" element={<FreeAllJobs/>} />
          <Route path="/company" element={<FreeCompanyProfile />} />
          <Route path="/myjobs" element={<FreeMyJobs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
