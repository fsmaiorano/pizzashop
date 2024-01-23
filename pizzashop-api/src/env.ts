import { z } from 'zod'

const envSchema = z.object({
  API_BASE_URL: z.string().url(),
  AUTH_REDIRECT_URL: z.string().url(),
  DB_URL: z.string().url().min(1),
  JWT_SECRET_KEY: z.string().min(1),
  RESEND_API_KEY: z.string().min(1),
  SEND_TOKEN_TO_FRONTEND: z
  .string()
  .optional()
  .default('false')
  .transform((value) => value === 'true'),
})

export const env = envSchema.parse(process.env)
