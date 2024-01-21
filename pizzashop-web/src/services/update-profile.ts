import { api } from '@/lib/axios'

interface UpdateProfileRequest {
  name: string
  description: string | null
}

export async function updateProfile({
  name,
  description,
}: UpdateProfileRequest) {
  await api.put('/profile', {
    name,
    description,
  })
}
