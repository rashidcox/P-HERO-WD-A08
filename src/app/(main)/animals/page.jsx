'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimalCard from '@/components/AnimalCard';
import { animals } from '@/data/animalsData';


export default function AllAnimalsPage() {
  const [sortOption, setSortOption] = useState("low-to-high");

  const sortedAnimals = useMemo(() => {
    let sorted = [...animals];

    if (sortOption === "low-to-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-to-low") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "weight-high") {
      sorted.sort((a, b) => b.weight - a.weight);
    }

    return sorted;
  }, [sortOption]);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        

          {/* Sort By Price */}
          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">Sort by:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="weight-high">Weight: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sortedAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
    </div>
  );
}