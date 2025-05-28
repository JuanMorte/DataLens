import React from 'react';
import about_us from '@assets/about-us.jpeg'; 

const AboutUsPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Alexandra Chen",
      role: "Chief Executive Officer & Founder",
      bio: "Former Goldman Sachs quantitative analyst with 15 years of experience in financial modeling and market prediction. PhD in Applied Mathematics from MIT.",
      image: "/api/placeholder/300/400",
      linkedin: "#",
      expertise: ["Quantitative Analysis", "Risk Management", "Financial Modeling"]
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      bio: "Ex-Google engineer who led data infrastructure teams. Specializes in building scalable analytics platforms and machine learning pipelines.",
      image: "/api/placeholder/300/400",
      linkedin: "#",
      expertise: ["Machine Learning", "Data Engineering", "Cloud Architecture"]
    },
    {
      id: 3,
      name: "Sarah Kim",
      role: "Head of Research",
      bio: "Former Bloomberg terminal architect with deep expertise in real-time market data analysis and economic forecasting methodologies.",
      image: "/api/placeholder/300/400",
      linkedin: "#",
      expertise: ["Economic Research", "Market Analysis", "Data Visualization"]
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Director of Client Solutions",
      bio: "15+ years in management consulting at McKinsey, helping Fortune 500 companies transform their data strategies and decision-making processes.",
      image: "/api/placeholder/300/400",
      linkedin: "#",
      expertise: ["Strategy Consulting", "Business Intelligence", "Client Relations"]
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Served", icon: "fa-users" },
    { number: "10TB+", label: "Data Processed Daily", icon: "fa-database" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "fa-clock" },
    { number: "25+", label: "Industry Sectors", icon: "fa-industry" }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description: "DataLens was established with a vision to democratize data-driven decision making for businesses of all sizes."
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Secured partnership with Fortune 500 financial services company, processing over $2B in daily transactions."
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Raised $15M in Series A funding to expand our analytics platform and hire world-class talent."
    },
    {
      year: "2022",
      title: "International Expansion",
      description: "Expanded operations to Europe and Asia, serving clients across 15 countries worldwide."
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Launched our proprietary AI-powered forecasting engine, improving prediction accuracy by 300%."
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Named 'Best Data Analytics Platform' by FinTech Innovation Awards and featured in Forbes 30 Under 30."
    },
    {
      year: "2025",
      title: "Market Leadership",
      description: "Achieved market-leading position with 500+ enterprise clients and $50M+ ARR."
    }
  ];

  const values = [
    {
      icon: "fa-lightbulb",
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with data, developing cutting-edge solutions that give our clients a competitive edge."
    },
    {
      icon: "fa-shield-alt",
      title: "Integrity",
      description: "We maintain the highest standards of data security and ethical practices, ensuring our clients can trust us with their most sensitive information."
    },
    {
      icon: "fa-chart-line",
      title: "Excellence",
      description: "We deliver exceptional results through rigorous analysis, attention to detail, and a commitment to continuous improvement."
    },
    {
      icon: "fa-handshake",
      title: "Partnership",
      description: "We work closely with our clients as trusted advisors, understanding their unique challenges and tailoring solutions to their specific needs."
    }
  ];

  return (
    <div className="min-w-screen bg-gradient-to-b from-[#1a2c30] to-[#121b1d] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2c30] via-[#1a2c30]/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transforming Data Into 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC40] to-[#29B737]">
                Strategic Advantage
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We're a team of data scientists, engineers, and industry experts passionate about helping businesses unlock the power of their data to make smarter decisions and drive growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#2ECC40] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#29B737] transition-colors">
                Our Services
              </button>
              <button className="border border-[#2ECC40] text-[#2ECC40] font-bold py-4 px-8 rounded-lg hover:bg-[#2ECC40] hover:text-black transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1a2c30]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2ECC40]/20 rounded-full mb-4">
                  <i className={`fa-solid ${stat.icon} text-2xl text-[#2ECC40]`}></i>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#2ECC40] mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At DataLens, we believe that every business deserves access to world-class data analytics capabilities. Our mission is to democratize advanced analytics and make data-driven decision making accessible to organizations of all sizes.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We combine cutting-edge technology with deep industry expertise to deliver insights that drive real business impact. From startups to Fortune 500 companies, we help our clients navigate complex market dynamics and seize opportunities with confidence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-[#2ECC40] mb-2">Founded</h3>
                  <p className="text-gray-300">2019</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2ECC40] mb-2">Headquarters</h3>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2ECC40] mb-2">Team Size</h3>
                  <p className="text-gray-300">120+ Experts</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2ECC40] mb-2">Global Reach</h3>
                  <p className="text-gray-300">15+ Countries</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2ECC40]/20 to-[#29B737]/20 rounded-2xl transform rotate-3"></div>
              <img 
                src={about_us}
                alt="DataLens Team"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#1a2c30]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we serve our clients and build our company.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-[#1a2c30]/50 rounded-xl p-6 border border-[#1a2c30] hover:border-[#2ECC40]/30 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2ECC40]/20 rounded-full mb-6">
                  <i className={`fa-solid ${value.icon} text-2xl text-[#2ECC40]`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startup to market leader, here's how we've grown and evolved over the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-[#2ECC40]/30"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#2ECC40] rounded-full border-4 border-[#1a2c30] z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-[#1a2c30]/50 rounded-xl p-6 border border-[#1a2c30]">
                      <div className="text-2xl font-bold text-[#2ECC40] mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#1a2c30]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the experienced professionals leading DataLens forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-[#1a2c30]/50 rounded-xl overflow-hidden border border-[#1a2c30] hover:border-[#2ECC40]/30 transition-colors">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#2ECC40] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-medium text-gray-400 mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map(skill => (
                        <span key={skill} className="inline-block bg-[#2ECC40]/20 text-[#2ECC40] px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={member.linkedin}
                    className="inline-flex items-center text-[#2ECC40] hover:text-[#29B737] transition-colors"
                  >
                    <i className="fa-brands fa-linkedin mr-2"></i>
                    <span className="text-sm">Connect</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of companies that trust DataLens to turn their data into competitive advantage. 
            Let's discuss how we can help you achieve your goals.
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
      </section>
    </div>
  );
};

export default AboutUsPage;