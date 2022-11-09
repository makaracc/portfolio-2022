export const Content = ({ children }) => {
  return (
    <div className="p-10 bg-slate-700  bg-opacity-50 min-w-[20vw] min-h-[20vh] max-w-[60vw] max-h-[90vh] z-10 relative left-[10vw] top-[5vh] rounded-lg flex items-center justify-center">
      {children}
    </div>
  );
};
