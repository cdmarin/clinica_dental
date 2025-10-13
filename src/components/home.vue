<template>
  <div class="home-container">
    <!-- Hero section full screen -->
    <section class="hero-section"></section>

    <!-- Middle descriptive text -->
    <section class="middle-text-section">
      <p>⭐⭐⭐⭐⭐</p>
      <p class="middle-text">{{ $t('descripcion') }}</p>
    </section>

    <!-- Navigation buttons -->
    <section class="sections-grid">
      <button v-for="section in sections" :key="section.key" @click="currentSection = section.key"
        :class="['section-card', { active: currentSection === section.key }]">
        <div class="icon-placeholder">
          <img :src="section.icon"
            :alt="section.label" />
        </div>
        <span>{{ $t(section.key) }}</span>
      </button>
    </section>

    <!-- Dynamic component display -->
    <transition name="fade" mode="out-in">
      <section class="dynamic-section" v-if="currentSection" :key="currentSection">
        <component :is="currentSectionComponent" 
          :trabajadores="trabajadores"
          :cargando="cargando"
          :error="error"
          :servicios="servicios"
          :cargandoServicios="cargandoServicios"
          :errorServicios="errorServicios"
          :casos="casos"
          :cargandoCasos="cargandoCasos"
          :errorCasos="errorCasos" />
      </section>
    </transition>

    <!-- Testimonials section -->
    <section class="testimonials">
      <h2>{{ $t('testimonios') }}</h2>
      <div class="testimonial-list">
        <blockquote>{{ $t('testimonio1') }}</blockquote>
        <blockquote>{{ $t('testimonio2') }}</blockquote>
      </div>
    </section>

    <!-- Footer con ubicación y contacto -->
    <footer class="footer-ubicacion">
      <div class="footer-content">
        <div class="footer-info">
          <h3>{{ $t('ubicacion') }}</h3>
          <p>{{ $t('direccionLinea1') }}</p>
          <p>{{ $t('direccionLinea2') }}</p>
          <p>{{ $t('horario') }}</p>
        </div>
        <div class="footer-map">
          <iframe class="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019453078308!2d-122.41941548468112!3d37.77492927975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1b7c6b7b%3A0x6c82e63b3c6d081e!2sSan%20Francisco%2C%20CA!5e0!3m2!1ses!2sus!4v1600000000000"
            frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
      <div class="footer-contacto">
        <h3>{{ $t('contactoTitulo') }}</h3>
        <p>{{ $t('contactoInfo') }}</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Trabajadores from '@/components/homeSecciones/Trabajadores.vue'
import Servicios from '@/components/homeSecciones/Servicios.vue'
import AntesYDespues from '@/components/homeSecciones/AntesYDespues.vue'
import trabajadoresService from '@/services/trabajadoresService'
import serviciosService from '@/services/serviciosService'
import antesYDespuesService from '@/services/antesYDespuesService'

export default {
  name: 'Home',
  components: {
    Trabajadores,
    Servicios,
    AntesYDespues
  },
  data() {
    return {
      // Secciones disponibles
      sections: [
        { key: 'trabajadores', icon: '/src/assets/img/icon-trabajadores.png', label: 'trabajadores' },
        { key: 'servicios', icon: '/src/assets/img/icon-servicios.png', label: 'servicios' },
        { key: 'antesYDespues', icon: '/src/assets/img/icon-antesYDespues.png', label: 'antesYDespues' }
      ],
      // Sección actual
      currentSection: null,
      // Datos de trabajadores
      trabajadores: [],
      cargando: true,
      error: null,
      // Datos de servicios
      servicios: [],
      cargandoServicios: true,
      errorServicios: null,
      // Datos de casos de antes y después
      casos: [],
      cargandoCasos: true,
      errorCasos: null
    }
  },
  computed: {
    currentSectionComponent() {
      switch (this.currentSection) {
        case 'trabajadores': return Trabajadores
        case 'servicios': return Servicios
        case 'antesYDespues': return AntesYDespues
        default: return null
      }
    }
  },
  methods: {
    async cargarTrabajadores() {
      try {
        this.cargando = true
        this.error = null
        const data = await trabajadoresService.obtenerTrabajadores()
        this.trabajadores = data
      } catch (err) {
        console.error('Error al cargar trabajadores:', err)
        this.error = 'No se pudieron cargar los trabajadores.'
      } finally {
        this.cargando = false
      }
    },
    async cargarServicios() {
      try {
        this.cargandoServicios = true
        this.errorServicios = null
        const data = await serviciosService.obtenerServicios()
        this.servicios = data
      } catch (err) {
        console.error('Error al cargar servicios:', err)
        this.errorServicios = 'No se pudieron cargar los servicios.'
      } finally {
        this.cargandoServicios = false
      }
    },
    async cargarCasos() {
      try {
        this.cargandoCasos = true
        this.errorCasos = null
        const data = await antesYDespuesService.obtenerCasos()
        this.casos = data
      } catch (err) {
        console.error('Error al cargar casos:', err)
        this.errorCasos = 'No se pudieron cargar los casos de antes y después.'
      } finally {
        this.cargandoCasos = false
      }
    }
  },
  mounted() {
    this.cargarTrabajadores()
    this.cargarServicios()
    this.cargarCasos()
  }
}
</script>
