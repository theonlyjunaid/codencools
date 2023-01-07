const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },

    sellprice: {
        type: Number,
        required: true,
    },
    basseprice: {
        type: Number,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    img: {
        type: String,
        required: true,
    },

    stock: {
        type: Number,
        required: true,
    },
    sellername: {
        type: String,
        required: true,
        default: 'admin',
    },
    selleremail: {
        type: String,
        required: true,
        default: ''
    },
    varient: {
        type: String,
        required: true,
    },

    rating: {
        type: Number,
    },

    numReviews: {
        type: Number,
    },

    isFeatured: {
        type: Boolean,
    },

}, { timestamps: true });

mongoose.models = {};
export default mongoose.model('Product', ProductSchema);