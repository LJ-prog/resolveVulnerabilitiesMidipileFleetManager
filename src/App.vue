<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'Midipile Web Services',

//   setup () {
//     const validate = ref(false)
//     const $q = useQuasar()

//     $q.localStorage.set('validate', validate)
//     const value = $q.localStorage.getItem(key)

//     $q.sessionStorage.set(key, value)


//     watch(validate, (validate) => {
//         // console.log('validate', validate);
//         $q.localStorage.set('validate', validate )
//       })

//     onMounted(() => {
//       const validateIsActive = $q.localStorage.getItem('validate')
//       const otherValue = $q.sessionStorage.getItem(key)
//       if(validateIsActive){
//         validate.value = true;
//       }
//     })

//     return {
//       validate
//     }
// }

})
</script>

<style>

/* body {
  background-color: white;
  color: black;
}

.dark-mode {
  background-color: #121212;
  color: white;
} */

#borderTable {
  border:solid 1px #41403E;
  border-radius: 4px;
}

::selection {
  background: var(--q-primary); /*#3390FF; */
}

</style>
