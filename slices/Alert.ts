import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
	initialState: {
		title: '',
		description: '',
	},
	name: 'alert',
	reducers: {
		openAlert: (state, action) => {
			return state.title ? state : action.payload;
		},
		closeAlert: (_state) => {
			return {
				title: '',
				description: '',
			};
		},
	},
});

export const { openAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;
