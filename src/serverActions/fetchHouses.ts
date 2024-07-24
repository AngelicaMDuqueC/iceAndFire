'use server';

import { getData } from '@/services/houses.service';

export async function fetchHouses(path: string = 'houses'): Promise<any> {
  const data = await getData(path, {
    next: { revalidate: 2 },
  });

  if (!data) {
    throw new Error(`Failed to fetch houses`);
  }
  if (!Array.isArray(data)) {
    throw new Error('Expected an array of houses but received something else');
  }
  return data;
}
