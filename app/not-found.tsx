import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-5xl flex-col justify-center px-4 sm:px-6">
      <p className="font-mono text-xs text-faint">404</p>
      <h1 className="mt-2 font-serif text-4xl text-fg">This page doesn&apos;t exist.</h1>
      <p className="mt-6">
        <Link
          href="/"
          className="underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
        >
          Back to the home page
        </Link>
      </p>
    </main>
  );
}
