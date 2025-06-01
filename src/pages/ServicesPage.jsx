const servicesData = [
  {
    id: 1,
    image: 'services_1.jpg',
    title: "Optimize with DataLens",
    description: "Utilize your internal data for auditing and optimization to improve operational efficiency and decision-making.",
    targetAudience: ["Mid to Large Enterprises", "CFOs", "Operations Managers", "Audit Teams"],
    details: [
      { title: "Data Integration", description: "Consolidate and analyze data from various internal sources to uncover actionable insights." },
      { title: "Audit Support", description: "Streamline internal audits with data-driven insights and automated reporting." },
      { title: "Operational Optimization", description: "Identify inefficiencies and optimize processes using data analytics." }
    ],
  },
  {
    id: 2,
    image: 'services_2.jpg',
    title: "Research, Develop, Expand (RDE)",
    description: "Access comprehensive market data to explore new opportunities, research competitors, and expand your business.",
    targetAudience: ["Growth-stage Companies", "Executives", "Entrepreneurs", "Strategy Consultants"],
    details: [
      { title: "Competitor Analysis", description: "Gain insights into competitors' strategies and market positioning." },
      { title: "Market Entry Strategies", description: "Develop data-backed strategies for entering new markets." },
      { title: "Expansion Planning", description: "Leverage data to identify growth opportunities and mitigate risks." }
    ],

  },
  {
    id: 3,
    image: 'services_3.avif',
    title: "DataLens Insights",
    description: "Stay informed with curated industry insights enriched by data science and expert analysis.",
    targetAudience: ["Investors", "Traders", "Market Analysts", "Portfolio Managers",  "Industry Professionals"],
    details: [
      { title: "Comprehensive Reports", description: "Receive detailed reports on industry trends, economics, and market dynamics." },
      { title: "Expert Analysis", description: "Benefit from insights provided by experienced analysts and data scientists." },
      { title: "Subscription Service", description: "Access regular updates tailored for investors, traders, and market researchers." }
    ],
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#1a2c30] to-[#121b1d] text-white">
      <section
        className="relative flex items-center justify-center h-[400px] md:h-[500px] bg-center bg-cover"
        style={{
          backgroundImage: `url(${`https://${import.meta.env.VITE_AWS_BUCKET_NAME}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/images/service-bg.avif`})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-[#2ECC40]">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Unlock the power of data analytics.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="bg-black/10 rounded-xl overflow-hidden border border-[#1a2c30] hover:border-[#2ECC40]/30 transition-all duration-300 group"
            >
              <div className={`flex flex-col lg:flex-row ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-2/5">
                  <div className="relative h-[300px] lg:h-full">
                    <img
                      src={`https://${import.meta.env.VITE_AWS_BUCKET_NAME}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/images/${service.image}`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-all duration-300" />
                  </div>
                </div>

                <div className="lg:w-3/5 p-8 lg:p-12">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold mb-4 transition-colors">
                      {service.title}
                    </h2>
                    {service.targetAudience.map((audience, i) => (
                      <span key = {i} className="inline-block bg-[#2ECC40]/20 text-[#2ECC40] px-3 py-1 mr-2 rounded-sm text-xs font-semibold mb-4">
                        {audience}
                      </span>
                    ))}
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {service.details.map((detail, i) => (
                      <div 
                        key={i}
                        className="bg-black/20 p-4 rounded-lg transition-all"
                      >
                        <h3 className="font-bold text-[#2ECC40] mb-2">{detail.title}</h3>
                        <p className="text-gray-300 text-sm">{detail.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-20 bg-[#121b1d] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Reach out to our team and discover how DataLens can help you achieve your goals.
        </p>
        <a
          href="#" // Update this link to your actual form route when ready
          className="inline-block bg-[#2ECC40] hover:bg-[#29B737] text-black font-bold px-8 py-4 rounded-lg transition-colors"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;