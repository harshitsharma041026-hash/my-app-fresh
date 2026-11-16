
import { useState } from "react";
import "./MultiStepForm.css";

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const progress = (currentStep / 4) * 100;

  return (
    <div className="multi-form-container">

      <h2>Registration Form</h2>
      <p>Complete all 4 steps to finish registration.</p>

      {/* Progress Bar */}
      <div className="progress-info">
        <span>Progress</span>
        <span>{progress}% Completed</span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Step Information */}
      {currentStep < 4 ? (
        <>
          <h3>Step {currentStep + 1} of 4</h3>

          <form onSubmit={handleNext}>

            {currentStep === 0 && (
              <div className="form-step">
                <h3>Personal Information</h3>
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {currentStep === 1 && (
              <div className="form-step">
                <h3>Contact Information</h3>
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {currentStep === 2 && (
              <div className="form-step">
                <h3>Phone Information</h3>
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {currentStep === 3 && (
              <div className="form-step">
                <h3>Address Information</h3>
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="form-buttons">

              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              )}

              <button type="submit">
                {currentStep === 3 ? "Finish" : "Next"}
              </button>

            </div>

          </form>
        </>
      ) : (
        <div className="success-message">
          <h2>Registration Completed! 🎉</h2>
          <p>All 4 forms have been completed successfully.</p>
          <h3>100% Completed</h3>

          <button onClick={() => {
            setCurrentStep(0);
            setFormData({
              name: "",
              email: "",
              phone: "",
              city: ""
            });
          }}>
            Start Again
          </button>
        </div>
      )}

    </div>
  );
}

export default MultiStepForm;
