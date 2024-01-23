import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_HTTP_LOG_ENABLED: z
    .string()
    .optional()
    .default('false')
    .transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
