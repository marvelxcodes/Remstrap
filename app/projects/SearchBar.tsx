'use client';
import styles from './SearchBar.module.scss';
import { SearchIcon } from '@/components/Icons';
import { dispatch } from '@/utils/store';
import { setQuery } from '@/slices/Projects';
import { ChangeEvent } from 'react';
import useSelect from '@/hooks/useSelect';

export const SearchBar = () => {
	const { Projects } = useSelect();
	function changeHandler(event: ChangeEvent<HTMLInputElement>) {
		dispatch(setQuery(event.currentTarget.value));
	}
	return (
		<div className={styles.wrapper}>
			<SearchIcon className={styles.searchIcon} />
			<input
				type='text'
				value={Projects.query}
				placeholder='Search...'
				className={styles.input}
				onChange={changeHandler}
			/>
			{Projects.query}
		</div>
	);
};

export default SearchBar;
