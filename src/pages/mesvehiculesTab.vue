<template>
  <div align="center" class="responsive" v-bind:style="$q.screen.lt.sm ? {'padding-top': '30%'} : {'padding-top' : '0px'}">
    <h4 v-bind:style="$q.screen.lt.sm ? {'margin-bottom': '0px', 'margin-top': '2%'} : {'margin-bottom': '1%', 'margin-top': '4%' }"> Mes véhicules </h4>
  </div>
  <div class="q-pa-md row items-start" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '2%'} : {}">
    <!-- <q-card class="my-card" id="containerBorder">
      <q-item to="midipile01" style="padding: 0px">
        <q-img src="/statics/images/M1.JPG">
          <q-icon class="absolute all-pointer-events" size="32px" name="info" style="top: 8px; left: 356px">
              <q-tooltip>
                Version Caisse
              </q-tooltip>
            </q-icon>
        </q-img>
      </q-item>
      <q-card-actions>
          <q-btn flat
             label="Midipile 01"
             to="/midipile01"
          />
      </q-card-actions>
    </q-card>

    <q-card class="my-card" id="containerBorder">
      <q-item to="midipile02" style="padding: 0px">
        <q-img src="/statics/images/M2.JPG">
          <q-icon class="absolute all-pointer-events" size="32px" name="info" style="top: 8px; left: 356px">
            <q-tooltip>
              Version pick-up Zoo de la Flèche
            </q-tooltip>
          </q-icon>
        </q-img>
        </q-item>
        <q-card-actions>
            <q-btn flat
              label="Midipile 02"
              to="/midipile02"
            />
        </q-card-actions>
    </q-card>

    <q-card class="my-card" id="containerBorder">
      <q-item to="midipile03" style="padding: 0px">
        <q-img src="/statics/images/M3.JPG">
          <q-icon class="absolute all-pointer-events" size="32px" name="info" style="top: 8px; left: 356px">
            <q-tooltip>
              Version Caisse Amazon
            </q-tooltip>
          </q-icon>
        </q-img>
      </q-item>
      <q-card-actions>
          <q-btn flat
             label="Midipile 03"
             to="/midipile03"
          />
      </q-card-actions>
    </q-card>

    <q-card class="my-card" id="containerBorder">
      <q-item to="midipile04" style="padding: 0px">
        <q-img src="/statics/images/M4.JPG">
          <q-icon class="absolute all-pointer-events" size="32px" name="info" style="top: 8px; left: 356px">
            <q-tooltip>
              Version pick-up IDEA Group
            </q-tooltip>
          </q-icon>
        </q-img>
      </q-item>
      <q-card-actions>
          <q-btn flat
             label="Midipile 04"
             to="/midipile04"
          />
      </q-card-actions>
    </q-card>

    <q-card class="my-card" id="containerBorder">
      <q-item to="midipile05" style="padding: 0px">
        <q-img src="/statics/images/M5.JPG">
          <q-icon class="absolute all-pointer-events" size="32px" name="info" style="top: 8px; left: 356px">
            <q-tooltip>
              Version Duo à venir
            </q-tooltip>
          </q-icon>
        </q-img>
      </q-item>
      <q-card-actions>
          <q-btn flat
             label="Midipile 05"
             to="/midipile05"
          />
      </q-card-actions>
    </q-card> -->

    <div id="q-app" style="padding-top: 2%; padding-bottom: 6%" v-bind:style="$q.screen.lt.sm ? {'padding-bottom': '0%'} : {'padding-top': '2%', 'padding-bottom': '6%'}">
        <div class="q-pa-sm q-gutter-sm">
          <q-table :rows="data" :columns="columns" row-key="name" selection="simple" v-model:selected="selected"  id="borderTable">

            <!-- <template v-slot:top>
              <div class="q-pa-sm q-gutter-sm">
                <q-dialog v-model="show_dialog" persistent>
                  <q-card style="max-width: 1500px; width:500px; height:300px">
                    <q-card-section v-if="editedIndex > -1">
                      <div class="text-h6">Modifier mon alerte</div>
                    </q-card-section>

                    <q-card-section v-else>
                      <div class="text-h6">Créer une alerte</div>
                    </q-card-section>

                    <q-card-section>
                      <div class="colomn">
                        <q-input key="validate" clearable v-model="editedItem.name" label="Nom du véhicule" class="input self-center"
                        :rules="[val => !!val || 'Champ requis']"></q-input>
                        <q-input key="validate" clearable v-model="editedItem.notif" label="Notifications" class="input self-center"
                        :rules="[val => !!val || 'Champ requis']"></q-input>
                      </div>
                    </q-card-section>

                    <q-card-actions align="right">
                      <q-btn flat label="OK" color="primary" type="submit" @click="addRow" style="invisible: hidden"></q-btn>
                    </q-card-actions>
                  </q-card>
                </q-dialog>
              </div>

            </template> -->


            <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="id_vh" id="inputName" :props="props">
                    <q-item :to="props.row.lien" class="itemsNoHover" id="inner2">
                      {{ props.row.label }}
                    <!-- <q-popup-edit v-model="props.row.name">
                      <q-input v-model="props.row.name" dense autofocus counter ></q-input>
                    </q-popup-edit> -->
                    </q-item>
                  </q-td>
                  <q-td v-model="validate" id="inputName" key="state" :props="props">
                      <q-toggle
                      v-model="props.selected"
                      checked-icon="mdi-check"
                      color="green"
                      unchecked-icon="mdi-close"
                      size="lg"
                      disable>
                      </q-toggle>
                  </q-td>
                  <q-td key="soc_fixe" :props="props">
                    <q-item :to="props.row.lien" class="itemsNoHover" id="inner">
                      {{ props.row.soc_fixe }}
                    </q-item>
                  </q-td>
                  <q-td key="soc_mobile" :props="props">
                    <q-item :to="props.row.lien" class="itemsNoHover" id="inner">
                      {{ props.row.soc_mobile }}
                    </q-item>
                  </q-td>
                  <q-td key="km" :props="props">
                    <q-item :to="props.row.lien" class="itemsNoHover" id="inner">
                      {{ props.row.km }}
                    </q-item>
                  </q-td>
                  <q-td key="Autonomie" :props="props">
                    <q-item :to="props.row.lien" class="itemsNoHover" id="inner">
                      {{ props.row.Autonomie }}
                    <!-- <q-popup-edit v-model="props.row.notif">
                      <q-input dense autofocus counter v-model="props.row.notif"></q-input>
                    </q-popup-edit> -->
                    </q-item>
                  </q-td>
                  <q-td key="status" :props="props">

            <!-- ========================================================SAME====================================================================================== -->
                    <q-select v-if="props.row.name == 'midipile1'"
                    v-model="model"
                    outlined
                    dense
                    emit-value
                    map-options
                    :options="options"
                    style="min-width: 150px"

                    >

                      <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                        <q-item v-bind="itemProps">
                          <q-item-section>
                            <q-item-label v-html="opt.label" />
                          </q-item-section>
                          <q-item-section side>
                            <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                          </q-item-section>
                        </q-item>
                      </template>
                    </q-select>

                    <q-select v-if="props.row.name == 'midipile2'"
                    v-model="model2"
                    outlined
                    dense
                    emit-value
                    map-options
                    :options="options"
                    style="min-width: 150px; text-align: center"

                    >

                      <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                        <q-item v-bind="itemProps">
                          <q-item-section>
                            <q-item-label v-html="opt.label" />
                          </q-item-section>
                          <q-item-section side>
                            <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                          </q-item-section>
                        </q-item>
                      </template>
                    </q-select>


                    <q-select v-if="props.row.name == 'midipile3'"
                    v-model="model3"
                    outlined
                    dense
                    emit-value
                    map-options
                    :options="options"
                    style="min-width: 150px;"

                    >

                      <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                        <q-item v-bind="itemProps">
                          <q-item-section>
                            <q-item-label v-html="opt.label" />
                          </q-item-section>
                          <q-item-section side>
                            <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                          </q-item-section>
                        </q-item>
                      </template>
                    </q-select>


                    <q-select v-if="props.row.name == 'midipile4'"
                    v-model="model4"
                    outlined
                    dense
                    emit-value
                    map-options
                    :options="options"
                    style="min-width: 150px"

                    >

                      <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                        <q-item v-bind="itemProps">
                          <q-item-section>
                            <q-item-label v-html="opt.label" />
                          </q-item-section>
                          <q-item-section side>
                            <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                          </q-item-section>
                        </q-item>
                      </template>
                    </q-select>


                    <q-select v-if="props.row.name == 'midipile5'"
                    v-model="model5"
                    outlined
                    dense
                    emit-value
                    map-options
                    :options="options"
                    style="min-width: 150px;"
                    >   <!-- v-bind:style="props.options.value != 1 ? {'background-color': 'green'} : {}" -->

                      <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
                        <q-item v-bind="itemProps">
                          <q-item-section>
                            <q-item-label v-html="opt.label" />
                          </q-item-section>
                          <q-item-section side>
                            <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                          </q-item-section>
                        </q-item>
                      </template>
                    </q-select>
            <!-- ============================================================================================================================================== -->
                  </q-td>
                </q-tr>
              </template>
          </q-table>
        </div>
      </div>

  </div>
