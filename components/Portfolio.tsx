import Box from '@mui/material/Box';
import { Company } from '@/types/Company';

type PortfolioProps = {
	companies: Company[];
};

// The Portfolio component displays a table of companies
// It dynamically generates headers and rendering rows for each company in the array
const Portfolio = ({ companies }: PortfolioProps) => {
	const tableHeaderKeys = Object.keys(companies[0]).filter(
		(item) => item !== 'id'
	);

	// Format camel case into a human-readable format
	const formatHeaderTitle = (key: string): string => {
		return key
			.replace(/([A-Z])/g, ' $1')
			.replace(/^./, (str) => str.toUpperCase());
	};

	// Render a row for each company
	const renderRow = (company: Company) => {
		return (
			<tr>
				{Object.entries(company)
					.filter(([key]) => key !== 'id')
					.map(([key, value], index) => {
						return <td key={`${key}-${index}`}>{value}</td>;
					})}
			</tr>
		);
	};

	return (
		<>
			<Box className="table-wrapper">
				<table>
					<thead>
						<tr>
							{tableHeaderKeys.map((key) => {
								return (
									<th key={`tableHeader-${key}`}>
										{formatHeaderTitle(key)}
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{companies.map((company) => renderRow(company))}
					</tbody>
				</table>
			</Box>
		</>
	);
};

export default Portfolio;
