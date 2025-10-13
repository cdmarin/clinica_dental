<template>
  <section class="trabajadores-container">
    <h2>{{ $t('trabajadores') }}</h2>

    <!-- Trabajadores cargados -->
    <div class="staff-grid">
      <div v-for="miembro in trabajadores" :key="miembro.id" class="staff-card">
        <div class="photo-placeholder">
          <img :src="miembro.imagen_url" :alt="miembro.nombre" />
        </div>
        <h3>{{ miembro.nombre }}</h3>
        <p>{{ miembro.especialidad }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Trabajadores',
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
    }
  }
}
</script>
