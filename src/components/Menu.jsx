import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedin,
	faGithub,
	faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';
import data from '../data/data.json';
import { cn } from '../utils/util';

export const Menu = ({ page, setPage }) => {
	const menu = ['About', 'Projects', 'Resume'];
	const [isClicked, setIsClicked] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		console.log('close');
	}, []);
	const handleMouseMove = (i) => (e) => {
		// setPage(`${menu[i]}`);
		setPage(`${menu[i]}`);
	};

	const handleMouseClicked = (i) => (e) => {
		setIsClicked(!isClicked);
		setIsMenuOpen(false);
		setPage(`${menu[i]}`);
	};

	const SocialMedia = () => (
		// <div className="relative top-[25vh] flex gap-5 place-items-center">
		<div className="flex gap-5 place-items-center md:relative md:top-[25vh] justify-end md:justify-start">
			<a
				href="https://www.linkedin.com/in/makara-chhaing/"
				target="_blank"
			>
				<FontAwesomeIcon
					size="2x"
					icon={faLinkedin}
				/>
			</a>
			<a
				href="https://github.com/makaracc"
				target="_blank"
			>
				<FontAwesomeIcon
					size="2x"
					icon={faGithub}
				/>
			</a>
			<a
				href="https://stackoverflow.com/users/13935537/makara"
				target="_blank"
			>
				<FontAwesomeIcon
					size="2x"
					icon={faStackOverflow}
				/>
			</a>
		</div>
	);

	const Taps = ({ className }) =>
		menu.map((item, i) => (
			<a
				href={`#${item}`}
				key={nanoid()}
				className={cn(className, 'block')}
				onMouseOver={handleMouseMove(i)}
				onClick={handleMouseClicked(i)}
			>
				{item}
			</a>
		));

	return (
		<div className={cn('', `h-screen flex md:items-center `)}>
			{/* <div className={`menu-bg`}></div> */}
			<FontAwesomeIcon
				size="lg"
				icon={isMenuOpen ? faX : faBars}
				className="fixed md:hidden top-3 right-5 z-30 "
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			/>
			<div
				className={cn(
					'z-20 md:hidden fixed left-full w-[50vw] h-[100vh] p-5 rounded-md text-right text-lg transition-transform duration-500',
					isMenuOpen
						? 'bg-slate-600 transform -translate-x-full'
						: 'transform translate-x-0'
				)}
			>
				{isMenuOpen ? (
					<div
						className={cn(
							'flex flex-col gap-5 pt-5 w-fit items-end ml-auto',
							'transition-transform duration-500'
						)}
					>
						<Taps />
						<SocialMedia />
					</div>
				) : null}
			</div>

			<div className={cn('menu-items', 'hidden md:flex flex-col justify-end')}>
				<Taps className={'menu-item'} />
				<SocialMedia />
			</div>
			<div className={cn(`menu-bg`, 'hidden md:block')}></div>

			<div className={cn('bg-img', 'hidden md:block ')}></div>
			{/* {isMenuOpen ? (
				<div
					className={cn('bg-img')}
					onClick={() => setIsMenuOpen(false)}
				></div>
			) : null} */}
		</div>
	);
};
