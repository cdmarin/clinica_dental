import api from './api'

export const serviciosService = {
  // Obtener todos los servicios
  async obtenerServicios() {
    try {
      const response = await api.get('/api/servicios')
      // Extraer el array de data de la respuesta
      return response.data || []
    } catch (error) {
      console.error('Error al obtener servicios:', error)
      throw error
    }
  },

  // Obtener un servicio por ID (opcional)
  async obtenerServicioPorId(id) {
    try {
      const response = await api.get(`/api/servicios/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error al obtener servicio ${id}:`, error)
      throw error
    }
  }
}

export default serviciosService

