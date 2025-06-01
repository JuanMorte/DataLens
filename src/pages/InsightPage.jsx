import { useEffect, useState } from 'react';
import NewsCard from '../components/ui/NewsCard';
import { useParams, useNavigate } from 'react-router-dom';

const InsightsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const slugs = ["global-shipping-costs-soar-due-to-red-sea-disruptions", "private-credit-boom-as-banks-retreat-from-risky-loans", "bitcoin-surges-past-60k-as-institutional-demand-grows", "retail-trading-activity-spikes-amid-meme-stock-revival"] 
  // Sample data - replace with backend data
  const topNews = {
    title: "Bond Market Turmoil as Long-Term Yields Hit 15-Year Highs",
    excerpt: "The fixed income market has experienced significant turbulence, with the 10-year Treasury yield briefly touching 4.6%, its highest level since 2007. This move reflects growing expectations that interest rates may remain higher for longer, as...",
    image: news_1,
    category: "BREAKING NEWS",
    timestamp: "8/10/2023",
    author: "Marcus Chen"
  };

  const monthlyReport = {
    title: "Global Market Outlook: Q2 2025 Strategic Analysis",
    summary: "Our comprehensive analysis reveals key trends shaping global markets in the second quarter. Rising geopolitical tensions, technological disruptions, and shifting monetary policies create both opportunities and challenges for investors. Key highlights include emerging market resilience, continued AI adoption across sectors, and evolving ESG investment strategies.",
    coverImage: news_3,
    publishDate: "May 1, 2025",
    pages: "47 pages",
    downloads: "1,247"
  };

  const StockTag = ({ symbol }) => (
    <span className="inline-block bg-[#2ECC40]/20 text-[#2ECC40] px-2 py-1 rounded text-xs font-medium mr-1 mb-1">
      {symbol}
    </span>
  );

  return (
    <div className="min-w-screen bg-gradient-to-b from-[#1a2c30] to-[#121b1d] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="bg-black/10 rounded-xl overflow-hidden border border-[#1a2c30] hover:border-[#2ECC40]/30 transition-colors">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img 
                  src={topNews.image} 
                  alt={topNews.title}
                  className="w-full h-120 object-cover"
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
                  <button 
                  onClick={() => navigate(`/insights/bond-market-turmoil-as-long-term-yields-hit-15-year-highs`)}
                  className="bg-[#2ECC40] text-black font-bold py-3 px-8 rounded hover:bg-[#29B737] transition-colors">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Daily Market News</h2>
                <button 
                  onClick={() => navigate('/insights/allnews')}
                  className="text-[#2ECC40] hover:text-[#29B737] transition-colors font-medium">
                    View All News →
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {slugs.map((index) => (
                    <NewsCard key={index} index={index} />
                ))}
            </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Latest Monthly Report</h2>
          
          <div className="bg-[#1a2c30]/50 rounded-xl overflow-hidden border border-[#1a2c30]">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <div className="relative">
                  <img 
                    src={monthlyReport.coverImage} 
                    alt="Monthly Report Cover"
                    className="object-cover w-full h-100"
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
      </div>
    </div>
  );
};

export default InsightsPage;