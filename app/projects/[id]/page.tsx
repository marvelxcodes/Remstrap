import prisma from '@/utils/prisma';

const Page = (context: any) => {
	console.log(context);
	return <main>hello</main>;
};

async function fetchData() {
	// const project = await prisma.project.findUnique({
	// 	where: {
	// 		id,
	// 	},
	// 	select: {
	// 		properties: true,
	// 		name: true,
	// 		size: true,
	// 	},
	// });
	return;
}

export default Page;
