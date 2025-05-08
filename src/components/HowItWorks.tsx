import React from 'react';
import { Search, FileText, LineChart, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: 'Website Analysis',
    description: 'We analyze your current website performance, content, structure, and technical aspects to identify SEO gaps and opportunities.',
  },
  {
    icon: <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: 'Custom Strategy',
    description: 'Based on our analysis, we create a tailored SEO strategy focusing on the most impactful improvements for your specific industry and goals.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: 'Implementation',
    description: 'Our experts optimize your site with on-page and technical improvements, content enhancements, and authority-building tactics.',
  },
  {
    icon: <LineChart className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: 'Tracking & Refinement',
    description: 'We continuously monitor your rankings, traffic, and conversions, making data-driven adjustments to maximize your search visibility.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our proven 4-step process helps your website climb Google rankings and attract more organic traffic.
          </p>
        </div>

        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-24 left-1/2 h-1 bg-blue-200 dark:bg-blue-900 transform -translate-x-1/2" style={{ width: '70%' }}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all h-full flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-6 relative z-10">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-blue-50 dark:bg-gray-800 rounded-xl p-8 border border-blue-100 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Ready to improve your search rankings?</h3>
              <p className="text-gray-600 dark:text-gray-300">Get a free SEO audit and discover how your website can perform better.</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-3 transition-colors shadow-md hover:shadow-lg whitespace-nowrap">
              Get Free Analysis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;