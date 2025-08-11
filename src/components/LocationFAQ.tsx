'use client';

import { useState } from 'react';

interface LocationFAQProps {
  cityName: string;
  stateName: string;
  phoneNumber: string;
}

export default function LocationFAQ({ cityName, stateName, phoneNumber }: LocationFAQProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What plumbing services do you offer?",
      answer: "We offer comprehensive plumbing services including emergency repairs, water heater installation and repair, drain cleaning, pipe repair, bathroom and kitchen remodeling, gas line services, sewer line inspection and repair, leak detection, and preventive maintenance for both residential and commercial properties."
    },
    {
      question: "Do you provide 24/7 emergency plumbing services?",
      answer: "Yes, we provide 24/7 emergency plumbing services. Plumbing emergencies can happen at any time, and we understand the urgency. Our team is available round the clock to handle emergency calls, including burst pipes, clogged drains, water heater failures, and gas leaks."
    },
    {
      question: "How quickly can you respond to emergency calls?",
      answer: "For emergency situations, we typically respond within 1-2 hours. Our team is strategically located throughout the area to ensure quick response times. We prioritize emergency calls and will provide you with an estimated arrival time when you call."
    },
    {
      question: "Are your plumbers licensed and insured?",
      answer: "Yes, all our plumbers are fully licensed, bonded, and insured. We maintain proper licensing and insurance coverage to protect our customers and ensure quality workmanship. You can request to see our credentials before we begin any work."
    },
    {
      question: "Do you offer free estimates?",
      answer: "Yes, we provide free estimates for most plumbing services. We'll assess your plumbing issue, explain the problem, and provide a detailed estimate before starting any work. For emergency situations, we may need to charge a service call fee."
    },
    {
      question: "What areas do you serve?",
      answer: `We serve ${cityName} and surrounding areas in ${stateName}. Our service area includes residential neighborhoods, commercial properties, and industrial facilities. Contact us to confirm if we service your specific location.`
    },
    {
      question: "How do you handle pricing and billing?",
      answer: "We provide transparent, upfront pricing with no hidden fees. Our rates are competitive and fair. We accept various payment methods including cash, check, and major credit cards. For larger projects, we can discuss payment plans."
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes, we stand behind our work with comprehensive warranties. Our workmanship is guaranteed, and we also honor manufacturer warranties on parts and equipment we install. We'll provide warranty details for each specific service."
    },
    {
      question: "What should I do in case of a plumbing emergency?",
      answer: "In case of a plumbing emergency, first turn off the main water supply if there's a major leak. Then call us immediately at " + phoneNumber + ". Don't attempt major repairs yourself as this could cause more damage. We'll guide you through immediate steps while we're on our way."
    },
    {
      question: "How do I schedule a service appointment?",
      answer: "You can schedule a service appointment by calling us at " + phoneNumber + ". We'll work with you to find a convenient time that fits your schedule. For emergency services, we're available 24/7 and will respond as quickly as possible."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <span className="bg-[#1c7bc8] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 ml-9">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href={`tel:${phoneNumber.replace(/\D/g, '')}`}
            className="inline-flex items-center bg-[#1c7bc8] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {phoneNumber} for More Information
          </a>
        </div>
      </div>
    </section>
  );
} 