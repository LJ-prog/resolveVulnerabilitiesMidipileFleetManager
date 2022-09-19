<template>
      <q-table
        class="text-h4"
        :rows="ligne"
        :columns="colonne"
        hide-bottom>

        <template v-slot:body-cell-Fonctionnel="props">
          <q-td key="name" :props="props" style="max-width: 100px">
            <q-btn class="text-h8" id="noHover" rounded color="green">
              {{ props.row.Fonctionnel }}
            </q-btn>
          </q-td>
        </template>

        <template v-slot:body-cell-Probleme="props">
          <q-td key="name" :props="props" style="max-width: 100px">
            <q-btn class="text-h8" id="noHover" rounded color="orange">
              {{ props.row.Probleme }}
            </q-btn>
          </q-td>
        </template>

        <template v-slot:body-cell-Panne="props">
          <q-td key="name" :props="props" style="max-width: 100px">
            <q-btn class="text-h8" id="noHover" rounded color="red">
              {{ props.row.Panne }}
            </q-btn>
          </q-td>
        </template>

      </q-table>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TableActive",
  props:{
    lignedef:{
      default: [{name: '', Fonctionnel: 3, Probleme: 1, Panne: 1}]
    },
    colonnedef:{
      default: [
        {name: 'Fonctionnel', label: 'Fonctionnel', field: 'Fonctionnel', sortable: false, align: 'center'},
        {name: 'Probleme', label: 'Probleme', field: 'Problème', sortable: false, align: 'center'},
        {name: 'Panne', label: 'Panne', field: 'Panne', sortable: false, align: 'center'},
      ]
    }
  },
  data() {
    return {
      colonne: this.colonnedef,
      ligne : this.lignedef,
    }
  },
})
</script>

<style scoped>

#noHover {
  pointer-events: none;
}

</style>
