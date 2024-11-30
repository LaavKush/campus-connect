import React from 'react';
import './PrivacyPolicy.css'; // Import the CSS file

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="policy-title">Privacy Policy</h1>
      <p className="policy-intro">
        Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information when you use our services.
      </p>
      
      <div className="policy-sections">
        <div className="policy-section">
          <h2 className="section-title">Information We Collect</h2>
          <p className="section-content">
            We may collect personal information such as your name, email address, and contact details when you register for an account or use our services.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="section-title">How We Use Your Information</h2>
          <p className="section-content">
            We use your information to provide you with a better experience and to communicate with you. This may include sending you updates, newsletters, or other relevant information.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="section-title">Security of Your Information</h2>
          <p className="section-content">
            We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We implement technical, administrative, and physical safeguards to protect your information.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="section-title">Your Rights</h2>
          <p className="section-content">
            You have the right to access, correct, or delete your personal information. If you have any questions or concerns about your privacy, please contact us.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="section-title">Changes to This Policy</h2>
          <p className="section-content">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this privacy policy periodically for any changes.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-content">
            If you have any questions about this privacy policy, please contact us at{' '}
            <a href="mailto:support@example.com" className="contact-link">
              support@example.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;