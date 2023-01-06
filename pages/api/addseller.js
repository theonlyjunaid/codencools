import Seller from "../../model/Seller";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email,description,category } = req.body;
        let seller = await Seller.findOne({ email: email });
        if (seller) {
            res.status(400).json({ success: false, message: 'Seller already exists' });
        } else {
            let u = new Seller({ name, email, password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(), description, category });
            await u.save();
            res.status(200).json({ success: true, message: 'Account Created successfully Now you can login' });
        }
    }
    else {
        res.status(400).json({ message: 'This method is not allowed' });
    }
}

export default connectDB(handler);
