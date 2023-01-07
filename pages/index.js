

import Document from "./_document"


import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />



      <section className='mb-20'>

        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://source.unsplash.com/800x350/?macbook" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
            <div className='px-6 py-3 bg-gray-900 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg z-10 absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
              <h1 className="text-5xl mb-3 text-white">Weekly Sell: 343</h1>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
                Buy Now
              </button>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://source.unsplash.com/800x350/?laptop" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
              <div className='px-6 py-3 bg-gray-900 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg z-10 absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
                <h1 className="text-5xl mb-3 text-white">Weekly Sell: 487</h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://source.unsplash.com/800x350/?headphones" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
            <div className='px-6 py-3 bg-gray-900 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg z-10 absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
              <h1 className="text-5xl mb-3 text-white">Weekly Sell: 109</h1>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
                Buy Now
              </button>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://source.unsplash.com/800x350/?mobile" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
            <div className='px-6 py-3 bg-gray-900 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg z-10 absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
              <h1 className="text-5xl mb-3 text-white">Weekly Sell: 91</h1>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <h2 className='text-5xl text-center mt-2 mb-7'>Trending Products of the week</h2>
      </section>





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
                  <div className='mt-3 flex justify-around items-center'>
                    <span className='text-3xl text-gray-800'>$99</span>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-500 hover:bg-red-700">
                      Buy Now
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x360/?bakery" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-red-500 opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-gray-100 mb-3">Dairy & Bakery</h1>
                  <p className="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className='mt-3 flex justify-around items-center'>
                    <span className='text-3xl text-gray-800'>$99</span>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-700">
                      Buy Now
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x360/?snacks" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-purple-500 opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-gray-100 mb-3">Snacks & Branded Foods</h1>
                  <p className="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>

                  <div className='mt-3 flex justify-around items-center'>
                    <span className='text-3xl text-gray-800'>$99</span>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-700">
                      Buy Now
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x360/?beverage" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-green-500 opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-gray-100 mb-3">Beverages</h1>
                  <p className="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className='mt-3 flex justify-around items-center'>
                    <span className='text-3xl text-gray-800'>$99</span>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-700">
                      Buy Now
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x360/?drinks" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-rose-500 opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-gray-100 mb-3">Medicine</h1>
                  <p className="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className='mt-3 flex justify-around items-center'>
                    <span className='text-3xl text-gray-800'>$99</span>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-700">
                      Buy Now
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x360/?medicine" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-500 opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-gray-100 mb-3">Medicine</h1>
                  <p className="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className='mt-3 flex justify-around items-center'>
                    <span className='text-3xl text-gray-800'>$99</span>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-700">
                      Buy Now
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x360/?medicine" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-500 opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-gray-100 mb-3">Medicine</h1>
                  <p className="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className='mt-3 flex justify-around items-center'>
                    <span className='text-3xl text-gray-800'>$99</span>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-700">
                      Buy Now
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x360/?medicine" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-500 opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-gray-100 mb-3">Medicine</h1>
                  <p className="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className='mt-3 flex justify-around items-center'>
                    <span className='text-3xl text-gray-800'>$99</span>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-700">
                      Buy Now
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/600x360/?sweets" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-teal-500 opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-gray-100 mb-3">Sweets</h1>
                  <p className="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className='mt-3 flex justify-around items-center'>
                    <span className='text-3xl text-gray-800'>$99</span>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-700">
                      Buy Now
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />

    </>
  );
}
