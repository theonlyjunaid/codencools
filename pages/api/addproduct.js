import multer from 'multer';
import connectDB from "../../middleware/mongoose";
import Product from '../../model/Product';

async function handler(req, res) {
    if(req.method === 'POST'){

        let img ;
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/images')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname
            )
        }
    })

    const upload = multer({
        storage: storage
    });

    function runMiddleware(req, res, fn) {
        return new Promise((resolve, reject) => {


            fn(req, res, (result) => {
                if (result instanceof Error) {
                    return reject(result)
                }
                return resolve(result)
            })
        })
    }

    try {
        await runMiddleware(req, res, upload.single("image"))
    } catch (e) {
        /* handle error */
        console.log(e)
        res.status(400).json({ success: false, message: 'Something went wrong 1' });
    }
    // img = req.file?.path.split("/")[1] + "/" + req.file?.path.split("/")[2]
    console.log(req.file)
if(img){

    // const oldProduct = await Product.findOne({ slug: req.body.name+"-"+req.body.category+"-"+req.body.sellername });
if(1){
    const product = new Product({
        // name: req.body.name,
        img: img,
        // slug: req.body.name+"-"+req.body.category+"-"+req.body.sellername,
        // sellprice: req.body.sellprice,
        // baseprice: req.body.baseprice,
        // description: req.body.description,
        // varient: req.body.varient,
        // category: req.body.category,
        // stock: req.body.stock,
        // sellername: req.body.sellername,
        // selleremail: req.body.selleremail,
    });



    try {
        await product.save();
        res.status(200).json({ success: true, message: 'Product Added successfully' });
    }
    catch (e) {
        console.log(e)
        res.status(400).json({ success: false, message: 'Something went wrong' });
    }
}
else{
    res.status(400).json({ success: false, error: 'Product already exists' });
}
}
}
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default connectDB(handler);