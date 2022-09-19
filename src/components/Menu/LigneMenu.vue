<template>
  <q-breadcrumbs>
    <template
      v-for="menudef in menudefs" :key="menudef.label">
        <q-breadcrumbs-el 
          :label="menudef.label"
          :icon="menudef.icon"
          :to="menudef.to"
        />
    </template>
  </q-breadcrumbs>
</template>

<script>
export default {
  name: 'LigneMenu',
  props:{
    menudefs:{
      default:[
        {
          label:"Tableau de bord",
          icon:"dashboard",
          to:"/dashboardjson"
        },
        {
          label:"Mes véhicules",
          icon:"bike_scooter",
          to:"/mesvehicules"
        },
        {
          label:"Administration",
          icon:"manage_accounts",
          to:"/Administration"
        },
        {
          label:"",
          icon:"",
          to:""
        },
      ]
    }
  },
  data () {
    return {}
  }
}
</script>

