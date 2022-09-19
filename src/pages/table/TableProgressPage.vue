<template>
  <table-progress class="col-6"></table-progress>
</template>

<script>
import {defineComponent, defineAsyncComponent} from 'vue';

export default defineComponent({
  name: "Tables",
  components: {
    TableProgress: defineAsyncComponent(() => import('components/tables/TableProgress')),
  },
})
</script>