const mongoose = require('mongoose');

const BidSchema = new mongoose.Schema({
    email: { type: String, required: true },
    selleremail: { type: String, required: true },
    sellername: { type: String, required: true },
    productslug: { type: String, required: true },
    name: { type: String, required: true },
    message: { type: String, required: true },

}, { timestamps: true });
export default mongoose.models.Bid || mongoose.model('Bid', BidSchema);