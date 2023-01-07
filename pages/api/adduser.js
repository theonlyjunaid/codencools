import User from "../../model/User";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email } = req.body;
        let user = await User.findOne({ email: email });
        if (user) {
            res.status(400).json({ success: false, message: 'User already exists' });
        } else {
            try {
            let u = new User({ name, email, password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString() });
            await u.save();
            res.status(200).json({ success: true, message: 'Account Created successfully Now you can login' });
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false, message: 'Something went wrong' });
            }
        }
    }
    else {
        res.status(400).json({ message: 'This method is not allowed' });
    }
}

export default connectDB(handler);
