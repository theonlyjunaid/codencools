
import multer from 'multer';

async function handler(req, res) {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/images')
        },
        filename: function (req, file, cb) {
            // const name = file.originalname.split(".")
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
    }
    console.log(req.file)
    return res.json({ message: 'Hello Everyone!' })
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler