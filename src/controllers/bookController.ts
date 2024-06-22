import { Request, Response } from 'express';
import Book from '../models/book';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    if(err instanceof Error) {
        res.status(500).json({ message: err.message });
    }else{
        res.status(500).json({message: "An error occurred"})
    } 
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try{
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, { isAvailable: false }, { new: true });
    res.json(updatedBook);
  } catch (err) {
    if(err instanceof Error) {
        res.status(500).json({ message: err.message });
    }else{
        res.status(500).json({message: "An error occurred"})
    } ;
  }
}

export const createBook = async (req: Request, res: Response) => {
  const book = new Book(req.body);
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    if(err instanceof Error) {
        res.status(500).json({ message: err.message });
    }else{
        res.status(500).json({message: "An error occurred"})
    } ;
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.json(updatedBook);
  } catch (err) {
    if(err instanceof Error) {
        res.status(400).json({ message: err.message });
    }else{
        res.status(400).json({message: "An error occurred"})
    } ;
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    if(err instanceof Error) {
        res.status(500).json({ message: err.message });
    }else{
        res.status(500).json({message: "An error occurred"})
    } ;
  }
};
