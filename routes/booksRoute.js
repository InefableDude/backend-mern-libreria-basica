import express from 'express';
import multer from 'multer';
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Configurar Multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Get all books

router.get('/', async (req, res) => {
	try {
		const books = await Book.find({});
		return res.status(200).json({
			count: books.length,
			data: books
		});
	} catch(error) {
		console.error(error);
		res.status(500).send({ message: error.message });
	}
});

// Create books
router.post('/', upload.single("cover"), async (req, res) => {
	try {
		const { title, author, publishYear, description, content } = req.body;
		const { buffer, mimetype } = req.file;

		const requiredFields = ["title", "author", "publishYear", "description", "content"];
		const missingFields = requiredFields.filter(field => !req.body[field]);
		
		if (missingFields.length > 0) {
			return res.status(400).send({ message: `Missing required field: ${missingFields.join(', ')}`});
		}
		
		const newBook = {
			title: title,
			author: author,
			publishYear: publishYear,
			description: description,
			content: content,
			cover: {
				data: buffer,
				contentType: mimetype,
			},
		};

		const book = await Book.create(newBook);

		return res.status(201).send(book);
	} catch(error) {
		console.error(error.message);
		res.status(500).send({ message: error.message });
	}
});

// Get one book by id

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const book = await Book.findById(id);

		return res.status(200).json({ book });
	} catch(error) {
		console.error(error);
		res.status(500).send({ message: error.message });
	}
});

// Update a book
router.put('/:id', upload.single("cover"), async (req, res) => {
	try {
		const requiredFields = ["title", "author", "publishYear", "description", "content"];
		const missingFields = requiredFields.filter(field => !req.body[field]);
		
		if (missingFields.length > 0) {
			return res.status(400).send({ message: `Missing required field: ${missingFields.join(', ')}`});
		}

		const { id } = req.params;
		const { title, author, publishYear, description, content } = req.body;
        const updateData = { title, author, publishYear, description, content };
        
        if (req.file) {
            updateData.cover = {
                data: req.file.buffer,
                contentType: req.file.mimetype,
            };
        }

		const result = await Book.findByIdAndUpdate(id, updateData, { new: true });

		if (!result) {
			return res.status(404).json({ message: "Book not found" });
		}

		return res.status(200).send({ message: "Book updated successfully" });
	} catch(error) {
		console.error(error.message);
		res.status(500).send({ message: error.message });
	}
});

// Delete a book
router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const result = await Book.findByIdAndDelete(id);

		if (!result) {
			return res.status(404).json({ message: "Book not found" });
		}

		return res.status(200).send({message: 'Book deleted successfully'});
	} catch(error) {
		console.error(error);
		res.status(500).send({ message: error.message });
	}
});

export default router;