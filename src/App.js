import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProgressBar from "./components/ProgressBar";
import MultiStepForm from "./components/MultiStepForm";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import OTPVerification from "./pages/OTPVerification";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />

        <Route path="dashboard" element={<Dashboard />}>
          <Route path="projects" element={<Projects />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/login" element={<Login />} />
      

<Route
  path="/verify-otp"
  element={<OTPVerification />}
/>
<Route path="/progress" element={<ProgressBar />} />

<Route path="/multi-step-form" element={<MultiStepForm />} />
    </Routes>
  );
}

export default App;
