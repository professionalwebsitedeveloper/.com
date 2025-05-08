import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
  buttonText: string;
}

const plans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$49",
    features: [
      "Technical SEO audit",
      "5 keyword optimization",
      "Monthly ranking reports",
      "Basic on-page optimization",
      "Email support"
    ],
    buttonText: "Get Started"
  },
  {
    name: "Pro",
    price: "$99",
    popular: true,
    features: [
      "Everything in Basic",
      "20 keyword optimization",
      "Weekly ranking reports",
      "Content optimization",
      "Competitor analysis",
      "Priority email support",
      "Monthly strategy call"
    ],
    buttonText: "Get Started"
  },
  {
    name: "Enterprise",
    price: "$249",
    features: [
      "Everything in Pro",
      "Unlimited keyword optimization",
      "Daily ranking reports",
      "Advanced technical SEO",
      "Custom content strategy",
      "Link building strategy",
      "Dedicated SEO specialist",
      "Weekly strategy calls"
    ],
    buttonText: "Contact Us"
  }
];

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your business needs and scale as you grow.
          </p>
          
          <div className="mt-6 inline-flex p-1 bg-gray-200 dark:bg-gray-700 rounded-lg">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                billingCycle === 'monthly' 
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                billingCycle === 'yearly' 
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly <span className="text-blue-600 dark:text-blue-400 font-bold">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                bg-white dark:bg-gray-700 rounded-xl shadow-md border overflow-hidden transition-all hover:shadow-lg
                ${plan.popular 
                  ? 'border-blue-500 dark:border-blue-400 transform md:-translate-y-2 relative z-10 scale-105 md:scale-110' 
                  : 'border-gray-200 dark:border-gray-600'
                }
              `}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center text-sm font-medium py-1">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="ml-1 text-xl text-gray-500 dark:text-gray-400">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {billingCycle === 'yearly' ? 'Billed annually' : 'Billed monthly'}
                </p>
                
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex">
                      <Check className="h-5 w-5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                      <span className="ml-3 text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <button className={`w-full rounded-lg py-3 px-4 font-medium transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-900 dark:text-white'
                  }`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>All plans include a 14-day money-back guarantee. No contracts, cancel anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;