import './globals.scss';
import { PropsWithChildren } from 'react';
import Providers from '@/components/Providers';

import { ClerkProvider } from '@clerk/nextjs/app-beta';

export const metadata = {
	title: 'Remstrap',
	icons: '/favicon.svg',
	description:
		'Remstrap is a free to use online professional photo editing tool',
	keywords:
		'remstrap marvelxcodes react next javascript online photo editor tool professional customize images',
	authors: [{ name: 'marvelxcodes', url: 'https://github.com/marvelxcodes' }],
	viewport: {
		initialScale: 1,
		height: 'device-height',
		width: 'device-width',
	},
	applicationName: 'Remstrap',
	publisher: 'Crownverse',
	twitter: {
		title: 'Remstrap',
		description: 'An Professional photo editor on web',
	},
};

function RootLayout({ children }: PropsWithChildren) {
	return (
		<ClerkProvider>
			<Providers>
				<html lang='en'>
					<body>{children}</body>
				</html>
			</Providers>
		</ClerkProvider>
	);
}

export default RootLayout;
