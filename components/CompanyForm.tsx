import { useState } from 'react';
import {
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
	const [open, setOpen] = useState(false);

	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button variant="contained" onClick={() => setOpen(true)}>
				Add Company
			</Button>

			<Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
				<DialogTitle>Add Company</DialogTitle>
				<DialogContent>
					<form className="flex flex-col gap-8 py-4">
						<FormControl required>
							<InputLabel>Company Name</InputLabel>
							<Input name="name" />
						</FormControl>

						<FormControl required>
							<InputLabel>Founders</InputLabel>
							<Input name="founders" />
						</FormControl>

						<FormControl required>
							<InputLabel>Valuation (in millions)</InputLabel>
							<Input name="valuation" type="number" required />
						</FormControl>

						<FormControl required>
							<InputLabel>
								Invested Amount (in millions)
							</InputLabel>
							<Input
								name="investedAmount"
								type="number"
								required
							/>
						</FormControl>

						<FormControl required>
							<InputLabel>Funding Round</InputLabel>
							<Select name="fundingRound">
								<MenuItem value="active">Pre-seed</MenuItem>
								<MenuItem value="acquired">Seed</MenuItem>
								<MenuItem value="sold">Series A</MenuItem>
								<MenuItem value="sold">Series B</MenuItem>
								<MenuItem value="sold">Series C</MenuItem>
								<MenuItem value="sold">Series D</MenuItem>
								<MenuItem value="sold">Series E</MenuItem>
							</Select>
						</FormControl>

						<FormControl required>
							<InputLabel>Status</InputLabel>
							<Select name="status">
								<MenuItem value="active">Active</MenuItem>
								<MenuItem value="acquired">Acquired</MenuItem>
								<MenuItem value="sold">Sold</MenuItem>
							</Select>
						</FormControl>

						<FormControl required>
							<InputLabel>Risk Evaluation</InputLabel>
							<Select name="riskEvaluation">
								<MenuItem value={1}>1</MenuItem>
								<MenuItem value={2}>2</MenuItem>
								<MenuItem value={3}>3</MenuItem>
								<MenuItem value={4}>4</MenuItem>
								<MenuItem value={5}>5</MenuItem>
							</Select>
						</FormControl>
					</form>
				</DialogContent>

				<DialogActions>
					<Button onClick={handleClose} color="secondary">
						Cancel
					</Button>
					<Button onClick={handleClose} variant="contained">
						Add Company
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default CompanyFormDialog;
