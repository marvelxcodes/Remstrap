import prisma from '@/utils/prisma';
import { NextContext } from '@/utils/types';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, context: NextContext) {
	const id = context.params.projectId;
	try {
		const project = await prisma.project.findUnique({
			where: {
				id,
			},
			select: {
				id: true,
				properties: true,
				name: true,
				size: true,
			},
		});
		return NextResponse.json(project);
	} catch {
		return NextResponse.json({
			success: false,
		});
	}
}
