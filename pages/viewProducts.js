import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import mongoose from 'mongoose'

import Product from '../model/Product'

export default function viewshops({products}) {
    console.log(products)
   

  return (
    <>

        <div className="shops">
            <div className="shops-head py-2">
                <h1 className="text-2xl text-center">These are trending shops near you ...</h1>
            </div>
            <div className="shops-box grid grid-cols-4 gap-4 p-6">
{
    products.map((product) => {
        return(
            <Link href='/product/123' className="shop-box max-w-sm border py-2 h-[62vh] rounded-xl" key={product}>
                <div className="shop-img h-[50%]">
                    <img src={product.img} className='h-full' alt="Reload please ..." />
                </div> <hr />
                <div className="shop-data h-[50%] pt-4 px-4">
                    <h1 className="shop-name text-4xl text-center pb-1">{product.name}</h1>
                    <p className="shop-category text-sm text-center pb-4">Category: {product.category}</p>
                    <p className="shop-about text-md pb-3">{product.description.slice(0, 50)}</p>
                    {/* <p className="shop-products pb-3">
                        <span className="border py-1 px-2 bg-gray-800 ml-2 rounded-lg text-white pb-2">Cream</span>
                        <span className="border py-1 px-2 bg-gray-800 ml-2 rounded-lg text-white pb-2">Shampoo</span>
                        <span className="border py-1 px-2 bg-gray-800 ml-2 rounded-lg text-white pb-2">Balm</span>
                        <span className="border py-1 px-2 bg-gray-800 ml-2 rounded-lg text-white pb-2">Cream</span>
                    </p> */}
                    <p className="shop-time text-center font-bold pb-3">Price - $300</p>
                </div>
            </Link>
        )
    })
}
            </div>
        </div>

    </>    
  )
}


export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);

    }
   
    let products = await Product.find({  }).lean();

    return {
        props: { products: JSON.parse(JSON.stringify(products))},
    }
}
