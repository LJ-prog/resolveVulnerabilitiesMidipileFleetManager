<template>
  <div>
    <q-card>
      <q-card-section class="text-h6">
        apexchart bar
      </q-card-section>
      <q-card-section>
        <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts,
  },

  data: function() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }
}
</script>

<style scoped>
</style>
