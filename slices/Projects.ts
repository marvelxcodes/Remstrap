import { createSlice } from '@reduxjs/toolkit';
import { ProjectType } from '@/utils/types';

const initialState: ProjectType[] = [];

const projectSlice = createSlice({
	initialState,
	name: 'projects',
	reducers: {
		addProject: (state, action) => {
			state = [...state, action.payload];
		},
		removeProject: (state, action) => {
			state = state.filter(
				(project) => project.id !== action.payload && project
			);
		},
		renameProject: (state, action) => {
			state = state.map((project) => {
				if (project.id === action.payload.id) {
					return { ...project, name: action.payload.name };
				} else {
					return project;
				}
			});
		},
	},
});

export default projectSlice.reducer;
export const { addProject, removeProject, renameProject } =
	projectSlice.actions;
