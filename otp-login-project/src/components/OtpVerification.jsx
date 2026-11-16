
import { useEffect, useRef, useState } from "react";
import "./OTPVerification.css";

function OTPVerification({ generatedOTP, onResend }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [seconds, setSeconds] = useState(15 * 60);
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(false);

  const inputsRef = useRef([]);

  const expired = seconds === 0;

  // 15-minute countdown
  useEffect(() => {
    if (verified || expired) return;

    const timer = setInterval(() => {
      setSeconds((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [verified, expired]);

  // Convert seconds into minutes and seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const timerDisplay =
    `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

  // Handle OTP input
  const handleChange = (value, index) => {
    const digit = value.replace(/\D/g, "");

    if (!digit || expired) {
      if (!digit) {
        const updated = [...otp];
        updated[index] = "";
        setOtp(updated);
      }
      return;
    }

    const updated = [...otp];

    if (digit.length > 1) {
      const pasted = digit.slice(0, 6).split("");

      pasted.forEach((item, i) => {
        if (index + i < 6) {
          updated[index + i] = item;
        }
      });

      setOtp(updated);
      inputsRef.current[Math.min(index + pasted.length, 5)]?.focus();
      return;
    }

    updated[index] = digit[0];
    setOtp(updated);

    if (index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  // Verify OTP
  const handleSubmit = (e) => {
    e.preventDefault();

    if (expired) {
      setMessage("OTP expired! Please request a new OTP.");
      return;
    }

    const enteredOTP = otp.join("");

    if (enteredOTP.length !== 6) {
      setMessage("Please enter all 6 digits.");
      return;
    }

    if (enteredOTP !== generatedOTP) {
      setMessage("Incorrect OTP. Please try again.");
      return;
    }

    setVerified(true);
    setMessage("OTP verified successfully!");
  };

  // Resend OTP
  const handleResend = () => {
    onResend();
    setOtp(["", "", "", "", "", ""]);
    setSeconds(15 * 60);
    setMessage("New OTP generated successfully!");
    setVerified(false);
    inputsRef.current[0]?.focus();
  };

  return (
    <div className="otp-page">
      <div className="otp-card">

        {verified ? (
          <>
            <div className="otp-success-icon">✓</div>
            <h1>Login Successful!</h1>
            <p>Your OTP has been verified successfully.</p>
          </>
        ) : (
          <>
            <h1>OTP Verification</h1>

            <p className="otp-description">
              Enter the 6-digit verification code.
            </p>

            <div className="otp-demo">
              Demo OTP: <strong>{generatedOTP}</strong>
            </div>

            <div className="otp-timer">
              {expired ? "OTP Expired" : `Time remaining: ${timerDisplay}`}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="otp-inputs">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputsRef.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={digit}
                    disabled={expired}
                    onChange={(e) =>
                      handleChange(e.target.value, index)
                    }
                  />
                ))}
              </div>

              <button
                type="submit"
                className="otp-button"
                disabled={expired}
              >
                Verify OTP
              </button>
            </form>

            {message && <p className="otp-message">{message}</p>}

            {expired && (
              <button
                className="otp-resend-button"
                onClick={handleResend}
              >
                Resend OTP
              </button>
            )}
          </>
        )}

      </div>
    </div>
  );
}

export default OTPVerification;
