
function Dishes(){


const dishes=[{
    dishimage:"https://cdn.loveandlemons.com/wp-content/uploads/2021/05/scrambled-eggs-1.jpg",
    dishname:"Biriyani",
    dishprice:"230",
    dishrating:"good"
},
{
    dishimage:"https://cdn.loveandlemons.com/wp-content/uploads/2021/05/scrambled-eggs-1.jpg",
    dishname:"Egg-Rice",
    dishprice:"180",
    dishrating:"good"
},{
    dishimage:"https://cdn.loveandlemons.com/wp-content/uploads/2021/05/scrambled-eggs-1.jpg",
    dishname:"Chicken-Rice",
    dishprice:"200",
    dishrating:"good"
},{
    dishimage:"https://cdn.loveandlemons.com/wp-content/uploads/2021/05/scrambled-eggs-1.jpg",
    dishname:"Fried-Chicken",
    dishprice:"120",
    dishrating:"good"
},{
    dishimage:"https://cdn.loveandlemons.com/wp-content/uploads/2021/05/scrambled-eggs-1.jpg",
    dishname:"Tandoori",
    dishprice:"360",
    dishrating:"good"
},{
    dishimage:"https://cdn.loveandlemons.com/wp-content/uploads/2021/05/scrambled-eggs-1.jpg",
    dishname:"Grill-Chicken",
    dishprice:"320",
    dishrating:"good"
},{
    dishimage:"https://sdmntprnortheu.oaiusercontent.com/files/00000000-76dc-61f4-af73-d62d4f4420a2/raw?se=2025-08-20T17%3A19%3A37Z&sp=r&sv=2024-08-04&sr=b&scid=74392370-d86e-5b49-9dca-c91949d8e8f4&skoid=5c72dd08-68ae-4091-b4e1-40ccec0693ae&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-19T21%3A52%3A59Z&ske=2025-08-20T21%3A52%3A59Z&sks=b&skv=2024-08-04&sig=SGJNAeucTjy0lhMGgzWd5vqDYbNoNvLu2xYtKex53AE%3D",
    dishname:"Chicken-Tikka",
    dishprice:"120",
    dishrating:"good"
},{
    dishimage:"https://cdn.loveandlemons.com/wp-content/uploads/2021/05/scrambled-eggs-1.jpg",
    dishname:"Panner-Roast",
    dishprice:"120",
    dishrating:"good"
}]
    return(
            <div className="bg-greeny grid lg:grid-cols-4 -z-0 md:grid-cols-3 sm:grid-cols-2 justify-center p-20  ">

{dishes.map((item,index)=>(
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden w-64 transform-transition duration-300 mt-20 hover:scale-110">
    <img src={item.dishimage}
         alt={item.dishname} 
         class="w-full h-40 object-cover"/>
    <div class="p-4">
      <h2 class="text-lg font-semibold text-gray-800">{item.dishname}</h2>
      <p class="text-gray-500 text-sm">{item.dishprice}</p>
      <p class="text-green-600 font-medium">{item.dishrating}</p>
    </div>
  </div>

))}


        </div>
    );  

}
export default Dishes
