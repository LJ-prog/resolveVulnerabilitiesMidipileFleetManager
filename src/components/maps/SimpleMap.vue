<template>
  <l-map 
    :style="stylemap"
    :zoom="zoommap"
    :center="centermap"
  >
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    ></l-tile-layer>
  </l-map>
</template>

<script>

import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  props:{
    stylemap:{
      default: "height:35vh"
    },
    zoommap:{
      default: 14
    },
    centermap:{
      default: [45.63059,0.11664]
    }
  }, 
  data() {
    return {
      
    };
  },
};
</script>