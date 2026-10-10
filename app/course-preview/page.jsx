'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CoursePreview() {
    const router = useRouter();
    const [courseData, setCourseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // In a real implementation, you would fetch the course data from your API
        // or retrieve it from a state management solution (Redux, Context, etc.)
        // For now, we'll retrieve the form data from sessionStorage and generate a mock outline
        
        const fetchCourseData = async () => {
            try {
                // Retrieve form data from sessionStorage
                const storedFormData = sessionStorage.getItem('courseFormData');
                
                if (!storedFormData) {
                    setError('No course data found. Please create a course first.');
                    setLoading(false);
                    return;
                }

                const formData = JSON.parse(storedFormData);

                // Simulate API call - replace with actual API endpoint
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Generate mock course outline based on the form data
                // In production, this would come from your AI generation API
                const mockOutline = Array.from({ length: formData.chapters }, (_, i) => ({
                    chapterNumber: i + 1,
                    title: `Chapter ${i + 1}: ${formData.topic} - Part ${i + 1}`,
                    topics: [
                        `Topic ${i + 1}.1: Introduction`,
                        `Topic ${i + 1}.2: Core concepts`,
                        `Topic ${i + 1}.3: Practical examples`
                    ]
                }));

                setCourseData({
                    ...formData,
                    outline: mockOutline
                });
            } catch (err) {
                setError('Failed to load course data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchCourseData();
    }, []);

    const handleBackToDashboard = () => {
        router.push('/dashboard');
    };

    const handleCreateAnother = () => {
        router.push('/create-course');
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center p-10 pt-16 min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
                <p className="text-gray-600">Loading course preview...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center p-10 pt-16 min-h-[60vh]">
                <div className="w-full max-w-2xl p-6 bg-red-50 border-2 border-red-200 text-red-700 rounded-lg mb-6">
                    {error}
                </div>
                <button
                    onClick={handleBackToDashboard}
                    className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                    Back to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center p-10 pt-16">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Course Preview</h1>

            {/* Course Summary Card */}
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{courseData.topic}</h2>
                        <p className="text-gray-600">{courseData.description}</p>
                    </div>
                    <div className="flex gap-2">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                            {courseData.difficulty}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            {courseData.duration}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">Category</p>
                        <p className="font-semibold text-gray-900 capitalize">{courseData.category}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">Difficulty</p>
                        <p className="font-semibold text-gray-900">{courseData.difficulty}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">Duration</p>
                        <p className="font-semibold text-gray-900">{courseData.duration}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">Video</p>
                        <p className="font-semibold text-gray-900">{courseData.video}</p>
                    </div>
                </div>
            </div>

            {/* Course Outline */}
            <div className="w-full max-w-4xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Outline</h3>
                
                <div className="space-y-4">
                    {courseData.outline.map((chapter) => (
                        <div
                            key={chapter.chapterNumber}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-100 border-2 border-purple-500 flex items-center justify-center flex-shrink-0">
                                    <span className="font-bold text-purple-700">{chapter.chapterNumber}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                        {chapter.title}
                                    </h4>
                                    <ul className="space-y-2">
                                        {chapter.topics.map((topic, index) => (
                                            <li key={index} className="flex items-center gap-2 text-gray-600">
                                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full max-w-4xl flex justify-between gap-4">
                <button
                    onClick={handleBackToDashboard}
                    className="px-6 py-3 border-2 border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
                >
                    Back to Dashboard
                </button>
                <button
                    onClick={handleCreateAnother}
                    className="px-20 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-medium shadow-sm"
                >
                    Create Another Course
                </button>
            </div>
        </div>
    );
}
