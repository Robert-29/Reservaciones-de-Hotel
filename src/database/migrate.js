import pool from "./conexion.js";
import fs from "fs";

(async () => {
    try {
        console.log("Iniciando migración de la tabla reservaciones...\n");

        // Leer el archivo SQL
        const sql = fs.readFileSync("./update_reservaciones.sql", "utf8");

        // Dividir en statements individuales (eliminar comentarios y líneas vacías)
        const statements = sql
            .split(';')
            .map(s => s.trim())
            .filter(s => s.length > 0 && !s.startsWith('--'));

        // Ejecutar cada statement
        for (const statement of statements) {
            if (statement.trim().length > 0) {
                try {
                    await pool.query(statement);
                    console.log("✓ Ejecutado:", statement.substring(0, 60) + "...");
                } catch (err) {
                    // Ignorar errores de "columna ya existe" en MySQL
                    if (err.code === 'ER_DUP_FIELDNAME') {
                        console.log("⚠ Columna ya existe, continuando...");
                    } else {
                        console.error("✗ Error:", err.message);
                    }
                }
            }
        }

        // Verificar la estructura final
        const [columns] = await pool.query("DESCRIBE reservaciones");
        console.log("\n=== Estructura final de la tabla reservaciones ===");
        columns.forEach(col => {
            console.log(`  ${col.Field.padEnd(25)} ${col.Type.padEnd(20)} ${col.Null === 'YES' ? 'NULL' : 'NOT NULL'}`);
        });

        console.log("\n✓ Migración completada exitosamente!");
        process.exit(0);
    } catch (err) {
        console.error("Error en la migración:", err);
        process.exit(1);
    }
})();
