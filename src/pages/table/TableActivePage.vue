<template>
  <table-active class="col-6"></table-active>
</template>

<script>
import TableActive from 'src/components/tables/TableActive.vue';
import {defineComponent, defineAsyncComponent} from 'vue';

export default defineComponent({
  name: "Tables",
  components: {
    TableActive: defineAsyncComponent(() => import('components/tables/TableActive'))
  },
})
</script>