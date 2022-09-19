<template>
  <div class="map">
  <l-map
    ref="map"
    :style="stylemap"
    :zoom="zoommap"
    :center="centermap"
    :use-global-leaflet="true"
    @ready="mapReady"
    class="responsive"
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
        />

        <l-popup>
          <q-btn
            :color="marker.popupcolor"
            :icon="marker.popupicon"
            :to="marker.popuptarget">
              <center>
              <b style="margin-left: 10px; margin-bottom: 0px; margin-top: 0px">{{ marker.popuptitle}}</b>
              <p class="status" style="font-size: 12px; margin-bottom: 0px; margin-top: 0px"> {{ marker.popupstatus}}</p>
              </center>
              <p class ="time" style="font-size: 11px">
                <span>
                  <q-icon color="white" name="mdi-clock"/>
                  {{marker.popuptimecount}}
                </span>

                <span>
                  <q-icon color="white" name="mdi-battery-medium"/>
                  {{marker.popupautonomy}}
                </span>
              </p>
              <p class ="address" style="font-size: 12px"> {{marker.popupaddress}} </p>
          </q-btn>
        </l-popup>

      </l-marker>

    </template>

  </l-map>
  </div>
</template>

<script>

import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "@vue-leaflet/vue-leaflet";
import L from "leaflet";
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup,
  },
  props:{
    stylemap:{
      default: "height:68vh"
    },
    zoommap:{
      default: 14
    },
    centermap:{
      default: [45.648597, 0.171102]
    },
    markers:{
      default:[
        {
          id:"Midipile 01",
          coordinates:[45.63059,0.11664],
          popupaddress: "70 Rue Jean Doucet, 16470 Saint-Michel",
          popuptimecount: "il y a 5 min",
          iconurl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png`,
          popupcolor: "green",
          popupicon: "",
          popuptarget: "/midipile01",
          popuptitle: "Midipile 01",
          popupstatus: "Actif",
          popupautonomy: "100km",
        },
        {
          id:"Midipile 02",
          coordinates:[45.648597, 0.171102],
          popupaddress: "88 Rue Monlogis, 16000 Angoulême",
          popuptimecount: "il y a 5 min",
          iconurl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png`,
          popupcolor: "green",
          popupicon: "",
          popuptarget: "/midipile02",
          popuptitle: "Midipile 02",
          popupstatus: "Actif",
          popupautonomy: "200km",
        },
        {
          id:"Midipile 03",
          coordinates:[45.643500, 0.150163],
          popupaddress: "210 Rue de Clerac À Sillac, 16000 Angoulême",
          popuptimecount: "il y a 5 min",
          iconurl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png`,
          popupcolor: "green",
          popupicon: "",
          popuptarget: "/midipile03",
          popuptitle: "Midipile 03",
          popupstatus: "Actif",
          popupautonomy: "270km",
        },
        {
          id:"Midipile 04",
          coordinates:[45.64059, 0.163642],
          popupaddress: "Rue de Fontgrave, 16000 Angoulême",
          popuptimecount: "il y a 5 min",
          iconurl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png`,
          popupcolor: "orange",
          popupicon: "warning",
          popuptarget: "/midipile04",
          popuptitle: "Midipile 04",
          popupstatus: "Actif",
          popupautonomy: "50km",
        },
        {
          id:"Midipile 05",
          coordinates:[ 45.664345, 0.164602],
          popupaddress: "Rue de l'Égalité, 16160 Gond-Pontouvre",
          popuptimecount: "il y a 5 min",
          iconurl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png`,
          popupcolor: "red",
          popupicon: "warning",
          popuptarget: "/midipile05",
          popuptitle: "Midipile 05",
          popupstatus: "Inactif",
          popupautonomy: "120km",
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
  methods: {
    mapReady() {
      const map = this.$refs.map.leafletObject;
      const fullscreenControl = new L.Control.Fullscreen({position: "topright",});
      fullscreenControl.addTo(map);
    },
  },

  computed: {
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  }
};
</script>

<style scoped>

.time {
  /* position: absolute;
  left: 220px;
  top: 0px; */
  margin-top: 0px;
  margin-bottom : 0px;
  text-transform: lowercase;
  margin-left: auto;
}

.status {
  margin-left: auto;
}

/* .status::before {
  content: "\a";
  white-space: pre;
} */

.address {
  margin: 0px;
}

p span {
  display: block;
}

i.q-icon.text-white.mdi.mdi-battery-medium:before {
  font-size: 15px;
  margin-bottom: 4px;
}

i.q-icon.text-white.mdi.mdi-clock:before {
  font-size: 15px;
  margin-bottom: 2px;
}


</style>
