import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent text-sm text-accent-foreground">
            T
          </span>
          Themeflix
        </Link>
        <nav className="flex items-center gap-1 text-sm sm:gap-4">
          <Link href="/#templates" className="rounded-md px-2 py-1 text-muted hover:text-foreground">
            Templates
          </Link>
          <Link href="/pricing" className="rounded-md px-2 py-1 text-muted hover:text-foreground">
            Pricing
          </Link>
          <Link
            href="/pricing"
            className="hidden rounded-full bg-foreground px-4 py-1.5 font-medium text-background hover:opacity-90 sm:inline-block"
          >
            Get All-Access
          </Link>
        </nav>
      </div>
    </header>
  );
}
