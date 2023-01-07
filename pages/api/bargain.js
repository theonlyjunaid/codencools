import Bid from "../../model/Bid";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { useremail, username, message,sellername,selleremail } = req.body;
        if (!email || !name || !message) {
            return res.status(422).json({ message: 'Invalid email address' });
        }
        try {
            const bid = new Bid({
                email: email,
                name: name,
                phone: phone,
                message: message,
            });
            await bid.save();
            res.status(201).json({ message: 'we have recieved your query our team will Bid you shortly' });
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong' });
        }

    }
    else {
        res.status(400).json({ message: 'This method is not allowed' });
    }
}

export default connectDB(handler);
