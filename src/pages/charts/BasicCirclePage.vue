<template>
  <q-page padding>
    <div>
      <basic-circle></basic-circle>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'ApexCharts',
  components:{
    BasicCircle: defineAsyncComponent(() => import('components/charts/BasicCircle.vue'))
  } 
})
</script>
