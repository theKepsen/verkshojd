import image from "/gdsa3.png";

interface GameData {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  id: string;
  state: string;
}

export const gamesData: GameData[] = [
  {
    title: "Gosh Darn Space Aliens",
    description:
      "A fast-paced space shooter where you defend Earth from waves of alien invaders.",
    imageSrc: image,
    link: "/games/gdsa",
    id: "gdsa",
    state: "In Development",
  },
];
