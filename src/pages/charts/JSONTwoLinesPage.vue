<template>
  <q-page padding>
    <div>
      <JSONTwoLines></JSONTwoLines>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  components:{
    JSONTwoLines: defineAsyncComponent(() => import('src/components/charts/JSONTwoLines.vue'))
  } 
})
</script>
