<template>
  <q-card>

    <q-card-section class="q-pa-none">
      <q-table class="" style="height: 450px" :rows="data3" :columns="column" :rows-per-page-options="[0]" hide-bottom dense virtual-scroll>
        <template v-slot:body-cell-champ="props">
          <q-td :props="props" style="max-width: 80px" no-hover>
            <q-item>
              <q-item-section>
                <q-item-label>{{ props.row.champ }}</q-item-label>
              </q-item-section>

            </q-item>
          </q-td>
        </template>

        <template v-slot:body-cell-valeur="props">
          <q-td :props="props" style="max-width: 50px">
            <q-item>
              <q-item-section>
                <q-item-label caption class="">{{ props.row.valeur }}</q-item-label>
              </q-item-section>

            </q-item>
          </q-td>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TableTripStat",
  props:{
    basepath:{
      default: "bdd_json"
    },
    selectorname:{
      default: "midipile01"
    },
    filename:{
      default: "1110101107_route14.json"
    },
    data3def:{
      default: [
        { champ: 'Utilisateur', valeur: 'Benoît Trouvé'},
        { champ: 'Distance (km)', valeur: '25,62'},
        { champ: 'Durée', valeur: '42:30'},
        { champ: 'Vitesse moyenne (km/h)', valeur: '36,18'},
        { champ: 'Consommation électrique (W.h/km)', valeur: '24 '},
        { champ: 'Puissance moyenne consommée (W)', valeur: '800'},
        { champ: 'Auto-consommation (%)', valeur: '16'},
        { champ: 'SOC fixe fin de trajet (%)', valeur: '46'},
        { champ: 'SOC mobile fin de trajet (%)', valeur: '32'}
      ]
    },
    colomndef:{
      default: [
        {name: 'champ', label: ' ', field: 'champ', sortable: false, align: 'left'},
        {name: 'valeur', label: ' ', field: 'valeur', sortable: false, align: 'left'},
      ]
    }
  },
  data() {
    return {
      column: this.colomndef,
      data3 : this.data3def,
    }
  },
  methods: {
    getdatafromjson(basepath, selectorname, filename) {
      const jsondatapath = basepath + '/' + selectorname + '/' + filename;

      console.log('JSON path: ' + jsondatapath);

      try {
        fetch(jsondatapath)
          .then(response => response.json())
          .then(result => this.plotdata(result));
      } catch (e) {
        console.log('Error fetch JSON: ' + e);
        return;
      }
    },
    plotdata(jsondata) {
      console.log('In extractpath');
      console.log(jsondata);

      if (jsondata != undefined) {
        this.data3 = [
          { champ: 'Utilisateur', valeur: jsondata.Midiuser},
          { champ: 'Distance (km)', valeur: jsondata.stat_distance_km},
          { champ: 'Durée', valeur: jsondata.duree_formatee},
          { champ: 'Vitesse moyenne (km/h)', valeur: jsondata.stat_vmoy},
          { champ: 'Consommation électrique (W.h/km)', valeur: jsondata.stat_conso},
          { champ: 'Puissance moyenne consommée (W)', valeur: jsondata.stat_puissance_consommee},
          { champ: 'Auto-consommation (%)', valeur: jsondata.stat_part_recuperation},
          { champ: 'SOC fixe fin de trajet (%)', valeur: jsondata.stat_SOC_fixe_final},
          { champ: 'SOC mobile fin de trajet (%)', valeur: jsondata.stat_SOC_mobile_final}
          ]
        
        this.loaded = true
        console.log('Load graph')
      }
    }
  },
  created() {
    this.getdatafromjson(this.basepath, this.selectorname, this.filename)
  }
})
</script>