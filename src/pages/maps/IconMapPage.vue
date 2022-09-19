<template>
  <q-page padding>
    <div>
      <icon-map></icon-map>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  components:{
    IconMap: defineAsyncComponent(() => import('components/maps/IconMap.vue'))
  } 
})
</script>
