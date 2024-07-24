import { SwornMemberList } from '@/components/SwornMemberList';
import { House } from '@/domain/entities/houses';
import { fetchHouses } from '@/serverActions/fetchHouses';
import { getHouse } from '@/serverActions/getHouse';
import { getSwornMembers } from '@/serverActions/getSwornMembers';
import Link from 'next/link';
interface Props {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const houses: House[] = await fetchHouses();
  return houses.map((house) => ({
    id: house.url.split('/').pop(),
  }));
}

const fetchHouse = async (id: string) => {
  if (!id) {
    throw new Error('The id parameter must not be empty or null.');
  }


  const house: House = await getHouse('houses', id);

  return house;
};

const HousePage = async ({ params }: Props) => {
  const house = await fetchHouse(params.id);
  if (!house) {
    return <p>House not found</p>;
  }

  const swornMembers = await getSwornMembers(house.swornMembers);
  return (
    <div className="py-16 bg-gradient-to-br grid grid-cols-1 gap-8">
      <h1 className="text-4xl sm:text-5xl md:text-7xl uppercase text-accent">
        {house.name}
      </h1>
      <Link
        href={'/'}
        className="text-2xl sm:text-3xl md:text-5xl text-neutral-300"
      >
        View All Houses
      </Link>
      {house.swornMembers.length > 0 ? (
        <SwornMemberList swornMembers={swornMembers} />
      ) : (
        <p>This house has no sworn members</p>
      )}
    </div>
  );
};

export default HousePage;
