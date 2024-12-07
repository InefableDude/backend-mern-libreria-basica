import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		publishYear: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		cover: {
			contentType: String,
			data: Buffer,
		},
		
	},
	{
		timestamps: true,
	}
);

export const Book = mongoose.model('Book', bookSchema);