import { useState } from "react";
import "./ProjectItem.css";

export const ProjectItem = ({ name, about, link, image }) => {
  const [detail, setDetail] = useState(false);
  // add hover
  // add onClick

  const handleMouseClicked = () => {};

  return (
    <div
      onClick={() => {}}
      onMouseOver={() => setDetail(true)}
      onMouseOut={() => setDetail(false)}
      className="relative p-1 flex-col place-items-center border rounded border-slate-800 bg-slate-900 proj-item"
    >
      <img loading="lazy" src={image} alt={name} />
      <p className="text-xs text-center">{name}</p>
    </div>
  );
};
