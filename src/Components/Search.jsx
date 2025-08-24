import Dishes from "./Dishes";
import { useState } from "react";


const dishes = [
    { dishimage:"https://www.bing.com/th/id/OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa?w=207&h=211&c=8&rs=1&qlt=90&r=0&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2   ", dishname:"Biriyani", dishprice:230, dishrating:"good" },
    { dishimage:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/egg-fried-rice-recipe.jpg", dishname:"Egg-Rice", dishprice:180, dishrating:"good" },
    { dishimage:"https://www.kannammacooks.com/wp-content/uploads/street-style-chicken-rice-recipe-1-3.jpg", dishname:"Chicken-Rice", dishprice:200, dishrating:"good" },
    { dishimage:"https://tornadoughalli.com/wp-content/uploads/2022/01/GRANDMAS-FRIED-CHICKEN-RECIPE-2-1.jpg", dishname:"Fried-Chicken", dishprice:120, dishrating:"good" },
    { dishimage:"https://tse2.mm.bing.net/th/id/OIP.0GdTSfr1tFAY1xVoraAX6wHaF6?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3", dishname:"Tandoori", dishprice:360, dishrating:"good" },
    { dishimage:"https://tse2.mm.bing.net/th/id/OIP.0GdTSfr1tFAY1xVoraAX6wHaF6?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3", dishname:"Grill-Chicken", dishprice:320, dishrating:"good" },
    { dishimage:"https://www.kannammacooks.com/wp-content/uploads/street-style-chicken-rice-recipe-1-3.jpg", dishname:"Chicken-Tikka", dishprice:120, dishrating:"good" },
    { dishimage:"https://www.bing.com/th/id/OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa?w=207&h=211&c=8&rs=1&qlt=90&r=0&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2  ", dishname:"Panner-Roast", dishprice:120, dishrating:"good" }
  , { dishimage:"https://tornadoughalli.com/wp-content/uploads/2022/01/GRANDMAS-FRIED-CHICKEN-RECIPE-2-1.jpg", dishname:"Biriyani", dishprice:230, dishrating:"good" },
    { dishimage:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/egg-fried-rice-recipe.jpg", dishname:"Egg-Rice", dishprice:180, dishrating:"good" },
    { dishimage:"https://tornadoughalli.com/wp-content/uploads/2022/01/GRANDMAS-FRIED-CHICKEN-RECIPE-2-1.jpg", dishname:"Chicken-Rice", dishprice:200, dishrating:"good" },
    { dishimage:"https://www.kannammacooks.com/wp-content/uploads/street-style-chicken-rice-recipe-1-3.jpg", dishname:"Fried-Chicken", dishprice:120, dishrating:"good" },
    { dishimage:"https://www.bing.com/th/id/OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa?w=207&h=211&c=8&rs=1&qlt=90&r=0&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2  ", dishname:"Tandoori", dishprice:360, dishrating:"good" },
    { dishimage:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/egg-fried-rice-recipe.jpg", dishname:"Grill-Chicken", dishprice:320, dishrating:"good" },
    { dishimage:"https://tornadoughalli.com/wp-content/uploads/2022/01/GRANDMAS-FRIED-CHICKEN-RECIPE-2-1.jpg", dishname:"Chicken-Tikka", dishprice:120, dishrating:"good" },
    { dishimage:"https://www.kannammacooks.com/wp-content/uploads/street-style-chicken-rice-recipe-1-3.jpg", dishname:"Panner-Roast", dishprice:120, dishrating:"good" }
  ];

function Search() {

const [searchTerm, setSearchTerm] = useState("");

    const filteredDishes = dishes.filter((dish) =>
        dish.dishname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (<div className="p-4 pt-16 z-10">
        <input type="text" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
            id="search" placeholder=" 🔎Search the Dishes That Craved You ... "
            className="  p-2 fixed  placeholder-black  text-center top-24 border rounded-md border-accent z-1
        bg-greeny text-dark    mt-16 backdrop-blur  w-1/2  left-1/4  md:w-1/2 transform-translate-x-1/2 transform-transition duration-300 hover:scale-125 "/>
    

 <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredDishes.length > 0 ? (
          filteredDishes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden w-64 hover:scale-105 transition mx-auto"
            >
              <img
                src={item.dishimage}
                alt={item.dishname}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.dishname}
                </h2>
                <p className="text-gray-500 text-sm">₹{item.dishprice}</p>
                <p className="text-green-600 font-medium">{item.dishrating}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-red-500 font-semibold">
            No dishes found
          </p>
        )}
      </div>
    </div>

  );

} export default Search