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
import { Company } from '@/types/Company';
import FormItem from './FormItem';

// Dialog with a form for adding a new company to the portfolio
const CompanyFormDialog = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Company>();
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
		reset();
	};

	const onSubmit = (data: Company) => {
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
							<FormItem
								label="Company name"
								errorMessage={errors.name?.message}
							>
								<Input
									{...register('name', {
										required: 'Company name is required',
									})}
								/>
							</FormItem>

							<FormItem
								label="Founders"
								errorMessage={errors.founders?.message}
							>
								<Input
									{...register('founders', {
										required: 'Founders is required',
									})}
								/>
							</FormItem>

							<FormItem
								label="Valuation (in millions)"
								errorMessage={errors.valuation?.message}
							>
								<Input
									{...register('valuation', {
										required: 'Valuation is required',
									})}
									type="number"
								/>
							</FormItem>

							<FormItem
								label="Invested Amount (in millions)"
								errorMessage={errors.investedAmount?.message}
							>
								<Input
									{...register('investedAmount', {
										required: 'Invested Amount is required',
									})}
									type="number"
								/>
							</FormItem>

							<FormItem
								label="Funding Round"
								errorMessage={errors.fundingRound?.message}
							>
								<Select
									{...register('fundingRound', {
										required: 'Funding Round is required',
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
							</FormItem>

							<FormItem
								label="Status"
								errorMessage={errors.status?.message}
							>
								<Select
									{...register('status', {
										required: 'Status is required',
									})}
								>
									<MenuItem value="active">Active</MenuItem>
									<MenuItem value="acquired">
										Acquired
									</MenuItem>
									<MenuItem value="sold">Sold</MenuItem>
								</Select>
							</FormItem>

							<FormItem
								label="Risk Evaluation"
								errorMessage={errors.riskEvaluation?.message}
							>
								<Select
									{...register('riskEvaluation', {
										required: 'Risk Evaluation is required',
									})}
								>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
								</Select>
							</FormItem>
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
