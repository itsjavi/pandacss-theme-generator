import 'server-only'

import 'dotenv/config'
import { z } from 'zod'

const envVarsSchema = z.object({
  APP_URL: z.string().url(),
  APP_ENV: z.enum(['development', 'production', 'preview']),
})

const envVars = envVarsSchema.parse(process.env)

export type EnvVars = z.infer<typeof envVarsSchema>

export default envVars
