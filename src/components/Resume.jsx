import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import { useState } from 'react';
import './Resume.css';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export const Resume = () => {
	const [file, setFile] = useState('./resume.pdf');
	const [numPages, setNumPages] = useState(null);

	function onDocumentLoadSuccess({ numPages: nextNumPages }) {
		setNumPages(nextNumPages);
	}

	const options = {
		cMapUrl: 'cmaps/',
		cMapPacked: true,
		standardFontDataUrl: 'standard_fonts/',
	};

	return (
		<div className="w-[500px] text-center ">
			<button className="button bg-cyan-500 p-5 rounded font-mono hover:bg-cyan-600 resume">
				<a
					href={file}
					target="_blank"
					rel="noopener noreferrer"
				>
					View Resume 📑
				</a>
			</button>
		</div>
	);
};
