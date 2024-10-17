import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	Box,
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	FormControl,
	Input,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

// Dialog with a form for adding a new company to the portfolio
const CompanyFormDialog = () => {
	const { register, handleSubmit, reset } = useForm();
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
		reset();
	};

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<div>
			<Button variant="contained" onClick={() => setOpen(true)}>
				Add Company
			</Button>

			<Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
				<DialogTitle>Add Company</DialogTitle>
				<DialogContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Box
							display="flex"
							flexDirection="column"
							gap={2}
							py={2}
						>
							<FormControl required>
								<InputLabel>Company Name</InputLabel>
								<Input
									{...register('name', { required: true })}
								/>
							</FormControl>

							<FormControl required>
								<InputLabel>Founders</InputLabel>
								<Input
									{...register('founders', {
										required: true,
									})}
								/>
							</FormControl>

							<FormControl required>
								<InputLabel>Valuation (in millions)</InputLabel>
								<Input
									{...register('valuation', {
										required: true,
									})}
									type="number"
								/>
							</FormControl>

							<FormControl required>
								<InputLabel>
									Invested Amount (in millions)
								</InputLabel>
								<Input
									{...register('investedAmount', {
										required: true,
									})}
									type="number"
								/>
							</FormControl>

							<FormControl required>
								<InputLabel>Funding Round</InputLabel>
								<Select
									{...register('fundingRound', {
										required: true,
									})}
								>
									<MenuItem value="pre-seed">
										Pre-seed
									</MenuItem>
									<MenuItem value="seed">Seed</MenuItem>
									<MenuItem value="series-a">
										Series A
									</MenuItem>
									<MenuItem value="series-b">
										Series B
									</MenuItem>
									<MenuItem value="series-c">
										Series C
									</MenuItem>
									<MenuItem value="series-d">
										Series D
									</MenuItem>
									<MenuItem value="series-e">
										Series E
									</MenuItem>
								</Select>
							</FormControl>

							<FormControl required>
								<InputLabel>Status</InputLabel>
								<Select
									{...register('status', { required: true })}
								>
									<MenuItem value="active">Active</MenuItem>
									<MenuItem value="acquired">
										Acquired
									</MenuItem>
									<MenuItem value="sold">Sold</MenuItem>
								</Select>
							</FormControl>

							<FormControl required>
								<InputLabel>Risk Evaluation</InputLabel>
								<Select
									{...register('riskEvaluation', {
										required: true,
									})}
								>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</form>
				</DialogContent>

				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button
						type="submit"
						form="companyForm"
						onClick={handleSubmit(onSubmit)}
					>
						Add Company
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default CompanyFormDialog;
