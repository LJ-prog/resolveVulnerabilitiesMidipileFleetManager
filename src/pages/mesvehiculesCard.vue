<template>
  <div class="q-pa-md row items-start q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '60px' } : {}">
    <q-card class="my-card" id="containerBorder">
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
  width: 90%
  max-width: 400px

</style>
