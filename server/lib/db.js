import mongoose from 'mongoose';

export const connectDb = async () => {
  const uri = process.env.MONGODB_URL;
  mongoose.set('bufferCommands', false);
  await mongoose.connect(uri, { dbName: 'quick-show' });
  console.log('Connected to DB:', mongoose.connection.name);
};
