import Header from "./_components/header";
import Hero from "./_components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
