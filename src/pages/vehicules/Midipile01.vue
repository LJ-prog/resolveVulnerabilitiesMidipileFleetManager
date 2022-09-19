<template>
  <q-page>
    <div class="q-pa-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '60px', 'margin-bottom' : '0px' } : {}">
      <div class="col-xs-12 col-sm-5 col-md-3" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}" v-if="$q.platform.is.desktop">
        <!-- <q-card class="my-card">
          <q-img src="/statics/images/M1.JPG"/>
        </q-card> -->
        <q-item class="responsive" style="padding-right:0px; padding-left:0px;" v-if="$q.platform.is.desktop">
          <q-item-section>
            <div class="text-h4">Midipile 01</div>
            <h4 class="text-h4" align="left" id="titleMdp" style="padding-left: 20px; margin-top: 20px; "> Conducteur : {{ user.user_metadata.firstname }}</h4>
          </q-item-section>
          <q-item-section>
            <div class="row" style="justify-content:  right;">
            <!-- <q-card style="width: 250px; height: 123px; background-color: green" v-model="shape">

            </q-card> -->
            <div class="column cardBorder" align="center" style="background-color: var(--q-dark);">
              <h6 style="margin-bottom: 0px; margin-right: 0px; margin-left: 0px; margin-top: 20px; padding-right: 13px"> Demande de maintenance </h6>
              <div class="q-pa-md" style="padding-top: 2px">
              <q-form @submit="onSubmit">
                <div class="row" style="justify-content: center; padding-bottom: 10px">
                  <q-item style="padding-right: 0px; padding-left: 0px">
                    <q-item-section class="items-center">
                      <q-radio keep-color name="statut" v-model="shape" val="vert" left-label label="RAS" id="radio" color="green"/>
                    </q-item-section>
                    <q-item-section class="items-center">
                      <q-icon name="mdi-check-bold" size="xs"></q-icon>
                    </q-item-section>
                  </q-item>

                  <q-item style="padding-right: 0px; padding-left: 0px">
                    <q-item-section class="items-center">
                      <q-radio keep-color name="statut"  v-model="shape" val="orange" left-label label="Réparation" id="radio" color="orange"/>
                    </q-item-section>
                    <q-item-section class="row q-gutter-sm items-center">
                      <q-icon name="mdi-wrench-clock" size="xs"></q-icon>
                    </q-item-section>
                  </q-item>

                  <q-item style="padding-right: 0px; padding-left: 0px">
                    <q-item-section class="items-center">
                      <q-radio keep-color name="statut" v-model="shape" val="rouge" left-label label="Panne" id="radio" color="red"/>
                    </q-item-section>
                    <q-item-section class="items-center">
                      <q-icon name="mdi-close-thick" size="xs"></q-icon>
                    </q-item-section>
                  </q-item>
                </div>
                <div align="center">
                  <q-btn label="Envoyer" type="submit" color="primary" @click="setShow"/>
                </div>
              </q-form>
              <q-card v-if="submitResult.length > 0" flat>
                <q-card-section v-if="showing">Le formulaire soumis contient les données suivantes :</q-card-section>
                <q-separator v-if="showing" />
                <q-card-section class="row q-gutter-sm items-center" v-if="showing">
                  <div
                    v-for="(item, index) in submitResult"
                    :key="index"
                    class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
                  >{{ item.name }} = {{ item.value }}</div>
                </q-card-section>
              </q-card>
            </div>
            </div>
            </div>
          </q-item-section>
        </q-item>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-3" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}" v-if="$q.platform.is.mobile">
        <div class="text-h4" style="padding-bottom:15px; padding-top: 10px" align="center">Midipile 01</div>
        <!-- <q-card class="my-card">
          <q-img src="/statics/images/M1.JPG"/>
        </q-card> -->
          <h6 class="text-h5" align="center" id="titleMdp" style="padding-top: 0px; padding-right: 0px; padding-left: 0px; padding-bottom: 30px; margin: 0px"> Conducteur : {{ user.user_metadata.firstname }}</h6>
            <!-- <q-card style="width: 250px; height: 123px; background-color: green" v-model="shape">

            </q-card> -->
            <div class="column cardBorder" align="center" style="background-color: var(--q-dark);">
              <h6 style="margin-bottom: 0px; margin-right: 0px; margin-left: 0px; margin-top: 10px"> Demande de maintenance </h6>
              <div>
              <q-form @submit="onSubmit">
                <div class="row" style="justify-content: center">
                  <q-item style="padding-right: 0px; padding-left: 0px">
                    <q-item-section>
                      <q-radio keep-color name="statut" v-model="shape" val="vert" id="radio" color="green"/>
                    </q-item-section>
                    <q-item-section>
                      <q-icon name="mdi-check-bold" size="xs"></q-icon>
                    </q-item-section>
                  </q-item>

                  <q-item style="padding-right: 0px; padding-left: 0px">
                    <q-item-section>
                      <q-radio keep-color name="statut"  v-model="shape" val="orange" id="radio" color="orange"/>
                    </q-item-section>
                    <q-item-section>
                      <q-icon name="mdi-wrench-clock" size="xs"></q-icon>
                    </q-item-section>
                  </q-item>

                  <q-item style="padding-right: 0px; padding-left: 0px">
                    <q-item-section>
                      <q-radio keep-color name="statut" v-model="shape" val="rouge" id="radio" color="red"/>
                    </q-item-section>
                    <q-item-section>
                      <q-icon name="mdi-close-thick" size="xs"></q-icon>
                    </q-item-section>
                  </q-item>
                </div>
                <div align="center">
                  <q-btn label="Envoyer" type="submit" color="primary" style="margin-bottom: 15px" @click="setShow"/>
                </div>
              </q-form>
              <q-card v-if="submitResult.length > 0">
                <q-card-section v-if="showing">Submitted form contains the following formData (key = value):</q-card-section>
                <q-separator v-if="showing" />
                <q-card-section class="row items-center" align="center" v-if="showing">
                  <div
                    v-for="(item, index) in submitResult"
                    :key="index"
                    class="q-px-sm q-py-xs bg-grey-8 rounded-borders text-center text-no-wrap"
                    align="center"
                  >{{ item.name }} = {{ item.value }}</div>
                </q-card-section>
              </q-card>
            </div>
            </div>
      </div>
