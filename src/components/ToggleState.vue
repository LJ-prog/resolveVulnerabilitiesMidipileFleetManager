<template>
  <q-toggle
    v-model="valid"
    checked-icon="mdi-check"
    color="green"
    unchecked-icon="mdi-close"
    size="lg"
  />
</template>

<script>
import { defineComponent, ref, watch, onMounted } from 'vue'
import { useQuasar } from 'quasar'


export default defineComponent({
  setup() {
    const valid = ref(false)
    const $q = useQuasar()

    watch(valid, (valid) => {
      // console.log('valid', valid);
      $q.localStorage.set('valid', valid )
    })

    onMounted(() => {
      const validIsActive = $q.localStorage.getItem('valid')
      if(validIsActive){
        valid.value = true;
      }
    })

    return {
      valid
    }
  },
})
</script>
