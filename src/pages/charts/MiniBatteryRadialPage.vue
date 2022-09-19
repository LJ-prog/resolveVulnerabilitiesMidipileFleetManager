<template>
  <q-page padding>
    <div>
      <mini-battery-radial
        :chartheight=[100]
      ></mini-battery-radial>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'ApexCharts',
  components:{
    MiniBatteryRadial: defineAsyncComponent(() => import('components/charts/MiniBatteryRadial.vue'))
  } 
})
</script>
