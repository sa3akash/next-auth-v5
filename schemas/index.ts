import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Email is required.'
    }),
    password: z.string().min(1,{
        message: 'Password is required.'
    })
})


export const RegisterSchema = z.object({
    email: z.string().email({
        message: 'Email is required.'
    }),
    name: z.string().min(1,{
        message: 'Name is required.'
    }),
    password: z.string().min(6,{
        message: 'Minimum 6 character are required.'
    })
})


export type LoginType = z.infer<typeof LoginSchema>
export type RegisterType = z.infer<typeof RegisterSchema>