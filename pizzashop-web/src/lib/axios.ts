import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = '/sign-in'
    }
    return Promise.reject(error)
  },
)

if (env.VITE_API_URL) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 3000)),
    )
    return config
  })
}

if (env.VITE_HTTP_LOG_ENABLED) {
  api.interceptors.response.use(
    (response) => {
      console.log(response.config.url, JSON.stringify(response.data))
      return response
    },
    (error) => {
      if (error.response?.status === 401) {
        window.location.href = '/sign-in'
      }
      return Promise.reject(error)
    },
  )
}
