import mongoose, { Schema } from 'mongoose'

const reviewSchema = new Schema(
  {
    author: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    content: { type: String, required: true },
  },
  { timestamps: true },
)

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, default: '' },
    price: { type: Number, required: true },
    salePrice: Number,
    category: { type: String, enum: ['Rings', 'Necklaces', 'Earrings', 'Bracelets'], required: true },
    stock: { type: Number, default: 0 },
    status: { type: String, enum: ['in-stock', 'out-of-stock'], default: 'in-stock' },
    image: { type: String, required: true },
    gallery: [{ type: String }],
    featured: { type: Boolean, default: false },
    reviews: [reviewSchema],
  },
  { timestamps: true },
)

export const ProductModel = mongoose.models.Product || mongoose.model('Product', productSchema)
