<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="/statics/images/M1.JPG">       
      <q-card-actions>
          <q-btn flat
             label="Midipile 01"
             to="/midipile01"
          />
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <img src="/statics/images/M2.JPG">       
      <q-card-actions>
          <q-btn flat
             label="Midipile 02"
             to="/midipile02"
          />
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <img src="/statics/images/M3.JPG">       
      <q-card-actions>
          <q-btn flat
             label="Midipile 03"
             to="/midipile03"
          />
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <img src="/statics/images/M4.JPG">       
      <q-card-actions>
          <q-btn flat
             label="Midipile 04"
             to="/midipile04"
          />
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <img src="/statics/images/M5.JPG">       
      <q-card-actions>
          <q-btn flat
             label="Midipile 05"
             to="/midipile05"
          />
      </q-card-actions>
    </q-card>

  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MesVehicules'
})
</script>

<style lang="sass" scoped>
.my-card
  width: 80%
  max-width: 400px

</style>
