import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email().transform((value) => value.toLowerCase()),
  password: z.string().min(6),
})

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().transform((value) => value.toLowerCase()),
  password: z.string().min(6),
})

export const productSchema = z.object({
  name: z.string().min(2),
  description: z.string().default(''),
  price: z.coerce.number().positive(),
  salePrice: z.coerce.number().positive().optional(),
  category: z.enum(['Rings', 'Necklaces', 'Earrings', 'Bracelets']),
  stock: z.coerce.number().int().nonnegative(),
  status: z.enum(['in-stock', 'out-of-stock']).optional(),
  image: z.string().min(1).default('/media/product/1.jpg'),
  gallery: z.array(z.string().min(1)).default(['/media/product/1.jpg']),
  featured: z.boolean().default(false),
})

export const productUpdateSchema = productSchema.partial()

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(5),
})

export const orderSchema = z.object({
  customer: z.object({
    name: z.string().min(2),
    phone: z.string().min(8),
    email: z.string().email(),
    address: z.string().min(5),
  }),
  items: z.array(
    z.object({
      productId: z.string().min(1),
      name: z.string().min(1),
      price: z.coerce.number().positive(),
      quantity: z.coerce.number().int().positive(),
    }),
  ).min(1),
})

export const orderStatusSchema = z.object({
  status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']),
})

export const blogSchema = z.object({
  title: z.string().min(2),
  category: z.enum(['Tips', 'Collections', 'News']),
  excerpt: z.string().min(5),
  content: z.string().min(5),
  coverImage: z.string().min(1).default('/media/blog/1.jpg'),
  status: z.enum(['draft', 'published']).default('published'),
})

export function validationError(error: unknown) {
  if (error instanceof z.ZodError) {
    return error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`).join('; ')
  }

  return 'Invalid request payload.'
}