</template>

<script>
import { defineComponent, ref, watch, onMounted } from 'vue'
import { useQuasar } from 'quasar'

// const stringOptions = [
//   'Marche', 'Problème technique', 'Panne'
// ]

export default defineComponent({
  name: "mesvehiculesTab",
  el: "#q-app",
  setup() {
    const validate = ref(false);
    const $q = useQuasar();
    const inputRef = ref(null);

    watch(validate, (validate) => {
      // console.log('validate', validate);
      $q.localStorage.set("validate", validate )
    })

    onMounted(() => {
      const validateIsActive = $q.localStorage.getItem("validate")
      if(validateIsActive){
        validate.value = true;
      }
    })

    return {
      validate,
      model: ref([]),
      model2: ref([]),
      model3: ref([]),
      model4: ref([]),
      model5: ref([]),
      inputRef,



      options: [
        {
          name: 'option1',
          label: 'Marche',
          value: '1',

        },
        {
          name: 'option2',
          label: 'Assistance',
          value: '2'
        },
        {
          name: 'option3',
          label: 'Panne',
          value: '3'
        }
      ],

      reset() {
        inputRef.value.resetValidation()
      },
    }
  },

  methods: {
    close() {
      this.show_dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    }
  },
  data() {
    return {
      selected: ref([]),
      accepted: ref([]),
      show_dialog: false,
      editedIndex: -1,
      editedItem: {
        name: "",
        notif: "",
      },
      defaultItem: {
        name: "",
        notif: "",
      },
      columns: [
        {
          name: "id_vh",
          required: true,
          label: "Nom du véhicule",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true,
          align: "left"
        },
        {
          name: "state",
          label: "Etat",
          field: "state",
          align: "center"
        },
        {
          name: "soc_fixe",
          label: "Batterie fixe",
          field: "soc_fixe",
          sortable: true,
          align: "center"
        },
        {
          name: "soc_mobile",
          label: "Batterie mobile",
          field: "soc_mobile",
          sortable: true,
          align: "center"
        },
        // {
        //   name: "Psolar",
        //   label: "Ensoleillement",
        //   field: "psolar",
        //   sortable: true,
        //   align: "center"
        // },
        {
          name: "km",
          label: "Kilométrage",
          field: "kilométrage",
          sortable: true,
          align: "center"
        },
        {
          name: "Autonomie",
          label: "Autonomie",
          field: "Autonomie",
          sortable: true,
          align: "center"
        },
        {
          name: "status",
          label: "Status",
          field: "status",
          sortable: true,
          align: "center"
        },

        // {
        //   name: "actions",
        //   label: "Actions",
        //   field: "actions",
        //   align: "center"
        // }
      ],
      data: [
        {
          name: "midipile1",
          label: "Midipile 01",
          soc_fixe: "90%",
          soc_mobile: "46%",
          // Psolar: "light_mode",
          Autonomie: "125 km",
          km: "200km",
          lien: "/midipile01",
          align: "center"
        },
        {
          name: "midipile2",
          label: "Midipile 02",
          soc_fixe: "70%",
          soc_mobile: "50%",
          // Psolar: "light_mode",
          Autonomie: "140 km",
          km: "150km",
          lien: "/midipile02",
          align: "center"
        },
        {
          name: "midipile3",
          label: "Midipile 03",
          soc_fixe: "88%",
          soc_mobile: "60%",
          // Psolar: "light_mode",
          Autonomie: "160 km",
          km: "130km",
          lien: "/midipile03",
          align: "center"
        },
        {
          name: "midipile4",
          label: "Midipile 04",
          soc_fixe: "90%",
          soc_mobile: "70%",
          // Psolar: "light_mode",
          Autonomie: "230 km",
          km: "120km",
          lien: "/midipile04",
          align: "center"
        },
        {
          name: "midipile5",
          label: "Midipile 05",
          soc_fixe: "90%",
          soc_mobile: "90%",
          // Psolar: "light_mode",
          Autonomie: "250 km",
          km: "180km",
          lien: "/midipile05",
          align: "center"
        },
      ],
    };
  }
})
</script>

<style scoped>
.my-card {
  width: 90%;
  max-width: 400px;
}

/* .q-item .q-focus-helper {
    display: none !important;
} */

#inner {
  display: table;
  margin: 0 auto;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 14px;
}

#inner2 {
  display: table;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 14px;
}

:deep(.itemsNoHover .q-focus-helper) {
  display: none;
}

</style>
