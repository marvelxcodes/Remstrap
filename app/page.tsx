'use client';
import styles from './page.module.scss';
import { useClerk, useUser } from '@clerk/nextjs/app-beta/client';
import { dispatch } from '@/utils/store';
import { openAlert } from '@/slices/Alert';
import useWeeksAgo from '@/hooks/useDate';
import Link from 'next/link';
import {
	useCreateProjectMutation,
	useFetchProjectsQuery,
} from '@/slices/Projects';

export default function Home() {
	const date = useWeeksAgo('2023-03-13T05:03:04.608Z' as unknown as Date);
	const { data } = useFetchProjectsQuery('1');
	const [createProject] = useCreateProjectMutation();
	console.log(data);
	const open = () => {
		dispatch(
			openAlert({
				title: 'Fields Empty!',
				description: 'Fields cannot be empty',
			})
		);
	};
	return (
		<main>
			<button onClick={open}>Open Alert</button>
			<Link href={'/projects'}>Projects</Link>
		</main>
	);
}
