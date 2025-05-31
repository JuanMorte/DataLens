import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ index }) => {
    const navigate = useNavigate();
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch(`http://https://datalens-32py.onrender.com/api/news/${index}`);
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
    }, [index]);

    if (loading) return <div className="animate-pulse bg-gray-700 rounded-lg h-96"></div>;
    if (error) return null;
    if (!news) return null;

    return (
        <div
              className="flex flex-col justify-between h-140 bg-[#1a2c30]/50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            {news.imageurl && (
                <div className="w-full h-48 overflow-hidden">
                    <img 
                        src={`https://${import.meta.env.VITE_AWS_BUCKET_NAME}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${news.imageurl}`}
                        alt={news.title}
                        className="w-full h-full object-cover"
                    />
                </div> 
            )}
            <div className="p-6">
                <div className="flex gap-2 mb-3 ">
                    {news.tags.map((tag, index) => (
                        <span key={index} 
                              className="px-2 py-1 bg-[#2ECC40]/20 text-[#2ECC40] text-[12px] rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                
                <h5 className="text-[16px] font-bold mb-2 text-white">{news.title}</h5>
                
                <p className="text-gray-300 mb-4 line-clamp-3 text-[14px]">
                    {news.content}
                </p>
                
                <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-400">
                        <span>{news.author}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(news.date).toLocaleDateString()}</span>
                    </div>
                </div>
                    
                <div className="flex gap-2 mt-5 ">
                    {news.stocks?.map((stock, index) => (
                        <span key={index} 
                                className="px-2 py-1 bg-[#2ECC40]/20 text-[#2ECC40] text-sm rounded-full text-center text-[10px]">
                            {stock}
                        </span>
                    ))}
                </div>
            </div>
            <div className="pb-4 px-5 flex justify-center">
                <button onClick={() => navigate(`${news.slug}`)} className='block w-full justify-center  bg-[#2ECC40] hover:bg-[#29B737] text-black font-medium px-5 py-2 rounded-lg transition-colors'>
                     Read More
                </button>
            </div>
            
        </div>
    );
};

export default NewsCard;