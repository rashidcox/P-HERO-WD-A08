import React from "react";
import {animalsList} from "@/data/animalsData";

const animals = [
  {
    id: 1,
    name: "Deshi Shahi Cow",
    price: "৳120,000",
    img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
  },
  {
    id: 2,
    name: "Sahiwal Cow",
    price: "৳150,000",
    img: "https://images.unsplash.com/photo-1601758260892-a8c4c0b7c1d1",
  },
  {
    id: 3,
    name: "Beetal Goat",
    price: "৳35,000",
    img: "https://images.unsplash.com/photo-1605009355434-2e6c5f9c2c5e",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-50"> 

      {/* Featured Animals */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-green-800">Featured Animals</h2>
          <button className="text-green-600">View All </button>
          
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={animal.img}
                alt={animal.name}
                className="h-48 w-full object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="font-semibold">{animal.name}</h3>
                <p className="text-green-600 font-bold mt-1">{animal.price}</p>
                <button className="mt-3 w-full bg-green-600 text-white py-2 rounded">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="font-bold text-green-700">Healthy Animals</h3>
            <p className="text-sm text-gray-600 mt-2">
              Choose animals with bright eyes and good health.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-green-700">Proper Nutrition</h3>
            <p className="text-sm text-gray-600 mt-2">
              Ensure the animal is well fed and maintained.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-green-700">Clean Water</h3>
            <p className="text-sm text-gray-600 mt-2">
              Provide clean water regularly.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-green-700">Handle with Care</h3>
            <p className="text-sm text-gray-600 mt-2">
              Keep animals stress-free and comfortable.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;