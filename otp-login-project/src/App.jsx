
import { useState } from "react";
import Login from "./components/Login";
import OtpVerification from "./components/OtpVerification.jsx";

function App() {
  const [showOTP, setShowOTP] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState("");

  const handleLogin = () => {
    const randomOTP = Math.floor(
      100000 + Math.random() * 900000
    );

    setGeneratedOTP(String(randomOTP));
    setShowOTP(true);
  };

  const handleResend = () => {
    const randomOTP = Math.floor(
      100000 + Math.random() * 900000
    );

    setGeneratedOTP(String(randomOTP));
  };

  return (
    <>
      {showOTP ? (
        <OTPVerification
          generatedOTP={generatedOTP}
          onResend={handleResend}
        />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
