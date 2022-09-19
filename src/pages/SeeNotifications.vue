<template>

  <q-page padding style="min-height: 730px;">
    <q-card style="width: 100%" v-bind:style="$q.screen.lt.sm ? {'margin-top': '30%', 'margin-bottom' : '20px'} : {}">
      <div class="row justify-center" v-bind:style="$q.screen.lt.sm ? {'padding-top': '0px'} : {'padding-top' : '0px'}">
        <h4 v-bind:style="$q.screen.lt.sm ? {'margin': '5%'} : {}" style="text-align:center"> Mes alertes </h4>
      </div>
      <!-- <q-item>
        <q-item-section class="col">
          <div class="flex flex-center"> -->
            <!-- <q-btn style="width:200px;" rounded color="primary" label="Ajouter une alerte" @click="show_dialog = true"/> -->
          <!-- </div>
        </q-item-section> -->

      <!-- <q-item-section class="col">
        <div class="flex flex-center">
        <q-btn style="width:200px;"  rounded color="primary" label="Supprimer une alerte" to="/addalerts"/>
        </div>
      </q-item-section>
      <q-item-section class="col">
        <div class="flex flex-center">
        <q-btn style="width:200px;"  rounded color="primary" label="Modifier une alerte" to="/addalerts"/>
        </div>
      </q-item-section> -->
      <!-- </q-item> -->
      <q-separator/>

<!--     <q-card-section>
      <div class="text-h6 text-grey-8">
        Suivi des véhicules Midipile
      </div>
    </q-card-section>
    <q-separator color="white"/>
 -->
      <div id="q-app" style="padding-top: 2%; padding-bottom: 2%">
        <div class="q-pa-sm q-gutter-sm">
          <q-table :rows="data" :columns="columns" row-key="name" selection="simple" v-model:selected="selected" id="borderTable">

            <template v-slot:top>
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

            </template>


            <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="id_vh" id="inputName" :props="props">
                    <q-item :to="props.row.lien" class="itemsNoHover" id="inner2">
                      {{ props.row.name }}
                    </q-item>
                    <!-- <q-popup-edit v-model="props.row.name">
                      <q-input v-model="props.row.name" dense autofocus counter ></q-input>
                    </q-popup-edit> -->
                  </q-td>
                  <q-td key="notif" :props="props">
                    <q-item :to="props.row.lien" class="itemsNoHover" id="inner">
                      {{ props.row.notif }}
                    </q-item>
                    <!-- <q-popup-edit v-model="props.row.notif">
                      <q-input dense autofocus counter v-model="props.row.notif"></q-input>
                    </q-popup-edit> -->
                  </q-td>
                  <q-td v-model="validate" id="inputName" key="state" :props="props">
                    <q-toggle
                    v-model="props.selected"
                    checked-icon="mdi-check"
                    color="green"
                    unchecked-icon="mdi-close"
                    size="lg">
                    </q-toggle>
                  </q-td>
                  <q-td key="actions" :props="props">
                    <q-item :to="props.row.lien" class="itemsNoHover" id="inner">
                      <q-btn flat round color="primary" icon="mdi-square-edit-outline"  @click="editItem(props.row)" style="margin-right: 5px;"></q-btn>
                      <q-btn flat round color="primary" icon="mdi-delete"   @click="deleteItem(props.row)"></q-btn>
                    </q-item>
                  </q-td>
                </q-tr>
              </template>
          </q-table>
        </div>
      </div>






      <!-- <q-item clickable style="padding-top: 2%;" v-ripple>
        <q-item-section avatar thumbnail>
          <q-icon style="left: 40%" color="primary" name="mdi-bell-ring"/>
        </q-item-section>
        <q-item-section class="row justify-center">
          <q-item-label class="truncateToolongText" title="Le véhicule n°15 vient de démarrer. Il part vers le centre d'Angoulême.">Le véhicule n°15 vient de démarrer. Il part vers le centre d'Angoulême.</q-item-label>
          <q-item-label caption lines="1"> Catégorie : Géofencing</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption>Il y a 5 min</q-item-label>
          <q-icon name="mdi-clock" color="grey" />
        </q-item-section>
      </q-item>
      <q-separator spaced inset="item-thumbnail" style="margin-left:9.3%"/>

      <q-item clickable v-ripple>
        <q-item-section avatar thumbnail>
          <q-icon style="left: 40%" color="primary" name="mdi-bell-ring"/>
        </q-item-section>
        <q-item-section class="row justify-center">
          <q-item-label class="truncateToolongText" title="Le véhicule N°3 est en mouvement.">Le véhicule N°3 est en mouvement.</q-item-label>
          <q-item-label caption lines="1"> Catégorie : Géofencing</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption>Il y a 5 min</q-item-label>
          <q-icon name="mdi-clock" color="grey" />
        </q-item-section>
      </q-item>
      <q-separator spaced inset="item-thumbnail" style="margin-left:9.3%"/>

      <q-item clickable v-ripple>
        <q-item-section avatar thumbnail>
          <q-icon style="left: 40%" color="primary" name="mdi-bell-ring"/>
        </q-item-section>
        <q-item-section class="row justify-center">
          <q-item-label class="truncateToolongText" title="Le D'click N°6 a une anomalie batterie. Un technicien se rend sur place.">Le D'click N°6 a une anomalie batterie. Un technicien se rend sur place.</q-item-label>
          <q-item-label caption lines="1"> Catégorie : Maintenance</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption>Il y a 5 min</q-item-label>
          <q-icon name="img:statics/wrench-clock.svg" class="filter-grey"/>
        </q-item-section>
      </q-item> -->

    </q-card>

  </q-page>
