<template>
  <div class="home-container">
    <!-- Cabecera -->
    <header class="site-header">
      <div class="wrap nav">
        <a class="brand" href="#inicio">
          <span class="brand-dot"><svg width="22" height="22"><use href="#icon-tooth" /></svg></span>
          Niurka Arvelo
        </a>
        <nav class="nav-links">
          <a v-for="section in sections" :key="section.key" href="#secciones" @click="currentSection = section.key">
            {{ $t(section.key) }}
          </a>
          <a href="#opiniones">{{ $t('opiniones') }}</a>
          <a href="#contacto">{{ $t('contacto') }}</a>
        </nav>
        <a class="btn" href="#contacto">{{ $t('pedirCita') }}</a>
      </div>
    </header>

    <!-- Hero: foto de la clínica con tarjeta de bienvenida -->
    <section class="hero-section wrap" id="inicio">
      <div class="hero-img">
        <img src="/img/home.png" alt="Clínica Dental Niurka Arvelo" />
      </div>
      <div class="hero-card">
        <div class="rating">★★★★★ <span>{{ $t('pacientesSatisfechos') }}</span></div>
        <h1>{{ $t('bienvenido') }}</h1>
        <p>{{ $t('descripcion') }}</p>
        <a class="btn" href="#contacto">{{ $t('reservarCita') }}</a>
      </div>
    </section>

    <!-- Secciones: equipo / servicios / antes y después -->
    <section class="band" id="secciones">
      <div class="wrap">
        <div class="sections-pills" role="tablist">
          <button v-for="section in sections" :key="section.key" role="tab"
            :aria-selected="currentSection === section.key"
            :class="['pill', { active: currentSection === section.key }]"
            @click="currentSection = section.key">
            <span class="pill-icon"><svg width="18" height="18"><use :href="'#icon-' + section.icon" /></svg></span>
            {{ $t(section.key) }}
          </button>
        </div>

        <transition name="fade" mode="out-in">
          <div class="dynamic-section" v-if="currentSection" :key="currentSection">
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
          </div>
        </transition>
      </div>
    </section>

    <!-- Testimonios -->
    <section class="testimonials" id="opiniones">
      <div class="wrap">
        <h2>{{ $t('testimonios') }}</h2>
        <div class="testimonial-container">
          <transition :name="testimonioTransition" mode="out-in">
            <div :key="testimonioActual" class="testimonial-content">
              <blockquote>{{ $t('testimonio' + (testimonioActual + 1)) }}</blockquote>
              <p class="testimonial-autor">{{ $t('testimonio' + (testimonioActual + 1) + 'Autor') }}</p>
            </div>
          </transition>
        </div>
        <div class="testimonial-indicators">
          <button
            v-for="index in 5"
            :key="index"
            :class="['indicator', { active: index - 1 === testimonioActual }]"
            @click="irATestimonio(index - 1)"
            :aria-label="'Testimonio ' + index"
          ></button>
        </div>
      </div>
    </section>

    <!-- Contacto: ubicación, horario y teléfono -->
    <section class="contacto" id="contacto">
      <div class="wrap">
        <div class="section-title">
          <h2>{{ $t('visitanos') }}</h2>
          <p>{{ $t('visitanosSub') }}</p>
        </div>
        <div class="contacto-grid">
          <div class="contacto-info">
            <div class="contacto-row">
              <span class="row-icon"><svg width="20" height="20"><use href="#icon-pin" /></svg></span>
              <div><b>{{ $t('ubicacion') }}</b><span>{{ $t('direccionLinea1') }} · {{ $t('direccionLinea2') }}</span></div>
            </div>
            <div class="contacto-row">
              <span class="row-icon"><svg width="20" height="20"><use href="#icon-clock" /></svg></span>
              <div><b>{{ $t('horarioTitulo') }}</b><span>{{ $t('horario') }}</span></div>
            </div>
            <div class="contacto-row">
              <span class="row-icon"><svg width="20" height="20"><use href="#icon-phone" /></svg></span>
              <div><b>{{ $t('contactoTitulo') }}</b><span>{{ $t('contactoInfo') }}</span></div>
            </div>
          </div>
          <div class="contacto-map">
            <iframe class="map-frame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019453078308!2d-122.41941548468112!3d37.77492927975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1b7c6b7b%3A0x6c82e63b3c6d081e!2sSan%20Francisco%2C%20CA!5e0!3m2!1ses!2sus!4v1600000000000"
              frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>
    </section>

    <footer class="site-footer">
      <div class="wrap footer-inner">
        <span>© Clínica Dental Niurka Arvelo</span>
        <span>{{ $t('horario') }}</span>
        <span>{{ $t('lema') }}</span>
      </div>
    </footer>

    <!-- Iconos SVG -->
    <svg width="0" height="0" class="icon-sprite" aria-hidden="true">
      <symbol id="icon-tooth" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M7.5 3.5c-2.6 0-4 2.1-4 4.6 0 2.3 1.2 3.6 1.7 5.6.6 2.4.8 6.8 2.6 6.8 1.7 0 1.5-4.6 3.2-4.6h2c1.7 0 1.5 4.6 3.2 4.6 1.8 0 2-4.4 2.6-6.8.5-2 1.7-3.3 1.7-5.6 0-2.5-1.4-4.6-4-4.6-1.8 0-2.6 1-4.5 1s-2.7-1-4.5-1z" /></symbol>
      <symbol id="icon-team" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" /><circle cx="17" cy="9" r="2.4" /><path d="M16 14.6c2.3.1 4 1.6 4.5 4.4" /></g></symbol>
      <symbol id="icon-spark" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" /></symbol>
      <symbol id="icon-pin" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0113 0c0 5-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.3" /></g></symbol>
      <symbol id="icon-clock" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></g></symbol>
      <symbol id="icon-phone" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M5 4h3.5l1.5 4-2 1.3a10 10 0 005 5l1.3-2 4 1.5V17a2 2 0 01-2 2C10.5 19 5 13.5 5 6a2 2 0 010-2z" /></symbol>
    </svg>
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
        { key: 'trabajadores', icon: 'team' },
        { key: 'servicios', icon: 'tooth' },
        { key: 'antesYDespues', icon: 'spark' }
      ],
      currentSection: 'trabajadores',
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
      errorCasos: null,
      // Testimonios carousel
      testimonioActual: 0,
      testimonioTransition: 'slide-left',
      testimonioInterval: null
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
    },
    testimonioSiguiente() {
      this.testimonioTransition = 'slide-left'
      this.testimonioActual = (this.testimonioActual + 1) % 5
    },
    testimonioAnterior() {
      this.testimonioTransition = 'slide-right'
      this.testimonioActual = (this.testimonioActual - 1 + 5) % 5
    },
    irATestimonio(index) {
      this.testimonioTransition = index > this.testimonioActual ? 'slide-left' : 'slide-right'
      this.testimonioActual = index
    },
    iniciarAutoScroll() {
      this.testimonioInterval = setInterval(() => {
        this.testimonioSiguiente()
      }, 5000) // Cambia cada 5 segundos
    },
    detenerAutoScroll() {
      if (this.testimonioInterval) {
        clearInterval(this.testimonioInterval)
        this.testimonioInterval = null
      }
    }
  },
  mounted() {
    this.cargarTrabajadores()
    this.cargarServicios()
    this.cargarCasos()
    this.iniciarAutoScroll()
  },
  beforeUnmount() {
    this.detenerAutoScroll()
  }
}
</script>
