// Get 4 featured animals from full data array

export function getFeaturedAnimals(allAnimals, count = 4) {
  
  // Option 1: Get first 4 animals (Simple)
  // return allAnimals.slice(0, count);

  // Option 2: Get 4 Random Animals (Recommended for Featured)
  const shuffled = [...allAnimals].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);

  // Option 3: Get highest priced 4 animals (Premium Featured)
  // return [...allAnimals]
  //   .sort((a, b) => b.price - a.price)
  //   .slice(0, count);
}

// You can also create multiple functions for different sections
export function getTopAnimals(allAnimals, count = 4) {
  return [...allAnimals]
    .sort((a, b) => b.price - a.price)
    .slice(0, count);
}