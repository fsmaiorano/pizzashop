import { api } from '@/lib/axios'

interface GetProfileResponse {
  name: string
  id: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}

export async function getProfileMock() {
  const response = {
    data: {
      name: 'John Doe',
      id: '1',
      email: 'johndoe@pizzashop.com',
      phone: '+1 555 555 5555',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    } as GetProfileResponse,
  }

  return response.data
}
