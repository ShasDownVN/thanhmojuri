import mongoose from 'mongoose'

const uri = process.env.DATABASE_URL

declare global {
  var mongooseConnection: Promise<typeof mongoose> | undefined
}

export async function connectMongo() {
  if (!uri) {
    throw new Error('DATABASE_URL is not configured.')
  }

  if (!global.mongooseConnection) {
    global.mongooseConnection = mongoose.connect(uri)
  }

  return global.mongooseConnection
}
