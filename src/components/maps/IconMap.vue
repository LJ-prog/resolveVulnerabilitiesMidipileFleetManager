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

    <template
      v-for="marker in markers"
      :key="marker.id">

      <l-marker 
        :lat-lng="marker.coordinates"
      >

        <l-icon
          :icon-url="marker.iconurl"
          :icon-size="iconSize"
        />

      </l-marker>

    </template>

  </l-map>
</template>

<script>

import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
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
    markers:{
      default:[
        {
          id:"Midipile 01",
          coordinates:[45.63059,0.11664],
          iconurl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png`,
        },
        {
          id:"Midipile 02",
          coordinates:[45.64059,0.12064],
          iconurl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png`,
        }
      ]
    }
  },
  data() {
    return {
      iconWidth: 90,
      iconHeight: 55,
    };
  },
  computed: {
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  }
};
</script>