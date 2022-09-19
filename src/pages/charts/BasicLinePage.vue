<template>
  <q-page padding>
    <div>
      <JSONApexBasicLine></JSONApexBasicLine>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'ApexCharts',
  components:{
    JSONApexBasicLine: defineAsyncComponent(() => import('components/charts/JSONBasicLine.vue'))
  } 
})
</script>
