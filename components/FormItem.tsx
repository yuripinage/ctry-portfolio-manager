import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import React from 'react';

type FormItemProps = {
	children: React.ReactNode;
	label: string;
	errorMessage?: string;
};

// Form input container
// TODO: separate into a specific TextInput component and a Select component
const FormItem = ({ children, label, errorMessage }: FormItemProps) => {
	return (
		<FormControl required>
			<InputLabel>{label}</InputLabel>
			{children}
			{!!errorMessage && (
				<FormHelperText error>{errorMessage}</FormHelperText>
			)}
		</FormControl>
	);
};

export default FormItem;
