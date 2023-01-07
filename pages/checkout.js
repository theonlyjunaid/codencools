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
                <div className="input mb-6">
                    <label htmlFor="email" className='mb-2'>Email Address</label>
                    <input type="text" id='email' className="p-2 border border-gray-400 w-full" name="email"/>
                </div>
                <div className="input mb-6">
                    <label htmlFor="name" className='mb-2'>Name</label>
                    <input type="text" id='name' className="p-2 border border-gray-400 w-full" name="name"/>
                </div>
                <div className="input mb-6">
                    <label htmlFor="contact" className='mb-2'>Contact Number</label>
                    <input type="text" id='contact' className="p-2 border border-gray-400 w-full" name="phone"/>
                </div>
                <div className="input mb-6">
                    <label htmlFor="address" className='mb-2'>Address:</label> 
                    <textarea name="address" id='address' className="border w-full border-gray-400" rows='2'></textarea>
                </div>
                <button className="btn mt-5 w-full bg-gray-800 hover:bg-gray-700 p-2 py-3 text-white rounded-lg">Proceed to Checkout 👜</button>
            </div>
        </div>

    </div>
  )
}

export default checkout
