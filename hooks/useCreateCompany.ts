import axios from 'axios';
import { useMutation } from 'react-query';
import { Company } from '@/types/Company';

const createCompany = async (
	company: Company
): Promise<{ success: boolean; id: number }> => {
	const { data } = await axios.post(
		'http://localhost:3000/api/companies',
		company
	);

	return data;
};

const useCreateCompany = () => {
	return useMutation(createCompany);
};

export default useCreateCompany;
