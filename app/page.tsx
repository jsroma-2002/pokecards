import AppBar from "@/components/AppBar";
import PokemonCard from "@/components/PokemonCard";

export default function Home() {
  return (
    <main className="w-screen min-h-screen bg-black flex flex-col text-white">
      <header className="h-28 w-full flex p-4 justify-center">
        <AppBar />
      </header>
      <section className="p-8 w-full flex flex-row flex-wrap gap-8 justify-center">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </section>
    </main>
  );
}
