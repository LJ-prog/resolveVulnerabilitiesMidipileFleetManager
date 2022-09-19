<template>
  <table-trip-stat class="col-6"></table-trip-stat>
</template>

<script>
import {defineComponent, defineAsyncComponent} from 'vue';

export default defineComponent({
  name: "Tables",
  components: {
    TableTripStat: defineAsyncComponent(() => import('components/tables/TableTripStat')),
  },
})
</script>