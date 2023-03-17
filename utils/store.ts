import { configureStore } from '@reduxjs/toolkit';
import Projects from '@/slices/Projects';
import Alert from '@/slices/Alert';
import ActiveProject from '@/slices/ActiveProject';
import Modal from '@/slices/Modal';

const store = configureStore({
	reducer: {
		Projects,
		Alert,
		Modal,
		ActiveProject,
	},
});

export default store;

// Types
export type StateType = ReturnType<typeof store.getState>;
export const dispatch = store.dispatch;
