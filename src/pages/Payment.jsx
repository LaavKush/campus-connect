import React, { useState } from 'react';
import qr from '../assets/qr.jpg'; // Importing the QR code image
import './payment.css';  // Import CSS without curly braces or default keyword

const PaymentGateway = () => {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false); // State to control QR code visibility

  const handleScan = () => {
    setShowQRCode(true); // Show the QR code when the "Scan Now" button is clicked
    
    // Simulate the payment success after a delay (e.g., 3 seconds)
    setTimeout(() => {
      setIsPaymentSuccessful(true); // Trigger payment success
    }, 8000); // Simulate delay (you can adjust this based on actual scan behavior)
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Make a Payment</h2>

      {/* Show Success Message when payment is successful */}
      {isPaymentSuccessful && (
        <div className="payment-success">
          <h3>Payment Successful!</h3>
          <p>Your payment has been processed successfully.</p>
        </div>
      )}

      <div className="qr-code-container">
        <p>Click the button to start the payment process:</p>
        
        {/* Show QR code only after "Scan Now" is clicked */}
        {showQRCode && (
          <>
            <img src={qr} alt="Payment QR Code" className="qr-image" />
          </>
        )}
        
        <button onClick={handleScan} className="scan-button">
          Scan Now
        </button>
      </div>
    </div>
  );
};

export default PaymentGateway;
