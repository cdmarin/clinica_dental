<template>
  <section class="servicios-container">
    <h2>{{ $t('servicios') }}</h2>

    <!-- Estado de carga -->
    <div v-if="cargandoServicios" class="loading-state">
      <p>Cargando servicios...</p>
    </div>

    <!-- Estado de error -->
    <div v-else-if="errorServicios" class="error-state">
      <p>{{ errorServicios }}</p>
    </div>

    <!-- Servicios cargados -->
    <ul v-else class="servicios-grid">
      <li v-for="(servicio, index) in servicios" :key="servicio.id || index"
        :class="['servicio-item', { 'expanded': openIndex === index }]">
        <button type="button" class="servicio-head" @click="toggle(index)">
          <img class="servicio-icon" :src="servicio.imagen_url" :alt="servicio.nombre" />
          <h3>{{ servicio.nombre }}</h3>
        </button>
        <div>
          <p :class="['servicio-detalle']">{{ servicio.descripcion }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Servicios',
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
    }
  },
  data() {
    return {
      openIndex: null
    }
  },
  methods: {
    toggle(i) {
      this.openIndex = this.openIndex === i ? null : i
    }
  }
}
</script>
