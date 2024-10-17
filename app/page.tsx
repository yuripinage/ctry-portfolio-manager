'use client';
import { Box, Typography, CircularProgress } from '@mui/material';
import useFetchCompanies from '@/hooks/useFetchCompanies';
import CompanyForm from '@/components/CompanyForm';
import Portfolio from '@/components/Portfolio';

const Home = () => {
	const { data, isLoading, error } = useFetchCompanies();
	const errorMessage = error?.message || 'No companies in the portfolio yet.';

	return (
		<Box className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center justify-center">
				{isLoading ? (
					<CircularProgress />
				) : (
					<>
						<Typography variant="h3">Portfolio Manager</Typography>
						{!!data?.length ? (
							<Portfolio companies={data} />
						) : (
							<Typography variant="body1">
								{errorMessage}
							</Typography>
						)}{' '}
						<CompanyForm />
					</>
				)}
			</main>
		</Box>
	);
};

export default Home;
