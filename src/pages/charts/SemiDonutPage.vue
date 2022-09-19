<template>
  <q-page padding>
    <div>
      <JSONSemiDonut></JSONSemiDonut>
    </div>
  </q-page>
</template>

<script>
import SemiDonut from 'components/charts/SemiDonut.vue'
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'ApexCharts',
  components:{
    JSONSemiDonut: defineAsyncComponent(() => import('components/charts/JSONSemiDonut.vue'))
  } 
})
</script>
