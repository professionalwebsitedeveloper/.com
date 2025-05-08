import React from 'react';
import { TrendingUp, BarChart2, Award, Globe, Settings, Search } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: 'Keyword Optimization',
    description: 'Discover the most valuable keywords for your industry and learn how to implement them effectively.'
  },
  {
    icon: <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: 'Technical SEO',
    description: 'We analyze your site structure, mobile-friendliness, page speed, and other technical factors that impact rankings.'
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: 'Ranking Tracker',
    description: 'Monitor your rankings for important keywords and track improvements over time with detailed analytics.'
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: 'Competitor Analysis',
    description: 'See what strategies are working for your competitors and identify opportunities to outperform them.'
  },
  {
    icon: <Settings className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: 'On-Page Optimization',
    description: 'Get actionable recommendations to optimize your content, meta tags, headings, and internal linking.'
  },
  {
    icon: <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: 'Authority Building',
    description: 'Develop strategies to increase your domain authority through quality backlinks and content marketing.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Powerful SEO Features</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive SEO toolkit helps you climb the Google rankings and stay ahead of your competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 transition-all hover:shadow-lg border border-gray-100 dark:border-gray-600"
            >
              <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-3 transition-colors shadow-md hover:shadow-lg">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;