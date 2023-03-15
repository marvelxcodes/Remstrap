'use client';
import store from '@/utils/store';
import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import client from '@/utils/queryClient';

export default function Providers({ children }: PropsWithChildren) {
	return (
		<ReduxProvider store={store}>
			<QueryClientProvider client={client}>{children}</QueryClientProvider>
		</ReduxProvider>
	);
}
