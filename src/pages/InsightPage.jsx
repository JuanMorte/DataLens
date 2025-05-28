import news_1 from '@assets/news_1.jpg';
import news_2 from '@assets/news_2.jpg';
import news_3 from '@assets/news_3.jpg';

const InsightsPage = () => {
  // Sample data - replace with backend data
  const topNews = {
    title: "Federal Reserve Signals Potential Rate Cut as Inflation Shows Signs of Cooling",
    excerpt: "In a surprising turn of events, Federal Reserve officials hinted at a possible interest rate reduction following the latest inflation data that shows a 0.3% month-over-month decline...",
    image: news_1,
    category: "BREAKING NEWS",
    timestamp: "2 hours ago",
    author: "DataLens Research Team"
  };

  const dailyMarketNews = [
    {
      id: 1,
      title: "Tech Giants Rally on AI Infrastructure Spending Surge",
      excerpt: "Major technology companies reported unprecedented capital expenditure on AI infrastructure, driving sector-wide gains...",
      image: news_2,
      category: "MARKET ANALYSIS",
      timestamp: "4 hours ago",
      correlatedStocks: ["NVDA", "MSFT", "GOOGL", "META"]
    },
    {
      id: 2,
      title: "Energy Sector Volatility Amid Geopolitical Tensions",
      excerpt: "Oil prices fluctuate as Middle East tensions impact global supply chains...",
      category: "ENERGY MARKETS",
      timestamp: "5 hours ago",
      correlatedStocks: ["XOM", "CVX", "COP", "SLB"]
    },
    {
      id: 3,
      title: "Banking Sector Shows Resilience Despite Credit Concerns",
      excerpt: "Regional banks outperform expectations in Q1 earnings despite ongoing credit challenges...",
      category: "FINANCIAL SERVICES",
      timestamp: "6 hours ago",
      correlatedStocks: ["JPM", "BAC", "WFC", "C"]
    },
    {
      id: 4,
      title: "Healthcare Innovation Drives Biotech Surge",
      excerpt: "Breakthrough drug approvals and pipeline developments boost biotech valuations...",
      category: "HEALTHCARE",
      timestamp: "7 hours ago",
      correlatedStocks: ["JNJ", "PFE", "MRNA", "GILD"]
    }
  ];

  const monthlyReport = {
    title: "Global Market Outlook: Q2 2025 Strategic Analysis",
    summary: "Our comprehensive analysis reveals key trends shaping global markets in the second quarter. Rising geopolitical tensions, technological disruptions, and shifting monetary policies create both opportunities and challenges for investors. Key highlights include emerging market resilience, continued AI adoption across sectors, and evolving ESG investment strategies.",
    coverImage: news_3,
    publishDate: "May 1, 2025",
    pages: "47 pages",
    downloads: "1,247"
  };

  const specialistInsights = [
    {
      id: 1,
      analyst: "Dr. Sarah Chen",
      role: "Chief Economist",
      insight: "The current market dynamics suggest we're entering a period of 'selective growth' where traditional sector correlations are breaking down.",
      topic: "Macroeconomic Analysis",
      avatar: "/api/placeholder/80/80"
    },
    {
      id: 2,
      analyst: "Michael Rodriguez",
      role: "Technology Sector Lead",
      insight: "AI infrastructure spending is creating a new investment paradigm, but investors should focus on companies with sustainable competitive moats.",
      topic: "Technology Trends",
      avatar: "/api/placeholder/80/80"
    },
    {
      id: 3,
      analyst: "Emma Thompson",
      role: "ESG Investment Director",
      insight: "Climate-focused investments are showing remarkable resilience, with green bonds outperforming traditional fixed income by 180 basis points.",
      topic: "Sustainable Finance",
      avatar: "/api/placeholder/80/80"
    }
  ];

  const StockTag = ({ symbol }) => (
    <span className="inline-block bg-[#2ECC40]/20 text-[#2ECC40] px-2 py-1 rounded text-xs font-medium mr-1 mb-1">
      {symbol}
    </span>
  );

  return (
    <div className="min-w-screen bg-gradient-to-b from-[#1a2c30] to-[#121b1d] text-white">

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 1. Top News Headline */}
        <section className="mb-12">
          <div className="bg-black/10 rounded-xl overflow-hidden border border-[#1a2c30] hover:border-[#2ECC40]/30 transition-colors">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img 
                  src={topNews.image} 
                  alt={topNews.title}
                  className="w-full h-100 object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                    {topNews.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <span>{topNews.timestamp}</span>
                    <span className="mx-2">•</span>
                    <span>By {topNews.author}</span>
                  </div>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                  {topNews.title}
                </h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {topNews.excerpt}
                </p>
                <div className="flex gap-4">
                  <button className="bg-[#2ECC40] text-black font-bold py-3 px-6 rounded hover:bg-[#29B737] transition-colors">
                    Read Full Article
                  </button>
                  <button className="border border-[#2ECC40] text-[#2ECC40] font-bold py-3 px-6 rounded hover:bg-[#2ECC40] hover:text-black transition-colors">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Daily Market News */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Daily Market News</h2>
            <button className="text-[#2ECC40] hover:text-[#29B737] transition-colors font-medium">
              View All News →
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Story */}
            <div className="lg:col-span-2">
              <div className="bg-[#1a2c30]/50 rounded-xl overflow-hidden border border-[#1a2c30] hover:border-[#2ECC40]/30 transition-colors h-full">
                <img 
                  src={dailyMarketNews[0].image} 
                  alt={dailyMarketNews[0].title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-[#2ECC40]/20 text-[#2ECC40] px-3 py-1 rounded-full text-xs font-bold mb-2">
                      {dailyMarketNews[0].category}
                    </span>
                    <p className="text-sm text-gray-400">{dailyMarketNews[0].timestamp}</p>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{dailyMarketNews[0].title}</h3>
                  <p className="text-gray-300 mb-4">{dailyMarketNews[0].excerpt}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-400 mb-2">Related Stocks:</p>
                    <div className="flex flex-wrap">
                      {dailyMarketNews[0].correlatedStocks.map(stock => (
                        <StockTag key={stock} symbol={stock} />
                      ))}
                    </div>
                  </div>
                  <button className="text-[#2ECC40] hover:text-[#29B737] transition-colors font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </div>

            {/* Smaller Stories */}
            <div className="space-y-6">
              {dailyMarketNews.slice(1).map(news => (
                <div key={news.id} className="bg-[#1a2c30]/50 rounded-xl border border-[#1a2c30] hover:border-[#2ECC40]/30 transition-colors p-4">
                  <div className="mb-2">
                    <span className="inline-block bg-[#2ECC40]/20 text-[#2ECC40] px-2 py-1 rounded text-xs font-bold mb-1">
                      {news.category}
                    </span>
                    <p className="text-xs text-gray-400">{news.timestamp}</p>
                  </div>
                  <h4 className="font-bold mb-2 text-sm leading-tight">{news.title}</h4>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{news.excerpt}</p>
                  <div className="mb-3">
                    <div className="flex flex-wrap">
                      {news.correlatedStocks.map(stock => (
                        <StockTag key={stock} symbol={stock} />
                      ))}
                    </div>
                  </div>
                  <button className="text-[#2ECC40] hover:text-[#29B737] transition-colors text-sm font-medium">
                    Read More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Monthly Report */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Latest Monthly Report</h2>
          
          <div className="bg-[#1a2c30]/50 rounded-xl overflow-hidden border border-[#1a2c30]">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <div className="relative">
                  <img 
                    src={monthlyReport.coverImage} 
                    alt="Monthly Report Cover"
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white text-sm">
                      <span>{monthlyReport.pages}</span>
                      <span>{monthlyReport.downloads} downloads</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 p-8">
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-[#2ECC40] to-[#29B737] text-black px-3 py-1 rounded-full text-xs font-bold mb-2">
                    MONTHLY REPORT
                  </span>
                  <p className="text-sm text-gray-400">Published {monthlyReport.publishDate}</p>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {monthlyReport.title}
                </h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {monthlyReport.summary}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#2ECC40] text-black font-bold py-3 px-6 rounded hover:bg-[#29B737] transition-colors">
                    <i className="fa-solid fa-download mr-2"></i>
                    Download Report
                  </button>
                  <button className="border border-[#2ECC40] text-[#2ECC40] font-bold py-3 px-6 rounded hover:bg-[#2ECC40] hover:text-black transition-colors">
                    <i className="fa-solid fa-eye mr-2"></i>
                    Preview
                  </button>
                  <button className="text-[#2ECC40] hover:text-[#29B737] transition-colors font-medium py-3 px-4">
                    <i className="fa-solid fa-share mr-2"></i>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Specialist Insights */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Specialist Insights</h2>
            <button className="text-[#2ECC40] hover:text-[#29B737] transition-colors font-medium">
              Meet Our Team →
            </button>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
            {specialistInsights.map(insight => (
              <div key={insight.id} className="bg-[#1a2c30]/50 rounded-xl border border-[#1a2c30] hover:border-[#2ECC40]/30 transition-colors p-6">
                <div className="flex items-start space-x-4">
                  <img 
                    src={insight.avatar} 
                    alt={insight.analyst}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#2ECC40]/30"
                  />
                  <div className="flex-1">
                    <div className="mb-3">
                      <h4 className="font-bold text-lg">{insight.analyst}</h4>
                      <p className="text-[#2ECC40] font-medium">{insight.role}</p>
                      <span className="inline-block bg-[#2ECC40]/20 text-[#2ECC40] px-2 py-1 rounded text-xs font-medium mt-1">
                        {insight.topic}
                      </span>
                    </div>
                    <blockquote className="text-gray-300 italic text-lg leading-relaxed mb-4">
                      "{insight.insight}"
                    </blockquote>
                    <button className="text-[#2ECC40] hover:text-[#29B737] transition-colors font-medium">
                      Read Full Analysis →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-[#1a2c30] to-[#2ECC40]/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Ahead of the Market</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get our daily insights, weekly market summaries, and monthly reports delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded bg-[#1a2c30] border border-[#2ECC40]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#2ECC40]"
            />
            <button className="bg-[#2ECC40] text-black font-bold py-3 px-6 rounded hover:bg-[#29B737] transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InsightsPage;