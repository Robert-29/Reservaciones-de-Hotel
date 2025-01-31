import express from "express";
import cors from "cors";
import pool from "./conexion.js";

const app = express();
app.use(cors());
app.use(express.json());  // Middleware para procesar JSON

app.get('/habitaciones', async (req, res) => {
    try {
        const [habitaciones] = await pool.query("SELECT * FROM habitaciones"); 
        res.json(habitaciones); 
    } catch (err) {
        console.error("Error al consultar la tabla `habitaciones`:", err);
        res.status(500).json({ error: "Error al obtener los datos de la tabla `habitaciones`" });
    }
});

app.get('/habitaciones/:id', async (req, res) => {
    try {
        const { id } = req.params; // Extraer el ID de los parámetros de la URL
        const [habitaciones] = await pool.query("SELECT * FROM habitaciones WHERE id = ?", [id]); // Pasar el ID como parámetro
        if (habitaciones.length === 0) {
            return res.status(404).json({ message: "Habitación no encontrada" }); // Validar si no hay resultados
        }
        res.json(habitaciones[0]); // Retornar solo el primer resultado
    } catch (err) {
        console.error("Error al consultar la tabla `habitaciones`:", err);
        res.status(500).json({ error: "Error al obtener los datos de la tabla `habitaciones`" });
    }
});

app.get("/habitaciones/disponible/:id", async (req, res) => {
    try {
        const { id } = req.params;
        
        // Obtener el tipo de la habitación con ese id
        const [habitacion] = await pool.query("SELECT tipo_habitacion FROM habitaciones WHERE id = ?", [id]);
        
        if (habitacion.length === 0) {
            return res.status(404).json({ mensaje: "Habitación no encontrada" });
        }

        // Buscar la siguiente habitación disponible del mismo tipo
        const query = `
            SELECT id 
            FROM habitaciones 
            WHERE tipo_habitacion = ? AND estado = 'disponible' 
            ORDER BY id ASC 
            LIMIT 1;
        `;
        
        const [results] = await pool.query(query, [habitacion[0].tipo_habitacion]);

        if (results.length > 0) {
            res.json({ siguienteId: results[0].id });
        } else {
            res.status(404).json({ mensaje: "No hay habitaciones disponibles de este tipo" });
        }
    } catch (err) {
        console.error("Error al consultar habitaciones disponibles:", err);
        res.status(500).json({ error: "Error en la consulta" });
    }
});

//-----------------reservaciones------------------

app.get('/reservaciones', async (req, res) => {
    try {
        const [reservaciones] = await pool.query("SELECT * FROM reservaciones"); 
        res.json(reservaciones); 
    } catch (err) {
        console.error("Error al consultar la tabla `habitaciones`:", err);
        res.status(500).json({ error: "Error al obtener los datos de la tabla `habitaciones`" });
    }
});

app.get('/reservaciones/:id', async (req, res) => {
    try {
        const { id } = req.params; // Extraer el ID de los parámetros de la URL
        const [reservaciones] = await pool.query("SELECT * FROM reservaciones WHERE id = ?", [id]); // Pasar el ID como parámetro
        if (reservaciones.length === 0) {
            return res.status(404).json({ message: "Reservación no encontrada" }); // Validar si no hay resultados
        }
        res.json(reservaciones[0]); // Retornar solo el primer resultado
    } catch (err) {
        console.error("Error al consultar la tabla `reservaciones`:", err);
        res.status(500).json({ error: "Error al obtener los datos de la tabla `reservaciones`" });
    }
});

//------------------usuarios----------------------

app.get('/usuarios', async (req, res) => {
    try {
        const [usuarios] = await pool.query("SELECT * FROM usuarios"); 
        res.json(usuarios); 
    } catch (err) {
        console.error("Error al consultar la tabla `usuarios`:", err);
        res.status(500).json({ error: "Error al obtener los datos de la tabla `usuarios`" });
    }
});

app.get('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params; // Extraer el ID de los parámetros de la URL
        const [usuarios] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [id]); // Pasar el ID como parámetro
        if (usuarios.length === 0) {
            return res.status(404).json({ message: "Usuario no encontrada" }); // Validar si no hay resultados
        }
        res.json(usuarios[0]); // Retornar solo el primer resultado
    } catch (err) {
        console.error("Error al consultar la tabla `usuarios`:", err);
        res.status(500).json({ error: "Error al obtener los datos de la tabla `usuarios`" });
    }
});


app.post("/nuevahabitacion", async (req, res) => {
    const { nombre, numero_habitacion, estado, precio, descripcion, numero_camas, capacidad_personas} = req.body;

    if ( !nombre || !numero_habitacion || !estado || !precio || !descripcion || !numero_camas || !capacidad_personas) {
        return res.status(400).json({ error: "Todos los campos son requeridos " });
    }

    try {
        const [result] = await pool.query("INSERT INTO habitaciones (nombre, numero_habitacion, estado, precio, descripcion, numero_camas, capacidad_personas) VALUES (?, ?, ?, ?, ?, ?, ?)", [
            nombre, numero_habitacion, estado, precio, descripcion, numero_camas, capacidad_personas
        ]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Habitación no creada" });
        }
        
        res.status(201).json({nombre, numero_habitacion, estado, precio, descripcion, numero_camas, capacidad_personas});
    } catch (err) {
        console.error("Error al insertar la habitación:", err);
        res.status(500).send("Error al insertar la habitación");
    }
});


app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});