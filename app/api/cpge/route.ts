import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { locale: string } }
) {
  try {
    const cpgeResources = await prisma.cPGEResource.findMany({
      include: {
        translations: true,
        tool: {
          include: {
            translations: {
              where: { language: params.locale || 'fr' },
            },
          },
        },
      },
    });

    return NextResponse.json(cpgeResources);
  } catch (error) {
    console.error('Error fetching CPGE resources:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
