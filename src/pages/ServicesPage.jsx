import React, { useState } from 'react';
import ServiceCard from '../components/ui/ServiceCard';
import service_1 from '@assets/services_1.jpg';
import service_3 from '@assets/services_3.avif'; 
import service_2 from '@assets/services_2.jpg';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const servicesData = [
    {
      id: 1,
      image: service_1, 
      title: "Optimize with DataLens",
      description: "Utilize your internal data for auditing and optimization to improve operational efficiency and decision-making.",
      targetAudience: "Mid to large enterprises, CFOs, operations managers, and audit teams.",
      details: [
        {
          title: "Data Integration",
          description: "Consolidate and analyze data from various internal sources to uncover actionable insights."
        },
        {
          title: "Audit Support",
          description: "Streamline internal audits with data-driven insights and automated reporting."
        },
        {
          title: "Operational Optimization",
          description: "Identify inefficiencies and optimize processes using data analytics."
        }
      ]
    },
    {
      id: 2,
      image: service_2, 
      title: "Research, Develop, Expand (RDE)",
      description: "Access comprehensive market data to explore new opportunities, research competitors, and expand your business.",
      targetAudience: "Growth-stage companies, business executives, entrepreneurs, and strategy consultants.",
      details: [
        {
          title: "Competitor Analysis",
          description: "Gain insights into competitors' strategies and market positioning."
        },
        {
          title: "Market Entry Strategies",
          description: "Develop data-backed strategies for entering new markets."
        },
        {
          title: "Expansion Planning",
          description: "Leverage data to identify growth opportunities and mitigate risks."
        }
      ]
    },
    {
      id: 3,
      image: service_3, 
      title: "DataLens Insights",
      description: "Stay informed with curated industry insights enriched by data science and expert analysis.",
      targetAudience: "Investors, traders, market analysts, portfolio managers, and industry professionals.",
      details: [
        {
          title: "Comprehensive Reports",
          description: "Receive detailed reports on industry trends, economics, and market dynamics."
        },
        {
          title: "Expert Analysis",
          description: "Benefit from insights provided by experienced analysts and data scientists."
        },
        {
          title: "Subscription Service",
          description: "Access regular updates tailored for investors, traders, and market researchers."
        }
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small to medium businesses getting started with data analytics",
      features: [
        "Up to 5 data sources",
        "Monthly reports",
        "Basic dashboard",
        "Email support",
        "Standard data processing"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      description: "Comprehensive solution for growing companies with complex data needs",
      features: [
        "Unlimited data sources",
        "Weekly reports + real-time alerts",
        "Advanced dashboards & visualizations",
        "Priority phone & email support",
        "Custom integrations",
        "API access",
        "Dedicated account manager"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations with specific requirements",
      features: [
        "Everything in Professional",
        "White-label solutions",
        "On-premise deployment options",
        "24/7 dedicated support",
        "Custom development",
        "Training & onboarding",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const caseStudies = [
    {
      id: 1,
      company: "TechCorp Industries",
      industry: "Manufacturing",
      challenge: "Inefficient supply chain causing 20% cost overruns",
      solution: "Implemented DataLens optimization algorithms to identify bottlenecks",
      result: "Reduced operational costs by 35% and improved delivery times by 40%",
      savings: "$2.4M annually"
    },
    {
      id: 2,
      company: "GrowthVentures",
      industry: "Private Equity",
      challenge: "Needed comprehensive market analysis for acquisition targets",
      solution: "Used RDE service to analyze 15 potential markets and competitors",
      result: "Successfully identified and acquired 3 high-value companies",
      savings: "ROI of 340%"
    },
    {
      id: 3,
      company: "Alpha Investment Group",
      industry: "Asset Management",
      challenge: "Required real-time market insights for portfolio optimization",
      solution: "Subscribed to DataLens Insights premium service",
      result: "Outperformed market benchmark by 12% consistently",
      savings: "$18M in additional returns"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current data infrastructure, business objectives, and specific challenges to create a customized approach.",
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Our experts develop a comprehensive data strategy aligned with your business goals and technical requirements.",
      duration: "1 week"
    },
    {
      step: "03",
      title: "Implementation",
      description: "We deploy our solutions, integrate with your existing systems, and ensure seamless data flow and processing.",
      duration: "2-4 weeks"
    },
    {
      step: "04",
      title: "Optimization & Training",
      description: "Fine-tune the system for optimal performance and train your team to maximize the value of your new capabilities.",
      duration: "1-2 weeks"
    },
    {
      step: "05",
      title: "Ongoing Support",
      description: "Continuous monitoring, updates, and support to ensure your data analytics platform evolves with your business.",
      duration: "Ongoing"
    }
  ];

  const industries = [
    { name: "Financial Services", icon: "fa-university", clients: "120+" },
    { name: "Healthcare", icon: "fa-heartbeat", clients: "85+" },
    { name: "Manufacturing", icon: "fa-industry", clients: "95+" },
    { name: "Retail & E-commerce", icon: "fa-shopping-cart", clients: "110+" },
    { name: "Technology", icon: "fa-microchip", clients: "75+" },
    { name: "Energy & Utilities", icon: "fa-bolt", clients: "40+" }
  ];

  const tabContent = {
    overview: (
      <div className="grid md:grid-cols-3 gap-8">
        {servicesData.map(service => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    ),
    pricing: (
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`bg-[#1a2c30]/50 rounded-xl p-8 border ${plan.popular ? 'border-[#2ECC40] relative' : 'border-[#1a2c30]'} hover:border-[#2ECC40]/30 transition-colors`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#2ECC40] text-black px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#2ECC40]">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <p className="text-gray-300">{plan.description}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <i className="fa-solid fa-check text-[#2ECC40] mt-1 mr-3"></i>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 px-6 rounded-lg font-bold transition-colors ${plan.popular ? 'bg-[#2ECC40] text-black hover:bg-[#29B737]' : 'border border-[#2ECC40] text-[#2ECC40] hover:bg-[#2ECC40] hover:text-black'}`}>
              {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    ),
    process: (
      <div className="space-y-8">
        {processSteps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-6 bg-[#1a2c30]/50 rounded-xl p-6 border border-[#1a2c30]">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-[#2ECC40] text-black rounded-full flex items-center justify-center font-bold text-xl">
                {step.step}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <span className="text-[#2ECC40] font-medium">{step.duration}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    cases: (
      <div className="grid md:grid-cols-1 gap-8">
        {caseStudies.map((study) => (
          <div key={study.id} className="bg-[#1a2c30]/50 rounded-xl p-8 border border-[#1a2c30] hover:border-[#2ECC40]/30 transition-colors">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                  <span className="inline-block bg-[#2ECC40]/20 text-[#2ECC40] px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-[#2ECC40] mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2ECC40] mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[#2ECC40]/10 rounded-xl p-6 border border-[#2ECC40]/20">
                  <h4 className="font-bold text-[#2ECC40] mb-4">Results</h4>
                  <p className="text-gray-300 mb-4">{study.result}</p>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2ECC40] mb-1">{study.savings}</div>
                    <div className="text-sm text-gray-400">Total Value Generated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  };

  return (
    <div className="min-w-screen bg-gradient-to-b from-[#1a2c30] to-[#121b1d] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2c30] via-[#1a2c30]/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/800')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Data Solutions That 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC40] to-[#29B737]">
                Drive Results
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of data analytics services. From operational optimization to market expansion, we provide the insights you need to succeed.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-[#2ECC40] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#29B737] transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-[#2ECC40] text-[#2ECC40] font-bold py-4 px-8 rounded-lg hover:bg-[#2ECC40] hover:text-black transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-[#1a2c30]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering specialized solutions for unique sector challenges.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a2c30]/50 rounded-full mb-4 group-hover:bg-[#2ECC40]/20 transition-colors border border-[#1a2c30] group-hover:border-[#2ECC40]/30">
                  <i className={`fa-solid ${industry.icon} text-2xl text-[#2ECC40]`}></i>
                </div>
                <h3 className="font-bold text-sm mb-1">{industry.name}</h3>
                <p className="text-xs text-gray-400">{industry.clients} clients</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2ECC40] to-[#29B737] mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We specialize in providing data-driven solutions and insight services tailored to your business needs. 
              Whether you're an established company, growing business, start-up, or investor, we provide services to meet your needs backed by data.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 bg-[#1a2c30]/30 rounded-xl p-2">
            {[
              { key: 'overview', label: 'Service Overview' },
              { key: 'pricing', label: 'Pricing Plans' },
              { key: 'process', label: 'Our Process' },
              { key: 'cases', label: 'Case Studies' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'bg-[#2ECC40] text-black'
                    : 'text-gray-300 hover:text-[#2ECC40]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mb-16">
            {tabContent[activeTab]}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a2c30] to-[#2ECC40]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how DataLens can help transform your business with data-driven insights. 
            Schedule a free consultation with our experts today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-[#2ECC40] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#29B737] transition-colors">
              <i className="fa-solid fa-calendar mr-2"></i>
              Schedule Free Consultation
            </button>
            <button className="border border-[#2ECC40] text-[#2ECC40] font-bold py-4 px-8 rounded-lg hover:bg-[#2ECC40] hover:text-black transition-colors">
              <i className="fa-solid fa-download mr-2"></i>
              Download Service Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;