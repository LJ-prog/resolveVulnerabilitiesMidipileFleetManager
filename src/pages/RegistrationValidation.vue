<template>

  <div class="q-pa-md" align="right">
      <toggle-dark-mode/>
  </div>

  <q-page padding>
    <div class="row justify-center" style="height: 61vh">
      <!-- <div class="col-0 col-md-6 flex justify-center content-center" v-if="$q.platform.is.desktop">
        <img src="~assets/dernVisu-transparent.png" class="responsive" alt="login-image" id="vehiculeLg">
      </div> -->
      <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
          class="col-12 col-md-3 flex content-center">
        <div v-bind:style="$q.screen.lt.sm ? {'width': '100%'} : {'width': '100%'}" id="cardLogin" align="center">
          <q-card-section>
              <q-img src="~assets/LOGO-midipile3.svg" alt="avatar" class="avatar" v-if="$q.platform.is.desktop"/>
              <q-img src="~assets/LOGO-midipile3.svg" alt="avatar" class="avatarMb" v-if="$q.platform.is.mobile"/>
          </q-card-section>
          <q-card-section>
            <div class="q-pt-lg" id="btwnImgTitle">
              <div class="row justify-center" v-if="user">
                <h4 class="text-h4 text-uppercase q-my-none text-weight-regular" align="center" id="titleMdp">Bienvenue {{ user.user_metadata.username }} !</h4>
              </div>
            </div>
            <div>
              <p>Vous pouvez dès à présent vous connecter en retournant sur la page de connexion :</p>
            </div>
          </q-card-section>
          <q-card-section  style="padding-top: 0px;">
              <div>
                <q-btn
                  label="Se connecter"
                  color="primary"
                  class="full-width"
                  rounded
                  :to="{ name: 'login' }"

                />
              </div>
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
import { defineComponent, defineAsyncComponent } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'

export default defineComponent({
  name: 'RegistrationValidation',

  components: {
    ToggleDarkMode: defineAsyncComponent(() => import ('components/ToggleDarkMode.vue')),
  },

  setup () {
    const { user } = useAuthUser()

    return {
      user
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
