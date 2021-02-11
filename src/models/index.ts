import mongoose from 'mongoose';
 
import Main from './main';
 
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
};
 
const models = { Main };
 
export { connectDb };
 
export default models;