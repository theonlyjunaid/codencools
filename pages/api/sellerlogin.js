import Seller from "../../model/Seller";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


const handler = async (req, res) => {
    if (req.method === 'POST') {
        let seller = await Seller.findOne({ email: req.body.email });
        if (seller) {
            const bytes = CryptoJS.AES.decrypt(seller.password, process.env.SECRET_KEY);
            let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
            if (req.body.email === seller.email && req.body.password === decryptedPassword) {
                let token = jwt.sign({ name: seller.name, email: seller.email }, process.env.JWT_SECRET, { expiresIn: '2d' });
                res.status(200).json({ success: true, token, email: seller.email,name:seller.name });
            }
            else {
                res.status(200).json({ success: false, error: 'Invalid credentials' });
            }
        }
        else {
            res.status(400).json({ success: false, error: 'Invalid credentials' });
        }
    }
    else {
        res.status(400).json({ success: false, error: 'This Method Is not allowed' });
    }
}
export default connectDB(handler);
