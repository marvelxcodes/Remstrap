import { createSlice } from '@reduxjs/toolkit';
import { ProjectType } from '@/utils/types';
import { useDispatch } from 'react-redux';

const initialState: ProjectType = {
	id: '',
	name: '',
	userId: '',
	size: '',
	properties: {},
};

const activeProjectSlice = createSlice({
	initialState,
	name: 'activeProject',
	reducers: {
		setActiveProject: (state, action) => {
			state = action.payload;
		},
	},
});

export default activeProjectSlice.reducer;
export const { setActiveProject } = activeProjectSlice.actions;
