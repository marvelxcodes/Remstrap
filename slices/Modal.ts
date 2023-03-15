import { createSlice } from '@reduxjs/toolkit';

type ModalType = {
	[name: string]: string;
};

const initialState: ModalType = {
	currentModal: '',
};

const modalSlice = createSlice({
	initialState,
	name: 'modal',
	reducers: {
		openModal: (_state, action) => {
			return action.payload;
		},
		closeModal: (_state, action) => {
			return action.payload;
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
