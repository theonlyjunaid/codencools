

import Document from "./_document"


import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
  <Navbar/>
      <div className='bg-gray-300'>
  
        <section className="bg-gray-300 mb-7 md:mb-10">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Prebook everything...</h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Now you can prebook everything before you leave from home</p>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-700">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-blue-500 hover:bg-blue-300 hover:border-transparent  rounded-lg">
                Speak to Sales
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src="shop.png" alt="mockup" className='w-[420px]' />
            </div>
          </div>
        </section>

      </div>


      <section className="text-gray-600 body-font mb-7 md:mb-10">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Every minute is precious</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Next time, whenever you leave from home to buy something, don't forget to pre-book your items at a nearby shop to save your precious time and have a whole new experience</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x360/?vegatables" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-blue-500 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-100 mb-3">Fresh Veggies</h1>
                  <p className="leading-relaxed text-white">All the marts and shops selling super fresh veggies are listed here</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x360/?bakery" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-red-500 opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-gray-100 mb-3">Dairy & Bakery</h1>
                  <p className="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x360/?snacks" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-purple-500 opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-gray-100 mb-3">Snacks & Branded Foods</h1>
                  <p className="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x360/?beverage" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-green-500 opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-gray-100 mb-3">Beverages</h1>
                  <p className="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x360/?medicine" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-500 opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-gray-100 mb-3">Medicine</h1>
                  <p className="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x360/?sweets" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-teal-500 opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-gray-100 mb-3">Sweets</h1>
                  <p className="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      <Footer/>

    </>
  );
}
