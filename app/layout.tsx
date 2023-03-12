import './globals.scss';
import { PropsWithChildren } from 'react';
import Providers from '@/components/Providers';

export const metadata = {
	title: 'Remstrap',
	icons: '/favicon.svg',
};

function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<head>
				<meta httpEquiv='X-UA-Compatible' content='IE=7' />
				<meta
					name='description'
					content='Remstrap is a free to use online professional photo editing tool'
				/>
				<meta
					name='keywords'
					content='remstrap marvelxcodes react next javascript online photo editor tool professional customize images'
				/>
				<meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
			</head>
			<Providers>
				<body>{children}</body>
			</Providers>
		</html>
	);
}

export default RootLayout;
