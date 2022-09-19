<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '60px', 'margin-bottom' : '0px' } : {}">

      <div class="col-xs-12 col-sm-12 col-md-7" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
        <q-card flat  >
            <q-card-section>
              <table-active></table-active>
            </q-card-section>

          <q-card-section>
            <!-- <div class="text-h6 text-grey-8">Géolocalisation</div> -->
            <popup-map
              :zoommap=[13]
            ></popup-map>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-4" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
        <q-card flat >
          <q-card-section>
            <table-actu
              :data3def="jsonactu"
            ></table-actu>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="q-pa-md row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
      <div class="col-xs-12 col-sm-12 col-md-7" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
        <q-card flat >
          <q-card-section>
            <table-progress></table-progress>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-4" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
          <q-card flat >
            <q-card-section>
              <div class="text-h6">Mobility ECO Score</div>
                <radial-bar-custom
                  :radialarrayvalues=multiecoscore
                ></radial-bar-custom>
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

