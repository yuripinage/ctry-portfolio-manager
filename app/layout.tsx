'use client';
import localFont from 'next/font/local';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { StyledRoot } from './StyledRoot';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 3,
		},
	},
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<QueryClientProvider client={queryClient}>
					<AppRouterCacheProvider>
						<StyledRoot>{children}</StyledRoot>
					</AppRouterCacheProvider>
				</QueryClientProvider>
			</body>
		</html>
	);
}
