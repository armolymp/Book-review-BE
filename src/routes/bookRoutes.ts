import express from 'express';
import { getBooks, createBook, updateBook, deleteBook, getBookById } from '../controllers/bookController';

const router = express.Router();

router.get('/', getBooks);
router.post('/', createBook);
router.get('/:id',getBookById)
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
