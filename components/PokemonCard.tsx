import Image from "next/image";

function PokemonCard() {
  return (
    <div className="border-4 rounded-xl border-green-700 min-w-[15rem] w-[23.5rem] h-[28rem] bg-pattern text-white hover:scale-110 transition-all relative shadow-pattern">
        <div className="p-4 w-full flex flex-col items-center justify-center h-full">
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
            alt="Bulbasaur"
            width={250}
            height={250}
          />
          <h1 className="text-3xl font-bold">Bulbasaur</h1>
          <p className="text-2xl text-green-400">Grass</p>
          <p className="text-2xl text-purple-400">Poison</p>
        </div>
    </div>
  );
}

export default PokemonCard;
