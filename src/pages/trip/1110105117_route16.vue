<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md">

      <div class="col-xs-12 col-sm-12 col-md-4">
        <q-card flat >
            <q-card-section>
              <table-trip-stat class="col-6"
              :selectorname="path"
              :filename="ficjson"
              ></table-trip-stat>
            </q-card-section>
          </q-card>
        </div>

      <div class="col-xs-12 col-sm-3 col-md-3">
        <q-card flat >
          <q-card-section>
            <JSONMobilityScore
              :selectorname="path"
              :filename="ficjson"
            ></JSONMobilityScore>
          </q-card-section>
        </q-card>

        <q-card flat >
          <q-card-section>
            <JSONChallengeScore
              :selectorname="path"
              :filename="ficjson"
            ></JSONChallengeScore>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-10 col-sm-4 col-md-4">
        <div class="text-h6">Répartition d'auto-production</div>
        <q-card flat >
          <q-card-section>
            <JSONSemiDonut
              :selectorname="path"
              :filename="ficjson"
            ></JSONSemiDonut>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-5">
        <q-card flat bordered >
          <q-card-section>
            <JSONSourceMap
              :stylemap="['height:35vh']"
              :zoommap=[11]
              :selectorname="path"
              :filename="ficjson"
            ></JSONSourceMap>
          </q-card-section>
        </q-card>
      </div>


      <div class="col-xs-12 col-sm-6 col-md-6">
        <JSONTwoLines
          :chartheight=[200]
          :selectorname="path"
          :filename="ficjson"
        ></JSONTwoLines>

      </div>

    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    JSONChallengeScore: defineAsyncComponent(() => import('components/charts/JSONChallengeScore.vue')),
    JSONMobilityScore: defineAsyncComponent(() => import('components/charts/JSONMobilityScore.vue')),
    TableTripStat: defineAsyncComponent(() => import('components/tables/TableTripStat')),
    JSONSourceMap: defineAsyncComponent(() => import('components/maps/JSONSourceMap.vue')),
    JSONTwoLines: defineAsyncComponent(() => import('components/charts/JSONTwoLines.vue')),
    JSONSemiDonut: defineAsyncComponent(() => import('components/charts/JSONSemiDonut.vue'))
  },
  data () {
    return {
      path: "midipile01",
      ficjson: "1110105117_route16.json",
      loading: true,
      dialog: true,
    }
  }
})
</script>
