'use client';
import styles from './SearchBar.module.scss';
import { SearchIcon } from '@/components/Icons';
import { dispatch } from '@/utils/store';
import { setQuery } from '@/slices/Query';
import { ChangeEvent } from 'react';
import useSelect from '@/hooks/useSelect';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export const SearchBar = () => {
	const { Query } = useSelect();
	function changeHandler(event: ChangeEvent<HTMLInputElement>) {
		dispatch(setQuery(event.currentTarget.value));
	}
	const { refresh, push } = useRouter();

	function searchEvent() {
		push(`projects/?query=${Query}`);
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				searchEvent();
			}}
			className={styles.wrapper}
		>
			<input
				type='text'
				value={Query}
				placeholder='Search...'
				className={styles.input}
				onChange={changeHandler}
			/>
			<span onClick={searchEvent}>
				<SearchIcon className={styles.searchIcon} />
			</span>
		</form>
	);
};

export default SearchBar;