<div v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '16px', 'margin-bottom' : '0px', 'text-align' : 'center' } : {'text-align' : 'left', 'padding-bottom' : '16px', 'padding-top' : '16px' }">
      <div class="text-h6" style="padding-bottom: 10px">D'Click - Cargo</div>
        <div class="row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'justify-content' : 'center' } : {'justify-content' : 'left'}">
          <card-component
            :titledef="'Kilométrage total'"
            :data ="'300'"
            :unitydef ="'km'"
            :infodef ="'Kilométrage total du véhicule'"
          >
          </card-component>

          <card-component
            :titledef="'Kilométrage journalier'"
            :data ="'300'"
            :unitydef ="'km'"
            :infodef ="'Kilométrage journalier du véhicule'"
          >
          </card-component>

          <card-component
            :titledef="'Autonomie restante'"
            :datadef ="'2'"
            :unitydef ="'h'"
            :infodef ="'Autonomie restante avant recharge'"
          >
          </card-component>

          <card-component
            :titledef="'Consommation moyenne'"
            :data ="'5'"
            :unitydef ="'Wh/km'"
            :infodef ="'Consommation moyenne du véhicule'"
          >
          </card-component>
        </div>
    </div>

    </div>



      <!-- <div class="col-xs-12 col-sm-5 col-md-2" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
            <battery-radial id="borderTable"
              :batteryvalue=[85]
              :batterylabel="['Mobility ECO Score']"
              :colormin="['#1a7a30']"
              :colormax="['#1a7a30']"
              style="padding-bottom: 26px"
            ></battery-radial>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-2" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
            <battery-radial id="borderTable"
              :batteryvalue=[79]
              :batterylabel="['Midipile Challenge']"
              :colormin="['#103e47']"
              :colormax="['#103e47']"
              style="padding-bottom: 26px"
            ></battery-radial>

      </div> -->



    <div class="q-pa-md row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '16px', 'margin-bottom' : '0px' } : {}">
      <div class="col-xs-12 col-sm-5 col-md-5" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '16px', 'margin-bottom' : '0px' } : {}">
          <div class="text-h6" style="padding-bottom: 16px" v-bind:style="$q.screen.lt.sm ? {'text-align' : 'center' } : {'text-align' : 'left'}">Répartition d'auto-production</div>
          <q-card flat>
            <q-card-section style="padding: 0px">
              <JSONSemiDonut id="borderTable"

              ></JSONSemiDonut>
            </q-card-section>
          </q-card>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-5" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '16px', 'margin-bottom' : '0px' } : {}">
          <div class="text-h6" style="padding-bottom: 16px" v-bind:style="$q.screen.lt.sm ? {'text-align' : 'center' } : {'text-align' : 'left'}">Répartition d'auto-production</div>
          <q-card flat >
            <q-card-section style="padding: 0px">
              <JSONSemiDonut id="borderTable"

              ></JSONSemiDonut>
            </q-card-section>
          </q-card>
      </div>
    </div>

    <div class="q-pa-md row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '16px', 'margin-bottom' : '0px' } : {}">
      <div class="col-xs-12 col-sm-6 col-md-3" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
                <table-actu id="borderTable"
                :data3def="tabdata"
              ></table-actu>
      </div>
    </div>

    <div class="q-pa-md row q-gutter-md"  v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '16px', 'margin-bottom' : '0px' } : {}">
      <div class="col-xs-12 col-sm-5 col-md-5" v-bind:style="$q.screen.lt.sm ? {'margin-top': '0px', 'margin-left': '0px' } : {}">
        <div class="text-h6" style="padding: 16px; padding-left: 0px" v-bind:style="$q.screen.lt.sm ? {'text-align' : 'center' } : {'text-align' : 'left'}">Distance hebdomadaire</div>
          <JSONApexColumnLabel id="borderTable" style="background-color: var(--q-dark);"
            :filename="['midipile01_stat_semaine.json']"
          ></JSONApexColumnLabel>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-5" v-bind:style="$q.screen.lt.sm ? {'margin-top': '48px', 'margin-left': '0px' } : {}">
        <div class="text-h6" style="padding: 16px; padding-left: 0px" v-bind:style="$q.screen.lt.sm ? {'text-align' : 'center' } : {'text-align' : 'left'}">Suivi de consommation (W.h/km)</div>
          <JSONApexBasicLine id="borderTable" style="background-color: var(--q-dark);"
            :filename="['midipile01_stat.json']"
          ></JSONApexBasicLine>
      </div>
    </div>
    <div class="q-pa-md" style="justify-content: center" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '60px', 'margin-bottom' : '0px' } : {}">
      <q-card class="containerBorder">
          <q-tabs
            v-model="tab"
            dense
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="kpi" label="Tab N°1" class="customTab"/>
            <q-tab name="tab2" label="Tab N°2" class="customTab" />
            <q-tab name="tab3" label="Tab N°3"/>
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="kpi">
              <div class="q-pa-md row q-gutter-md justify-center" id="width" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
                <card-component
                  :titledef="'Vitesse moyenne'"
                  :datadef ="'45'"
                  :unitydef ="'km/h'"
                  :infodef ="'Vitesse moyenne de la flotte'"
                ><!--v-for="n in 6" :key="n" -->

                </card-component>

                <card-component
                  :titledef="'Vitesse max'"
                  :datadef ="'90'"
                  :unitydef ="'km/h'"
                  :infodef ="'Vitesse maximale de la flotte'"
                >
                </card-component>

                <card-component
                  :titledef="'Recharge solaire'"
                  :datadef ="'30'"
                  :unitydef ="'%'"
                  :infodef ="'Pourcentage de charge batterie via les panneaux solaires'"
                >
                </card-component>

                <card-component
                  :titledef="'Recharge GAP'"
                  :datadef ="'50'"
                  :unitydef ="'%'"
                  :infodef ="'Pourcentage de charge batterie via la génératrice à pédales'"
                >
                </card-component>

                <card-component
                  :titledef="'Autonomie'"
                  :datadef ="'3'"
                  :unitydef ="'h'"
                  :infodef ="'Autonomie restante avant recharge'"
                >
                </card-component>

                <card-component
                  :titledef="'Kilométrage'"
                  :data ="'300'"
                  :unitydef ="'km'"
                  :infodef ="'Kilométrage du véhicule'"
                >
                </card-component>

              </div>
            </q-tab-panel>

            <q-tab-panel name="tab2">
              <div class="text-h6">Tab N°2</div>
                Pas de données pour le moment.
            </q-tab-panel>

            <q-tab-panel name="tab3">
              <div class="text-h6">Tab N°3</div>
                Pas de données pour le moment.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'

