import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function checkout() {
  return (
    <div>

        <div className="checkout px-24">
            <div className="check-head py-12">
                <h1 className="text-center text-5xl mb-2">Checkout</h1>
                <p className="text-center text-xl">Complete your purchase</p>
            </div>
            <div className="cheack-info pb-10">
                <p className="text-xl mb-6">Personal Details</p>
                <div className="input mb-4">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" className="p-2 border w-full" name="email"/>
                </div>
                <div className="input mb-4">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="p-2 border w-full" name="name"/>
                </div>
                <div className="input mb-4">
                    <label htmlFor="email">Contact Number</label>
                    <input type="text" className="p-2 border w-full" name="phone"/>
                </div>
                <div className="input mb-4">
                    <label htmlFor="address">Address:</label>
                    <textarea name="address" className="border w-full h-48"></textarea>
                </div>
                <button className="btn w-full bg-gray-800 hover:bg-gray-700 p-2 py-3 text-white rounded-lg">Proceed to Checkout 👜</button>
            </div>
        </div>

    </div>
  )
}

export default checkout
