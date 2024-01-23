import { Link, useRouteError } from 'react-router-dom'

export function ApplicationError() {
  const error = useRouteError() as Error

  console.error(error)

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whoops, something went wrong</h1>
      <p className="text-accent-foreground">
        An unexpected error has occurred. Please try again later.
      </p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Go back to the{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
