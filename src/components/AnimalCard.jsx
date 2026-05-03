import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';

const AnimalCard = ({ animal }) => {
    return (
        <div>
            <Suspense fallback={<div><span className="loading loading-dots loading-xl"></span></div>}>

                <div>
                    <div className="card bg-base-100 shadow-sm  bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                        {/* Inside your animal card */}
                        <div className="relative h-56">   {/* You can change 56 to 60, 64, etc. */}
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />

                            {/* Price badge */}
                            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-emerald-700 shadow">
                                ৳{animal.price.toLocaleString()}
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-gray-700">{animal.name}</h2>
                            <p className="text-gray-600 ">{animal.description}</p>
                            <span className="font-semibold text-gray-600">{animal.weight}kg | {animal.age} {animal.age === 1 ? "year" : "years"} | {animal.location}</span>
                            <Link
                                href={`/animals/${animal.id}`}
                                className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-sm mt-6 transition-colors"
                            >
                                Details
                            </Link>
                        </div>
                    </div>
                </div>
            </Suspense>

        </div>
    );
};

export default AnimalCard;