import React from "react";
import { animalsList } from "@/data/animalsData";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { ImLeaf } from "react-icons/im";
import { FaBowlFood } from "react-icons/fa6";
import { MdWaterDrop } from "react-icons/md";
import { HiMiniHeart } from "react-icons/hi2";
import FeaturesCard from "@/components/FeaturesCard";

import { getFeaturedAnimals } from "@/lib/featuredAnimals";
import { animals } from "@/data/animalsData";

const Home = () => {
  const featuredAnimals = getFeaturedAnimals(animals, 4);
  return (

    <>
      {/* Hero section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/CjxC3vH/bajar.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Find Your Perfect Qurbani Animal</h1>
            <p className="mb-5">
              Explore healthy and well-cared-for animals for your Qurbani. Easy booking, trusted sellers.
            </p>
            <Link href="/animals"> <button className="btn bg-green-900 text-white">Browse All Animals <FaArrowRight /> </button> </Link>
          </div>
        </div>
      </div>



      {/* featured section */}
      <div className="bg-gray-50">

        {/* Featured Animals */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-green-800">Featured Animals</h2>
            <button className="text-green-600 border border-green-600 font-semibold px-3 rounded"><Link href="/animals"> View All </Link> </button>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4">
            {featuredAnimals.map((animal) => (
              <FeaturesCard key={animal.id} animal={animal} />
            ))}
          </div>
        </section>


        {/* Tips Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-green-100 p-4 rounded-full w-16 h-16"><ImLeaf className="text-4xl text-green-700" /></div>
              <h3 className="font-bold text-green-700">Healthy Animals</h3>
              <p className="text-sm text-gray-600 mt-2">
                Choose animals with bright eyes and good health.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-green-100 p-4 rounded-full w-16 h-16"><FaBowlFood className="text-4xl text-green-700" /></div>
              <h3 className="font-bold text-green-700">Proper Nutrition</h3>
              <p className="text-sm text-gray-600 mt-2">
                Ensure the animal is well fed and maintained.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-green-100 p-4 rounded-full w-16 h-16"><MdWaterDrop className="text-4xl text-green-700" /></div>
              <h3 className="font-bold text-green-700">Clean Water</h3>
              <p className="text-sm text-gray-600 mt-2">
                Provide clean water regularly.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-green-100 p-4 rounded-full w-16 h-16"><HiMiniHeart className="text-4xl text-green-700" /></div>
              <h3 className="font-bold text-green-700">Handle with Care</h3>
              <p className="text-sm text-gray-600 mt-2">
                Keep animals stress-free and comfortable.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;