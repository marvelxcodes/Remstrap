import { createSlice } from '@reduxjs/toolkit';

const initialState: string = '';

const querySlice = createSlice({
	initialState,
	name: 'query',
	reducers: {
		setQuery: (state, action) => {
			return action.payload;
		},
	},
});

export const { setQuery } = querySlice.actions;
export default querySlice.reducer;