export default defineComponent({
  name: 'PageIndex',
  components: {
    TableActu: defineAsyncComponent(() => import('components/tables/TableActu')),
    // BatteryRadial: defineAsyncComponent(() => import('components/charts/BatteryRadial.vue')),
    JSONApexColumnLabel: defineAsyncComponent(() => import('components/charts/JSONColumnLabel.vue')),
    JSONApexBasicLine: defineAsyncComponent(() => import('components/charts/JSONBasicLine.vue')),
    CardComponent: defineAsyncComponent(() => import('components/DatadashboardCard.vue')),
    JSONSemiDonut: defineAsyncComponent(() => import('components/charts/JSONSemiDonut.vue')),
},
setup () {
    const { user } = useAuthUser()
    const submitResult = ref([])

    return {
      user,
      tab: ref('kpi'),
      // color: ref('vert'),
      shape: ref('vert'),
      submitResult,
      showing: ref(false),

      onSubmit (evt) {
        const formData = new FormData(evt.target)
        const data = []

        for (const [ name, value ] of formData.entries()) {
          data.push({
            name,
            value
          })
        }

        submitResult.value = data
      }
    }
  },
  props:{
    tabdatadef:{
      default: [
        {
          name: 'Sebastien',
          des: '28 nov 2021 | 43,50 km | 1:46:11',
          avatar: "statics/images/Sebastien.JPG",
          lien: "/1111128116_route18"
        },
        {
          name: 'Ehouarn',
          des: '28 nov 2021 | 53,96 km | 2:12:0',
          avatar: "statics/images/Ehouarn.JPG",
          lien: "/1111128107_route06"
        },
        {
          name: 'Sebastien',
          des: '27 nov 2021 | 79,52 km | 2:54:39',
          avatar: "statics/images/Sebastien.JPG",
          lien: "/1111127115_route15"
        },
        {
          name: 'Sebastien',
          des: '27 nov 2021 | 43,37 km | 1:43:20',
          avatar: "statics/images/Sebastien.JPG",
          lien: "/1111127108_route18"
        },
        {
          name: 'Sebastien',
          des: '26 nov 2021 | 43,67 km | 1:50:19',
          avatar: "statics/images/Sebastien.JPG",
          lien: "/1111126116_route18"
        }
      ]
    },
  },

  data () {
    return {
      loading: true,
      dialog: true,
      tabdata : this.tabdatadef
    }
  },
  methods: {
    setShow() {
      let pop = document.getElementById('pop');
      this.showing = true;
      // msg.style.display = "revert";
      setTimeout(() => {
        this.showing = false;
        // // 👇️ removes element from DOM
        pop.style.display = "none";
      }, 3000);

    },
  }
})
</script>

<style>

#marginTable {
  margin-left:8.5%;
}

.cardBorder {
  /* border:solid 1px #41403E; */
  border-radius: 4px;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
}

.containerBorder {
  border:solid 1px #41403E;
}

.customTab {
  border-right: solid 1px #41403E;
}

</style>
