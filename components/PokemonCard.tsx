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
  shadow: string;
}

function PokemonCard(props: PokemonCardProps) {
  const mainTypeColor = getTypeColor(props.mainType);
  const secondaryTypeColor = getTypeColor(props.secondaryType);

  const colorScheme = new Map<string, CardScheme>([
    [
      TypeColor.fire,
      { border: "border-red-400", text: "text-red-400", shadow: "red" },
    ],
    [
      TypeColor.water,
      { border: "border-blue-400", text: "text-blue-400", shadow: "blue" },
    ],
    [
      TypeColor.bug,
      { border: "border-yellow-400", text: "text-yellow-400", shadow: "yellow" },
    ],
    [
      TypeColor.grass,
      { border: "border-green-400", text: "text-green-400", shadow: "green" },
    ],
    [
      TypeColor.poison,
      { border: "border-purple-400", text: "text-purple-400", shadow: "purple" },
    ],
    [
      TypeColor.normal,
      { border: "border-gray-400", text: "text-gray-400", shadow: "gray" },
    ],
    [
      TypeColor.fairy,
      { border: "border-pink-400", text: "text-pink-400", shadow: "pink" },
    ],
    [
      TypeColor.flying,
      { border: "border-sky-400", text: "text-sky-400", shadow: "sky" },
    ],
    [
      TypeColor.none,
      { border: "border-white", text: "text-white", shadow: "white" },
    ],
    [
      TypeColor.dark,
      { border: "border-black", text: "text-black", shadow: "black" },
    ],
  ]);

  return (
    <div
      className={twMerge(
        "border-4 rounded-xl min-w-[15rem] w-[23.5rem] h-[28rem] bg-pattern text-white hover:scale-110 transition-all relative",
        colorScheme.get(mainTypeColor)?.border
      )}
      style={{
        boxShadow: `-1px -55px 55px -10px ${colorScheme.get(mainTypeColor)?.shadow} inset`,
        WebkitBoxShadow: `-1px -55px 55px -10px ${colorScheme.get(mainTypeColor)?.shadow} inset`,
        MozBoxShadow: `-1px -55px 55px -10px ${colorScheme.get(mainTypeColor)?.shadow} inset`,
      }}
    >
      <div className="p-4 w-full flex flex-col items-center justify-center h-full">
        <Image src={props.image} alt={props.name} width={250} height={250} />
        <h1 className="text-3xl font-bold">{props.name}</h1>
        <p
          className={twMerge("text-2xl", colorScheme.get(mainTypeColor)?.text)}
        >
          {props.mainType}
        </p>
        {props.secondaryType !== "none" && (
          <p
            className={twMerge(
              "text-2xl",
              colorScheme.get(secondaryTypeColor)?.text
            )}
          >
            {props.secondaryType}
          </p>
        )}
      </div>
    </div>
  );
}

export default PokemonCard;
