import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./Menu.css";

export const Menu = ({ page, setPage }) => {
  const menu = ["About", "Projects", "Contact", "Resume"];
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    console.log("just once");
  }, []);
  const handleMouseMove = (i) => (e) => {
    // setPage(`${menu[i]}`);
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
            className={`menu-item `}
            onMouseMove={handleMouseMove(i)}
            onClick={handleMouseClicked(i)}
          >
            {item}
          </a>
        ))}
      </div>
      <div className={`menu-bg`}></div>
    </div>
  );
};
