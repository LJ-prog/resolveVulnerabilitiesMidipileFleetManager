<template>
  <q-page style="margin-bottom: 25px">
    <div style="justify-content:  center" class="q-pa-md row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '66px' } : {}">
      <div class="col-xs-12 col-sm-5 col-md-3" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
        <q-card class="my-card" id="containerBorder">
          <q-card-section>
            <q-img src="statics/images/AccueilMidipile.jpg"></q-img>
          </q-card-section>

          <q-card-section>
            <div class="text-h6">Synthèse des coûts à l'usage</div>
            <div class="text-subtitle2">par Midipile Mobility</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-3" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
        <q-card class="my-card" id="containerBorder">
          <q-card-section>
            <q-img src="statics/images/renouveau.jpg"></q-img>
          </q-card-section>

          <q-card-section>
            <div class="text-h6">Faire évoluer ma flotte</div>
            <div class="text-subtitle2">par Midipile Mobility</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-3" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
        <q-card class="my-card" id="containerBorder">
          <q-card-section>
            <q-img src="statics/images/carte.JPG"></q-img>
          </q-card-section>

          <q-card-section>
            <div class="text-h6">Mes centres de maintenance</div>
            <div class="text-subtitle2">par Midipile Mobility</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-3" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
        <q-card class="my-card" id="containerBorder">
          <q-card-section>
            <q-img src="statics/images/troubleshooting.jpg"></q-img>
          </q-card-section>

          <q-card-section>
            <div class="text-h6">Mon guide troubleshooting</div>
            <div class="text-subtitle2">par Midipile Mobility</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-3" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
        <q-card class="my-card" id="containerBorder">
          <q-card-section>
            <q-img src="statics/images/Rechange.jpeg"></q-img>
          </q-card-section>

          <q-card-section>
            <div class="text-h6">Catalogue pièce de rechange</div>
            <div class="text-subtitle2">par Midipile Mobility</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-3" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
        <q-card class="my-card" id="containerBorder">
          <q-card-section>
            <q-img src="statics/images/assurance.jpg"></q-img>
          </q-card-section>

          <q-card-section>
            <div class="text-h6">Mes contrats d'assurance</div>
            <div class="text-subtitle2">par Midipile Mobility</div>
          </q-card-section>
        </q-card>
      </div>

    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Administration'
})
</script>

<style scoped>

/* #centered-element{
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
    width: 2020px;
} */



</style>
