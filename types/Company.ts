// TODO:
// Refactor 'status' to use an enum
// Refactor 'fundingRound' to use an enum
// Refactor 'founders' to be an array of strings

export type Company = {
	id: number;
	name: string;
	founders: string;
	valuation: number;
	investedAmount: number;
	fundingRound: string;
	status: string;
	riskEvaluation: number;
};
