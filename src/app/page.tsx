import "@/styles/globals.css";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-primary sm:text-[5rem] ">
          Hello World
        </h1>
      </div>
    </main>
  );
}