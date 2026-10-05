import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="font-bold text-xl text-green-700 bg-green-100 border border-green-600 px-4 py-2 rounded">
        Logo
      </div>
      <button className="bg-blue-100 text-blue-800 border border-blue-600 font-medium px-4 py-2 rounded hover:bg-blue-200 transition-colors">
        Get Started
      </button>
    </header>
  );
}
