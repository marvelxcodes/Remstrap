import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	newProjectModal: false,
};

const modalSlice = createSlice({
	initialState,
	name: 'modal',
	reducers: {
		openModal: (state: any, action) => {
			state[action.payload] = true;
		},
		closeModal: (state: any, action) => {
			state[action.payload] = false;
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
