import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AppContext } from '@/contexts/app-context'
import { signIn } from '@/services/sign-in-service'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const { handleSubmit, register, formState } = useForm<SignInForm>()
  const { useMock, toggleUseMock } = useContext(AppContext)

  const { mutateAsync: authenticate } = useMutation({ mutationFn: signIn })

  async function handleSignIn(data: SignInForm) {
    try {
      debugger;
      if (useMock) {
        console.log(data)
        await new Promise((resolve) => setTimeout(resolve, 1000))
      } else {
        await authenticate({ email: data.email })
      }

      toast.success('We send you an email with a link to sign in')
    } catch {
      toast.error('Something went wrong')
    }
  }

  return (
    <>
      <Helmet title="Sign-in" />
      <div className="p-8">
        <Button asChild className="absolute right-4 top-8" variant={'outline'}>
          <Link to="/sign-up">New store</Link>
        </Button>
        <div className="flex w-[320px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Sign in to your account
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <Button
              disabled={formState.isSubmitting}
              type="submit"
              className="w-full"
            >
              Sign in
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="w-full"
              onClick={toggleUseMock}
            >
              UseMock
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
