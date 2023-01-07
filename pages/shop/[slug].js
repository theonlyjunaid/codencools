import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";

function Slug() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Navbar />
      <div className="mt-6">
        <h1 className="text-5xl text-center underline underline-offset-8">Shop Name</h1>
        <div className="shop-head grid grid-cols-2 justify-center items-center">
          <div className="shop-img">
            <img
              src="https://thumbs.dreamstime.com/b/shop-building-colorful-isolated-white-33822015.jpg"
              className=""
              alt="Reload please ..."
            />
          </div>
          <div className="shop-about">
            <div className="shop-about-head text-3xl font-semibold text-center mb-4 underline-offset-4 underline">About Us</div>
            <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum eius ipsum, vitae, officiLink omnis eveniet animi expeditLink nobis quasi eaque voluptatum illum amet architecto reprehenderit et inventore harum in. Cupiditate doloribus aut fugiat molestias perspiciatis consequatur reprehenderit sit minus? Incidunt, doloribus necessitatibus sapiente optio odit praesentium cum sed numquam ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut consectetur aliquam eLink perferendis solutLink at temporLink assumenda. AssumendLink laudantium quiLink laboriosam architecto similique repellendus eum ipsum? Consectetur temporLink inventore esse totam dolorem similique eos. Blanditiis dolor et ipsam deleniti quasi temporibus temporLink dolore hic repellat culpLink laudantium, mollitia, veniam laborum at minus delectus nulla? Neque illum fugLink enim provident!</p>
          </div>
        </div>

        <div className="shop-prod-head text-center pb-4">
          <h1 className="text-5xl underline underline-offset-8 py-4">Our Products</h1>
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
      <Footer />
    </>
  );
}

export default Slug;
