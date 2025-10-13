// src/i18n/index.js
import { createI18n } from 'vue-i18n'
import { locale } from './i18n.js'

export const i18n = createI18n({
  legacy: true,           // activa la API clásica para usar $t
  globalInjection: true,  // inyecta $t, $tc en todos los componentes
  locale: 'es',           // idioma inicial
  fallbackLocale: 'en',   // idioma de respaldo
  messages: locale        // objeto con todas las traducciones
})