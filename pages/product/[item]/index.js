import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import mongoose from "mongoose";
import Product from "../../../model/Product";
import Bargain from "../../../components/Bargain";

function Slug({product,products, addToCart}) {

  const [Bargain, setBargain] = useState(false)
const [bargainprice, setBargainprice] = useState(product.sellprice)
  const handleChange=(e)=>{
    if (e.target.name ==='bargain'){
      setBargainprice(e.target.value)
    }
 
  }
  const handleBargain= async ()=>{
    if(localStorage.getItem('usertoken')===null){
      alert('Please login to send bargain request')
      return
    }
    const res = await fetch('/api/bargain', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productslug:product.slug,
          message:bargainprice,
          sellername:product.sellername,
          selleremail:product.selleremail,
          username:localStorage.getItem('username'),
          useremail:localStorage.getItem('useremail'),
      })
  })
  const json = await res.json()
  if(json.success) {
      console.log('success')
      if(window !== 'undefined') {
          alert('Bargain request sent')
          setBargain(false)
      }


    }
  }
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
            <div className={`w-[300px]  my-4 h-[40px] ${Bargain?"":"hidden"}`}>
              <div className='flex relative '>

                <input type="text" onChange={handleChange} name='bargain' className='border border-black rounded-md w-full h-[40px] px-3' placeholder='recommended price : 299' />
                <div className='bg-green-400 w-max px-1 absolute right-2 my-2 hover:bg-green-500 cursor-pointer rounded-sm fl' onClick={handleBargain}>
                  Send
                </div>
              </div>
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
