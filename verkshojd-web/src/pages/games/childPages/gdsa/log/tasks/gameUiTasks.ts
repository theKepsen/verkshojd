import type { Task } from "../task";

export const GameUiTasks: Task = {
  title: "Game UI",
  dependencyIds: [],
  subTasks: [
    {
      title: "Color Pallet",
      dependencyIds: [],
      subTasks: [],
    },
    {
      title: "Font",
      dependencyIds: [],
      subTasks: [
        {
          title: "Font Colors",
          dependencyIds: ["color_pallet"],
          subTasks: [],
        },
      ],
    },
    {
      title: "Logo",
      dependencyIds: [],
      subTasks: [
        {
          title: "Game Logo",
          dependencyIds: [],
          subTasks: [],
        },
        {
          title: "Studio Logo",
          dependencyIds: [],
          subTasks: [],
        },
      ],
    },
    {
      title: "Layout",
      dependencyIds: ["color_pallet"],
      subTasks: [
        {
          title: "Splash Screen",
          dependencyIds: ["game_logo", "studio_logo"],
          subTasks: [],
        },
        {
          title: "Menus",
          dependencyIds: ["color_pallet"],
          subTasks: [
            {
              title: "Video Background",
              dependencyIds: [],
              subTasks: [],
            },
            {
              title: "Start Menu",
              dependencyIds: [],
              subTasks: [],
            },
            {
              title: "Settings Menu",
              dependencyIds: [],
              subTasks: [],
            },
            {
              title: "How to Play",
              dependencyIds: [],
              subTasks: [],
            },
            {
              title: "High Score Screen",
              dependencyIds: ["scoring_system"],
              subTasks: [],
            },
          ],
        },
        {
          title: "Game Over Screen",
          dependencyIds: [],
          subTasks: [],
        },
        {
          title: "Level Clear Screen",
          dependencyIds: [],
          subTasks: [],
        },
        {
          title: "High Score Entry",
          dependencyIds: ["scoring_system"],
          subTasks: [],
        },
      ],
    },
    {
      title: "In Game Overlay",
      dependencyIds: [],
      subTasks: [],
    },
    {
      title: "In Game Menu",
      dependencyIds: [],
      subTasks: [],
    },
    {
      title: "Settings Menu",
      dependencyIds: [],
      subTasks: [
        {
          title: "Keyboard Controls",
          dependencyIds: ["game_logic"],
          subTasks: [],
        },
        {
          title: "Music / SFX Volume Sliders",
          dependencyIds: ["game_logic"],
          subTasks: [],
        },
      ],
    },
  ],
};
