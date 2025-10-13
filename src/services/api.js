// Configuración base de la API
// const API_URL = import.meta.env.VITE_API_URL || 'https://back-clinica-dental.onrender.com'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export const api = {
  baseURL: API_URL,

  // Método genérico para hacer peticiones GET
  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Error en la petición:', error)
      throw error
    }
  },

  // Método genérico para hacer peticiones POST
  async post(endpoint, data) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Error en la petición:', error)
      throw error
    }
  }
}

export default api

