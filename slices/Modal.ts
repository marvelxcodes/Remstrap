import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalStateType = {
	currentModal: string;
	data: {};
};

const initialState: ModalStateType = {
	currentModal: '',
	data: {},
};

const modalSlice = createSlice({
	initialState,
	name: 'modal',
	reducers: {
		openModal: (_state, action: PayloadAction<ModalStateType>) => {
			return action.payload;
		},
		closeModal: (_state) => {
			return {
				currentModal: '',
				data: {},
			};
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
