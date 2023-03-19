import prisma from '@/utils/prisma';
import styles from './page.module.scss';
import { auth } from '@clerk/nextjs/app-beta';
import Header from './Header';
import SearchBar from './SearchBar';
import store, { dispatch } from '@/utils/store';
import NewProjectBtn from './NewProjectButton';
import Project from './Project';
import { setProjects } from '@/slices/Projects';

export default async function Page() {
	const projects = await fetchProjects();
	dispatch(setProjects(projects));
	return (
		<main className={styles.container}>
			<Header />
			<div className={styles.headsection}>
				<SearchBar />
				<NewProjectBtn />
			</div>
			{store.getState().Projects.projects.map((project) => (
				<Project key={project.id} {...project} />
			))}
		</main>
	);
}

async function fetchProjects() {
	const { userId } = auth();
	const projects = await prisma.project.findMany({
		where: {
			userId: userId!,
		},
		orderBy: {
			createdOn: 'desc',
		},
	});
	return projects;
}
