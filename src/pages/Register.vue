<template>

  <q-page padding>

    <div class="q-pa-md" align="right" id="toggleSpace">
      <toggle-dark-mode/>
    </div>

    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h5 text-center"> S'inscrire </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="Nom d'utilisateur"
          v-model="form.username"
          lazy-rules
          :rules="[val => (val && val.length > 0) || `Nom d'utilisateur requis.`]"
        />
        <q-input
          label="Prénom"
          v-model="form.firstname"
          lazy-rules
          :rules="[val => (val && val.length > 0) || `Prénom requis.`]"
        />
        <q-input
          label="Nom"
          v-model="form.lastname"
          lazy-rules
          :rules="[val => (val && val.length > 0) || `Nom de famille requis.`]"
        />

        <q-input
          label="Email"
          v-model="form.email"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Email requis.']"
          type="email"
        />

        <q-input
          label="Mot de passe"
          :type="isPwd ? 'password' : 'text'"
          v-model="form.password"
          lazy-rules
          :rules="[val => !!val || 'Mot de passe requis.', val => val.length >= 8 || 'Utilisez 8 caractères ou plus pour votre mot de passe.']"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-input
          label="Confirmer votre mot de passe"
          :type="isPwdConf ? 'password' : 'text'"
          v-model="form.passwordConfirm"
          lazy-rules
          :rules="[val => val==form.password || 'Les mots de passe ne correspondent pas. Veuillez réessayer.']"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwdConf ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwdConf = !isPwdConf"
            />
          </template>
        </q-input>

        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn
            label="Enregistrer"
            color="primary"
            class="full-width"
            rounded
            type="submit"
            style="color: inherit !important"
          />

          <q-btn
            label="Retour"
            color="inherit"
            class="full-width"
            rounded
            flat
            :to="{ name: 'login' }"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import useNotify from 'src/composables/UseNotify'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageRegister',

  components: {
    ToggleDarkMode: defineAsyncComponent(() => import ('components/ToggleDarkMode.vue')),
  },

  setup () {
    const router = useRouter()
    const { register } = useAuthUser()
    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      passwordConfirm: ''
    })

    const handleRegister = async () => {
      try {
        await register(form.value)
        notifySuccess()
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email}
        })
      } catch (error) {
        notifyError(error.message)
      }
    }

    return {
      form,
      handleRegister,
      isPwd: ref(true),
      isPwdConf: ref(true)
    }
  },

  // methods: {
  //   isValidEmail (val) {
  //   const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  //   return emailPattern.test(val) || 'Invalid email';
  // }
  // }
})
</script>

<style scoped>

#toggleSpace {
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
}

</style>
