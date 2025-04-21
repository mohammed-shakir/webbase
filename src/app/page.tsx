export const metadata = {
  title: 'Home',
};

export default async function Home() {
  return (
    <section className="flex flex-col items-center space-y-6 mt-8">
      <h2 className="text-3xl font-semibold">Home</h2>
      <p>A reusable full-stack foundation for modern web platforms.</p>
    </section>
  );
}
