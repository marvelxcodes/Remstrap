import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import Query from '@/slices/Query';
import Alert from '@/slices/Alert';
import Modal from '@/slices/Modal';
import Loading from '@/slices/Loading';
import ActiveProject from '@/slices/ActiveProject';
import { ProjectsAPI } from '@/slices/Projects';

const store = configureStore({
	reducer: {
		Query,
		Alert,
		Modal,
		ActiveProject,
		Loading,
		[ProjectsAPI.reducerPath]: ProjectsAPI.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(ProjectsAPI.middleware),
});

setupListeners(store.dispatch);

export default store;

export type StateType = ReturnType<typeof store.getState>;
export const dispatch = store.dispatch;
