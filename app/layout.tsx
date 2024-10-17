'use client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { StyledRoot } from './StyledRoot';
import './globals.css';

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
			<body className="antialiased">
				<QueryClientProvider client={queryClient}>
					<AppRouterCacheProvider>
						<StyledRoot>{children}</StyledRoot>
					</AppRouterCacheProvider>
				</QueryClientProvider>
			</body>
		</html>
	);
}
