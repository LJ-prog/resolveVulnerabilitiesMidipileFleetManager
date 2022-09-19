<template>
  <q-page padding>
    <div>
      <popup-map></popup-map>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  components:{
    PopupMap: defineAsyncComponent(() => import('components/maps/PopupMap.vue'))
  } 
})
</script>
