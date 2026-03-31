-- Verificar y actualizar la estructura de la tabla reservaciones
-- para soportar todas las funcionalidades del sistema de reservas

-- Agregar columna noches
ALTER TABLE reservaciones ADD COLUMN noches INT NOT NULL DEFAULT 1;

-- Agregar columna nombre_huesped
ALTER TABLE reservaciones ADD COLUMN nombre_huesped VARCHAR(255) NOT NULL DEFAULT '';

-- Agregar columna email_huesped
ALTER TABLE reservaciones ADD COLUMN email_huesped VARCHAR(255) NOT NULL DEFAULT '';

-- Agregar columna telefono_huesped
ALTER TABLE reservaciones ADD COLUMN telefono_huesped VARCHAR(50) DEFAULT '';

-- Agregar columna numero_huespedes
ALTER TABLE reservaciones ADD COLUMN numero_huespedes INT NOT NULL DEFAULT 1;

-- Agregar columna servicios_adicionales (JSON)
ALTER TABLE reservaciones ADD COLUMN servicios_adicionales JSON;

-- Agregar columna precio_habitacion
ALTER TABLE reservaciones ADD COLUMN precio_habitacion DECIMAL(10,2) NOT NULL DEFAULT 0.00;

-- Agregar columna precio_servicios
ALTER TABLE reservaciones ADD COLUMN precio_servicios DECIMAL(10,2) NOT NULL DEFAULT 0.00;

-- Agregar columna precio_total
ALTER TABLE reservaciones ADD COLUMN precio_total DECIMAL(10,2) NOT NULL DEFAULT 0.00;

-- Agregar columna qr_code (para almacenar el código QR)
ALTER TABLE reservaciones ADD COLUMN qr_code TEXT;
