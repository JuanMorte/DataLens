import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: 'DataLens Research Team'
    },
    date: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    stocks: [{
        type: String,
        required: true
    }],
    tags: [{
        type: String,
        required: true
    }],
    imageurl: {
        type: String,
        required: true
    }
})

export default mongoose.model('News', newsSchema)