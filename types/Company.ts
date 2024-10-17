// TODO:
// Refactor 'status' to use an enum
// Refactor 'fundingRound' to use an enum
// Refactor 'founders' to be an array of strings

export type Company = {
	id: number;
	name: string;
	founders: string;
	status: string;
	valuation: number;
	fundingRound: string;
	investedAmount: number;
	riskEvaluation: number;
};
