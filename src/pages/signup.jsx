import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for buttons
  const navigate = useNavigate();

  // Function to handle OTP sending
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://54.169.129.117:8080/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log("OTP sent successfully!");
        setIsOtpSent(true);
      } else {
        const errorText = await response.text();
        console.error("Error sending OTP:", errorText);
        alert(`Failed to send OTP: ${errorText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the OTP. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle OTP verification
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://54.169.129.117:8080/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      if (response.ok) {
        console.log("OTP verified successfully!");
        setIsOtpVerified(true);
        navigate("/login");
      } else {
        const errorText = await response.text();
        console.error("Error verifying OTP:", errorText);
        alert(`Failed to verify OTP: ${errorText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while verifying the OTP. Please try again.");
    } finally {
      setLoading(false);
    }
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
            className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
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
            className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Verifying OTP..." : "Verify OTP"}
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
