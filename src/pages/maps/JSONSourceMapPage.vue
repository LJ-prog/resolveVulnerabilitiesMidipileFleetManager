<template>
  <q-page padding>
    <div>
      <JSONSourceMap></JSONSourceMap>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  components:{
    JSONSourceMap: defineAsyncComponent(() => import('components/maps/JSONSourceMap.vue'))
  } 
})
</script>
