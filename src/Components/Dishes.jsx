import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCart, BsCartFill } from "react-icons/bs";

function Dishes() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const dishes = [
    { dishimage:"https://www.bing.com/th/id/OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa?w=207&h=211&c=8&rs=1&qlt=90&r=0&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2   ", dishname:"Biriyani", dishprice:230, dishrating:"good" },
    { dishimage:"https://www.bing.com/th/id/OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa?w=207&h=211&c=8&rs=1&qlt=90&r=0&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2  ", dishname:"Egg-Rice", dishprice:180, dishrating:"good" },
    { dishimage:"https://www.bing.com/th/id/OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa?w=207&h=211&c=8&rs=1&qlt=90&r=0&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2  ", dishname:"Chicken-Rice", dishprice:200, dishrating:"good" },
    { dishimage:"https://www.bing.com/th/id/OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa?w=207&h=211&c=8&rs=1&qlt=90&r=0&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2  ", dishname:"Fried-Chicken", dishprice:120, dishrating:"good" },
    { dishimage:"https://www.bing.com/th/id/OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa?w=207&h=211&c=8&rs=1&qlt=90&r=0&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2  ", dishname:"Tandoori", dishprice:360, dishrating:"good" },
    { dishimage:"https://www.bing.com/th/id/OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa?w=207&h=211&c=8&rs=1&qlt=90&r=0&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2  ", dishname:"Grill-Chicken", dishprice:320, dishrating:"good" },
    { dishimage:"https://www.bing.com/th/id/OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa?w=207&h=211&c=8&rs=1&qlt=90&r=0&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2  ", dishname:"Chicken-Tikka", dishprice:120, dishrating:"good" },
    { dishimage:"https://www.bing.com/th/id/OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa?w=207&h=211&c=8&rs=1&qlt=90&r=0&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2  ", dishname:"Panner-Roast", dishprice:120, dishrating:"good" }
  ];

  const toggleCart = (dish) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.name === dish.dishname);
      if (exists) {
        // remove if already added
        return prev.filter((item) => item.name !== dish.dishname);
      } else {
        // add with quantity = 1
        return [...prev, { name: dish.dishname, price: dish.dishprice, quantity: 1 }];
      }
    });
  };

  // go to checkout
  const goToCheckout = () => {
    navigate("/checkout", { state: { cartItems: cart } });
  };

  return (
    <div className="p-10 ">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {dishes.map((item, index) => {
          const isInCart = cart.some((c) => c.name === item.dishname);
          const CartIcon = isInCart ? BsCartFill : BsCart;

          return (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden w-64 hover:scale-105 transition">
              <img src={item.dishimage} alt={item.dishname} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{item.dishname}</h2>
                <p className="text-gray-500 text-sm">₹{item.dishprice}</p>
                <p className="text-green-600 font-medium">{item.dishrating}</p>

                <button
                  onClick={() => toggleCart(item)}
                  className={`px-4 py-2 border rounded-lg mt-3 flex items-center gap-2 ${
                    isInCart
                      ? "bg-black text-white border-black"
                      : "bg-greeny text-white border-greeny"
                  }`}
                >
                  {isInCart ? "Remove" : "Add to Cart"}
                  <CartIcon size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Checkout Button */}
      {cart.length > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={goToCheckout}
            className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            Go to Checkout ({cart.length})
          </button>
        </div>
      )}
    </div>
  );
}

export default Dishes;
