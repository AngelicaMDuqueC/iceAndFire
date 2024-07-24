import { SwornMember } from '@/domain/entities/swornMember';
import React from 'react';
import { SwornMemberItem } from './SwornMemberItem';

export const SwornMemberList = ({
  swornMembers,
}: {
  swornMembers: SwornMember[];
}) => {
  if (!swornMembers) {
    return <div>No Sworn Members</div>;
  }

  return (
    <ul className="grid gap-12 lg:grid-cols-2 p-10">
      {swornMembers?.map((member) => (
        <li key={member.name}>
          <SwornMemberItem key={member.name} member={member} />
        </li>
      ))}
    </ul>
  );
};
