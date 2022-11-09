import { SkillBar } from "react-skillbars";
import * as data from "../data/data.json";

const colors = {
  bar: "rgb(56 189 248",
  title: {
    text: "#fff",
    background: "#333",
  },
};

const hue = {
  bar: "#fffaaa",
  title: {
    text: {
      hue: {
        minimum: 30,
        maximum: 150,
      },
      saturation: 50,
      level: {
        minimum: 30,
        maximum: 90,
      },
    },
    background: {
      hue: 20,
      saturation: 50,
      level: 30,
    },
  },
};

export const Skills = () => {
  return (
    <div className="w-[60vw]">
      <SkillBar skills={data.skills} animationDelay={500} colors={colors} />
    </div>
  );
};
