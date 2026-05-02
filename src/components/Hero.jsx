import React from 'react';

const Exampl = () => {
    return (
        <div>
            <div className="w-full bg-gray-100 py-10 px-4 md:px-10">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-8">

                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-green-800 leading-tight">
                            Find Your Perfect <br />
                            Qurbani Animal
                        </h1>

                        <p className="mt-4 text-gray-600 text-base md:text-lg">
                            Explore healthy and well-cared-for animals for your Qurbani.
                            Easy booking, trusted sellers.
                        </p>

                        <button className="mt-6 inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg shadow-md transition">
                            Browse All Animals
                            <span>→</span>
                        </button>
                    </div>

                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9"
                            alt="Qurbani Animal"
                            className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
                        />

                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-100 rounded-xl"></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Exampl;