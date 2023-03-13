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
				properties: true,
				name: true,
				size: true,
			},
		});
		return NextResponse.json({
			project,
			success: true,
		});
	} catch {
		return NextResponse.json({
			success: false,
		});
	}
}