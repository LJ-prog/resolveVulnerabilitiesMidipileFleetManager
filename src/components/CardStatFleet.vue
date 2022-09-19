<template>

<q-card class="container" v-bind:style="$q.screen.lt.sm ? {'width': '70px', 'height': '40px'} : {'width': '150px', 'height': '90px'}">
  <q-card-section class="vertical-center">
    {{$props.datadef}}
  </q-card-section>
  <q-icon class="absolute all-pointer-events" size="15px" name="info" style="top: 4px; left: 50px;" align="right" v-if="$q.platform.is.mobile" @click="setShow">
    <div>
    <q-tooltip class="bg-primary" v-model="showing" style="max-width: 130px" align="center">
      <div style="max-width: 130px">
      {{$props.infodef}}
      </div>
    </q-tooltip>
    </div>
  </q-icon>
  <q-icon class="absolute all-pointer-events" size="20px" name="info" style="top: 8px; left: 120px" align="right" v-if="$q.platform.is.desktop">
    <q-tooltip class="bg-primary">
      {{$props.infodef}}
      <!-- (<q-icon name="keyboard_arrow_down"/>) -->
    </q-tooltip>

  </q-icon>
</q-card>

</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'CardStatFleet',
  props:{
    datadef: {
      default: 1
    },
    infodef: {
      default: ""
    }
  },
  setup() {
    return {
      showing: ref(false)
    }
  },
  data () {
    return {
      data : this.datadef,

    }
  },
  methods: {
    setShow() {
      this.showing = true;
      // msg.style.display = "revert";
      setTimeout(() => {
        this.showing = false;
        // // 👇️ removes element from DOM
        // pop.style.display = "none";
      }, 1000);

    },
  }
})
</script>

<style>

.container {
  position: relative;
  text-align: center;
}

.vertical-center {
  margin: 0;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
}

</style>
