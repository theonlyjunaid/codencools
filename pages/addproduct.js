const addproduct = () => {
  return (
    <div> 
        <h1 className="text-4xl mt-10 text-center font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
          Add a Product
        </h1>
        <div className="md:grid md:grid-cols-3 md:gap-6 md:mx-[20%] md:mt-[2%]">
            <div className="mt-5 md:col-span-3 md:mt-0">
              <form action="#" method="POST">
                <div className="shadow-xl sm:overflow-hidden sm:rounded-md">
                  <div className="space-y-6 bg-slate-50 px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <div>
                            <label htmlFor="product"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                            <input type="text" name="product" id="product" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zoxie" required=""/>
                        </div>
                      </div>
                    </div>
  
                    <div>
                    <label htmlFor="product"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder=""
                          defaultValue={''}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief description for your product.
                      </p>
                    </div>
                    <div className="flex flex-row justify-between ">
                        <span className="">
                            <label htmlFor="product"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo</label>
                            <input
                                type="file"
                                className="block text-sm text-gray-400 file:mr-2 file:py-2 file:px-2 file:rounded-md file:border-solid file:border file:border-gray-200 file:text-sm file:bg-white file:text-gray-500 hover:file:bg-gray-100"
                            />
                        </span>
                        <span className="">
                            <div>
                                <label
                                    htmlFor="visitors"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    MRP
                                </label>
                                <input
                                    type="number"
                                    id="visitors"
                                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    required=""
                                />
                            </div>
                        </span>
                        <span className="">
                            <div>
                                <label
                                    htmlFor="visitors"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Base Price
                                </label>
                                <input
                                    type="number"
                                    id="visitors"
                                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    required=""
                                />
                            </div>
                        </span>
                        <span className="">
                        <div>
                            <label
                                htmlFor="visitors"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Quantity (for sale)
                            </label>
                            <input
                                type="number"
                                id="visitors"
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""
                                required=""
                            />
                            </div>

                        </span>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                      <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Add Product
                    </button>
                  </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default addproduct