'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, Weight, Tag, User } from 'lucide-react';

// Your data (better to move this to src/data/animals.json later)
const animals = [
    {
        "id": 1,
        "name": "Black Bengal Goat",
        "type": "Goat",
        "breed": "Black Bengal",
        "price": 25000,
        "weight": 35,
        "age": 2,
        "location": "Rajshahi",
        "description": "Popular goat breed.",
        "image": "https://i.ibb.co.com/6kSLkC1/2.jpg",
        "images": [
            "https://i.ibb.co.com/6kSLkC1/1.jpg",
            "https://i.ibb.co.com/Jjsbn801/2.jpg",
            "https://i.ibb.co.com/HpD34DTf/3.jpg",
            "https://i.ibb.co.com/20vzh2Zc/4.jpg",
            "https://i.ibb.co.com/V0MnG7xJ/5.jpg",
        ],
        "category": "Small Animal"
    },
    // Add more animals here...
];

export default function AnimalDetailPage() {
    const animal = animals[0];
    const params = useParams();
    const [mainImage, setMainImage] = useState(animal.image);
    const [isLoggedIn] = useState(false);
    


    if (!animal) {
        return (
            <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
                Animal Not Found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                
                <Link 
                    href="/animals"
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 font-medium"
                >
                    <ArrowLeft size={20} />
                    Back to All Animals
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    
                    {/* Image Section */}
                    <div>
                        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg bg-gray-100">
                            <Image
                                src={mainImage}
                                alt={animal.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Thumbnails */}
                        {animal.images && animal.images.length > 0 && (
                            <div className="flex gap-4 mt-6 overflow-x-auto pb-4">
                                {animal.images.map((img, index) => (
                                    <div 
                                        key={index}
                                        onClick={() => setMainImage(img)}
                                        className={`relative w-24 h-24 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all flex-shrink-0
                                            ${mainImage === img ? 'border-emerald-600 scale-105' : 'border-transparent hover:border-gray-300'}`}
                                    >
                                        <Image 
                                            src={img} 
                                            alt={`${animal.name} view ${index + 1}`}
                                            fill 
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900">{animal.name}</h1>
                            <p className="text-xl text-gray-600 mt-2">{animal.breed} • {animal.type}</p>
                        </div>

                        <div>
                            <p className="text-5xl font-bold text-emerald-600">
                                ৳{animal.price.toLocaleString()}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-2xl flex gap-4 items-center">
                                <Weight className="text-emerald-600" size={32} />
                                <div>
                                    <p className="text-gray-500">Weight</p>
                                    <p className="text-2xl font-semibold">{animal.weight} kg</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl flex gap-4 items-center">
                                <Calendar className="text-emerald-600" size={32} />
                                <div>
                                    <p className="text-gray-500">Age</p>
                                    <p className="text-2xl font-semibold">{animal.age} Years</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl flex gap-4 items-center">
                            <MapPin className="text-emerald-600" size={32} />
                            <div>
                                <p className="text-gray-500">Location</p>
                                <p className="text-xl font-medium">{animal.location}</p>
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full">
                            <Tag size={20} />
                            <span>{animal.category}</span>
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl mb-3">Description</h3>
                            <p className="text-gray-600 leading-relaxed text-[17px]">
                                {animal.description}
                            </p>
                        </div>

                        {/* Booking Section */}
                        <div className="bg-white border border-gray-200 rounded-3xl p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-amber-100 p-3 rounded-2xl">
                                    <User size={32} className="text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Ready to Book?</h3>
                                    <p className="text-gray-600">Login is required for booking</p>
                                </div>
                            </div>

                            <button 
                                onClick={() => alert("Login to Book")}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 py-4 text-white text-lg font-semibold rounded-2xl transition"
                            >
                                Login to Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}