export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="mx-auto max-w-md px-6 text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
          <h2 className="mb-4 text-2xl font-semibold">Link Not Found</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            This link does not exist or has been moved.
          </p>
        </div>

        <a
          href="https://gamaisitb.com"
          className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg transition-colors duration-200 hover:bg-primary/90 hover:shadow-xl"
        >
          Return to GAMAIS ITB
        </a>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>Keluarga Mahasiswa Islam ITB</p>
        </div>
      </div>
    </main>
  );
}
