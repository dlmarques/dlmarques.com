import learninfive from "@/assets/learninfive.png";
import rentnexis from "@/assets/rentnexis.png";
import omenia from "@/assets/omenia.png";
export const projects = [
  {
    id: "1",
    image: learninfive,
    title: "LearnInFive – Computer Science Learning Platform",
    description:
      "Built with React, Node.js, MongoDB. It's a platform that generates a Computer Science topic everyday, it can be custom for each user or be a random public topic, it's a work in progress.",
    techs: [
      "#React",
      "#TypeScript",
      "#Node",
      "#Express",
      "#MongoDB",
      "#OpenAI",
    ],
    links: [
      {
        title: "Live",
        url: "https://learninfive.dev/",
      },
      {
        title: "Frontend",
        url: "https://github.com/dlmarques/learninfive-client",
      },
      {
        title: "Backend",
        url: "https://github.com/dlmarques/learninfive-server",
      },
    ],
  },
  {
    id: "2",
    image: rentnexis,
    title: "RentNexis - Rental Management Platform",
    description:
      "Built with React, TypeScript, Node.js, Postgres, MongoDB. It's a platform for managing rentals, it's a work in progress.",
    techs: [
      "#React",
      "#TypeScript",
      "#Node",
      "#Express",
      "#MongoDB",
      "#Postgres",
    ],
    links: [
      {
        title: "Frontend",
        url: "https://github.com/dlmarques/rentnexis-webapp",
      },
      {
        title: "Backend",
        url: "https://github.com/dlmarques/rentnexis-backend",
      },
    ],
  },
  {
    id: "3",
    image: omenia,
    title: "Omenia – RPG Multiplayer Game",
    description:
      "Built with React, Node.js, MongoDB. It's a multiplayer RPG game where you can create your own character and play with your friends. ",
    techs: [
      "#React",
      "#JavaScript",
      "#Node",
      "#Express",
      "#MongoDB",
      "#WebSocket",
    ],
    links: [
      {
        title: "Live",
        url: "https://omenia.netlify.app/",
      },
      {
        title: "Repository",
        url: "https://github.com/dlmarques/omenia",
      },
    ],
  },
];
