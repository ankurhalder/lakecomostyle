export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-8xl">
          Hello World
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400">
          Welcome to your new clean slate.
        </p>
      </main>
    </div>
  );
}
