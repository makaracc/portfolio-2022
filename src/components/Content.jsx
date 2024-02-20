export const Content = ({ children }) => {
	return (
		// <div className="p-10 bg-slate-700  bg-opacity-50 md:min-w-[20vw] md:min-h-[20vh] md:max-w-[60vw] md:max-h-[90vh] md:z-10 md:relative md:left-[10vw] md:top-[5vh] rounded-lg flex items-center justify-center">
		<div className="p-10 bg-slate-700  bg-opacity-50 flex-grow md:z-10 md:relative md:left-[10vw] md:top-[5vh] rounded-lg flex items-center justify-center">
			{children}
		</div>
	);
};
