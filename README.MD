
# Librería MERN - Backend

Este proyecto es el backend de una aplicación MERN diseñada para gestionar una librería. Proporciona una API RESTful que permite realizar operaciones de CRUD (Crear, Leer, Actualizar, Eliminar) en el catálogo de libros.
## 🌟 Caracteristicas

1. API RESTful para CRUD:
- Crear libros.
- Consultar libros (individuales o en listas).
- Actualizar información de un libro.
- Eliminar libros.

2.  Validación de datos:
- Validación de las solicitudes usando mongoose schemas.

3. Manejo de errores:
- Gestión de respuestas claras y significativas en caso de errores.

4. Configuración de CORS:
- Permite solicitudes desde el frontend hospedado en Netlify *(u otros dominios)*.
## Tech Stack
- **Node.js:** Entorno de ejecución del backend.
- **Express.js:** Framework para crear el servidor y gestionar rutas.
- **MongoDB:** Base de datos para almacenar la información de los libros.
- **Mongoose:** ODM para interactuar con MongoDB.
- **dotenv:** Para manejar variables de entorno.
- **Multer:** Para gestionar la subida de imágenes
## Instalation

#### Requisitos previos
- Node.js instalado (versión 14 o superior).
- MongoDB configurado y en ejecución.


#### Pasos para instalar el proyecto

1. Clona este repositorio:

```bash
  git clone https://github.com/InefableDude/backend-mern-libreria-basica
  cd backend-mern-libreria-basica
```

2. Instala las dependencias:

```bash
  npm install
```
3. Configura las variables de entorno:
Crea un archivo .env en la raíz del proyecto con las siguientes variables:

```env
  PORT=5555
  mongoDBURL=<INSERTAR TU BASE DE MongoDB>
```

4. Inicia el servidor de desarrollo:
```bash
  npm run dev
```

### Rutas de la API
- GET /books: Lista todos los libros.
- GET /books/:id: Devuelve un libro por ID.
- POST /books: Crea un nuevo libro.
- PUT /books/:id: Actualiza un libro existente.
- DELETE /books/:id: Elimina un libro por ID.
## Autor

- [@InefableDude](https://github.com/InefableDude)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https:///)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/baruch-rafael-rodriguez-covarrubias-3b793a2a5)


## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)