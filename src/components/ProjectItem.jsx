import { useState } from "react";
import "./ProjectItem.css";

export const ProjectItem = ({ name, about, link, image }) => {
  const [detail, setDetail] = useState(false);
  // add hover
  // add onClick

  const handleMouseClicked = () => {};

  return (
    <a
      href={link}
      target="_blank"
      onClick={() => {}}
      onMouseOver={() => setDetail(true)}
      onMouseOut={() => setDetail(false)}
      className=" flex-col place-items-center border rounded border-slate-800 bg-slate-900 proj-item emoji-cursor w-30 bottom-0"
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <img loading="lazy" src={image} alt={name} width={500} /> */}
      <div className="proj-item-text mt-20 p-2 pr-8 pl-8 pt-5">
        <p className="text-xs text-center">{name}</p>
      </div>
    </a>
  );
};
