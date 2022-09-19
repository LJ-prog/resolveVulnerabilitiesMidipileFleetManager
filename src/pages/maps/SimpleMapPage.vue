<template>
  <q-page padding>
    <div>
      <simple-map></simple-map>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  components:{
    SimpleMap: defineAsyncComponent(() => import('components/maps/SimpleMap.vue'))
  } 
})
</script>
