import prisma from '@/utils/prisma';
import { NextContext } from '@/utils/types';
import styles from './page.module.scss';

import Header from './Header';
import Footer from './Footer';
import Toolsbar from './Toolsbar';
import Canvas from './Canvas';
import { auth } from '@clerk/nextjs/app-beta';

const Page = async (context: NextContext) => {
	const project = await fetchData(context.params.id);
	return (
		<div className={styles.container}>
			<Toolsbar />
			<div className={styles.section2}>
				<Header />
				<Canvas />
				<Footer />
			</div>
		</div>
	);
};

async function fetchData(id: string) {
	const { userId } = auth();
	const project = await prisma.project.findUnique({
		where: {
			id,
		},
		select: {
			id: true,
			properties: {
				select: {
					details: true,
				},
			},
			name: true,
			size: true,
			userId: true,
		},
	});

	if (project?.userId !== userId) {
		return 'unauthorized';
	}
	return {
		id: project?.id,
		name: project?.name,
		size: project?.size,
		properties: project?.properties?.details,
	};
}

export default Page;
