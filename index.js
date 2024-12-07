// Librerias necesarias
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// Importar modelos
import { Book } from "./models/bookModel.js";

// Router
import booksRoute from "./routes/booksRoute.js";

// Usar .env
dotenv.config();

// Iniciar app
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/*app.use(cors({
	origin: '',
	methods: ['GET', 'PUT', 'POST', 'DELETE'],
	allowedHeaders: 'Content-Type',
}));*/

app.use('/books', booksRoute);

// Rutas

app.get('/', (req, res) => {
	res.status(234).send('welcome');
});


// Conexion con la base de datos
mongoose.connect(process.env.mongoDBURL)
	.then(() => {
		console.log('app connected to database');

		// Levantar el servidor
		app.listen(process.env.PORT, () => {
			console.log(`App is listening to port: ${process.env.PORT}`);
		});	
	})
	.catch((error) => {
		console.error(error);
	});