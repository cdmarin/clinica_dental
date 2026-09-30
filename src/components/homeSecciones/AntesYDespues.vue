<template>
    <div class="antes-despues-container">
        <h2 class="visually-hidden">{{ $t('antesYDespues') }}</h2>

        <!-- Estado de carga -->
        <div v-if="cargandoCasos" class="loading-state">
            <p>Cargando casos...</p>
        </div>

        <!-- Estado de error -->
        <div v-else-if="errorCasos" class="error-state">
            <p>{{ errorCasos }}</p>
        </div>

        <!-- Carousel con casos cargados -->
        <div v-else-if="casos.length > 0" class="carousel-wrapper">
            <!-- Botón anterior -->
            <button class="carousel-btn prev" @click="anterior" aria-label="Anterior">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>

            <!-- Contenedor del carousel -->
            <div class="carousel-container">
                <transition :name="transitionName" mode="out-in">
                    <div :key="indiceActual" class="caso-antes-despues">
                        <div class="comparacion">
                            <div class="imagen-wrapper">
                                <img :src="casos[indiceActual].imagen_antes_url" :alt="'Antes - ' + casos[indiceActual].titulo" />
                                <span class="etiqueta">Antes</span>
                            </div>
                            <div class="imagen-wrapper">
                                <img :src="casos[indiceActual].imagen_despues_url"
                                    :alt="'Después - ' + casos[indiceActual].titulo" />
                                <span class="etiqueta">Después</span>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>

            <!-- Botón siguiente -->
            <button class="carousel-btn next" @click="siguiente" aria-label="Siguiente">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
        </div>

        <!-- Indicadores -->
        <div v-if="casos.length > 0" class="carousel-indicators">
            <button v-for="(caso, index) in casos" :key="index"
                :class="['indicator', { active: index === indiceActual }]" @click="irA(index)"></button>
        </div>

        <!-- Mensaje cuando no hay casos -->
        <div v-else-if="!cargandoCasos && !errorCasos" class="no-casos">
            <p>No hay casos disponibles en este momento.</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AntesYDespues',
  props: {
    trabajadores: {
      type: Array,
      default: () => []
    },
    cargando: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: null
    },
    servicios: {
      type: Array,
      default: () => []
    },
    cargandoServicios: {
      type: Boolean,
      default: false
    },
    errorServicios: {
      type: String,
      default: null
    },
    casos: {
      type: Array,
      default: () => []
    },
    cargandoCasos: {
      type: Boolean,
      default: false
    },
    errorCasos: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      indiceActual: 0,
      transitionName: 'slide-left'
    }
  },
  methods: {
    siguiente() {
      this.transitionName = 'slide-left'
      this.indiceActual = (this.indiceActual + 1) % this.casos.length
    },
    anterior() {
      this.transitionName = 'slide-right'
      this.indiceActual = (this.indiceActual - 1 + this.casos.length) % this.casos.length
    },
    irA(index) {
      this.transitionName = index > this.indiceActual ? 'slide-left' : 'slide-right'
      this.indiceActual = index
    }
  }
}
</script>
