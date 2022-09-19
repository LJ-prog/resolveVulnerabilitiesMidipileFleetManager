<template>
  <q-card>
    <q-card-section>
      <div class="text-h6" v-bind:style="$q.screen.lt.sm ? {'text-align': 'center'} : {'text-align': 'left'}">
        Flux d'actualités
      </div>
    </q-card-section>
    <q-separator color="white"/>
    <q-card-section class="q-pa-none">
      <q-table
        class=""
        style="height: 400px"
        :rows="data3"
        :columns="column"
        hide-bottom
        virtual-scroll
        v-model:pagination="pagination"
        :rows-per-page-options="[0]">
        <template v-slot:body-cell-Trip="props">
          <q-td :props="props" style="max-width: 100px">
            <q-item :to="props.row.lien">
              <q-item-section avatar>
                <q-avatar>
                  <img :src="props.row.avatar">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ props.row.Trip }}</q-item-label>
                <q-item-label overline class="">{{ props.row.name }}</q-item-label>
                <q-item-label caption class="">{{ props.row.des }}</q-item-label>
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
  name: "TableProgress",
  props:{
    data3def:{
      default: [
        {
          name: 'Benoît Trouvé',
          des: '26 nov 2021 | 17,62 km | 31:55',
          avatar: "statics/images/Benoit.JPG",
          lien: "/5111126114_route05"
        },
        {
          name: 'Benoît Trouvé',
          des: '21 nov 2021 | 35,41 km | 58:20',
          avatar: "statics/images/Benoit.JPG",
          lien: "/5111126114_route05"
        },
        {
          name: 'Sébastien Taliercio',
          des: '17 nov 2021 | 65,12 km | 1:52:10',
          avatar: "statics/images/Sebastien.JPG",
          lien: "/5111126114_route05"
        },
        {
          name: 'Benoît Trouvé',
          des: '04 nov 2021 | 30,03 km | 29:56',
          avatar: "statics/images/Benoit.JPG",
          lien: "/5111126114_route05"
        }
      ]
    },
    colomndef:{
      default: [
        {name: 'Trip', label: 'Trajet', field: 'trip', sortable: true, align: 'left'},
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
