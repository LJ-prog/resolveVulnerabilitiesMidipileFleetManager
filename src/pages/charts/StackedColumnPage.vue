<template>
  <q-page padding>
    <div>
      <apex-stacked-column></apex-stacked-column>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'ApexCharts',
  components:{
    ApexStackedColumn: defineAsyncComponent(() => import('components/charts/StackedColumn.vue'))
  } 
})
</script>
