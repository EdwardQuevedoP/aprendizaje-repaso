const express = require('express');
const { Pool } = require('pg');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

const pool = new Pool({
    user: 'default',
    host: 'ep-sweet-boat-69198589-pooler.us-east-1.postgres.vercel-storage.com',
    database: 'verceldb',
    password: 'n5JSZ2beFoNG',
    port: 5432,
    ssl: { rejectUnauthorized: false }
});

// Configuración de Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Nombre de tu API',
            version: '1.0.0',
            description: 'Descripción de tu API',
        },
    },
    apis: ['index.js'], 
};

// Middleware para procesar JSON en las solicitudes
app.use(express.json());

// obtener informacion con la ID
app.get('/upload/get/:id', (req, res) => {
    const { id } = req.params;
    const getProjectQuery = `SELECT * FROM projec WHERE id = ${id}`;

    pool.query(getProjectQuery)
        .then(data => {
            console.log("proyecto1 by ID: ", data.rows);
            res.send(data.rows);
        })
        .catch(err => {
            console.error(err);
            res.status(400).send("Hubo un error");
        });
});

// documentacion en swagger del post que esta abajo
/**
 * @swagger
 * /upload/post:
 *   post:
 *     summary: Agrega un nuevo proyecto a la base de datos.
 *     description: Este endpoint permite agregar un nuevo proyecto a la base de datos.  
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewProjectData'
 *     responses:
 *       200:
 *         description: Proyecto agregado con éxito.
 *         content:
 *           application/json:
 *             example:
 *               message: Proyecto agregado correctamente.
 *       400:
 *         description: Error al agregar el proyecto.
 *         content:
 *           application/json:
 *             example:
 *               error: Hubo un error al procesar la solicitud.
 */
app.post('/upload/post', (req, res) => {
    const agregar = `INSERT INTO proyec (Project, Data, Name, Notes, Photo, Status) VALUES ('${req.body.project}','${req.body.Data}','${req.body.Name}','${req.body.Notes}','${req.body.Photo}','${req.body.Status}')`;
    
    pool.query(agregar)
        .then(() => {
            // Enviar una respuesta exitosa
            res.status(200).json({ message: 'Proyecto agregado correctamente.' });
        })
        .catch(err => {
            console.error(err);
            // Enviar una respuesta de error
            res.status(400).json({ error: 'Hubo un error al procesar la solicitud.' });
        });
});



const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Montar Swagger UI en /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en ejecución en el puerto ${port}`);
});
