<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '0px' } : {}">
      <div class="col-xs-12 col-sm-4 col-md-4" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
          <q-card flat bordered>
            <q-card-section>
              <table-active></table-active>
            </q-card-section>

            <q-card-section>
              <table-actu></table-actu>
            </q-card-section>
          </q-card>
        </div>

      <div class="col-xs-12 col-sm-7 col-md-7" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
        <q-card flat bordered>
          <q-card-section>
            <table-progress></table-progress>
          </q-card-section>
        </q-card>
      </div>

    </div>

    <div class="q-pa-md row q-gutter-md">
      <div class="col-xs-12 col-sm-4 col-md-4" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
        <q-card flat bordered>
          <q-card-section>
            <div class="text-h6 text-grey-8">Mobility ECO Score</div>
            <radial-bar-custom
              :radialarrayvalues=[85,77,91,80,86]
            ></radial-bar-custom>
          </q-card-section>
        </q-card>
      </div>


      <div class="col-xs-12 col-sm-7 col-md-7" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
        <q-card flat bordered >
          <q-card-section>
            <popup-map></popup-map>
          </q-card-section>
        </q-card>
      </div>

    </div>

  </q-page>
</template>

<script>

import LigneMenu from 'components/Menu/LigneMenu.vue'
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    TableActu: defineAsyncComponent(() => import('components/tables/TableActu')),
    TableActive: defineAsyncComponent(() => import('components/tables/TableActive')),
    RadialBarCustom: defineAsyncComponent(() => import('components/charts/RadialBarCustom.vue')),
    TableProgress: defineAsyncComponent(() => import('components/tables/TableProgress')),
    PopupMap: defineAsyncComponent(() => import('components/maps/PopupMap.vue'))
  },
  data () {
    LigneMenu
    return {
      loading: true,
      dialog: true,
    }
  }
})
</script>
