'use client';
import Portfolio from '@/components/Portfolio';
import { Company } from '@/types/Company';
import companies from '@/data/db.json';
import { Box, Typography } from '@mui/material';

export default function Home() {
	return (
		<Box className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center justify-center">
				<Typography variant="h3">Portfolio Manager</Typography>
				<Portfolio companies={companies as Company[]} />
			</main>
		</Box>
	);
}
