import { createPool } from "mysql2/promise";
import 'dotenv/config'

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

(async () => {
    try {
        const connection = await pool.getConnection();
        console.log("Conexión exitosa a la base de datos MySQL");
        connection.release(); // Liberar conexión
    } catch (err) {
        console.error("Error al conectar al pool de la base de datos:", err);
    }
})();

export default pool;