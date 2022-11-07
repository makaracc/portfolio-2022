export const Content = ({ children }) => {
  return (
    <div className="bg-slate-400 bg-opacity-30 max-w-[60vw] max-h-[90vh] z-10 relative left-[10vw] top-[5vh] rounded-lg flex place-items-center">
      {children}
    </div>
  );
};
