'use server';

import { SwornMember } from '@/domain/entities/swornMember';
import { getDataFromUrl } from '@/services/houses.service';

export async function getSwornMembers(
  members: string[],
): Promise<SwornMember[]> {
  if (!members || members.length === 0) {
    return [];
  }

  try {
    const results = await Promise.allSettled(
      members.map(async (memberUrl) => {
        const member = await getDataFromUrl(memberUrl);

        if (!member) {
          throw new Error(`Failed to fetch ${memberUrl}`);
        }

        const alive = !member.died;
        const deathInfo = member.died ? member.died : null;

        return {
          name: member.name,
          alive,
          deathInfo,
        } as SwornMember;
      }),
    );

    const swornMembers = results
      .filter(
        (result): result is PromiseFulfilledResult<SwornMember> =>
          result.status === 'fulfilled',
      )
      .map((result) => result.value);

    return swornMembers;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch sworn members');
  }
}
