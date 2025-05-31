import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AllNews = () => {
    const navigate = useNavigate();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllNews = async () => {
            try {
                const res = await fetch('http://https://datalens-32py.onrender.com/api/news');
                const data = await res.json();
                if (!res.ok) throw new Error(data.error);
                setNews(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAllNews();
    }, []);

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

    return (
        <div className="w-screen px-70 py-8 bg-gradient-to-b from-[#1a2c30] to-[#121b1d] text-white min-h-screen">
            <div className="flex items-center justify-between mb-8">
                <button 
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-[#2ECC40] hover:text-[#29B737] transition-colors"
                >
                    <span className="text-xl">←</span>
                    <span className="font-medium">Back</span>
                </button>
                <h1 className="text-[30px] font-bold">All News</h1>
                <div className="w-[100px]"></div> {/* Spacer for alignment */}
            </div>
            
            <div className="space-y-6">
                {news.map((item) => (
                    <div key={item._id} 
                         className="flex bg-[#1a2c30]/50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                        {item.imageurl && (
                            <div className="w-[250px] h-[300px]">
                                <img 
                                    src={`https://${import.meta.env.VITE_AWS_BUCKET_NAME}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${item.imageurl}`}
                                    alt={item.title}
                                    className="w-full h-100 object-cover"
                                />
                            </div>
                        )}
                        
                        <div className="flex-1 p-8">
                            <div className="flex gap-2 mb-4">
                                {item.tags.map((tag, index) => (
                                    <span key={index} 
                                          className="px-3 py-1 bg-[#2ECC40]/20 text-[#2ECC40] text-[12px] rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                            <p className="text-gray-300 mb-6 line-clamp-3">{item.content}</p>
                            
                            <div className="flex items-center gap-6 mb-6">
                                <div className="text-sm text-gray-400">
                                    <span>{item.author}</span>
                                    <span className="mx-2">•</span>
                                    <span>{new Date(item.date).toLocaleDateString()}</span>
                                </div>

                                <div className="flex gap-2">
                                    {item.stocks?.map((stock, index) => (
                                        <span key={index} 
                                              className="px-2 py-1 bg-[#2ECC40]/20 text-[#2ECC40] text-[10px] rounded-full">
                                            {stock}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <Link 
                                to={`/insights/${item.slug}`}
                                className="inline-block bg-[#2ECC40] hover:bg-[#29B737] text-black font-medium px-6 py-2 rounded-lg transition-colors"
                            >
                                Read More →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllNews;