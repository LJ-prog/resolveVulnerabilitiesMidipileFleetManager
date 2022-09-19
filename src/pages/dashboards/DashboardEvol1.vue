<template>
  <q-page>
    <div class="q-pa-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '60px', 'margin-bottom' : '0px' } : {}">

        <q-item class="responsive" style="padding-right:0px; padding-left:0px;" v-if="$q.platform.is.desktop">
          <q-item-section align="left">
            <h4>
              Bonjour {{ user.user_metadata.username }} !
            </h4>
          </q-item-section>
          <q-item-section class="cardBorder" id="boxParc">
          <q-card class="justify-left" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
            <div class="text-h6" style="margin-left: 29px; padding-top: 2px; padding-bottom: 2px" id="darkMode"> Etat du parc</div>
            <q-separator />
            <div class="q-pa-md row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {'margin-left': '0px' }">

              <card-stat-fleet style="margin-left: 15px; background-color: green; font-size: 25px"
              :datadef="'3'"
              :infodef ="'Véhicule opérationnel'"
              >
              </card-stat-fleet>

              <card-stat-fleet style="margin-left: 15px; background-color: orange; font-size: 25px"
              :datadef="'1'"
              :infodef ="'Problème technique'"
              >
              </card-stat-fleet>

              <card-stat-fleet style="margin-left: 15px; background-color: red; font-size: 25px"
              :datadef="'1'"
              :infodef ="'Véhicule en panne'"
              >
              </card-stat-fleet>
            </div>
          </q-card>

          </q-item-section>
        </q-item>

        <div v-if="$q.platform.is.mobile">
          <div>
              <h4 style="text-align:center;">
                Bonjour {{ user.user_metadata.username }} !
              </h4>
          </div>
          <div class="row justify-center"> <!--style="max-width:20%;"-->
            <q-card class="justify-center" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
            <div class="text-h6" style="margin-left: 29px; padding-top: 2px; padding-bottom: 2px" id="darkMode"> Etat du parc</div>
            <q-separator />
            <div class="q-pa-sm row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px'} : {'margin-left': '0px' }">

              <card-stat-fleet style="margin-left: 15px; background-color: green; font-size: 20px"
              :datadef="'3'"
              :infodef ="'Véhicule opérationnel'"
              >
              </card-stat-fleet>

              <card-stat-fleet style="margin-left: 15px; background-color: orange; font-size: 20px"
              :datadef="'1'"
              :infodef ="'Problème technique'"
              >
              </card-stat-fleet>

              <card-stat-fleet style="margin-left: 15px; background-color: red; font-size: 20px; margin-right: 15px"
              :datadef="'1'"
              :infodef ="'Véhicule en panne'"
              >
              </card-stat-fleet>
            </div>
          </q-card>
          </div>
      </div>





      <div class="full-width" style="margin-top: 16px;" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">

        <!-- <q-card flat class="cardBorder">
          <q-card-section class= "responsive">style="padding-top: 12px;" -->
            <!-- <div class="text-h6" style="padding-bottom: 12px">Géolocalisation</div> -->
            <popup-map v-if="$q.platform.is.desktop"
              :zoommap=[13]
              :stylemap= "'height:68vh'"
            ></popup-map>

            <popup-map v-if="$q.platform.is.mobile"
              :zoommap=[13]
              :stylemap= "'height:36vh'"
            ></popup-map>
          <!-- </q-card-section>
        </q-card> -->
      </div>

    </div>

    <div class="q-pa-md">
    <div class="q-gutter-y-md" id="width" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">

      <!-- <div class="col-xs-12 col-sm-12 col-md-7" id="borderTable" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
            <table-progress></table-progress>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-4" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
          <q-card flat class="cardBorder">
            <q-card-section style="padding-top: 12px;">
              <div class="text-h6">Mobility ECO Score</div>
                <radial-bar-custom
                  :radialarrayvalues=multiecoscore
                ></radial-bar-custom>
            </q-card-section>
          </q-card>
      </div> -->
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
            <div class="q-pa-md row q-gutter-md" id="width" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
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
    </div>

  </q-page>
</template>

<script>

import LigneMenu from 'components/Menu/LigneMenu.vue'
import { defineComponent, defineAsyncComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'

export default defineComponent({
  name: 'PageIndex',
  components: {
    // RadialBarCustom: defineAsyncComponent(() => import('components/charts/RadialBarCustom.vue')),
    // TableProgress: defineAsyncComponent(() => import('components/tables/TableProgress')),
    CardComponent: defineAsyncComponent(() => import('components/DatadashboardCard.vue')),
    PopupMap: defineAsyncComponent(() => import('components/maps/PopupMap.vue')),
    CardStatFleet: defineAsyncComponent(() => import('components/CardStatFleet.vue')),
  },
   setup () {
    const { user } = useAuthUser()

    return {
      user,
      tab: ref('kpi')
    }
  },
  data () {
    LigneMenu
    return {
      loading: true,
      dialog: true,
      basepath: 'bdd_json',
      filename: 'index.json',
      statpath: 'Stat',
      statsemainesuffix: '_stat_semaine.json',
      statsuffix: '_stat.json',
      jsonactu: [],
      multiecoscore: [],
    }
  },
  methods: {
    getdatafromjson(basepath, filename) {
      const jsondatapath = basepath + '/' + '/' + filename;

      console.log('JSON path: ' + jsondatapath);

      try {
        fetch(jsondatapath)
          .then(response => response.json())
          .then(result => this.extractdashboardata(result));
      } catch (e) {
        console.log('Error fetch JSON: ' + e);
        return;
      }
    },
    extractdashboardata(jsondata) {
      console.log('In extractdashboardata');
      console.log(jsondata);

      //Vehicule list
      for (const vehicule in jsondata) {
        console.log('Véhicule: ' + vehicule);
        console.log('Avatar vehicule: ' + jsondata[vehicule].avatar_vh);
        console.log('Trip size: ' + jsondata[vehicule].json.length);

        //Trip list
        for (let i = (jsondata[vehicule].json.length - 5); i < jsondata[vehicule].json.length; i++) {
          let currentjsonactu = {
            name: vehicule,
            des: jsondata[vehicule].des[i],
            avatar: jsondata[vehicule].avatar_vh,
            lien: '/' + jsondata[vehicule].json[i].slice(0, (jsondata[vehicule].json[i].length - 5))
          }

          this.jsonactu.push(currentjsonactu);
        }
        //---

        //ECOScore
        const statvehicule = this.basepath + '/' + this.statpath + '/' + vehicule + this.statsuffix;
        let vehiculeecoscore = 0;

        console.log('Vehicule stat path: ' + statvehicule);

        try {
          fetch(statvehicule)
            .then(response => response.json())
            .then(result => result.MobilityECOscore[result.MobilityECOscore.length - 1])
            .then(eco => this.multiecoscore.push(Math.round(eco)));
        } catch (e) {
          console.log('Error fetch JSON: ' + e);
          return;
        }

        console.log(this.multiecoscore)
      }
      //---
    }
  },
  created() {
    this.getdatafromjson(this.basepath, this.filename)
  },
})
</script>

<style>

/* .noShadow {
  box-shadow: none;
  border: none;
} */

.cardBorder {
  border:solid 1px #41403E;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
}

.containerBorder {
  border:solid 1px #41403E;
}

#boxParc {
  max-width: 545px;
}

.customTab {
  border-right: solid 1px #41403E;
}


</style>

