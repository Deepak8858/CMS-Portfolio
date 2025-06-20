import { NextResponse } from 'next/server';
import { searchProjects } from '@/lib/search';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';
  const filters = searchParams.getAll('filter');
  const results = await searchProjects(query, filters);
  return NextResponse.json(results);
}
