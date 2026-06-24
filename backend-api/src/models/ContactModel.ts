import mongoose, { Schema } from 'mongoose'

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ['unread', 'read'], default: 'unread' },
  },
  { timestamps: true },
)

export const ContactModel = mongoose.models.Contact || mongoose.model('Contact', contactSchema)
