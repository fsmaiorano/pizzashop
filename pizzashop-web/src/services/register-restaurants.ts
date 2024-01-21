import { api } from '@/lib/axios'

export interface RegisterRestaurantRequest {
  restaurantName: string
  managerName: string
  phone: string
  email: string
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  phone,
  email,
}: RegisterRestaurantRequest) {
  await api.post('/restaurants', { restaurantName, managerName, phone, email })
}
