export default async function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="mx-auto max-w-lg px-6 text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-5xl font-bold text-primary">GAMAIS ITB</h1>
          <h2 className="mb-4 text-2xl font-semibold">Link Shortener</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Welcome to the official link shortening service for GAMAIS ITB.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="https://gamaisitb.org"
            className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg transition-colors duration-200 hover:bg-primary/90 hover:shadow-xl"
          >
            Visit GAMAIS ITB
          </a>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>Keluarga Mahasiswa Islam ITB</p>
          <p className="mt-2">Institut Teknologi Bandung</p>
        </div>
      </div>
    </main>
  );
}
