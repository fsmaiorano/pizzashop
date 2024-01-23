import { useMutation, useQuery } from '@tanstack/react-query'
import { Building, ChevronDown, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton'
import { getManagedRestaurant } from '@/services/get-managed-restaurant'
import { getProfile } from '@/services/get-profile'
import { signOut } from '@/services/sign-out'

import { StoreProfileDialog } from './store-profile-dialog'
import { Dialog, DialogTrigger } from './ui/dialog'

export function AccountMenu() {
  const navigate = useNavigate()

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })

  const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
    useQuery({
      queryKey: ['managed-restaurant'],
      queryFn: getManagedRestaurant,
      staleTime: Infinity,
    })

  const { mutateAsync: signOutFn, isPending: isSigninOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate('/sign-in', { replace: true })
    },
  })

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex select-none items-center gap-2"
          >
            {isLoadingManagedRestaurant ? (
              <Skeleton className="h-4 w-40" />
            ) : (
              managedRestaurant?.name
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex flex-col items-start">
              {isLoadingProfile ? (
                <div className="space-y-1.5">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
              ) : (
                <>
                  <span>{profile?.name}</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    {profile?.email}
                  </span>
                </>
              )}
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DialogTrigger asChild>
              <DropdownMenuItem>
                <Building className="mr-2 h-4 w-4" />
                <span>Store profile</span>
              </DropdownMenuItem>
            </DialogTrigger>
            <DropdownMenuItem
              asChild
              className="text-rose-500 dark:text-rose-400"
              disabled={isSigninOut}
            >
              <button className="w-full" onClick={() => signOutFn()}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
      <StoreProfileDialog />
    </Dialog>
  )
}
