import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
	initialState: false,
	name: 'loading',
	reducers: {
		openLoading(_state) {
			return true;
		},
		closeLoading(_state) {
			return false;
		},
	},
});

export const { openLoading, closeLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
