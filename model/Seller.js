const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'seller' },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    img: {
        type: String,
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
export default mongoose.model('Seller', SellerSchema);