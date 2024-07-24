import Link from 'next/link';
import { House } from '@/domain/entities/houses';
import { fetchHouses } from '@/serverActions/fetchHouses';

export const HouseList = async () => {
  const houses: House[] = await fetchHouses();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
      {houses.map((house) => (
        <li
          key={house.url}
          className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center"
        >
          <h2 className="text-lg font-medium lg:text-2xl text-neutral-300 pb-2">
            {house.name}
          </h2>
          {house.swornMembers.length > 0 ? (
            <Link
              href={`/house/${house.url.split('/').pop()}`}
              className="flex items-center justify-center text-md font-medium rounded-full px-4 py-2 space-x-1 bg-neutral-300 text-black hover:bg-slate-50"
            >
              View Sworn Members
            </Link>
          ) : (
            <button
              disabled
              className="flex items-center justify-center text-md font-medium rounded-full px-4 py-2 space-x-1 bg-neutral-100 text-black"
            >
              This house has no sworn members
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};
