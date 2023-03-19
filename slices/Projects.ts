import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProjectType } from '@/utils/types';

type InitialStateType = {
	query: string;
	projects: ProjectType[];
};

const initialState: InitialStateType = {
	projects: [],
	query: '',
};

const querySlice = createSlice({
	initialState,
	name: 'projects',
	reducers: {
		setQuery: (state, action: PayloadAction<string>) => {
			return {
				query: action.payload,
				projects: state.projects.filter((project) => {
					if (project.name.includes(action.payload)) {
						return project;
					}
				}),
			};
		},

		setProjects: (state, action: PayloadAction<ProjectType[]>) => {
			return {
				...state,
				projects: action.payload,
			};
		},

		remove: (state, action: PayloadAction<string>) => {
			return {
				...state,
				projects: state.projects.filter((project) => {
					if (!project.name.includes(action.payload)) {
						return project;
					}
				}),
			};
		},

		create: (state, action: PayloadAction<ProjectType>) => {
			return { ...state, projects: [...state.projects, action.payload] };
		},

		rename: (state, action: PayloadAction<{ id: string; name: string }>) => {
			return {
				...state,
				projects: state.projects.filter((project) => {
					if (project.id === action.payload.id) {
						return { ...project, name: action.payload.name };
					}
				}),
			};
		},
	},
});

export const { setQuery, create, rename, setProjects, remove } =
	querySlice.actions;
export default querySlice.reducer;
