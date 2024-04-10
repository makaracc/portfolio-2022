import { useState } from 'react';
import './ProjectItem.css';

export const ProjectItem = ({ name, about, link, image }) => {
	const [detail, setDetail] = useState(false);
	// add hover
	// add onClick

	const handleMouseClicked = () => {};

	return (
		<div className="transition duration-300 ease-in-out hover:scale-105">
			<a
				href={link}
				target="_blank"
				onClick={() => {}}
				onMouseOver={() => setDetail(true)}
				onMouseOut={() => setDetail(false)}
				className="p-5 flex justify-between items-center w-full gap-5 md:gap-10 "
			>
				<div className="p-3 rounded-sm w-80 flex-1">
					<img
						loading="lazy"
						src={image}
						alt={name}
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="flex-1 flex flex-col justify-center items-center">
					<p className="text-lg text-center font-bold text-stone-400">{name}</p>
					<p>{about}</p>
				</div>
			</a>
		</div>
		// <a
		//   href={link}
		//   target="_blank"
		//   onClick={() => {}}
		//   onMouseOver={() => setDetail(true)}
		//   onMouseOut={() => setDetail(false)}
		//   className=" flex-col place-items-center border rounded border-slate-800 bg-slate-900 proj-item emoji-cursor w-30 bottom-0"
		//   style={{
		//     background: `url(${image})`,
		//     backgroundSize: "cover",
		//     backgroundPosition: "center",
		//   }}
		// >
		//   {/* <img loading="lazy" src={image} alt={name} width={500} /> */}
		//   <div className="proj-item-text mt-20 p-2 pr-8 pl-8 pt-5">
		//     <p className="text-xs text-center">{name}</p>
		//   </div>
		// </a>
	);
};
