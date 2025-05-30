import express from 'express'
import News from '../models/News.js'

const router = express.Router()

// Get all news
router.get('/', async(req, res) => {
    try {
        const news = await News.find().sort({date:-1})
        res.json(news)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error fetching news'})
    }
})

// Get news by slug
router.get('/:slug', async(req, res) => {
    try{
        const news = await News.findOne({ slug: req.params.slug })
        if (!news) {
            return res.status(404).json({ error: "News not found"})
        } 
        res.json(news)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Error fetching news "})
    }
})

router.get('/api/news', async (req, res) => {
    try {
        const allNews = await News.find()
                                 .sort({ date: -1 })
                                 .exec();
        
        res.json(allNews);
    } catch (error) {
        console.log('Error fetching news:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router