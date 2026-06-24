import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
  },
  { timestamps: true },
)

export const UserModel = mongoose.models.User || mongoose.model('User', userSchema)
