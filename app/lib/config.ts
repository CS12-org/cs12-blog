import { z } from "zod";

const configSchema = z.object({
  VITE_SECRET: z.string().min(1),
});

const config = configSchema.parse({
  VITE_SECRET: import.meta.env.VITE_SECRET,
});

export default config;
