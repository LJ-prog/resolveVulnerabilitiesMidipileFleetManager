<template>
  <q-page padding>
    <div>
      <polyline-map></polyline-map>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  components:{
    PolylineMap: defineAsyncComponent(() => import('components/maps/PolylineMap.vue'))
  } 
})
</script>
