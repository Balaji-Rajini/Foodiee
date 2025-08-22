import React from "react";
import { useLocation ,Link} from "react-router-dom";

export default function Checkout() {
  const location = useLocation();
  const { cartItems = [] } = location.state || {}; // items passed from cart page

  // calculate total price
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>

        {cartItems.length === 0 ? (<>          <p className="text-gray-500">Your cart is empty.</p>
<Link to={"/dishes"} className="bg-greeny text-white border rounded-lg  p-4 ml-60" >Grab Your Dishes Now..</Link></>

        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div>
                    <p className="text-lg font-semibold text-gray-700">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.quantity} x ₹{item.price}
                    </p>
                  </div>
                  <p className="text-lg font-bold text-gray-800">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <h2 className="text-xl font-semibold text-gray-800">Total</h2>
              <h2 className="text-xl font-bold text-green-600">₹{total}</h2>
            </div>

            {/* Place Order Button */}
            <button
              className="w-full mt-6 bg-green-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-600 transition"
              onClick={() => alert("Order Placed Successfully!")}
            >
              Place Order
            </button>
            
          </>
         
        )}
      </div>
      
    
      

</div>


      );
}


