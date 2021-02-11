import mongoose from 'mongoose';

const mainSchema = new mongoose.Schema(
  {
    index: {
      type: String
    }
  },
  { timestamps: true }
);

const Main = mongoose.model('Main', mainSchema);
export default Main;
