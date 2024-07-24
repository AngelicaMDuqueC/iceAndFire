import { SwornMember } from '@/domain/entities/swornMember';
import React from 'react';

export const SwornMemberItem = ({ member }: { member: SwornMember }) => {
  return (
    <article className="p-10 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
      <h3 className="text-2xl sm:text-3xl font-semibold uppercase text-black">
        {member.name}
      </h3>
      <p className="text-xl md:text-3xl text-neutral-300">
        {member.alive ? 'Alive' : 'Dead'}
      </p>
      {member.deathInfo && (
        <p className="text-xl md:text-3xl text-neutral-300">
          {member.deathInfo}
        </p>
      )}
    </article>
  );
};
