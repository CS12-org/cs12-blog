import dotenv from "dotenv";
dotenv.config();

import { z } from "zod";

const configSchema = z.object({
  SECRET: z.string().min(1),
  VITE_PUBLIC_API_URL: z.string().min(1).url(),
});

const config = configSchema.parse({
  SECRET: process.env.SECRET,
  VITE_PUBLIC_API_URL: import.meta.env.VITE_PUBLIC_API_URL,
});

export default config;
