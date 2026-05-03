import Image from 'next/image';
import React, { Suspense } from 'react';

const FeaturesCard = ({ animal }) => {
    return (
        <div>
            <Suspense fallback={<div><span className="loading loading-dots loading-xl"></span></div>}>

                <div>
                    <div className="card bg-base-100 shadow-sm  bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                        <div className="relative h-56">   
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-gray-700">{animal.name}</h2>
                            <p className="text-gray-600 ">{animal.description}</p>
                            <span className="font-semibold text-gray-600">{animal.weight}kg | {animal.age} {animal.age === 1 ? "year" : "years"} | {animal.location}</span>
                           
                        </div>
                    </div>
                </div>
            </Suspense>

        </div>
    );
};

export default FeaturesCard;