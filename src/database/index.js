import express from "express";
import cors from "cors";
import pool from "./conexion.js";
import crypto from "crypto";

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
        const { usuario_id } = req.query; // Obtener usuario_id de query params

        let query = `
            SELECT 
                r.*,
                h.nombre AS habitacion_nombre,
                h.numero_habitacion,
                h.tipo_habitacion,
                u.nombre AS usuario_nombre
            FROM reservaciones r
            INNER JOIN habitaciones h ON r.habitacion_id = h.id
            INNER JOIN usuarios u ON r.usuario_id = u.id
        `;

        const params = [];

        // Si se proporciona usuario_id, filtrar por ese usuario
        if (usuario_id) {
            query += ' WHERE r.usuario_id = ?';
            params.push(usuario_id);
        }

        query += ' ORDER BY r.fecha_creacion DESC';

        const [reservaciones] = await pool.query(query, params);
        res.json(reservaciones);
    } catch (err) {
        console.error("Error al consultar reservaciones:", err);
        res.status(500).json({ error: "Error al obtener las reservaciones" });
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

// Crear una nueva reservación
app.post('/reservaciones', async (req, res) => {
    const {
        usuario_id,
        habitacion_id,
        check_in,
        check_out,
        noches,
        nombre_huesped,
        email_huesped,
        telefono_huesped,
        numero_huespedes,
        servicios_adicionales,
        precio_habitacion,
        precio_servicios,
        precio_total
    } = req.body;

    // Validaciones básicas
    if (!usuario_id || !habitacion_id || !check_in || !check_out || !nombre_huesped || !email_huesped) {
        return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    try {
        // Convertir servicios_adicionales a JSON string si es un array
        const serviciosJSON = JSON.stringify(servicios_adicionales || []);

        // Insertar la reservación
        const [result] = await pool.query(
            `INSERT INTO reservaciones 
            (usuario_id, habitacion_id, check_in, check_out, noches, nombre_huesped, 
             email_huesped, telefono_huesped, numero_huespedes, servicios_adicionales, 
             precio_habitacion, precio_servicios, precio_total, estado) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'confirmada')`,
            [
                usuario_id,
                habitacion_id,
                check_in,
                check_out,
                noches,
                nombre_huesped,
                email_huesped,
                telefono_huesped || "",
                numero_huespedes,
                serviciosJSON,
                precio_habitacion,
                precio_servicios,
                precio_total
            ]
        );

        if (result.affectedRows === 0) {
            return res.status(500).json({ error: "No se pudo crear la reservación" });
        }

        // Actualizar el estado de la habitación a 'reservada'
        await pool.query(
            "UPDATE habitaciones SET estado = 'reservada' WHERE id = ?",
            [habitacion_id]
        );

        // Retornar la reservación creada
        res.status(201).json({
            id: result.insertId,
            usuario_id,
            habitacion_id,
            check_in,
            check_out,
            noches,
            nombre_huesped,
            email_huesped,
            telefono_huesped,
            numero_huespedes,
            servicios_adicionales,
            precio_habitacion,
            precio_servicios,
            precio_total,
            estado: 'confirmada'
        });
    } catch (err) {
        console.error("Error al crear la reservación:", err);
        res.status(500).json({ error: "Error al crear la reservación" });
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

// Ruta para crear un nuevo usuario
app.post("/register", async (req, res) => {
    const { nombre, email, contrasena, rol = "cliente" } = req.body;

    if (!nombre || !email || !contrasena) {
        return res.status(400).json({ error: "Nombre, email y contraseña son requeridos" });
    }

    try {
        // Verificar si el email ya existe
        const [existingUser] = await pool.query("SELECT id FROM usuarios WHERE email = ?", [email]);

        if (existingUser.length > 0) {
            return res.status(409).json({ error: "El email ya está registrado" });
        }

        // Insertar el nuevo usuario
        const [result] = await pool.query("INSERT INTO usuarios (nombre, email, contrasena, rol) VALUES (?, ?, ?, ?)", [
            nombre, email, contrasena, rol
        ]);

        if (result.affectedRows === 0) {
            return res.status(500).json({ error: "Usuario no creado" });
        }

        // Retornar los datos del usuario creado
        res.status(201).json({
            id: result.insertId,
            nombre,
            email,
            rol
        });
    } catch (err) {
        console.error("Error al insertar el usuario:", err);
        res.status(500).json({ error: "Error al insertar el usuario" });
    }
});

// Ruta para iniciar sesión
app.post("/login", async (req, res) => {
    const { email, contrasena } = req.body;

    if (!email || !contrasena) {
        return res.status(400).json({ error: "Email y contraseña son requeridos" });
    }

    try {
        // Buscar usuario por email
        const [usuarios] = await pool.query("SELECT * FROM usuarios WHERE email = ?", [email]);

        if (usuarios.length === 0) {
            return res.status(401).json({ error: "Credenciales incorrectas" });
        }

        const usuario = usuarios[0];

        // Verificar contraseña (comparación directa - en producción usar bcrypt)
        if (usuario.contrasena !== contrasena) {
            return res.status(401).json({ error: "Credenciales incorrectas" });
        }

        // Generar nuevo token de sesión global
        const sessionToken = crypto.randomUUID();

        // Actualizar el token y fecha de login en la base de datos
        await pool.query(
            "UPDATE usuarios SET session_token = ?, ultimo_login = NOW() WHERE id = ?",
            [sessionToken, usuario.id]
        );

        // Retornar datos del usuario junto con su nuevo token (sin la contraseña)
        res.status(200).json({
            id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email,
            rol: usuario.rol,
            session_token: sessionToken
        });
    } catch (err) {
        console.error("Error al iniciar sesión:", err);
        res.status(500).json({ error: "Error al iniciar sesión" });
    }
});

// Ruta para cerrar sesión
app.post("/logout", async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ error: "ID de usuario requerido" });
    }

    try {
        // Para invalidar sesión en todos lados, removemos el session_token de la BD
        await pool.query(
            "UPDATE usuarios SET session_token = NULL, ultimo_logout = NOW() WHERE id = ?",
            [id]
        );
        res.status(200).json({ message: "Sesión cerrada correctamente" });
    } catch (err) {
        console.error("Error al cerrar sesión:", err);
        res.status(500).json({ error: "Error al cerrar sesión" });
    }
});

// Ruta para verificar que el token de sesión siga intacto
app.post("/verify-session", async (req, res) => {
    const { id, session_token } = req.body;

    if (!id || !session_token) {
        return res.status(400).json({ error: "Falta id o sesión para verificar" });
    }

    try {
        const [usuarios] = await pool.query("SELECT session_token FROM usuarios WHERE id = ?", [id]);

        if (usuarios.length === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const dbToken = usuarios[0].session_token;

        if (dbToken !== session_token) {
            return res.status(401).json({ error: "Sesión expirada o iniciada en otro dispositivo" });
        }

        res.status(200).json({ valid: true });
    } catch (err) {
        console.error("Error validando sesión:", err);
        res.status(500).json({ error: "Error de servidor al validar sesión" });
    }
});


app.post("/nuevahabitacion", async (req, res) => {
    const { nombre, numero_habitacion, estado, precio, descripcion, numero_camas, capacidad_personas } = req.body;

    if (!nombre || !numero_habitacion || !estado || !precio || !descripcion || !numero_camas || !capacidad_personas) {
        return res.status(400).json({ error: "Todos los campos son requeridos " });
    }

    try {
        const [result] = await pool.query("INSERT INTO habitaciones (nombre, numero_habitacion, estado, precio, descripcion, numero_camas, capacidad_personas) VALUES (?, ?, ?, ?, ?, ?, ?)", [
            nombre, numero_habitacion, estado, precio, descripcion, numero_camas, capacidad_personas
        ]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Habitación no creada" });
        }

        res.status(201).json({ nombre, numero_habitacion, estado, precio, descripcion, numero_camas, capacidad_personas });
    } catch (err) {
        console.error("Error al insertar la habitación:", err);
        res.status(500).send("Error al insertar la habitación");
    }
});


app.listen(3000, () => {
    console.log("Servidor escuchando en", process.env.PORT);
});