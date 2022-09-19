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

    <l-polyline
      :lat-lngs="latlon"
      :color="colorline"
    />
  </l-map>
</template>

<script>

import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LPolyline } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LPolyline,
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
    },
    latlon:{
      default: [
        [45.63059, 0.11664],
        [45.63064, 0.11684],
        [45.63069, 0.11704],
        [45.63074, 0.11724],
        [45.63079, 0.11744],
        [45.63084, 0.11764],
      ]
    },
    colorline:{
      default: "red"
    }
  }, 
  data() {
    return {
      
    };
  },
};
</script>