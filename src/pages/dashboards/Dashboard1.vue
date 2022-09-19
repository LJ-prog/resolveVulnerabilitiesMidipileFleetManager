<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '0px' } : {}">
      <div class="col" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">

        <q-card flat bordered>
          <q-card-section>
            <global-map></global-map>
          </q-card-section>
        </q-card>

      </div>
    </div>

    <div class="q-pa-md row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '0px' } : {}">
      <div class="col-4" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
        <q-card flat bordered>
          <q-card-section>
            <apex-column-label></apex-column-label>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-4" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
        <q-card flat bordered >
          <q-card-section>
            <apex-column-label
              :columnxaxiscategories="['Jan', 'Fev']"
              :columnseriesname="Mois"
              :columnseriesdata=[28,4]
              :colorvalue="['#ea98be']"
            ></apex-column-label>
          </q-card-section>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script>

import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    ApexColumnLabel: defineAsyncComponent(() => import('components/charts/ColumnLabel.vue')),
    GlobalMap: defineAsyncComponent(() => import('components/maps/PopupMap.vue'))
  },
  data () {
    return {
      loading: true,
      dialog: true,
    }
  }
})
</script>
