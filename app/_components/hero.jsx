import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <h1 className="text-blue-600 font-medium text-xl mb-4">
        AI Course Generator
      </h1>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        Custom Learning Paths, Powered by AI
      </h2>
      <p className="max-w-2xl text-gray-600 text-lg mb-10 leading-relaxed">
        Unlock personalized education with AI-driven course creation. Tailor your learning
        journey to fit your unique goals and pace
      </p>
      <Link href="/dashboard">
        <button className="bg-blue-100 text-blue-800 border border-blue-600 font-semibold px-8 py-3 rounded shadow-sm hover:bg-blue-200 transition-colors uppercase tracking-wide">
          Get Started
        </button>
      </Link>
    </section>
  );
}
