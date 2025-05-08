import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a long-term strategy. While some improvements can be seen within a few weeks, significant results typically take 3-6 months. This varies based on your website's current state, competition level, and how aggressively you implement changes."
  },
  {
    question: "Can you guarantee a #1 ranking on Google?",
    answer: "No reputable SEO company can guarantee specific rankings. Google's algorithms use over 200 factors and are constantly evolving. We focus on proven strategies that improve your visibility and traffic, but exact rankings cannot be guaranteed."
  },
  {
    question: "What makes your SEO service different from others?",
    answer: "We combine technical expertise with data-driven insights to create custom strategies. Unlike many agencies, we don't use a one-size-fits-all approach. Each client gets a tailored plan based on their specific industry, competition, and business goals."
  },
  {
    question: "Do I need to create new content for SEO?",
    answer: "High-quality, relevant content is a critical component of SEO success. While we can optimize your existing content, creating fresh, valuable content regularly helps improve rankings. Our team can guide your content strategy or create content on your behalf."
  },
  {
    question: "How do you report on SEO progress?",
    answer: "We provide comprehensive monthly reports showing key metrics including rankings, organic traffic, conversions, and technical improvements. Our reports include actionable insights and recommendations, not just data. We also offer real-time dashboards for clients who want more frequent updates."
  },
  {
    question: "Will SEO work for my specific industry?",
    answer: "SEO principles work across all industries, though strategies may vary. Whether you're in e-commerce, healthcare, finance, or any other field, there are always opportunities to improve search visibility. We have experience across numerous sectors and tailor our approach to your specific industry challenges."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Get answers to common questions about our SEO services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-lg shadow border border-gray-200 dark:border-gray-600 overflow-hidden transition-all"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-left font-medium text-gray-900 dark:text-white">{faq.question}</span>
                {openIndex === index ? 
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" /> : 
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                }
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Still have questions? <a href="#contact" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Contact us</a> and we'll be happy to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;