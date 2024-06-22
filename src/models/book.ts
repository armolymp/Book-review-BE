import { Schema, model } from 'mongoose';

interface IBook {
  title: string;
  author: string;
  review: string;
}

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  review: { type: String, required: true }
});

export default model<IBook>('Book', bookSchema);
