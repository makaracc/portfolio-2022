import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Project } from './components/Project';
import { Skills } from './components/Skills';
import { Content } from './components/Content';
import { Resume } from './components/Resume';
import { useStore } from './hooks/useStore';
function App() {
	const [page, setPage] = useState('About');

	// const path = useStore((state) => state.path);
	// const setPath = useStore((state) => state.setPath);
	// useEffect(() => {
	//   setPath(page);
	// }, [page]);

	const pageToShow = () => {
		switch (page) {
			case 'About':
				return <About />;
			case 'Projects':
				return <Project />;
			// case "Skills":
			//   return <Skills />;
			case 'Resume':
				return <Resume />;
			default:
				return <Project />;
		}
	};

	return (
		<div className="bg-gray-900 m-0 flex flex-row relative">
			<Menu
				page={page}
				setPage={setPage}
			/>
			<Content>{pageToShow()}</Content>
		</div>
	);
}

export default App;
