'use client';
import store from '@/utils/store';
import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

export default function Providers({ children }: PropsWithChildren) {
	return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
