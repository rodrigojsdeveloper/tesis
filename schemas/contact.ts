import z from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, 'Digite o nome'),
  email: z.string().min(1, 'Digite o email').email('Email inválido'),
  company: z.string().min(1, 'Digite a empresa'),
  cellphone: z
    .string()
    .min(1, 'Digite o telefone')
    .regex(/^\(\d{2}\)\s?\d{5}-\d{4}$/, 'Formato inválido (XX) XXXXX-XXXX'),
})
