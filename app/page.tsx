import { About, Characters, Header, Hero } from "@/components";

export default function Home() {
  return (
    <main className="min-h-[100vh] w-full flex flex-col overflow-x-hidden bg-black gap-10 -z-20 scroll-smooth snap-start ease-in-out duration-150 select-none">
      <Header />
      <Hero />
      <About />
      <Characters />
    </main>
  );
}
