<template>
  <v-app :style="{ backgroundColor }">
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware: 'auth',
  
  computed: {
    backgroundColor() {
      if (this.$vuetify.theme.isDark) {
        return this.$vuetify.theme.defaults.dark.primary
      }
      return this.$vuetify.theme.defaults.light.primary
    },
  },
}
</script>
