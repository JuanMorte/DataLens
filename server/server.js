import express from 'express';
import cors from 'cors';
import connectDB from './db.js';
import authRoutes from './routes/authRoutes.js';
import newsRoutes from './routes/newsRoutes.js'
import subsRoutes from './routes/subsRoutes.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv'

dotenv.config({ path: '../.env'})

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: ['https://data-lens-one.vercel.app', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
})); 
app.use(express.json());

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes)
app.use('/api', subsRoutes)

app.use(express.static(path.join(__dirname, '..')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Frontend: https://localhost:5173');
    console.log(`Backend API: https://localhost:${PORT}`)
});
});