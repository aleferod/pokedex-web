import { z } from 'zod';

// Stubs: replaced by the backend-mirroring rules.
export const usernameSchema = z.string();
export const emailSchema = z.string();
export const passwordSchema = z.string();
export const signInSchema = z.object({ username: z.string(), password: z.string() });
export const registerSchema = z.object({
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
});
export type SignInValues = z.infer<typeof signInSchema>;
export type RegisterValues = z.infer<typeof registerSchema>;
