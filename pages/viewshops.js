import Link from 'next/link'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function viewshops() {
    const shops = ['Item 1','Item 2','Item 3','Item 4', 'Item 1','Item 2','Item 3','Item 4']
    const shopsList = []
    shops.forEach(() => {shopsList.push(
        <Link href='/shop/123' className="shop-box max-w-sm border py-2 h-[60vh] rounded-xl">
            <div className="shop-img h-[50%]">
                <img src="https://thumbs.dreamstime.com/b/shop-building-colorful-isolated-white-33822015.jpg" className='h-full' alt="Reload please ..." />
            </div> <hr />
            <div className="shop-data h-[50%] pt-4 px-4">
                <h1 className="shop-name text-4xl text-center pb-1">Shop Name</h1>
                <p className="shop-category text-sm text-center pb-4">Category: Cosmetics</p>
                <p className="shop-about text-md pb-3">Lorem, ipsum dolor sit amet consec adipisicing elit. Asperiores quam ut quae ipsum dolor.</p>
                <p className="shop-products pb-3">
                    <span className="border py-1 px-2 bg-gray-800 ml-2 rounded-lg text-white pb-2">Cream</span>
                    <span className="border py-1 px-2 bg-gray-800 ml-2 rounded-lg text-white pb-2">Shampoo</span>
                    <span className="border py-1 px-2 bg-gray-800 ml-2 rounded-lg text-white pb-2">Balm</span>
                    <span className="border py-1 px-2 bg-gray-800 ml-2 rounded-lg text-white pb-2">Cream</span>
                </p>
                <p className="shop-time pb-2 text-center">Open: 10:00 A.M. - 11:00 P.M.</p>
            </div>
        </Link>
    ) })

  return (
    <>
        <Navbar/>
        <div className="shops">
            <div className="shops-head py-2">
                <h1 className="text-2xl text-center">These are trending shops near you ...</h1>
            </div>
            <div className="shops-box grid grid-cols-4 gap-4 p-6">
                {shopsList}
            </div>
        </div>
        <Footer/>
    </>    
  )
}
