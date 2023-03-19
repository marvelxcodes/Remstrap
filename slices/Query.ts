import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const querySlice = createSlice({
	initialState: '',
	name: 'projects',
	reducers: {
		setQuery: (_state, action: PayloadAction<string>) => {
			return action.payload;
		},
	},
});

export const { setQuery } = querySlice.actions;
export default querySlice.reducer;
