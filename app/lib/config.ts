import { z } from "zod";

const configSchema = z.object({
  SECRET: z.string().min(1),
});

const config = configSchema.parse({
  SECRET: process.env.SECRET,
});

export default config;
