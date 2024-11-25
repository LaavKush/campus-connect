import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const Signup = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false); // State to track if OTP is sent
  const [isOtpVerified, setIsOtpVerified] = useState(false); // State to track OTP verification
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSendOtp = async (e) => {
    e.preventDefault();
    // Add your logic to send OTP to the email address
    // Example: await sendOtpToEmail(email);
    console.log("Sending OTP to:", email);
    setIsOtpSent(true); // Set OTP sent state to true
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    // Add your logic to verify the OTP
    // Example: const isValid = await verifyOtp(email, otp);
    console.log("Verifying OTP:", otp);
    // Assuming OTP verification is successful
    setIsOtpVerified(true); // Set OTP verified state to true
    // If verification is successful, redirect to login
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl mb-4">Sign Up</h2>
      {!isOtpSent ? (
        <form onSubmit={handleSendOtp}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border p-2 w-full"
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white p-2">
            Send OTP
          </button>
        </form>
      ) : !isOtpVerified ? (
        <form onSubmit={handleVerifyOtp}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="otp">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="border p-2 w-full"
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white p-2">
            Verify OTP
          </button>
        </form>
      ) : (
        <div>
          <h3 className="text-lg">OTP Verified! You can now log in.</h3>
        </div>
      )}
    </div>
  );
};

export default Signup;