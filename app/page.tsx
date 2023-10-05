import AppBar from "@/components/AppBar";
import PokemonCard from "@/components/PokemonCard";

export default function Home() {
  return (
    <main className="w-screen min-h-screen bg-black flex flex-col text-white">
      <header className="h-28 w-full flex p-4 justify-center">
        <AppBar />
      </header>
      <section className="p-8 w-full flex flex-row flex-wrap gap-8 justify-center">
        <PokemonCard image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" name="Venusaur" mainType="grass" secondaryType="poison" />
        <PokemonCard image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" name="Charizard" mainType="fire" secondaryType="flying" />
        <PokemonCard image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" name="Blastoise" mainType="water" secondaryType="none" />
      </section>
    </main>
  );
}
