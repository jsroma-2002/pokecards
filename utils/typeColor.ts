export enum TypeColor {
  grass = "green",
  fire = "red",
  water = "blue",
  bug = "yellow",
  normal = "gray",
  dark = "black",
  fairy = "pink",
  poison = "purple",
  flying = "indigo",
  none = "white",
}

export function getTypeColor(pokemonType: string): string {
  switch (pokemonType) {
    case "grass":
      return TypeColor.grass;
    case "fire":
      return TypeColor.fire;
    case "water":
      return TypeColor.water;
    case "bug":
      return TypeColor.bug;
    case "normal":
      return TypeColor.normal;
    case "dark":
      return TypeColor.dark;
    case "fairy":
      return TypeColor.fairy;
    case "poison":
      return TypeColor.poison;
    case "flying":
        return TypeColor.flying;
    default:
      return TypeColor.none;
  }
}
