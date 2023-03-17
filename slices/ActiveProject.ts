import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialPropsType = {
	id: string;
	name: string;
	size: string;
	properties: {};
};

const initialState = {
	id: '',
	name: '',
	size: '',
	properties: {},
};

const activeProjectSlice = createSlice({
	initialState,
	name: 'activeProject',
	reducers: {
		setActiveProject: (_state, action: PayloadAction<InitialPropsType>) => {
			return action.payload;
		},
	},
});

export default activeProjectSlice.reducer;
export const { setActiveProject } = activeProjectSlice.actions;
