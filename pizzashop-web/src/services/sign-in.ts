import { api } from '@/lib/axios'

export interface SignInRequest {
  email: string
}

export interface SignInResponse {
  token: string
  redirectUrl: string
}

export async function signIn({ email }: SignInRequest) {
  const response = await api.post<SignInResponse>('/authenticate', { email })
  return response.data
}