</template>

<script>
import { defineComponent, ref, watch, onMounted } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: "SeeNotifications",
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
      model: ref(''),
      inputRef,

      reset() {
        inputRef.value.resetValidation()
      }
    }
  },
  // mounted() {
  //   window.onload = function()
  //   {
  //   // If sessionStorage is storing default values (ex. name), exit the function and do not restore data
  //     if (sessionStorage.getItem('name') == "name") {
  //         return;
  //     }

  //     // If values are not blank, restore them to the fields
  //     var name = sessionStorage.getItem('name');
  //     if (name !== null) $('#inputName').val(name);

  //     var email = sessionStorage.getItem('email');
  //     if (email !== null) $('#inputEmail').val(email);

  //     var subject= sessionStorage.getItem('subject');
  //     if (subject!== null) $('#inputSubject').val(subject);

  //     var message= sessionStorage.getItem('message');
  //     if (message!== null) $('#inputMessage').val(message);
  //   }

  //   // Before refreshing the page, save the form data to sessionStorage
  //   window.onbeforeunload = function() {
  //       sessionStorage.setItem("name", $('#inputName').val());
  //       sessionStorage.setItem("email", $('#inputEmail').val());
  //       sessionStorage.setItem("subject", $('#inputSubject').val());
  //       sessionStorage.setItem("message", $('#inputMessage').val());
  //   }
  // },

  methods: {
    // toggle(){
    //   if($('#toggleState').is(':checked') == true){
    //     localStorage.setItem("#toggleState", "false");
    //     localStorage.getItem("#toggleState");
    //   } else {
    //     localStorage.setItem("#toggleState", "true");
    //     localStorage.getItem("#toggleState");
    //   }
    // },
    addRow() {
      if (this.editedIndex > -1) {
        Object.assign(this.data[this.editedIndex], this.editedItem);
      }
      else if (this.editedItem.name !== "" && this.editedItem.notif !== "")
      {
        this.data.push(this.editedItem);
      }
      else if (this.editedItem.name !== "" || this.editedItem.notif !== "")
      {
        confirm("Êtes-vous sûr de vouloir valider en laissant un champ vide?") &&
        this.data.push(this.editedItem);
      }
      else if(this.editedItem.name === "" && this.editedItem.notif === "")
      {
        confirm("Êtes-vous sûr de vouloir valider en ayant les champs vides ?") &&
        this.data.push(this.editedItem);
      }
      this.close()
    },
    deleteItem(item) {
      const index = this.data.indexOf(item);
      confirm("Êtes-vous sûr de vouloir supprimer cette alerte ?") &&
        this.data.splice(index, 1);
      console.log('====>', this.data)
      // For save data when we delete a row but not good for the moment.
      localStorage.setItem('data', JSON.stringify(this.data))
      this.data = JSON.parse(localStorage.getItem('data'));
      // const dt = localStorage.getItem('data');
      // if(dt !== null)
      // {
      //   this.dt = JSON.parse(dt);
      //   console.log('data', this.dt);
      // }

      // sessionStorage.setItem('items', dt)
      // const otherdt  = sessionStorage.getItem('items')
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.show_dialog = true;
    },
    close () {
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
          name: "notif",
          label: "Notifications",
          field: "notif",
          sortable: true,
          align: "center"
        },
        {
          name: "state",
          label: "Etat",
          field: "state",
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
          name: "Midipile 01",
          notif: "Le véhicule est arrêté dans une zone inhabituel.",
          lien: "/midipile01",
        },
        {
          name: "Midipile 02",
          notif: "Le véhicule a une erreur critique moteur.",
          lien: "/midipile02",
        },
        {
          name: "Midipile 03",
          notif: "Le véhicule à une erreur critique batterie.",
          lien: "/midipile03",
        },
        {
          name: "Midipile 04",
          notif: "Le véhicule est arrêté sur le bas côté suite à une crevaison.",
          lien: "/midipile04",
        },
        {
          name: "Midipile 05",
          notif: "Le véhicule est immobile suite à une erreur critique sur la GAP.",
          lien: "/midipile05",
        },
        // {
        //   name: "Midipile 06",
        //   notif: "Le pourcentage batterie du véhicule a atteint un seuil critique."
        // },
        // {
        //   name: "Midipile 07",
        //   notif: "Le moteur droit s'est arrêté momentanément !"
        // },
        // {
        //   name: "Midipile 08",
        //   notif: "La recharge batterie rencontre un problème."
        // },
        // {
        //   name: "Midipile 09",
        //   notif: "Les panneaux solaires dysfonctionnent."
        // },
        // {
        //   name: "Midipile 10",
        //   notif: "Le véhicule censé être arrêté est en déplacement."
        // }
      ],
    };
  }
})
</script>

<style scoped>


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
