import ServiceCard from './ui/ServiceCard';
import service_1 from '@assets/services_1.jpg';
import service_3 from '@assets/services_3.avif'; 
import service_2 from '@assets/services_2.jpg';

// All our services
const Services = () => {
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

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#122023] to-[#162527]">
      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2ECC40] to-[#29B737] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-5xl mx-auto">
            We specialize in providing data-driven solutions and insight services tailored to your business needs. 
            Whether you're an established company, growing business, start-up, or investor, we provide services to meet your need backed by data.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;