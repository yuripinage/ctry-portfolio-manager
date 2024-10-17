import db from '@/data/db';
import { Company } from '@/types/Company';

// GET handler
export const GET = async (): Promise<Response> => {
	try {
		const query = db.prepare('SELECT * FROM companies');
		const companies = query.all();

		return new Response(JSON.stringify(companies), { status: 200 });
	} catch (error: any) {
		const errorResponse = error?.message
			? JSON.stringify({ error: error.message })
			: 'Error';

		return new Response(errorResponse, {
			status: 500,
		});
	}
};

// POST handler
// Example:
// curl -X POST http://localhost:3000/api/companies \
// -H "Content-Type: application/json" \
// -d '{
//   "name": "The Laboratory",
//   "founders": "Dexter",
//   "valuation": "60",
//   "investedAmount": "15",
//   "fundingRound": "series-b",
//   "status": "active",
//   "riskEvaluation": 3
// }'
export const POST = async (req: Request): Promise<Response> => {
	try {
		const {
			name,
			founders,
			valuation,
			investedAmount,
			fundingRound,
			status,
			riskEvaluation,
		}: Company = await req.json();

		const insertQuery = db.prepare(`
            INSERT INTO companies (name, founders, valuation, investedAmount, fundingRound, status, riskEvaluation)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `);

		const result = insertQuery.run(
			name,
			founders,
			valuation,
			investedAmount,
			fundingRound,
			status,
			riskEvaluation
		);

		return new Response(
			JSON.stringify({ success: true, id: result.lastInsertRowid }),
			{ status: 201 }
		);
	} catch (error: any) {
		const errorResponse = error?.message
			? JSON.stringify({ error: error.message })
			: 'Error';

		return new Response(errorResponse, {
			status: 500,
		});
	}
};
