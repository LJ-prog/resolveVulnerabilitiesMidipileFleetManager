<template>
  <q-page padding>
    <div>
      <battery-radial 
        :batteryvalue=[85]
        :batterylabel="['ECO SCORE']"
        :colormin="['#6CC490']"
        :colormax="['#29C869']"
      ></battery-radial>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'ApexCharts',
  components:{
    BatteryRadial: defineAsyncComponent(() => import('components/charts/BatteryRadial.vue'))
  } 
})
</script>
