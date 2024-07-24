'use server';

import { getData } from '@/services/houses.service';

export async function getHouse(
  path: string = 'houses',
  id: string,
): Promise<any> {
  if (!id) {
    throw new Error('The id parameter must not be empty or null.');
  }

  const constructedPath = `${path}/${id}`;
  try {
    const data = await getData(constructedPath, {
      next: { revalidate: 2 },
    });
    if (!data) {
      throw new Error(`Failed to fetch a specific house with id: ${id}`);
    }
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch houses`);
  }
}
