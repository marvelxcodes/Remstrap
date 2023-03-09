import { StateType } from '@/utils/store';
import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
	initialState: {
		title: '',
		description: '',
	},
	name: 'alert',
	reducers: {
		openAlert: (state, action) => {
			state = action.payload;
		},
		closeAlert: (state) => {
			state.description = '';
			state.title = '';
		},
	},
});

export const { openAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;
