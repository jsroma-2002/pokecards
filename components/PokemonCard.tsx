import { TypeColor, getTypeColor } from "@/utils/typeColor";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface PokemonCardProps {
  name: string;
  mainType: string;
  secondaryType: string;
  image: string;
}

interface CardScheme {
  border: string;
  text: string;
}

function PokemonCard(props: PokemonCardProps) {
  const mainTypeColor = getTypeColor(props.mainType);
  const secondaryTypeColor = getTypeColor(props.secondaryType);

  const colorScheme = new Map<string, CardScheme>([
    [TypeColor.fire, { border: "border-red-400", text: "text-red-400" }],
    [TypeColor.water, { border: "border-blue-400", text: "text-blue-400" }],
    [TypeColor.bug, { border: "border-yellow-400", text: "text-yellow-400" }],
    [TypeColor.grass, { border: "border-green-400", text: "text-green-400" }],
    [
      TypeColor.poison,
      { border: "border-purple-400", text: "text-purple-400" },
    ],
    [TypeColor.normal, { border: "border-gray-400", text: "text-gray-400" }],
    [TypeColor.fairy, { border: "border-pink-400", text: "text-pink-400" }],
    [TypeColor.flying, { border: "border-sky-400", text: "text-sky-400" }],
    [TypeColor.none, { border: "border-white", text: "text-white" }],
    [TypeColor.dark, { border: "border-black", text: "text-black" }],
  ]);

  return (
    <div
      className={twMerge(
        "border-4 rounded-xl min-w-[15rem] w-[23.5rem] h-[28rem] bg-pattern text-white hover:scale-110 transition-all relative shadow-pattern",
        colorScheme.get(mainTypeColor)?.border
      )}
    >
      <div className="p-4 w-full flex flex-col items-center justify-center h-full">
        <Image src={props.image} alt={props.name} width={250} height={250} />
        <h1 className="text-3xl font-bold">{props.name}</h1>
        <p
          className={twMerge("text-2xl", colorScheme.get(mainTypeColor)?.text)}
        >
          {props.mainType}
        </p>
        <p
          className={twMerge(
            "text-2xl",
            colorScheme.get(secondaryTypeColor)?.text
          )}
        >
          {props.secondaryType}
        </p>
      </div>
    </div>
  );
}

export default PokemonCard;
