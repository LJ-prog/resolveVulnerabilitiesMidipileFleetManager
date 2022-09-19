<!-- Brouillon, page non utilisée -->
<template>

  <q-page padding>
    <q-card>
    <q-item>
      <h4 style="padding-left:3%"> Créer une alerte </h4>
    </q-item>
    <!-- QField -->
    <!-- QInput, QSelect, QFile -->
    <q-card class="q-mb-xl" style="max-width: 380px">

      <q-card-section>
        <q-input
          :maxlenght="5"
          v-model="text"
          label="email"
          clearable
          clear-icon="close"

        />
      </q-card-section>
    </q-card>

    <q-card class="q-mb-xl" style="max-width: 380px">

      <q-card-section>
        <q-select
          :options="['Géofencing', 'Mainteannce', 'Etat Batterie']"
          label="Catégorie"
      />

      </q-card-section>
    </q-card>

    <q-card class="q-mb-xl" style="max-width: 380px">

      <q-card-section class="q-gutter-md row items-start">
        <q-file
        v-model="files"
        label="Pick files"
        filled
        counter
        :counter-label="counterLabelFn"
        max-files="3"
        multiple
        style="width: 380px;"
        >
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>
      </q-card-section>
    </q-card>

    <q-card class="q-mb-xl" style="max-width: 380px;">

      <q-card-section>
        <q-input filled v-model="date">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-card-section>
    </q-card>

    <!-- <pre>{{ $data }} </pre> -->
    </q-card>
  </q-page>

</template>

<script>
import { ref } from 'vue'
export default {

  data() {
    return {
      text: null,
      date: ref('29/04/2022 18:01'),




      file: null
    }
  }
}
</script>
