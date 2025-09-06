import z from "zod";

export const LoginRequest = z
  .object({
    email: z.string().email(),
    password: z.string().min(1),
  })
  .strict();
export type LoginRequestType = z.infer<typeof LoginRequest>;

export const LoginResponse = z
  .object({
    accessToken: z.string(),
  })
  .strict();

export type LoginResponseType = z.infer<typeof LoginResponse>;


export const RegisterCandidateRequest = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  confirmPassword: z.string().min(1),
  name: z.string().min(1),
  gender: z.enum(['1','0']),
  phone: z.string().min(10),
  birthday: z.string().optional(),
  location: z.string().optional(),
  avatar: z
  .any()
  .refine((file) => file instanceof File || file === null || file === undefined, {
    message: "Lỗi tải ảnh",
  })
  .nullable()
  .optional(),
})

export type RegisterCandidateRequestType = z.infer<typeof RegisterCandidateRequest>;