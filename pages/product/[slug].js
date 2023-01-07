import { useRouter } from "next/router";
import Link from "next/link";

function Slug() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <div className="mt-6">
        <h1 className="text-5xl text-center underline underline-offset-8">Product Name</h1>
        <div className="shop-head grid grid-cols-2 justify-center items-center">
          <div className="shop-img">
            <img
              src="https://thumbs.dreamstime.com/b/shop-building-colorful-isolated-white-33822015.jpg"
              className=""
              alt="Reload please ..."
            />
          </div>
          <div className="shop-about max-w-xl">
            <div className="shop-about-head text-3xl font-semibold underline-offset-4">Product Name (Price - $520)</div>
            <p className="text-sm mb-4">Category</p>
            <p className="text-lg pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum eius ipsum, vitae, officiLink omnis eveniet animi.</p>
            <p className="text-lg pb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum eius ipsum, vitae, officiLink omnis eveniet animi.</p>
            <p className="text-lg pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum eius ipsum, vitae, officiLink omnis eveniet animi.</p>
            <p className="text-lg pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum eius ipsum, vitae, officiLink omnis eveniet animi. <Link href='#' className="p-1 text-[#333] underline">Read more</Link>...</p>
            <div className="btn">
              <button className="bg-gray-800 py-2 px-4 text-white rounded-lg hover:bg-gray-700 mr-4 text-lg">Buy Now</button>
              <button className="border border-gray-800 py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white text-lg">Similar Items</button>
            </div>
          </div>
        </div>

        <div className="shop-prod-head text-center pb-4">
          <h1 className="text-5xl underline underline-offset-8 py-4">More Products</h1>
        </div>
        <div className="shop-products grid grid-cols-4 gap-4 px-6">
          <div className="shop-box max-w-sm border py-2 h-[60vh] rounded-xl">
            <div className="shop-img h-[50%]">
            <Link href='/shop/123/prod/123'>
              <img
                src="https://www.hi5mart.com/image/cache/catalog/Dairy/Amul%20milk-750x750.jpg"
                className="h-full w-full"
                alt="Reload please ..."
              />
            </Link>
            </div>
            <hr />
            <div className="shop-data h-[50%] pt-4 px-4">
              <h1 className="shop-name text-4xl text-center pb-1">
                Product Name
              </h1>
              <p className="shop-category text-sm text-center pb-4">
                Category: Dairy
              </p>
              <p className="shop-about text-md pb-3">
                Lorem, ipsum dolor sit amet consec adipisicing elit. Asperiores
                quam ut quae ipsum dolor.
              </p>
              <div className="flex justify-center items-center">
                <button className="bg-gray-900 text-white font-bold py-2 px-4 rounded-l mr-2">
                  -
                </button>
                <p className="mr-2">Product</p>
                <button className="bg-gray-900 text-white font-bold py-2 px-4 rounded-r mr-2">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="shop-box max-w-sm border py-2 h-[60vh] rounded-xl">
            <div className="shop-img h-[50%]">
            <Link href='/shop/123/prod/123'>
              <img
                src="https://www.hi5mart.com/image/cache/catalog/Dairy/Amul%20milk-750x750.jpg"
                className="h-full w-full"
                alt="Reload please ..."
              />
            </Link>
            </div>
            <hr />
            <div className="shop-data h-[50%] pt-4 px-4">
              <h1 className="shop-name text-4xl text-center pb-1">
                Product Name
              </h1>
              <p className="shop-category text-sm text-center pb-4">
                Category: Dairy
              </p>
              <p className="shop-about text-md pb-3">
                Lorem, ipsum dolor sit amet consec adipisicing elit. Asperiores
                quam ut quae ipsum dolor.
              </p>
              <div className="flex justify-center items-center">
                <button className="bg-gray-900 text-white font-bold py-2 px-4 rounded-l mr-2">
                  -
                </button>
                <p className="mr-2">Product</p>
                <button className="bg-gray-900 text-white font-bold py-2 px-4 rounded-r mr-2">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="shop-box max-w-sm border py-2 h-[60vh] rounded-xl">
            <div className="shop-img h-[50%]">
            <Link href='/shop/123/prod/123'>
              <img
                src="https://www.hi5mart.com/image/cache/catalog/Dairy/Amul%20milk-750x750.jpg"
                className="h-full w-full"
                alt="Reload please ..."
              />
            </Link>
            </div>
            <hr />
            <div className="shop-data h-[50%] pt-4 px-4">
              <h1 className="shop-name text-4xl text-center pb-1">
                Product Name
              </h1>
              <p className="shop-category text-sm text-center pb-4">
                Category: Dairy
              </p>
              <p className="shop-about text-md pb-3">
                Lorem, ipsum dolor sit amet consec adipisicing elit. Asperiores
                quam ut quae ipsum dolor.
              </p>
              <div className="flex justify-center items-center">
                <button className="bg-gray-900 text-white font-bold py-2 px-4 rounded-l mr-2">
                  -
                </button>
                <p className="mr-2">Product</p>
                <button className="bg-gray-900 text-white font-bold py-2 px-4 rounded-r mr-2">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="shop-box max-w-sm border py-2 h-[60vh] rounded-xl">
            <div className="shop-img h-[50%]">
            <Link href='/shop/123/prod/123'>
              <img
                src="https://www.hi5mart.com/image/cache/catalog/Dairy/Amul%20milk-750x750.jpg"
                className="h-full w-full"
                alt="Reload please ..."
              />
            </Link>
            </div>
            <hr />
            <div className="shop-data h-[50%] pt-4 px-4">
              <h1 className="shop-name text-4xl text-center pb-1">
                Product Name
              </h1>
              <p className="shop-category text-sm text-center pb-4">
                Category: Dairy
              </p>
              <p className="shop-about text-md pb-3">
                Lorem, ipsum dolor sit amet consec adipisicing elit. Asperiores
                quam ut quae ipsum dolor.
              </p>
              <div className="flex justify-center items-center">
                <button className="bg-gray-900 text-white font-bold py-2 px-4 rounded-l mr-2">
                  -
                </button>
                <p className="mr-2">Product</p>
                <button className="bg-gray-900 text-white font-bold py-2 px-4 rounded-r mr-2">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="shop-box max-w-sm border py-2 h-[60vh] rounded-xl">
            <div className="shop-img h-[50%]">
            <Link href='/shop/123/prod/123'>
              <img
                src="https://www.hi5mart.com/image/cache/catalog/Dairy/Amul%20milk-750x750.jpg"
                className="h-full w-full"
                alt="Reload please ..."
              />
            </Link>
            </div>
            <hr />
            <div className="shop-data h-[50%] pt-4 px-4">
              <h1 className="shop-name text-4xl text-center pb-1">
                Product Name
              </h1>
              <p className="shop-category text-sm text-center pb-4">
                Category: Dairy
              </p>
              <p className="shop-about text-md pb-3">
                Lorem, ipsum dolor sit amet consec adipisicing elit. Asperiores
                quam ut quae ipsum dolor.
              </p>
              <div className="flex justify-center items-center">
                <button className="bg-gray-900 text-white font-bold py-2 px-4 rounded-l mr-2">
                  -
                </button>
                <p className="mr-2">Product</p>
                <button className="bg-gray-900 text-white font-bold py-2 px-4 rounded-r mr-2">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="shop-box max-w-sm border py-2 h-[60vh] rounded-xl">
            <div className="shop-img h-[50%]">
            <Link href='/shop/123/prod/123'>
              <img
                src="https://www.hi5mart.com/image/cache/catalog/Dairy/Amul%20milk-750x750.jpg"
                className="h-full w-full"
                alt="Reload please ..."
              />
            </Link>
            </div>
            <hr />
            <div className="shop-data h-[50%] pt-4 px-4">
              <h1 className="shop-name text-4xl text-center pb-1">
                Product Name
              </h1>
              <p className="shop-category text-sm text-center pb-4">
                Category: Dairy
              </p>
              <p className="shop-about text-md pb-3">
                Lorem, ipsum dolor sit amet consec adipisicing elit. Asperiores
                quam ut quae ipsum dolor.
              </p>
              <div className="flex justify-center items-center">
                <button className="bg-gray-900 text-white font-bold py-2 px-4 rounded-l mr-2">
                  -
                </button>
                <p className="mr-2">Product</p>
                <button className="bg-gray-900 text-white font-bold py-2 px-4 rounded-r mr-2">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slug;
