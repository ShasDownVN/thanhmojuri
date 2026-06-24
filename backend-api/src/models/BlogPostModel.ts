import mongoose, { Schema } from 'mongoose'

const blogPostSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, enum: ['Tips', 'Collections', 'News'], required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String, required: true },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
    publishedAt: Date,
  },
  { timestamps: true },
)

export const BlogPostModel = mongoose.models.BlogPost || mongoose.model('BlogPost', blogPostSchema)
