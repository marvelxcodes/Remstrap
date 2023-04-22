import prisma from '@/utils/prisma';
import styles from './page.module.scss';
import { auth } from '@clerk/nextjs/app-beta';
import Header from './Header';
import SearchBar from './SearchBar';
import NewProjectBtn from './NewProjectButton';
import Project from './Project';
import { NextContext } from '@/utils/types'; //

export default async function Page({ searchParams }: NextContext) {
	const projects = await fetchProjects(searchParams.query);
	return (
		<main className={styles.container}>
			<Header />
			<div className={styles.headsection}>
				<SearchBar />
				<NewProjectBtn />
			</div>
			<div className={styles.projectsContainer}>
				{projects.length ? (
					projects.map((project) => (
						<Project key={project.id} {...project} />
					))
				) : (
					<h1 className={styles.notFound}>Nothing to show!</h1>
				)}
			</div>
		</main>
	);
}

async function fetchProjects(query: string) {
	const { userId } = auth();
	const projects = await prisma.project.findMany({
		where: {
			userId: userId!,
			name: {
				contains: query,
			},
		},
		orderBy: {
			createdOn: 'desc',
		},
		select: {
			id: true,
			name: true,
			size: true,
			createdOn: true,
			image: true,
		},
	});
	return projects;
}
