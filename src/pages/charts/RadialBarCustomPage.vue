<template>
  <q-page padding>
    <div>
      <JSONChallengeScore></JSONChallengeScore>
      <JSONMobilityScore></JSONMobilityScore>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'ApexCharts',
  components:{
    JSONChallengeScore: defineAsyncComponent(() => import('components/charts/JSONChallengeScore.vue')),
    JSONMobilityScore: defineAsyncComponent(() => import('components/charts/JSONMobilityScore.vue'))
  } 
})
</script>
