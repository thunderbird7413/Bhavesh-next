import React, { useState } from 'react';
import "./FAQ.css";
// Inside your About component, after other sections:
const faqData = [
  {
    question: "What types of granite do you offer?",
    answer: "We offer a wide range of granite in various colors, patterns, and finishes, including polished, honed, flamed, and leathered surfaces.",
  },
  {
    question: "Can you customize sizes and finishes?",
    answer: "Yes, we provide customized sizes, thicknesses, and surface finishes based on your project requirements.",
  },
  {
    question: "Do you export internationally?",
    answer: "Yes, we export granite to countries across the globe, including the USA, Europe, Middle East, and Asia.",
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "The MOQ depends on the product type and destination. For most exports, it is typically one full container load.",
  },
  {
    question: "How is the granite packed for shipping?",
    answer: "We use strong wooden crates and moisture-resistant packaging to ensure safe delivery and prevent damage during transit.",
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery timelines vary depending on order size and destination. Generally, orders are processed and shipped within 2–4 weeks.",
  },
  {
    question: "Do you provide samples?",
    answer: "Yes, we can provide small samples on request. Shipping charges may apply depending on your location.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept payments via wire transfer (TT), LC (Letter of Credit), and other standard international methods.",
  },
  {
    question: "Can I visit your factory or quarry?",
    answer: "Absolutely! We welcome visits to our facilities. Please contact us in advance to schedule a tour.",
  },
  {
    question: "How do I place an order?",
    answer: "You can reach us via the contact form, email, or phone. Our team will assist you with product selection, pricing, and order processing.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="about-section faq-section">
      <div className="about-content">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="arrow">{activeIndex === index ? "−" : "+"}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
// And render <FAQSection /> at the end of your About component JSX
