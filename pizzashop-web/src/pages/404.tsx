export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-xl">Sorry, that page does not exist.</p>
      <p className="text-accent-foreground">
        Go back to the{' '}
        <a href="/" className="text-sky-600 dark:text-sky-400">
          Dashboard
        </a>
        .
      </p>
    </div>
  )
}
