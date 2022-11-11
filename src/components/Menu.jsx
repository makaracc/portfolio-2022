import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import "./Menu.css";
import data from "../data/data.json";

export const Menu = ({ page, setPage }) => {
  const menu = ["About", "Projects", "Skills", "Resume"];
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    console.log("just once");
  }, []);
  const handleMouseMove = (i) => (e) => {
    // setPage(`${menu[i]}`);
    setPage(`${menu[i]}`);
  };

  const handleMouseClicked = (i) => (e) => {
    setIsClicked(!isClicked);
    setPage(`${menu[i]}`);
  };

  return (
    <div className="h-screen flex items-center">
      <div className={`menu-items`}>
        {menu.map((item, i) => (
          <a
            href={`#${item}`}
            key={nanoid()}
            className={`menu-item`}
            onMouseOver={handleMouseMove(i)}
            onClick={handleMouseClicked(i)}
          >
            {item}
          </a>
        ))}
        <div className="relative top-[25vh] flex gap-5 place-items-center">
          <a href="https://www.linkedin.com/in/makara-chhaing/" target="_blank">
            <FontAwesomeIcon size="2x" icon={faLinkedin} />
          </a>
          <a href="https://github.com/makaracc" target="_blank">
            <FontAwesomeIcon size="2x" icon={faGithub} />
          </a>
          <a
            href="https://stackoverflow.com/users/13935537/makara"
            target="_blank"
          >
            <FontAwesomeIcon size="2x" icon={faStackOverflow} />
          </a>
        </div>
      </div>
      <div className={`menu-bg`}></div>
      <div className="bg-img"></div>
    </div>
  );
};
