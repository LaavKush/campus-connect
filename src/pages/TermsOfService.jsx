import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
      <p className="text-gray-700 mb-4">
        By using our services, you agree to comply with our terms and conditions. These terms govern your access to and use of our services.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">User  Responsibilities</h2>
      <p className="text-gray-700 mb-4">
        You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Modifications to Services</h2>
      <p className="text-gray-700 mb-4">
        We reserve the right to modify or terminate our services at any time without prior notice. We may also impose limits on certain features or restrict your access to parts or all of the services without notice or liability.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Termination</h2>
      <p className="text-gray-700 mb-4">
        We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimer of Warranties</h2>
      <p className="text-gray-700 mb-4">
        Our services are provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the operation of our services or the information, content, materials, or products included in our services.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
      <p className="text-gray-700 mb-4">
        In no event shall we be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Governing Law</h2>
      <p className="text-gray-700 mb-4">
        These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms shall be resolved in the courts of [Your Jurisdiction].
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to These Terms</h2>
      <p className="text-gray-700 mb-4">
        We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page. You are advised to review these terms periodically for any changes.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have any questions about these terms, please contact us at <a href="mailto:support@example.com" className="text-blue-500 hover:underline">support@example.com</a>.
      </p>
    </div>
  );
};

export default TermsOfService;