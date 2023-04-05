import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
	initialState: 0,
	name: 'loading',
	reducers: {
		setLoading(_state, action) {
			return action.payload;
		},
		closeLoading(_state, _action) {
			return 0;
		},
	},
});

export const { setLoading, closeLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
