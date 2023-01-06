import Product from "../../model/Product";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === 'POST') {
            let oldproduct = await Product.findOne({ slug: req.body.slug });
            if (!oldproduct) {
                try {
                    const product = new Product({
                        name: req.body.name,
                        slug: req.body.slug,
                        img: req.body.img,
                        brand: req.body.brand,
                        price: req.body.price,
                        varient: req.body.varient,
                        category: req.body.category,
                        stock: req.body.stock,
                        seller: req.body.seller,
                        description: req.body.description,
                     
                    });
                    const newProduct = await product.save();
                    res.status(201).json(newProduct);
                } catch (error) {
                    res.status(400).json({ message: error.message });
                }
            } else {
                res.status(400).json({ message: 'Product already exists' });
            }

    }
    else {
        res.status(400).json({ message: 'This method is not allowed' });
    }

}

export default connectDB(handler);
