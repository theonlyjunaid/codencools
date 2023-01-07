import Bid from "../../model/Bid";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === 'POST') {
const {useremail,username,message,selleremail,sellername,productslug} = req.body;
        if (!useremail || !username || !message|| !selleremail|| !sellername|| !productslug) {
            return res.status(422).json({ message: 'Invalid email address' });
        }
        try {
            const bid = new Bid({
                useremail: useremail,
                username: username,
                selleremail: selleremail,
                sellername: sellername,
                message: message,
                productslug: productslug,
            });
            await bid.save();
            res.status(201).json({ success: true, message: 'we have recieved your query our team will Bid you shortly' });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Something went wrong' });
        }

    }
    else {
        res.status(400).json({ success: false, message: 'This method is not allowed' });
    }
}

export default connectDB(handler);
