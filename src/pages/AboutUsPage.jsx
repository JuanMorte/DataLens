

const AboutUsPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Alexandra Chen",
      role: "Chief Executive Officer & Founder",
      bio: "Former Goldman Sachs quantitative analyst with 15 years of experience in financial modeling and market prediction. PhD in Applied Mathematics from MIT.",
      image: "dr-alexandra-chen.jpg",
      linkedin: "#",
      expertise: ["Quantitative Analysis", "Risk Management", "Financial Modeling"]
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      bio: "Ex-Google engineer who led data infrastructure teams. Specializes in building scalable analytics platforms and machine learning pipelines.",
      image: "marcus-rodriguez.jpg",
      linkedin: "#",
      expertise: ["Machine Learning", "Data Engineering", "Cloud Architecture"]
    },
    {
      id: 3,
      name: "Sarah Kim",
      role: "Head of Research",
      bio: "Former Bloomberg terminal architect with deep expertise in real-time market data analysis and economic forecasting methodologies.",
      image: "sarah-kim.jpg",
      linkedin: "#",
      expertise: ["Economic Research", "Market Analysis", "Data Visualization"]
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Director of Client Solutions",
      bio: "15+ years in management consulting at McKinsey, helping Fortune 500 companies transform their data strategies and decision-making processes.",
      image: "david-thompson.jpg",
      linkedin: "#",
      expertise: ["Strategy Consulting", "Business Intelligence", "Client Relations"]
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
    <div className="min-w-screen text-white">
      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-[#172629] to to-[#192427]">
        <div className="max-w-7xl mx-auto px-4 ">
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
                src={`https://${import.meta.env.VITE_AWS_BUCKET_NAME}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/images/about-us.jpeg`}
                alt="DataLens Team"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-[#192427] to-[#172427]">
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

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-[#172427] to-[#1a2c30]/30">
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
                  src={`https://${import.meta.env.VITE_AWS_BUCKET_NAME}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/images/${member.image}`} 
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
    </div>
  );
};

export default AboutUsPage;