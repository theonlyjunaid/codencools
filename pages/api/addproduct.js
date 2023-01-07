import Product from "../../model/Product";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === 'POST') {


            let oldproduct = await Product.findOne({ slug: req.body.slug });
            if (!oldproduct) {
                try {
                    const product = new Product({
                        name: req.body.name,
                        slug: req.body.name + '-' + req.body.varient+ '-' + req.body.category,
                        img: req.body.img,
                        basseprice: req.body.baseprice,
                        sellprice: req.body.sellprice,
                        varient: req.body.varient,
                        category: req.body.category,
                        stock: req.body.stock,
                        sellername: req.body.sellername,
                        selleremail: req.body.selleremail,
                        description: req.body.description,
                     
                    });
                    const newProduct = await product.save();
                    res.status(201).json({success:true, message: 'Product added successfully'});
                } catch (error) {
                    res.status(400).json({ message: error.message });
                }
            } else {
                res.status(400).json({success:false, message: 'Product already exists' });
            }

    }
    else {
        res.status(400).json({ success: false, message: 'This method is not allowed' });
    }

}

export default connectDB(handler);
