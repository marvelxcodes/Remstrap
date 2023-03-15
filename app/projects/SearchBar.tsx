'use client';
import styles from './SearchBar.module.scss';
import { SearchIcon } from '@/components/Icons';
import useSelect from '@/hooks/useSelect';
import { useDispatch } from 'react-redux';
import { DispatchType } from '@/utils/store';
import { setQuery } from '@/slices/Query';
import { ChangeEvent } from 'react';

export const SearchBar = () => {
	const { Query } = useSelect();
	const dispatch: DispatchType = useDispatch();

	function changeHandler(event: ChangeEvent<HTMLInputElement>) {
		dispatch(setQuery(event.target.value));
	}

	return (
		<div className={styles.wrapper}>
			<SearchIcon className={styles.searchIcon} />
			<input
				type='text'
				value={Query}
				placeholder='Search...'
				className={styles.input}
				onChange={changeHandler}
			/>
		</div>
	);
};

export default SearchBar;
