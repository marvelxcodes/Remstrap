import prisma from '@/utils/prisma';
import { auth } from '@clerk/nextjs/app-beta';
import Header from './Header';
import SearchBar from './SearchBar';

export default async function Page() {
	const projects = await fetchProjects();
	return (
		<>
			<Header />
			<h1>Hello World</h1>
			<h1>Hello World</h1>
			<h1>Hello World</h1>
			<h1>Hello World</h1>
			<h1>Hello World</h1>
			<SearchBar />
			{projects.map((project) => (
				<h1 key={project.id}>{project.name}</h1>
			))}
		</>
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
