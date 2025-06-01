import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const NewsDetail = () => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/news/${slug}`);
                const data = await res.json();
                if (!res.ok) throw new Error(data.error);
                setNews(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, [slug]);

    if (loading) return <div className="py-20 text-center text-lg text-gray-300">Loading...</div>;
    if (error) return <div className="py-20 text-center text-red-400">Error: {error}</div>;
    if (!news) return <div className="py-20 text-center text-gray-400">News not found</div>;

    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-[#1a2c30] to-[#121b1d] text-white pt-10">
            <div className="max-w-3xl mx-auto px-4">
                <div className="mb-4">
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-[#2ECC40] hover:text-[#29B737] transition-colors"
                    >
                        <span className="text-xl">←</span>
                        <span className="font-medium">Back</span>
                    </button>
                </div>
                {news.tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-[#2ECC40]/20 text-[#2ECC40] px-5 py-2 rounded-full text-[14px] font-medium mr-3 mb-1">
                        {tag}
                    </span>
                ))}
                <h1 className="text-left text-3xl md:text-4xl font-bold mb-3 font-serif">{news.title}</h1>
                {news.stocks.map((stock, index) => (
                    <span key={index} className="inline-block bg-[#2ECC40]/20 text-[#2ECC40] px-3 py-2 rounded-full text-[10px] font-medium mr-3 mb-4">
                        {stock}
                    </span>
                ))}

                {news.imageUrl && (
                    <div className="w-full max-h-[500px] overflow-hidden mb-8 rounded-lg">
                        <img 
                            src={`https://${import.meta.env.VITE_AWS_BUCKET_NAME}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${news.imageUrl}`}
                            alt={news.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                <div className="text-white mb-12 font-medium text-left"> 
                    <span>{news.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(news.date).toLocaleDateString()}</span>
                </div>

                <div className="prose prose-lg max-w-none prose-invert font-serif text-gray-200 text-justify pb-30">
                    {news.content.split('\n').map((paragraph, index) => (
                        <p key={index} className="tracking-wide leading-8">{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;