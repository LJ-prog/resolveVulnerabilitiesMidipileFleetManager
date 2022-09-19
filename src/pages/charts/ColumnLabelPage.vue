<template>
  <q-page padding>
    <div>
      <JSONApexColumnLabel></JSONApexColumnLabel>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'ApexCharts',
  components:{
    JSONApexColumnLabel: defineAsyncComponent(() => import('components/charts/JSONColumnLabel.vue'))
  } 
})
</script>
