<template lang="fr">
  <q-layout view="lHh Lpr lFf">
    <router-view />
  </q-layout>

</template>

<script>
import { defineComponent, onMounted } from 'vue'
import useApi from 'src/composables/UseApi'

export default defineComponent({
  name: 'LoginLayout',

  setup () {
    const { getBrand } = useApi()

    onMounted(() => {
      getBrand()
    })
    return {
    }
  }
})
</script>

<style scoped>

</style>
