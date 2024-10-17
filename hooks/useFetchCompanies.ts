import axios from 'axios';
import { useQuery } from 'react-query';
import { Company } from '@/types/Company';

const fetchCompanies = async (): Promise<Company[]> => {
	const { data } = await axios.get('http://localhost:3000/api/companies');
	return data;
};

const useFetchCompanies = () => {
	return useQuery<Company[], Error>({
		queryKey: ['companies'],
		queryFn: fetchCompanies,
	});
};

export default useFetchCompanies;
