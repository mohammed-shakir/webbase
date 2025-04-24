export const metadata = {
  title: 'Home',
};

export default async function Home() {
  return (
    <section className="mt-8 flex flex-col items-center space-y-6">
      <h2 className="text-3xl font-semibold">Home</h2>
      <p>A reusable full-stack foundation for modern web platforms.</p>
    </section>
  );
}
