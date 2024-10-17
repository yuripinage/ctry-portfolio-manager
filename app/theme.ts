'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
});

// CUSTOM THEME
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
					width: '200px',
					'&:hover': {
						backgroundColor: '#143bcc',
					},
					'&:active': {
						backgroundColor: '#0e2a99',
					},
				},
				outlined: {
					color: '#184df6',
					backgroundColor: 'transparent',
					border: '1px solid #184df6',
					'&:hover': {
						backgroundColor: '#143bcc',
						color: '#fff',
					},
					'&:active': {
						backgroundColor: '#0e2a99',
						color: '#fff',
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
		MuiCircularProgress: {
			styleOverrides: {
				root: {
					color: '#fff',
				},
			},
		},
	},
});

export default theme;
