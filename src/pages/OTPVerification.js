
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./OTPVerification.css";

function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [seconds, setSeconds] = useState(30);
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(false);
  const inputsRef = useRef([]);

  const [generatedOTP, setGeneratedOTP] = useState("");

const generateOTP = () => {
  const randomOTP = Math.floor(
    100000 + Math.random() * 900000
  );

  setGeneratedOTP(String(randomOTP));
  setMessage("A new demo OTP has been generated.");
  setVerified(false);
};

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  const handleChange = (value, index) => {
    const digit = value.replace(/\D/g, "");
    setMessage("");

    if (!digit) {
      const updated = [...otp];
      updated[index] = "";
      setOtp(updated);
      return;
    }

    // Support pasting the complete OTP
    if (digit.length > 1) {
      const pastedDigits = digit.slice(0, 6).split("");
      const updated = [...otp];

      pastedDigits.forEach((item, i) => {
        if (index + i < 6) updated[index + i] = item;
      });

      setOtp(updated);
      inputsRef.current[Math.min(index + pastedDigits.length, 5)]?.focus();
      return;
    }

    const updated = [...otp];
    updated[index] = digit[0];
    setOtp(updated);

    if (index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

 const handleSubmit = (event) => {
  event.preventDefault();

  const code = otp.join("");

  if (!generatedOTP) {
    setMessage("Please generate an OTP first.");
    return;
  }

  if (code.length !== 6) {
    setMessage("Please enter all 6 digits.");
    return;
  }

  if (code !== generatedOTP) {
    setMessage("Incorrect OTP. Please try again.");
    setVerified(false);
    return;
  }

  setMessage("OTP verified successfully!");
  setVerified(true);
};
  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setSeconds(30);
    setMessage("A new OTP request has been started (demo).");
    setVerified(false);
    inputsRef.current[0]?.focus();

    // Connect your backend here to send a real OTP.
  };

 

  return (
    <main className="otp-page">
      <div className="otp-glow otp-glow-one" />
      <div className="otp-glow otp-glow-two" />

      <section className="otp-card">
        <Link to="/" className="otp-brand">
          <span className="otp-brand-icon">N</span>
          <span>EXORA<span className="otp-brand-dot">.</span></span>
        </Link>

        <div className="otp-icon">
          {verified ? "✓" : "✉"}
        </div>

        <span className="otp-eyebrow">
          {verified ? "VERIFICATION COMPLETE" : "SECURITY CHECK"}
        </span>

        <h1>
          {verified ? "You're verified!" : "Verify your email"}
        </h1>

        <p className="otp-description">
          {verified
            ? "Your demo verification is complete. You can now continue exploring Nexora."
            : "We've sent a 6-digit verification code to your email address."}
        </p>

        {!verified && (
          <form onSubmit={handleSubmit}>
            <label className="otp-label" htmlFor="otp-0">
              Enter verification code
            </label>

            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  ref={(element) => {
                    inputsRef.current[index] = element;
                  }}
                  type="text"
                  inputMode="numeric"
                  autoComplete={index === 0 ? "one-time-code" : "off"}
                  maxLength={6}
                  aria-label={`OTP digit ${index + 1}`}
                  value={digit}
                  onChange={(event) =>
                    handleChange(event.target.value, index)
                  }
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={digit ? "otp-filled" : ""}
                />
              ))}
            </div>

            <button
  type="button"
  className="otp-verify-btn"
  onClick={generateOTP}
>
  Generate Random OTP
</button>

{generatedOTP && (
  <p className="otp-message otp-success">
    Your demo OTP is: <strong>{generatedOTP}</strong>
  </p>
)}

            <button type="submit" className="otp-verify-btn">
              Verify & Continue <span>→</span>
            </button>
          </form>
        )}

        {message && (
          <p
            className={`otp-message ${verified ? "otp-success" : ""}`}
            role="status"
          >
            {message}
          </p>
        )}

        {!verified && (
          <div className="otp-resend">
            <span>Didn't receive the code?</span>

            {seconds > 0 ? (
              <p>
                Resend code in{" "}
                <strong>
                  00:{String(seconds).padStart(2, "0")}
                </strong>
              </p>
            ) : (
              <button type="button" onClick={handleResend}>
                Resend OTP
              </button>
            )}
          </div>
        )}

        {verified && (
          <button
            className="otp-verify-btn"
            onClick={() => (window.location.href = "/")}
          >
            Back to Home <span>→</span>
          </button>
        )}

        <div className="otp-divider" />

        <p className="otp-security">
          <span>♧</span> Secure verification · Your privacy matters
        </p>

        <Link to="/" className="otp-back-link">
          ← Back to Nexora
        </Link>
      </section>

      <p className="otp-footer">
        © {new Date().getFullYear()} Nexora Digital. All rights reserved.
      </p>
    </main>
  );
}

export default OTPVerification;
