<template>
  <div class="q-pa-md" align="right" style="padding-bottom: 0px">
    <toggle-dark-mode/>
  </div>
  <q-page>
    <img src="~assets/waveWhiteMode.png" class="responsive" id="wave" alt="login-wave" v-if="$q.platform.is.desktop">
    <img src="~assets/waveWhiteMode.png" class="responsive" id="waveMobile" alt="login-wave" v-if="$q.platform.is.mobile">
    <div class="row" style="height: 90vh">
      <div class="col-0 col-md-6 flex justify-center content-center" v-if="$q.platform.is.desktop">
        <img src="~assets/dernVisu-transparent.png" class="responsive" alt="login-image" id="vehiculeLg">
      </div>
      <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
          class="col-12 col-md-6 flex content-center">
        <q-card v-bind:style="$q.screen.lt.sm ? {'width': '80%', 'margin-top': '10%', 'margin-bottom': '10%'} : {'width': '50%'}" id="cardLogin">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10" id="avatarBack">
              <q-img src="~assets/LOGO-midipile3.svg" alt="avatar" class="avatar"/>
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="q-pt-lg">
              <div class="row justify-center">
                <h4 class="text-h4 text-uppercase q-my-none text-weight-regular" align="center">Midipile Fleet Manager</h4>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md" @submit.prevent="handleLogin">
              <q-input
                label="Email"
                label-color="white"
                v-model="form.email"
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Email requis.']"
                bottom-slots
                >
              </q-input>
              <q-input
                label="Mot de passe"
                label-color="white"
                :type="isPwd ? 'password' : 'text'"
                v-model="form.password"
                lazy-rules
                :rules="[val => !!val || 'Mot de passe requis.', val => val.length >= 8 || 'Mot de passe de 8 caractères minimum requis.']"
                bottom-slots
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <div>
                <q-btn class="full-width" color="primary"  label="Entrer" type="submit" rounded style="color: inherit !important"></q-btn><!--style="background-color: #6287C3"-->
                <div class="text-center q-mt-sm q-gutter-lg">
                  <router-link id="autoDark" :to="{ name: 'forgot-password'}">Mot de passe oublié ?</router-link><!--target="_blank"-->
                  <router-link id="autoDark" :to="{ name: 'register'}">Créer un compte</router-link> <!--target="_blank"-->
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
        <div class="col-0 col-md-8 flex justify-center content-center" v-if="$q.platform.is.mobile">
          <img src="~assets/dernVisu-transparent.png" class="responsive" alt="login-image" id="vehiculeSm">
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent, ref, onMounted } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import useNotify from 'src/composables/UseNotify'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
export default defineComponent({
  name: 'Login',
//   data () {
//     return {
//       login: {
//         default: {
//           username: '',
//           password: ''
//         },
//         username: 'admin',
//         password: 'midipile16'
//       }
//     }
//   },
//   methods: {
//     ...mapActions('auth', ['doLogin']),
//     async submitForm () {
//       if (this.login.default.username.length == 0 && this.login.default.password.length == 0){
//         $q.notify({
//           type: 'negative',
//           message: "Veuillez rentrer vos identifiants."
//         })
//       }
//       else if(this.login.default.username.length == 0) {
//         $q.notify({
//           type: 'negative',
//           message: "Veuillez rentrer votre nom d'utilisateur."
//         })
//       }
//       else if(this.login.default.password.length == 0) {
//         $q.notify({
//           type: 'negative',
//           message: "Veuillez rentrer votre mot de passe."
//         })
//       }

//       else if (this.login.default.username != this.login.username && this.login.default.password != this.login.password) {
//         $q.notify({
//           type: 'negative',
//           message: "Vos identifiants sont incorrects."
//         })
//       }
//       else if (this.login.default.username == this.login.username && this.login.default.password != this.login.password){
//         $q.notify({
//           type: 'negative',
//           message: "Votre mot de passe est incorrect."
//         })
//       }
//       else if (this.login.default.password == this.login.password && this.login.default.username != this.login.username){
//         $q.notify({
//           type: 'negative',
//           message: "Votre nom d'utilisateur est incorrect."
//         })
//       }

//       // else if (this.login.default.password.length > 0 && this.login.default.username.length > 0 && this.login.default.password != this.login.password) {
//       //   $q.notify({
//       //     type: 'negative',
//       //     message: 'Mot de passe incorrect.'
//       //   })
//       // }
//       // else if (this.login.default.password < 6) {
//       //   $q.notify({
//       //     type: 'negative',
//       //     message: 'Le mot de passe doit comporter 6 caractères ou plus.'
//       //   })
//       // }

//       else {
//         try {
//           await this.doLogin(this.login)
//           const toPath = this.$route.query.to || '/dashboardjson'
//           this.$router.push(toPath)
//         } catch (err) {
//           if (err.response.data.detail) {
//             $q.notify({
//               type: 'negative',
//               message: err.response.data.detail
//             })
//           }
//         }
//       }
//     }
//   },
//   mounted () {
//     $q = useQuasar()
//   }
components: {
    ToggleDarkMode: defineAsyncComponent(() => import ('components/ToggleDarkMode.vue')),
  },

setup () {
    const router = useRouter()

    const { login, isLoggedIn, user } = useAuthUser()

    const { notifyError, notifySuccess } = useNotify()


    const form = ref({
      email: '',
      password: ''
    })

    onMounted(() => {
      if (isLoggedIn) {
        router.push('dashboardevol1')
      }
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        notifySuccess('Connecté avec succès !')
        router.push('dashboardevol1')
      } catch (error) {
      //   if(user) {
      //     notifyError("Confirmer votre email")
      //   }
      //   else {
      //   notifySuccess('Connecté avec succès !')
      //   router.push('dashboardevol1')
      // }
      // notifyError()
        notifyError(error.message)
      }

    }

    return {
      isPwd: ref(true),
      form,
      handleLogin,
      user
    }
  }
})
</script>

<style scoped>
#wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}

/* #wave {
  filter: invert(65%) sepia(54%) saturate(2066%) hue-rotate(192deg) brightness(88%) contrast(107%);
} */

body.body--dark #wave {
  filter: invert(40%) sepia(83%) saturate(3137%) hue-rotate(197deg) brightness(98%) contrast(55%);
}

#waveMobile {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
  /* max-width: 65%; */
}

body.body--dark #waveMobile {
  filter: invert(40%) sepia(83%) saturate(3137%) hue-rotate(197deg) brightness(98%) contrast(55%);
}

.avatar {
  vertical-align: middle;
  width: 80%;
  height: 50%;
  border-radius: 0%;
}

#title {
  font-size: 14px;
}

#cardLogin{
  background-color: #515151;
  border-radius: 5%;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.5);
}

#avatarBack {
  background-color: #515151; /* 333436 */
}

#vehiculeLg {
  max-width: 100%;
}
#vehiculeSm {
  max-width: 60%;
}

#autoDark {
  cursor: pointer;
  text-decoration: underline;
  color: inherit;
}

/* #autoDark:hover {
  text-decoration: underline;
} */

.q-page {
  min-height: auto !important;
}


</style>




