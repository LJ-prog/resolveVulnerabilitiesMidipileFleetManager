<template>

  <div class="q-pa-md" align="right">
    <toggle-dark-mode/>
  </div>

  <!-- <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handlePasswordReset">
      <p class="col-12 text-h5 text-center"> Réinitialiser votre mot de passe </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">

        <q-input
          label="Nouveau mot de passe"
          filled
          :type="isPwd ? 'password' : 'text'"
          v-model="password"
          lazy-rules
          :rules="[val => (val && val.length >= 6) || 'Mot de passe requis']"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn
            label="Valider"
            color="primary"
            class="full-width"
            outline
            rounded
            type="submit"
          />
        </div>
      </div>
    </q-form>
  </q-page> -->

  <q-page padding>
    <div class="row justify-center" style="height: 61vh">
      <!-- <div class="col-0 col-md-6 flex justify-center content-center" v-if="$q.platform.is.desktop">
        <img src="~assets/dernVisu-transparent.png" class="responsive" alt="login-image" id="vehiculeLg">
      </div> -->
      <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
          class="col-12 col-md-3 flex content-center">
        <div v-bind:style="$q.screen.lt.sm ? {'width': '80%', 'margin-bottom': '10%'} : {'width': '100%'}" id="cardLogin" align="center">
          <q-card-section>
              <q-img src="~assets/LOGO-midipile3.svg" alt="avatar" class="avatar" v-if="$q.platform.is.desktop"/>
              <q-img src="~assets/LOGO-midipile3.svg" alt="avatar" class="avatarMb" v-if="$q.platform.is.mobile"/>
          </q-card-section>
          <q-card-section>
            <div class="q-pt-lg" id="btwnImgTitle">
              <div class="row justify-center">
                <h4 class="text-h4 text-uppercase q-my-none text-weight-regular" align="center" id="titleMdp">Réinitialiser votre mot de passe</h4>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md" @submit.prevent="handlePasswordReset">
              <q-input
                label="Nouveau mot de passe"

                :type="isPwd ? 'password' : 'text'"
                v-model="password"
                lazy-rules
                :rules="[val => (val && val.length >= 6) || 'Mot de passe requis']"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <!-- <q-input label="Mot de passe" type="password" v-model="login.default.password">
              </q-input> -->
              <div>
                <q-btn
                  label="Valider"
                  color="primary"
                  class="full-width"
                  rounded
                  type="submit"
                />
              </div>
            </q-form>
          </q-card-section>
        </div>
        <!-- <div class="col-0 col-md-8 flex justify-center content-center" v-if="$q.platform.is.mobile">
          <img src="~assets/dernVisu-transparent.png" class="responsive" alt="login-image" id="vehiculeSm">
        </div> -->
      </div>
    </div>
    </q-page>

</template>

<script>
import { defineComponent, defineAsyncComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import useNotify from 'src/composables/UseNotify'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'PageResetPassword',

  components: {
    ToggleDarkMode: defineAsyncComponent(() => import ('components/ToggleDarkMode.vue')),
  },

  setup () {
    const { resetPassword } = useAuthUser()
    const { notifyError, notifySuccess } = useNotify()
    const router = useRouter()
    const route = useRoute()
    const token = route.query.token

    const password = ref('')

    const handlePasswordReset = async () => {
      try {
        await resetPassword(token, password.value)
        notifySuccess('Mot de passe changé avec succès')
        router.push({ name: 'login' })
      } catch (error) {
        notifyError('Une erreur est survenue, veuillez réessayer')
      }
    }

    return {
      isPwd: ref(true),
      password,
      handlePasswordReset
    }
  },

  // computed: {
  //   buttonLabel() {
  //     return (this.showPassword) ? "Hide" : "Show";
  //   }
  // },

  // methods: {
  //   toggleShow() {
  //     this.showPassword = !this.showPassword;
  //   }
  // }
})

</script>

<style scoped>

.avatar {
  vertical-align: middle;
  width: 15%;
  height: 15%;
  border-radius: 0%;
}

.avatarMb {
  vertical-align: middle;
  width: 25%;
  height: 25%;
  border-radius: 0%;
}

#titleMdp {
  padding-top: 0px;
  padding-bottom: 32px;
}

#btwnImgTitle {
  padding-top: 5px;
}

main.q-page.q-layout-padding {
  min-height: auto !important;
}

</style>
