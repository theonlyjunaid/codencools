import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import mongoose from "mongoose";
import Product from "../../../model/Product";
import Bargain from "../../../components/Bargain";

function Slug({product,products, addToCart}) {

  // const [Bargain, setBargain] = useState(false)
  console.log(products);
  return (
    <>
      <div className="mt-6">
        <div className="shop-head grid grid-cols-2 justify-center items-center">
          <div className="shop-img h-[500px] w-full justify-center flex">
            <img
              src={product.img}
              className="h-full"
              alt="Reload please ..."
            />
          </div>
          <div className="shop-about max-w-xl">
            <div className="shop-about-head text-3xl font-semibold underline-offset-4">{product.name} (Price - ₹{product.sellprice})</div>
            <p className="text-sm mb-4">{product.category}</p>
            <p className="text-lg pb-4">{product.description }</p>

           <div >
              <button onClick={() => addToCart("Slug", 1, 1000, "Product")} className="bg-gray-800 py-2 px-4 text-white rounded-lg hover:bg-gray-700 mr-4 text-lg">Buy Now</button>
              <button className="border border-gray-800 py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white text-lg" onClick={()=>{setBargain(true)}}>Bargain</button>
            </div>
            <div>
<Bargain  />
            </div>
          </div>
        </div>

        <div className="shop-prod-head text-center pb-4 my-10 bg-gray-50">
          <h1 className="text-4xl  py-4">Related Products</h1>
          
           {
              products.map((produc) => (
                <div className="shop-products grid grid-cols-4 gap-4 px-6">
                  <div className="shop-box max-w-sm border py-2 h-[60vh] rounded-xl">
                    <div className="shop-img h-[50%] flex justify-center py-2">
                      <Link href={produc._id}>
                        <img
                          src={produc.img}
                          className="h-full "
                          alt="Reload please ..."
                        />
                      </Link>
                    </div>
                    <hr />
                    <div className="shop-data h-[50%] pt-4 px-4">
                      <h1 className="shop-name text-4xl text-center pb-1">
                       {produc.name}
                      </h1>
                      <p className="shop-category text-sm text-center pb-4">
                        Category: {produc.category}
                      </p>
                      <p className="shop-about text-md pb-3">
                        {produc.description.slice(0,30)}
                      </p>
                   
                    </div>
                  </div>



                </div>
              ))

           }
        </div>
       
      </div>
    </>
  );
}

export default Slug;

//get server side props

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);

  }
  const { item } = context.query;
  let product = await Product.findOne({_id: item});
  product = JSON.parse(JSON.stringify(product));

  let products = await Product.find({category: product.category});
  products = JSON.parse(JSON.stringify(products));

  return {
    props: {
      product: product,
      products: products,
    },
  };
}
