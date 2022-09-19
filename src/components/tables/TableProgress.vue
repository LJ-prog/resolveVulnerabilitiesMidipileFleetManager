<template>
  <q-card>
<!--     <q-card-section>
      <div class="text-h6 text-grey-8">
        Suivi des véhicules Midipile
      </div>
    </q-card-section>
    <q-separator color="white"/>
 -->    <q-card-section class="q-pa-none">
      <q-table class="" :rows="data3" :columns="column" hide-bottom>
        <template v-slot:body-cell-vh_id="props">
          <q-td :props="props" style="max-width: 80px">
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold">{{ props.row.vh_id }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-td>
        </template>

        <template v-slot:body-cell-SOCfixe="props">
          <q-td :props="props">
            <q-item>
              <q-item-section>
                <q-item-label class="">{{ props.row.SOC_fixe }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-td>
        </template>

        <template v-slot:body-cell-SOCmobile="props">
          <q-td :props="props">
            <q-item>
              <q-item-section>
                <q-item-label class="">{{ props.row.SOC_mobile }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-td>
        </template>

        <template v-slot:body-cell-Ensoleillement="props">
          <q-td :props="props" style="max-width: 10px">
            <q-item>
              <q-item-section>
                <q-icon 
                  style="font-size: 32px;" :name="props.row.Psolar" 
                />
              </q-item-section>
            </q-item>
          </q-td>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "TableProgress",
  props:{
    data3def:{
      default: [
        {
            vh_id: "Midipile 01",
            usr_id: "Benoit",
            SOC_fixe: "90%",
            SOC_mobile: "46%",
            Psolar: "light_mode",
            Autonomie: "160 km",
            Position: "test",
            utilisation: "en cours",
        },
        {
            vh_id: "Midipile 02",
            usr_id: "Vincent",
            SOC_fixe: "75%",
            SOC_mobile: "76%",
            Psolar: "light_mode",
            Autonomie: "165 km",
            Position: "test",
            utilisation: "non utilisé",
        },
        {
            vh_id: "Midipile 03",
            usr_id: "Célian",
            SOC_fixe: "95%",
            SOC_mobile: "13%",
            Psolar: "wb_cloudy",
            Autonomie: "145 km",
            Position: "test",
            utilisation: "en cours",
        },
        {
            vh_id: "Midipile 04",
            usr_id: "Ehouarn",
            SOC_fixe: "25%",
            SOC_mobile: "45%",
            Psolar: "wb_cloudy",
            Autonomie: "83 km",
            Position: "test",
            utilisation: "non utilisé",
        },
        {
            vh_id: "Midipile 05",
            usr_id: "Sébastien",
            SOC_fixe: "69%",
            SOC_mobile: "86%",
            Psolar: "light_mode",
            Autonomie: "178 km",
            Position: "test",
            utilisation: "non utilisé",
        }
      ]
    },
    colomndef:{
      default: [
        {name: 'vh_id',  label: 'Id véhicule', field: 'vh_id',  sortable: true, align: 'left'},
        {name: 'Autonomie', label: 'Autonomie', field: 'Autonomie', sortable: true, align: 'center'},
        {name: 'Ensoleillement', label: 'Ensoleillement', field: 'Psolar', sortable: false, align: 'left'},
        {name: 'SOCfixe', label: 'Niveau batterie fixe', field: 'SOCfixe', sortable: true, align: 'center'},
        {name: 'SOCmobile', label: 'Niveau batterie mobile', field: 'SOCmobile', sortable: true, align: 'center'},
      ]
    }
  },
  data() {
    return {
      column: this.colomndef,
      data3 : this.data3def,
    }
  },
})
</script>

