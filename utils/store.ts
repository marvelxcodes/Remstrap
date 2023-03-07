import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {},
});

export default store;
export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
