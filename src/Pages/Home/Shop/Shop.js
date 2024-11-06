import React from 'react';

const products = [
  {
    id: 1,
    name: 'Car Seat Covers',
    img: 'https://m.media-amazon.com/images/I/61p+XUWGPIL._SY300_SX300_.jpg',
    price: 29.99,
    description: 'Durable and stylish seat covers for all car models.',
  },
  {
    id: 2,
    name: 'LED Headlights',
    img: 'https://m.media-amazon.com/images/I/81X74EYrEgL._AC_UY327_FMwebp_QL65_.jpg',
    price: 49.99,
    description: 'Bright, energy-efficient LED headlights with a longer lifespan.',
  },
  {
    id: 3,
    name: 'All-Weather Floor Mats',
    img: 'https://m.media-amazon.com/images/I/91P2NUlYJqL._AC_UL480_FMwebp_QL65_.jpg',
    price: 39.99,
    description: 'Heavy-duty mats that protect your car’s interior from dirt and water.',
  },
  {
    id: 4,
    name: 'Car Phone Mount',
    img: 'https://m.media-amazon.com/images/I/71RSkKI4wOL._AC_UL480_FMwebp_QL65_.jpg',
    price: 19.99,
    description: 'Secure mount for your phone, compatible with most smartphones.',
  },
  {
    id: 5,
    name: 'Dashboard Camera',
    img: 'https://m.media-amazon.com/images/I/51oFrw7EhuL._AC_UY327_FMwebp_QL65_.jpg',
    price: 89.99,
    description: 'High-definition camera for recording your journeys.',
  },
  {
    id: 6,
    name: 'Trunk Organizer',
    img: 'https://m.media-amazon.com/images/I/71MEcXwo0BL._AC_UL480_FMwebp_QL65_.jpg',
    price: 24.99,
    description: 'Organize your trunk space with this foldable storage solution.',
  },
  {
    id: 7,
    name: 'Bluetooth FM Transmitter',
    img: 'https://m.media-amazon.com/images/I/51Eny9myScL._AC_UY327_FMwebp_QL65_.jpg',
    price: 15.99,
    description: 'Stream music and answer calls hands-free with this transmitter.',
  },
  {
    id: 8,
    name: 'Portable Tire Inflator',
    img: 'https://m.media-amazon.com/images/I/512TdXGlvrL._AC_UL480_FMwebp_QL65_.jpg',
    price: 59.99,
    description: 'Compact, easy-to-use inflator for emergency tire inflation.',
  },
  {
    id: 9,
    name: 'Car Vacuum Cleaner',
    img: 'https://m.media-amazon.com/images/I/81i7K5KsNAL._AC_UL480_FMwebp_QL65_.jpg',
    price: 34.99,
    description: 'Lightweight and powerful vacuum cleaner for your car’s interior.',
  },
  {
    id: 10,
    name: 'Steering Wheel Cover',
    img: 'https://m.media-amazon.com/images/I/61NQH52jwNL._AC_UY327_FMwebp_QL65_.jpg',
    price: 12.99,
    description: 'Comfortable, anti-slip cover for a better grip on your steering wheel.',
  },
];

const Shop = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">Vehicle Accessories Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-20">
        {products.map((product) => (
          <div key={product.id} className="card w-70 bg-base-100 shadow-xl">
            <figure>
              <img src={product.img} alt={product.name} className="rounded-t-xl" style={{width:'100%' ,height:'250px' ,objectFit:'contain', objectPosition:'center'}} />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <p>{product.description}</p>
              <p className="text-red-600 font-semibold">Price: ${product.price}</p>
              <button className="btn btn-primary mt-4">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
