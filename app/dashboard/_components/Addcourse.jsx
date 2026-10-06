import Link from "next/link";

export default function Addcourse() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Hello, welcome back!</h2>
        <p className="text-gray-500">Create a new course or manage your existing learning paths.</p>
      </div>
      <Link href="/create-course">
        <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition-colors shadow-sm">
          + Create Course
        </button>
      </Link>
    </div>
  );
}
