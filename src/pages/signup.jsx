import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    console.log("Sending OTP to:", email);
    setIsOtpSent(true); // Set OTP sent state to true
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    console.log("Verifying OTP:", otp);
    setIsOtpVerified(true); // Set OTP verified state to true
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Sign Up</h2>
      {!isOtpSent ? (
        <form onSubmit={handleSendOtp} className="space-y-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Send OTP
          </button>
        </form>
      ) : !isOtpVerified ? (
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="otp">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the OTP sent to your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Verify OTP
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-lg font-semibold text-green-600">OTP Verified! You can now log in.</h3>
        </div>
      )}
    </div>
  );
};

export default Signup;
