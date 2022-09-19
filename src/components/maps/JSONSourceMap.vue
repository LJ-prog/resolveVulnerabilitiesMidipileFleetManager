<template>

  <l-map
    v-if="loaded"
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
      :lat-lngs="polypath"
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
      default: "height:55vh"
    },
    zoommap:{
      default: 14
    },
    colorline:{
      default: "red"
    },
    basepath:{
      default: "bdd_json"
    },
    selectorname:{
      default: "midipile01"
    },
    filename:{
      default: "1110101107_route14.json"
    }
  }, 
  data() {
    return {
      polypath: [],
      centermap: [45.63948,0.19255],
      loaded: false,
    };
  },
  methods: {
    getdatafromjson(basepath, selectorname, filename) {
      const jsondatapath = basepath + '/' + selectorname + '/' + filename;

      console.log('JSON path: ' + jsondatapath);

      try {
        fetch(jsondatapath)
          .then(response => response.json())
          .then(result => this.extractpathandsetcenter(result));
      } catch (e) {
        console.log('Error fetch JSON: ' + e);
        return;
      }
    },
    extractpathandsetcenter(jsondata) {
      console.log('In extractpath');
      console.log(jsondata);

      if (jsondata != undefined) {
        this.centermap = [ jsondata.lat[0], jsondata.lon[0]];
        console.log('New center: ' + this.centermap);

        jsondata.temps.forEach((item, itemindex) => {
          if ( jsondata.lat[itemindex] != undefined && jsondata.lon[itemindex] != undefined ) {
            this.polypath[itemindex] =[ jsondata.lat[itemindex] , jsondata.lon[itemindex]];
          }
        });
        this.loaded = true
        console.log('Load map')
      }
    }
  },
  created() {
    this.getdatafromjson(this.basepath, this.selectorname, this.filename)
  }  
};
</script>