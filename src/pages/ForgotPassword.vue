<template>
    <!-- <img src="~assets/wave.png" class="responsive" id="wave" alt="login-wave" v-if="$q.platform.is.desktop">
    <img src="~assets/wave.png" class="responsive" id="waveMobile" alt="login-wave" v-if="$q.platform.is.mobile">-->

    <div class="q-pa-md" align="right">
      <toggle-dark-mode/>
    </div>

    <q-page padding>
      <div class="row justify-center" style="height: 70vh">
        <!-- <div class="col-0 col-md-6 flex justify-center content-center" v-if="$q.platform.is.desktop">
          <img src="~assets/dernVisu-transparent.png" class="responsive" alt="login-image" id="vehiculeLg">
        </div> -->
        <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
            class="col-12 col-md-3 flex content-center">
          <div v-bind:style="$q.screen.lt.sm ? {'width': '100%' } : {'width': '100%'}" id="cardLogin" align="center">
            <q-card-section>
                <q-img src="~assets/LOGO-midipile3.svg" alt="avatar" class="avatar" v-if="$q.platform.is.desktop"/>
                <q-img src="~assets/LOGO-midipile3.svg" alt="avatar" class="avatarMb" v-if="$q.platform.is.mobile"/>
            </q-card-section>
            <q-card-section>
              <div class="q-pt-lg" id="btwnImgTitle">
                <div class="row justify-center">
                  <h4 class="text-h4 text-uppercase q-my-none text-weight-regular" align="center" id="titleMdp">Mot de passe oublié ?</h4>
                </div>
              </div>
              <div>
                <p>Saisissez votre adresse e-mail pour recevoir les instructions expliquant comment réinitialiser votre mot de passe.</p>
              </div>
            </q-card-section>
            <q-card-section>
              <q-form class="q-gutter-md" @submit.prevent="handleForgotPassowrd">
                <q-input
                  label="Email"
                  v-model="email"
                  lazy-rules
                  :rules="[val => (val && val.length > 0) || 'Email requis']"
                  type="email">
                </q-input>
                <!-- <q-input label="Mot de passe" type="password" v-model="login.default.password">
                </q-input> -->
                <div>
                  <q-btn class="full-width" color="primary" label="Envoyer" type="submit" rounded style="color: inherit !important"></q-btn>
                  <div class="text-center q-mt-sm q-gutter-lg">
                    <p>Ou revenez à l'écran de <router-link :to="{ name: 'login' }" id="autoDark"> connexion. </router-link> </p>
                    <!-- <router-link class="text-white" to="/login"></router-link> -->
                    <!-- <router-link class="text-white" to="/login">Criar conta</router-link> -->
                  </div>
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

export default defineComponent({
  name: 'ForgotPassword',
  components: {
    ToggleDarkMode: defineAsyncComponent(() => import ('components/ToggleDarkMode.vue')),
  },

  setup () {
    const { sendPasswordRestEmail } = useAuthUser()
    const { notifyError, notifySuccess } = useNotify()

    const email = ref('')

    const handleForgotPassowrd = async () => {
      try {
        await sendPasswordRestEmail(email.value)
        notifySuccess(`E-mail de réinitialisation du mot de passe envoyé à : ${email.value}`)
      } catch (error) {
        notifyError('Utilisateur introuvable renseignez une adresse email valide.')
      }
    }

    return {
      email,
      handleForgotPassowrd
    }
  }
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

/* #cardLogin{
  background-color: #333436;
  border-radius: 5%;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.5);
} */

/* #avatarBack {
  background-color: #333436;
}

#vehiculeLg {
  max-width: 100%;
}
#vehiculeSm {
  max-width: 60%;
} */

#titleMdp {
  padding-top: 0px;
  padding-bottom: 32px;
}

#btwnImgTitle {
  padding-top: 5px;
}

#autoDark {
  cursor: pointer;
  text-decoration: underline;
  color: inherit;
}

#autoDark:hover {
  color: var(--q-primary);

}

main.q-page.q-layout-padding {
  min-height: auto !important;
}


</style>




