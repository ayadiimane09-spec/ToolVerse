import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const tool = await prisma.tool.findUnique({
      where: { id: params.id },
      include: {
        translations: true,
        category: {
          include: {
            translations: true,
          },
        },
        alternatives: {
          include: {
            alternative: {
              include: {
                translations: true,
              },
            },
          },
        },
        ratings: true,
        comments: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!tool) {
      return NextResponse.json(
        { error: 'Tool not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(tool);
  } catch (error) {
    console.error('Error fetching tool:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
