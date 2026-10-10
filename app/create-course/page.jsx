'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateCourse() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Form state
    const [formData, setFormData] = useState({
        category: null,
        topic: '',
        description: '',
        difficulty: 'Beginner',
        duration: '1 hour',
        video: 'No',
        chapters: 5
    });

    const categories = [
        { id: 'programming', name: 'Programming', icon: '💻' },
        { id: 'health', name: 'Health', icon: '⚕️' },
        { id: 'creative', name: 'Creative', icon: '🎨' },
    ];

    const handleCategorySelect = (categoryId) => {
        setFormData(prev => ({ ...prev, category: categoryId }));
    };

    const handleNext = () => {
        if (step === 1 && !formData.category) {
            setError('Please select a category');
            return;
        }
        if (step === 2 && !formData.topic.trim()) {
            setError('Please enter a topic');
            return;
        }
        if (step === 3) {
            handleGenerateCourse();
            return;
        }
        setError(null);
        setStep(prev => prev + 1);
    };

    const handlePrevious = () => {
        setError(null);
        setStep(prev => prev - 1);
    };

    const handleGenerateCourse = async () => {
        setLoading(true);
        setError(null);

        try {
            // Simulate API call - replace with actual API endpoint
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Store form data in sessionStorage for the preview page
            sessionStorage.setItem('courseFormData', JSON.stringify(formData));

            // Navigate to course preview page with the generated data
            router.push('/course-preview');
        } catch (err) {
            setError('Failed to generate course. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const getStepStatus = (stepNumber) => {
        if (stepNumber < step) return 'completed';
        if (stepNumber === step) return 'active';
        return 'inactive';
    };

    const renderStepper = () => {
        const steps = [
            { number: 1, label: 'Category', icon: '🗂️' },
            { number: 2, label: 'Topic & Desc', icon: '🎯' },
            { number: 3, label: 'Options', icon: '📝' }
        ];

        return (
            <div className="flex items-center gap-2 mb-20 w-full max-w-2xl justify-center">
                {steps.map((s, index) => {
                    const status = getStepStatus(s.number);
                    const isCompleted = status === 'completed';
                    const isActive = status === 'active';

                    return (
                        <div key={s.number} className="flex items-center">
                            <div className="flex flex-col items-center gap-3 relative">
                                <div
                                    className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl z-10 shadow-sm transition-all ${
                                        isCompleted || isActive
                                            ? 'bg-purple-100 border-2 border-purple-500'
                                            : 'bg-white border-2 border-gray-300'
                                    } ${isActive ? 'scale-110' : ''} ${!isActive && !isCompleted ? 'opacity-50' : ''}`}
                                >
                                    {s.icon}
                                </div>
                                <span className={`font-medium absolute -bottom-8 ${
                                    isCompleted || isActive ? 'text-gray-800' : 'text-gray-500'
                                }`}>
                                    {s.label}
                                </span>
                            </div>

                            {index < steps.length - 1 && (
                                <div className={`w-24 md:w-36 h-[2px] -mt-8 mx-2 ${
                                    isCompleted ? 'bg-purple-500' : 'bg-gray-300'
                                }`}></div>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    };

    const renderStep1 = () => (
        <div className="flex flex-wrap justify-center gap-8 mb-16 w-full max-w-3xl">
            {categories.map((cat) => (
                <div
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`w-44 h-36 border-2 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all ${
                        formData.category === cat.id
                            ? 'border-purple-500 bg-purple-50 shadow-md transform scale-105'
                            : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50 hover:shadow-sm'
                    }`}
                >
                    <span className="text-4xl mb-3">{cat.icon}</span>
                    <span className="font-medium text-gray-800 text-lg">{cat.name}</span>
                </div>
            ))}
        </div>
    );

    const renderStep2 = () => (
        <div className="w-full max-w-2xl space-y-8 mb-16">
            <div className="space-y-2">
                <label className="text-lg font-medium text-gray-800 flex items-center gap-2">
                    💡 Write the topic for which you want to generate a course
                </label>
                <input
                    type="text"
                    placeholder="Topic"
                    value={formData.topic}
                    onChange={(e) => setFormData(prev => ({ ...prev, topic: e.target.value }))}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all"
                />
            </div>

            <div className="space-y-2">
                <label className="text-lg font-medium text-gray-800 flex items-center gap-2">
                    📝 Tell us more about your course, what you want to include in the course (Optional)
                </label>
                <textarea
                    placeholder="About your course"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all resize-none"
                />
            </div>
        </div>
    );

    const renderStep3 = () => (
        <div className="w-full max-w-4xl mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-lg font-medium text-gray-800 flex items-center gap-2">
                        🎓 Difficulty Level
                    </label>
                    <select
                        value={formData.difficulty}
                        onChange={(e) => setFormData(prev => ({ ...prev, difficulty: e.target.value }))}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all bg-white"
                    >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-lg font-medium text-gray-800 flex items-center gap-2">
                        🕒 Course Duration
                    </label>
                    <select
                        value={formData.duration}
                        onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all bg-white"
                    >
                        <option value="1 hour">1 hour</option>
                        <option value="3 hours">3 hours</option>
                        <option value="1 week">1 week</option>
                        <option value="2 weeks">2 weeks</option>
                        <option value="1 month">1 month</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-lg font-medium text-gray-800 flex items-center gap-2">
                        ▶️ Add Video
                    </label>
                    <select
                        value={formData.video}
                        onChange={(e) => setFormData(prev => ({ ...prev, video: e.target.value }))}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all bg-white"
                    >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-lg font-medium text-gray-800 flex items-center gap-2">
                        📚 Number of Chapters
                    </label>
                    <input
                        type="number"
                        min="1"
                        max="30"
                        value={formData.chapters}
                        onChange={(e) => {
                            const value = Math.min(30, Math.max(1, parseInt(e.target.value) || 1));
                            setFormData(prev => ({ ...prev, chapters: value }));
                        }}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all"
                    />
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col items-center p-10 pt-16">
            <h1 className="text-4xl font-bold mb-16 text-gray-900">Create Course</h1>

            {renderStepper()}

            {error && (
                <div className="w-full max-w-2xl mb-8 p-4 bg-red-50 border-2 border-red-200 text-red-700 rounded-lg">
                    {error}
                </div>
            )}

            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}

            {loading && (
                <div className="w-full max-w-2xl mb-8 p-4 bg-purple-50 border-2 border-purple-200 text-purple-700 rounded-lg text-center">
                    <div className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
                        <span>Generating course layout...</span>
                    </div>
                </div>
            )}

            {/* Navigation Buttons */}
            <div className="w-full max-w-3xl flex justify-between px-4">
                {step > 1 && (
                    <button
                        onClick={handlePrevious}
                        disabled={loading}
                        className="px-10 py-3 rounded-md font-semibold text-lg transition-all shadow-sm border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                )}

                <div className="ml-auto">
                    <button
                        onClick={handleNext}
                        disabled={loading || (step === 1 && !formData.category) || (step === 2 && !formData.topic.trim())}
                        className={`px-10 py-3 rounded-md font-semibold text-lg transition-all shadow-sm ${
                            (step === 1 && !formData.category) || (step === 2 && !formData.topic.trim()) || loading
                                ? 'bg-white border-2 border-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-md'
                        }`}
                    >
                        {step === 3 ? 'Generate Course Layout' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
}
