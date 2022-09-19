<template>
  <table-actu class="col-6"></table-actu>
</template>

<script>
import TableActu from 'src/components/tables/TableActu.vue';
import {defineComponent, defineAsyncComponent} from 'vue';

export default defineComponent({
  name: "Tables",
  components: {
    TableActu: defineAsyncComponent(() => import('components/tables/TableActu'))
  },
})
</script>