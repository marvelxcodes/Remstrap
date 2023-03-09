import { configureStore } from '@reduxjs/toolkit';
import Query from '@/slices/Query';
import Alert from '@/slices/Alert';
import ActiveProject from '@/slices/ActiveProject';
import Projects from '@/slices/Projects';
import Modal from '@/slices/Modal';

const store = configureStore({
	reducer: {
		Query,
		Alert,
		Modal,
		ActiveProject,
		Projects,
	},
});

export default store;
export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
