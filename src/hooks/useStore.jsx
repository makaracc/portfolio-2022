import create from 'zustand';

export const useStore = create((set) => ({
	path: '/',
	setPath: (path) => {
		return set({ path });
	},
}));
