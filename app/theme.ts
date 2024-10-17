'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
});

const theme = createTheme({
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					padding: '10px 20px',
					backgroundColor: '#184df6',
					color: '#fff',
					borderRadius: '5px',
					cursor: 'pointer',
					'&:hover': {
						backgroundColor: '#143bcc',
					},
					'&:active': {
						backgroundColor: '#0e2a99',
					},
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					background: '#fff',
					padding: '0px 2px',
				},
			},
		},
	},
});

export default theme;
