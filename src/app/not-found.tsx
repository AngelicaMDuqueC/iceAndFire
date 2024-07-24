import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold uppercase">404 - Page Not Found</h1>
      <p className="text-base text-primary">
        The page you are looking for does not exist.
      </p>
      <Link href="/">Go to Home Page</Link>
    </main>
  );
};

export default NotFoundPage;
