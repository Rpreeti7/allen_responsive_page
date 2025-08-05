import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Can I attempt the same JEE test multiple times?",
    answer:
      "Yes, you can solve every test paper multiple times while preparing for the JEE exam.",
  },
  {
    question:
      "Why are ALLEN's online test series best for IIT JEE exam Preparation?",
    answer:
      "ALLEN's online test series is the best choice for JEE preparation because it covers detailed doubt-clearing sessions with experts and shares some important tricks for handling questions.",
  },
  {
    question: "Does the ALLEN's IIT JEE test series provide solutions as well?",
    answer:
      "Yes, a detailed solution for each question is also provided along with the practice test.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>

            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
