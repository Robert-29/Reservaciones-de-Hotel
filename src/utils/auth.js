// Utilidades para manejo de autenticación con localStorage

const STORAGE_KEY = 'crystal_cove_user';

/**
 * Guarda los datos del usuario en localStorage
 * @param {Object} usuario - Objeto con datos del usuario (id, nombre, email, rol)
 */
export const guardarUsuario = (usuario) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(usuario));
    } catch (error) {
        console.error('Error al guardar usuario en localStorage:', error);
    }
};

/**
 * Obtiene los datos del usuario desde localStorage
 * @returns {Object|null} - Objeto con datos del usuario o null si no existe
 */
export const obtenerUsuario = () => {
    try {
        const usuario = localStorage.getItem(STORAGE_KEY);
        return usuario ? JSON.parse(usuario) : null;
    } catch (error) {
        console.error('Error al obtener usuario de localStorage:', error);
        return null;
    }
};

/**
 * Elimina los datos del usuario de localStorage (cierra sesión)
 */
export const cerrarSesion = () => {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
};

/**
 * Verifica si hay un usuario autenticado
 * @returns {boolean} - true si hay usuario autenticado, false en caso contrario
 */
export const estaAutenticado = () => {
    return obtenerUsuario() !== null;
};
