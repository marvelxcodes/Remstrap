'use client';
import styles from './SearchBar.module.scss';
import { SearchIcon } from '@/components/Icons';
import { dispatch } from '@/utils/store';
import { setQuery } from '@/slices/Query';
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useRef } from 'react';
import useSelect from '@/hooks/useSelect';
import { useRouter } from 'next/navigation';

export const SearchBar = () => {
	const { Query } = useSelect();
	const searchInputRef = useRef<HTMLInputElement>(null);

	// Focuses the searchbar on pressing "/"
	useEffect(() => {
		function SlashToSearch(event: KeyboardEvent) {
			if (event.key === '/') {
				event.preventDefault();
				searchInputRef.current?.focus();
			}
		}
		document.addEventListener('keypress', SlashToSearch);
		return () => {
			document.removeEventListener('keypress', SlashToSearch);
		};
	}, []);

	function changeHandler(event: ChangeEvent<HTMLInputElement>) {
		dispatch(setQuery(event.currentTarget.value));
	}

	const { push } = useRouter();

	function searchEvent(
		event: FormEvent<HTMLFormElement> | MouseEvent<HTMLSpanElement>
	) {
		event.preventDefault();
		push(`projects/?query=${Query}`);
	}

	return (
		<form onSubmit={searchEvent} className={styles.wrapper}>
			<input
				ref={searchInputRef}
				type='text'
				value={Query}
				placeholder='"/" to Search...'
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
