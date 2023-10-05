function PokemonCard() {
  return (
    <div className="border-4 rounded-xl border-neutral-700 min-w-[15rem] w-[23.5rem] h-[28rem]   bg-neutral-900 text-white shadow-inner shadow-neutral-950 hover:scale-110 transition-all relative">
      <div className="bg-pattern mix-blend-overlay rounded-xl bg-repeat w-full h-full text-white absolute" />
    </div>
  );
}

export default PokemonCard;
