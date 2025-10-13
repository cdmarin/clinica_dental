import api from './api'

export const trabajadoresService = {
  // Obtener todos los trabajadores
  async obtenerTrabajadores() {
    try {
      const response = await api.get('/api/trabajadores')
      // Extraer el array de data de la respuesta
      return response.data || []
    } catch (error) {
      console.error('Error al obtener trabajadores:', error)
      throw error
    }
  },

  // Obtener un trabajador por ID (opcional)
  async obtenerTrabajadorPorId(id) {
    try {
      const data = await api.get(`/api/trabajadores/${id}`)
      return data
    } catch (error) {
      console.error(`Error al obtener trabajador ${id}:`, error)
      throw error
    }
  }
}

export default trabajadoresService

