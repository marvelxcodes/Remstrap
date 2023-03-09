import { useSelector } from 'react-redux';
import { StateType } from '@/utils/store';

export default function useSelect() {
	const state = useSelector((state: StateType) => state);
	return state;
}
