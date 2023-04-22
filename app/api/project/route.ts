import prisma from '@/utils/prisma';
import { NextRequest, NextResponse } from 'next/server';

// Creates a Project
export async function POST(req: NextRequest) {
	const { name, size, userId } = (await req.json()) as {
		name: string;
		userId: string;
		size: string;
	};
	try {
		const project = await prisma.project.create({
			data: {
				userId,
				size,
				name,
				properties: {
					create: {
						details: {},
					},
				},
			},
		});
		return NextResponse.json(project);
	} catch {
		return NextResponse.json({ success: false });
	}
}

// Renames a Project
export async function PATCH(req: NextRequest) {
	const { id, name } = (await req.json()) as {
		id: string;
		name: string;
	};
	try {
		const project = await prisma.project.update({
			where: {
				id,
			},
			data: {
				name,
			},
		});
		return NextResponse.json(project);
	} catch {
		return NextResponse.json({ success: false });
	}
}

// Save a edit
export async function PUT(req: NextRequest) {
	const { projectId, details } = (await req.json()) as {
		projectId: string;
		details: { [key: string]: string };
	};

	try {
		const properties = await prisma.properties.update({
			where: {
				projectId,
			},
			data: {
				details,
			},
		});

		return NextResponse.json(properties);
	} catch {
		return NextResponse.json({ success: false });
	}
}

// Deletes a File
export async function DELETE(req: NextRequest) {
	const { projectId } = (await req.json()) as {
		projectId: string;
	};
	try {
		await prisma.properties.delete({
			where: {
				projectId,
			},
		});
		await prisma.project.delete({
			where: {
				id: projectId,
			},
		});

		return NextResponse.json({
			success: true,
		});
	} catch (error) {
		return NextResponse.json({
			success: false,
		});
	}
}
