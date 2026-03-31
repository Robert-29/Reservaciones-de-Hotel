import pool from "./conexion.js";
import fs from "fs";

(async () => {
    try {
        const [columns] = await pool.query("DESCRIBE reservaciones");
        let output = "Estructura de la tabla reservaciones:\n\n";

        // Agregar encabezados
        output += `${"Field".padEnd(30)} ${"Type".padEnd(25)} ${"Null".padEnd(10)} ${"Key".padEnd(10)} ${"Default".padEnd(15)} ${"Extra"}\n`;
        output += "-".repeat(100) + "\n";

        columns.forEach(col => {
            const field = String(col.Field || "").padEnd(30);
            const type = String(col.Type || "").padEnd(25);
            const isNull = String(col.Null || "").padEnd(10);
            const key = String(col.Key || "").padEnd(10);
            const defaultValue = String(col.Default === null ? "NULL" : col.Default).padEnd(15);
            const extra = String(col.Extra || "");

            output += `${field} ${type} ${isNull} ${key} ${defaultValue} ${extra}\n`;
        });

        const [count] = await pool.query("SELECT COUNT(*) as total FROM reservaciones");
        output += `\nTotal de reservaciones: ${count[0].total}\n`;

        console.log(output);
        fs.writeFileSync("table_structure.txt", output);
        console.log("\nResultados guardados en table_structure.txt");

        process.exit(0);
    } catch (err) {
        console.error("Error:", err);
        process.exit(1);
    }
})();

