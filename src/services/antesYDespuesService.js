import api from './api'

export const antesYDespuesService = {
  // Obtener todos los casos de antes y después
  async obtenerCasos() {
    try {
      const response = await api.get('/api/antes-despues')
      // Extraer el array de data de la respuesta
      return response.data || []
    } catch (error) {
      console.error('Error al obtener casos de antes y después:', error)
      throw error
    }
  },

  // Obtener un caso por ID (opcional)
  async obtenerCasoPorId(id) {
    try {
      const data = await api.get(`/api/antes-despues/${id}`)
      return data
    } catch (error) {
      console.error(`Error al obtener caso con ID ${id}:`, error)
      throw error
    }
  },

  // Crear un nuevo caso (opcional, para administración)
  async crearCaso(casoData) {
    try {
      const data = await api.post('/api/antes-despues', casoData)
      return data
    } catch (error) {
      console.error('Error al crear caso:', error)
      throw error
    }
  },

  // Actualizar un caso (opcional, para administración)
  async actualizarCaso(id, casoData) {
    try {
      const data = await api.post(`/api/antes-despues/${id}`, casoData)
      return data
    } catch (error) {
      console.error(`Error al actualizar caso con ID ${id}:`, error)
      throw error
    }
  },

  // Eliminar un caso (opcional, para administración)
  async eliminarCaso(id) {
    try {
      const data = await api.post(`/api/antes-despues/${id}/delete`)
      return data
    } catch (error) {
      console.error(`Error al eliminar caso con ID ${id}:`, error)
      throw error
    }
  }
}

export default antesYDespuesService

