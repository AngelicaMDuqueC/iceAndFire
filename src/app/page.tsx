import { HouseList } from '../components/HouseList';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl uppercase text-accent">
          Houses of Ice and Fire
        </h1>
        <HouseList />
      </div>
    </main>
  );
}
