import pool from './conexion.js';

async function alterarTabla() {
    try {
        console.log("Iniciando migración...");
        
        // Agregar columnas si no existen (en MySQL no hay IF NOT EXISTS sencillo para ALTER TABLE, 
        // usaremos consultas directas. Si falla por que ya existen, se ignora o atrapa).
        
        try {
            await pool.query("ALTER TABLE usuarios ADD COLUMN session_token VARCHAR(255) NULL");
            console.log("Columna session_token agregada.");
        } catch (e) {
            console.log("La columna session_token probablemente ya existe.", e.message);
        }

        try {
            await pool.query("ALTER TABLE usuarios ADD COLUMN ultimo_login DATETIME NULL");
            console.log("Columna ultimo_login agregada.");
        } catch (e) {
            console.log("La columna ultimo_login probablemente ya existe.", e.message);
        }

        try {
            await pool.query("ALTER TABLE usuarios ADD COLUMN ultimo_logout DATETIME NULL");
            console.log("Columna ultimo_logout agregada.");
        } catch (e) {
            console.log("La columna ultimo_logout probablemente ya existe.", e.message);
        }

        console.log("Migración completada.");
        process.exit(0);
    } catch (err) {
        console.error("Error al alterar la tabla:", err);
        process.exit(1);
    }
}

alterarTabla();
