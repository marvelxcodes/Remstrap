import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const menuSlice = createSlice({
	initialState: {
		currentMenu: 'Background',
	},
	name: 'menu',
	reducers: {
		setCurrentMenu: (state, action: PayloadAction<string>) => {
			return { ...state, currentMenu: action.payload };
		},
	},
});

export const { setCurrentMenu } = menuSlice.actions;
export default menuSlice.reducer;
