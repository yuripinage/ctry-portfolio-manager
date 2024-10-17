import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	Box,
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Input,
	MenuItem,
	Select,
} from '@mui/material';
import useCreateCompany from '@/hooks/useCreateCompany';
import { Company } from '@/types/Company';
import FormItem from './FormItem';

type CompanyFormDialogProps = {
	onSuccess: () => void;
};

// Dialog with a form for adding a new company to the portfolio
// TODO: Remove open button and make the component be just the dialog
const CompanyFormDialog = ({ onSuccess }: CompanyFormDialogProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Company>();
	const { mutate, isLoading } = useCreateCompany();
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
		reset();
	};

	const onSubmit = (formData: Company) => {
		mutate(formData, {
			onSuccess: () => {
				handleClose();
				onSuccess();
			},
			onError: (error: any) => {
				alert(error?.message || 'An error has occured!');
			},
		});
	};

	return (
		<div>
			<Button variant="contained" onClick={() => setOpen(true)}>
				Add Company
			</Button>

			<Dialog
				open={open}
				onClose={handleClose}
				fullWidth
				maxWidth="sm"
				disableEscapeKeyDown={isLoading}
			>
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
					<Button
						variant="outlined"
						onClick={handleClose}
						disabled={isLoading}
					>
						Cancel
					</Button>
					<Button
						type="submit"
						form="companyForm"
						onClick={handleSubmit(onSubmit)}
						disabled={isLoading}
					>
						{isLoading ? (
							<CircularProgress size={24} />
						) : (
							'Add Company'
						)}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default CompanyFormDialog;
