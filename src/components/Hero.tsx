import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      // In a real app, this would send the URL for analysis
      alert(`Analyzing ${url} for SEO improvements`);
    }
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            <span className="block">Get Your Website on</span>
            <span className="text-blue-600 dark:text-blue-400">Google's First Page</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Boost your online presence with our data-driven SEO tools and services. 
            We help businesses of all sizes improve their search engine rankings.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-10 max-w-3xl mx-auto flex flex-col sm:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="url" 
                placeholder="Enter your website URL" 
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-3 transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
            >
              Analyze SEO
              <ArrowRight className="ml-2" size={18} />
            </button>
          </form>
          
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md px-6 py-4 flex items-center border border-gray-100 dark:border-gray-700">
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <span className="font-bold">1</span>
              </div>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Enter your website URL</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md px-6 py-4 flex items-center border border-gray-100 dark:border-gray-700">
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <span className="font-bold">2</span>
              </div>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Get SEO analysis report</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md px-6 py-4 flex items-center border border-gray-100 dark:border-gray-700">
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <span className="font-bold">3</span>
              </div>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Implement recommendations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;