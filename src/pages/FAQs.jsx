import React, { useState } from "react";
import '../components/FAQs.css';

const FAQs = () => {
  const faqs = [
    {
      question: "What is Campus Connect?",
      answer:
        "Campus Connect is an all-in-one platform that allows students to access campus services like canteen orders, campus store purchases, and renting or buying materials.",
    },
    {
      question: "How do I place a canteen order?",
      answer:
        "Log in to your account, navigate to the 'Canteen Orders' section, select your food items from the menu, and proceed to checkout for payment.",
    },
    {
      question: "Can I purchase items from the campus store online?",
      answer:
        "Yes, you can browse and purchase items from the campus store by visiting the 'Campus Store' section, adding items to your cart, and completing the checkout process.",
    },
    {
      question: "What materials can I rent or buy?",
      answer:
        "You can rent or buy academic materials, lab equipment, books, uniforms, and other study-related items from the 'Rent/Buy Materials' section.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, all payment transactions are processed through secure payment gateways, ensuring your financial information is safe.",
    },
    {
      question: "Can I track my orders?",
      answer:
        "Yes, you can track your canteen orders and purchases through the 'My Orders' section in your account.",
    },
    {
      question: "How can I contact support for issues?",
      answer:
        "You can reach out to our support team through the 'Contact Us' page or email us directly at support@campusconnect.com.",
    },
    {
      question: "Is Campus Connect available for all devices?",
      answer:
        "Yes, Campus Connect is designed to be responsive and works seamlessly on desktops, tablets, and mobile devices.",
    },
    {
      question: "Do I need to create an account to use Campus Connect?",
      answer:
        "Yes, you need to create an account to access the features of Campus Connect, such as placing orders and managing purchases.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3 
              className="faq-question" 
              onClick={() => toggleAnswer(index)}
            >
              {openIndex === index ? <span className="toggle-symbol">-</span> : <span className="toggle-symbol">+</span>}
              {faq.question}
            </h3>
            {openIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;