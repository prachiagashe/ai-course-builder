'use client';
import { useState } from 'react';

export default function CreateCourse() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        { id: 'programming', name: 'Programming', icon: '💻' },
        { id: 'health', name: 'Health', icon: '⚕️' },
        { id: 'creative', name: 'Creative', icon: '🎨' },
    ];

    return (
        <div className="flex flex-col items-center p-10 pt-16">
            <h1 className="text-4xl font-bold mb-16 text-gray-900">Create Course</h1>

            {/* Stepper */}
            <div className="flex items-center gap-2 mb-20 w-full max-w-2xl justify-center">
                {/* Step 1 */}
                <div className="flex flex-col items-center gap-3 relative">
                    <div className="w-16 h-16 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center text-2xl z-10 shadow-sm">
                        🗂️
                    </div>
                    <span className="font-medium text-gray-800 absolute -bottom-8">Category</span>
                </div>

                {/* Line */}
                <div className="w-24 md:w-36 h-[2px] bg-gray-300 -mt-8 mx-2"></div>

                {/* Step 2 */}
                <div className="flex flex-col items-center gap-3 relative opacity-50">
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-2xl z-10">
                        🎯
                    </div>
                    <span className="font-medium text-gray-500 absolute -bottom-8">Topic</span>
                </div>

                {/* Line */}
                <div className="w-24 md:w-36 h-[2px] bg-gray-300 -mt-8 mx-2"></div>

                {/* Step 3 */}
                <div className="flex flex-col items-center gap-3 relative opacity-50">
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-2xl z-10">
                        📝
                    </div>
                    <span className="font-medium text-gray-500 absolute -bottom-8">Options</span>
                </div>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-8 mb-16 w-full max-w-3xl">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-44 h-36 border-2 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all ${selectedCategory === cat.id
                                ? 'border-blue-500 bg-blue-50 shadow-md transform scale-105'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 hover:shadow-sm'
                            }`}
                    >
                        <span className="text-4xl mb-3">{cat.icon}</span>
                        <span className="font-medium text-gray-800 text-lg">{cat.name}</span>
                    </div>
                ))}
            </div>

            {/* Next Button */}
            <div className="w-full max-w-3xl flex justify-end px-4">
                <button
                    disabled={!selectedCategory}
                    className={`px-10 py-3 rounded-md font-semibold text-lg transition-all shadow-sm ${selectedCategory
                            ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md'
                            : 'bg-white border-2 border-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
