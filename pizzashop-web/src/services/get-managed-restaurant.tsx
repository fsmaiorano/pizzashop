import { api } from '@/lib/axios'

interface GetManagedRestaurantResponse {
  name: string
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>('/me')

  return response.data
}

export async function getManagedRestaurantMock() {
  const response = {
    data: {
      name: 'Pizzaria Cantinho do John Doe',
      id: '1',
      createdAt: new Date(),
      updatedAt: null,
      description: 'The best pizza in town!',
      managerId: '1',
    } as GetManagedRestaurantResponse,
  }

  return response.data
}
