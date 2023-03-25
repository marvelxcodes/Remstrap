import prisma from '@/utils/prisma';
import { NextContext } from '@/utils/types';
import { NextResponse } from 'next/server';

export async function GET(req: Request, context: NextContext) {
	const userId = context.params.userId;
	try {
		const projects = await prisma.project.findMany({
			where: {
				userId,
			},
			select: {
				id: true,
				name: true,
				image: true,
				size: true,
				createdOn: true,
			},
			orderBy: {
				createdOn: 'desc',
			},
		});
		return NextResponse.json(projects);
	} catch {
		return NextResponse.json({ success: false });
	}
}
