import React from "react";

const Main = () => {
  const items = [
    {
      "id": "001",
      "image": "images/1.jpg",
      "company": "Carlton London",
      "item_name": "Rhodium-Plated CZ Floral Studs",
      "original_price": 1045,
      "current_price": 606,
      "discount_percentage": 42,
      "return_period": 14,
      "delivery_date": "10 Oct 2023",
      "rating": { stars: 4.5, count: 1400 },
    },
    {
      "id": "002",
      "image": "images/2.jpg",
      "company": "CUKOO",
      "item_name": "Women Padded Halter Neck Dress",
      "original_price": 2599,
      "current_price": 1507,
      "discount_percentage": 42,
      "return_period": 14,
      "delivery_date": "10 Oct 2023",
      "rating": { stars: 4.3, count: 24 },
    },
    {
      "id": "003",
      "image": "images/3.jpg",
      "company": "NUEVOSDAMAS",
      "item_name": "Women Red & White Printed A-Line",
      "original_price": 1599,
      "current_price": 495,
      "discount_percentage": 69,
      "return_period": 14,
      "delivery_date": "10 Oct 2023",
      "rating": { stars: 4.1, count: 249 },
    },
    
    {
      "id": "004",
      "image": "images/4.jpg",
      "company": "ADIDAS",
      "item_name": "Indian Cricket ODI Jersey",
      "original_price": 999,
      "current_price": 999,
      "discount_percentage": 0,
      "return_period": 14,
      "delivery_date": "10 Oct 2023",
      "rating": { stars: 5, count: 10 },
    },
    {
      "id": "005",
      "image": "images/5.jpg",
      "company": "Roadster",
      "item_name": "Pure Cotton T-shirt",
      "original_price": 1399,
      "current_price": 489,
      "discount_percentage": 65,
      "return_period": 14,
      "delivery_date": "10 Oct 2023",
      "rating": { stars: 4.2, count: 3500 },
    },
    {
      "id": "006",
      "image": "images/6.jpg",
      "company": "Nike",
      "item_name": "Men ReactX Running Shoes",
      "original_price": 14995,
      "current_price": 14995,
      "discount_percentage": 0,
      "return_period": 14,
      "delivery_date": "10 Oct 2023",
      "rating": { stars: 0, count: 0 },
    },
    {
      "id": "007",
      "image": "images/7.jpg",
      "company": "The Indian Garage Co",
      "item_name": "Men Slim Fit Regular Shorts",
      "original_price": 1599,
      "current_price": 639,
      "discount_percentage": 60,
      "rating": { stars: 4.2, count: 388 },
    },
    {
      "id": "008",
      "image": "images/8.jpg",
      "company": "Nivea",
      "item_name": "Men Fresh Deodrant 150ml",
      "original_price": 285,
      "current_price": 142,
      "discount_percentage": 50,
      "return_period": 14,
      "delivery_date": "10 Oct 2023",
      "rating": { stars: 4.2, count: 5200 },
    },
  ];
  return (
    <ul className="grid  mt-10 mb-10 pl-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {items.map((item) => (
        <li key={item.id}>
          <img src={item.image} alt={item.item_name} className="h-80 rounded-md"/>
          <p className="font-bold">{item.item_name}</p>
          <p className="font-semibold">Company: {item.company}</p>
          <p className="font-semibold">Original Price: {item.original_price}</p>
          <p className="font-semibold">Current Price: {item.current_price}</p>
          <p className="font-semibold">Rating: {item.rating.stars} stars ({item.rating.count} reviews)</p>
          <div className="flex gap-2 ml-10 mt-2 ">
          <button className="bg-green-400 p-2 rounded-3xl">Add(+)</button>
          <button className="bg-red-400 p-2 rounded-3xl">Delete(-)</button>
          </div>
        </li>
      ))}
      
    </ul>
  );
};

export default Main;
