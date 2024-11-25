import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information when you use our services.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We may collect personal information such as your name, email address, and contact details when you register for an account or use our services.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">
        We use your information to provide you with a better experience and to communicate with you. This may include sending you updates, newsletters, or other relevant information.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security of Your Information</h2>
      <p className="text-gray-700 mb-4">
        We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We implement technical, administrative, and physical safeguards to protect your information.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
      <p className="text-gray-700 mb-4">
        You have the right to access, correct, or delete your personal information. If you have any questions or concerns about your privacy, please contact us.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Policy</h2>
      <p className="text-gray-700 mb-4">
        We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this privacy policy periodically for any changes.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have any questions about this privacy policy, please contact us at <a href="mailto:support@example.com" className="text-blue-500 hover:underline">support@example.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;