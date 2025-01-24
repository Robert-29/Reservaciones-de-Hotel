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