<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar class="text-white bg-primary"
      id="switchColor">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="drawer = !drawer"
          v-if="$q.platform.is.desktop"
          />
        <!-- <q-item to="/dashboardjson" exact title = "DRIVING THE SHIFT" rel="home">
          <img src="~assets/LOGO-MIDIPILE-MOBILITY-3-409px.png">
        </q-item> -->

        <q-toolbar-title class="text-h4 text-white" id="link" v-if="$q.platform.is.desktop">
          <a href="dashboardevol1">
          <!-- <q-btn class="text-h4 text-white" id="titleLink" to="/dashboardjson">Midipile Fleet Manager</q-btn> -->
            Midipile Fleet Manager
          </a>
        </q-toolbar-title>

        <q-toolbar-title class="ma-logo-mobile" id="linkLogo" exact title = "DRIVING THE SHIFT" rel="home" style="padding-left: 0px; padding-top: 9px; margin-right: 0px;" v-if="$q.platform.is.mobile">
          <a href="dashboardevol1">
          <img src="~assets/logo3.svg" />
          </a>
        </q-toolbar-title>


        <div class="q-pa-md q-gutter-sm" v-if="$q.platform.is.desktop">
          <toggle-dark-mode />
          <!-- <q-btn flat round color="white" icon="fab fa-twitter" href="https://twitter.com/midipilem" target="_blank"></q-btn>
          <q-btn flat round color="white" icon="fab fa-facebook-f" href="https://www.facebook.com/midipilemobility/" target="_blank"></q-btn>
          <q-btn flat round color="white" icon="fab fa-instagram" href="https://www.instagram.com/midipilemobility/" target="_blank"></q-btn>
          <q-btn flat round color="white" icon="fab fa-linkedin-in" href="https://fr.linkedin.com/company/midipile-mobility" target="_blank"></q-btn> -->
          <q-btn flat round color="white">
            <img src="~assets/phone-24px.svg" class="changeColor"/>
            <q-menu
              transition-show="jump-down"
              transition-hide="jump-up"
            >
            <div class="row no-wrap q-pa-md" style="padding-bottom: 4px">
                <div class="line align-center">
                  <div class="text-h6 q-mb-md">Contactez-nous :</div>
                    <q-list style="min-width: 100px">
                      <q-item clickable href="tel:+33788137050" v-if="$q.platform.is.mobile">
                        <q-item-section avatar style="padding-right: 0px; padding-left: 15px;">
                          <q-icon color="primary" name="mdi-phone-in-talk" />
                          <!-- <q-avatar color="primary" text-color="white" icon="mdi-phone-in-talk" /> -->
                        </q-item-section>
                        <q-item-section class="row justify-center">Tel</q-item-section>
                      </q-item>
                      <q-item clickable v-if="$q.platform.is.desktop" @click="pop = true">
                        <q-item-section avatar style="padding-right: 0px; padding-left: 15px;">
                          <q-icon color="primary" name="mdi-phone-in-talk" />
                          <!-- <q-avatar color="primary" text-color="white" icon="mdi-phone-in-talk" /> -->
                        </q-item-section>
                        <q-item-section class="row justify-center">Tel</q-item-section>
                      </q-item>

                      <q-separator />
                      <q-item clickable href="mailto:contactsite@midipile.eu">
                        <q-item-section avatar style="padding-right: 0px; padding-left: 15px;">
                          <q-icon color="primary" name="mdi-email" />
                        </q-item-section>
                        <q-item-section class="row justify-center">Mail</q-item-section>
                      </q-item>
                    </q-list>
                </div>
            </div>
            </q-menu>
          </q-btn>

          <q-btn flat round color="white" icon="mdi-bell-badge">
            <q-menu
              transition-show="scale"
              transition-hide="scale"

            >
              <q-list class="shadow-2 rounded-borders" style="min-width: 100px; padding-top: 1.5%; padding-bottom: 1%;" bordered>
                <q-item>
                  <q-item-section avatar thumbnail>
                    <q-icon style="left: 40%" color="primary" name="mdi-bell-ring"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label lines="1" title="Le véhicule N°1 est arrêté dans une zone inhabituelle.">Le véhicule N°1 est arrêté dans une zone inhabituelle.</q-item-label>
                    <q-item-label caption lines="1"> Catégorie : Géofencing</q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-item-label caption>Il y a 5 min</q-item-label>
                    <q-icon name="mdi-clock" color="grey" />
                  </q-item-section>
                </q-item>
                <q-separator spaced inset="item-thumbnail" style="margin-left:9.3%"/>

                <q-item>
                  <q-item-section avatar thumbnail>
                    <q-icon style="left: 40%" color="primary" name="mdi-bell-ring"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label lines="1" title="Le véhicule N°3 à une erreur critique batterie.">Le véhicule N°3 à une erreur critique batterie.</q-item-label>
                    <q-item-label caption lines="1"> Catégorie : Géofencing</q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-item-label caption>Il y a 5 min</q-item-label>
                    <q-icon name="mdi-clock" color="grey" />
                  </q-item-section>
                </q-item>
                <q-separator spaced inset="item-thumbnail" style="margin-left:9.3%"/>

                <q-item>
                  <q-item-section avatar thumbnail>
                    <q-icon style="left: 40%" color="primary" name="mdi-bell-ring"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label lines="1" title="Le véhicule N°5 est immobile suite à une erreur critique sur la GAP.">Le véhicule N°5 est immobile suite à une erreur critique sur la GAP.</q-item-label>
                    <q-item-label caption lines="1"> Catégorie : Maintenance</q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-item-label caption>Il y a 5 min</q-item-label>
                    <q-icon name="img:statics/wrench-clock.svg" class="filter-grey"/>
                  </q-item-section>
                </q-item>
                <q-separator spaced inset="item-thumbnail" style="margin-left:9.3%"/>
                  <q-btn style="left:33%; margin-top:1.2%; margin-bottom:1.2%" unelevated rounded color="primary" label="VOIR LES NOTIFICATIONS" to="/seenotifications" thumbnail />



              </q-list>
            </q-menu>
          </q-btn>

          <q-btn flat round color="white" icon="mdi-account-circle">
            <!-- <img src="~assets/followThisOne.svg" /> -->
            <q-menu
              transition-show="jump-down"
              transition-hide="jump-up"
            >
              <div class="row no-wrap q-pa-md" style="padding-bottom: 4px">
                <div class="line align-center">
                  <div class="text-h6 q-mb-md">Suivez-nous :</div>
                  <q-btn flat round color="primary" icon="fab fa-twitter" href="https://twitter.com/midipilem" target="_blank"></q-btn>
                  <q-btn flat round color="primary" icon="fab fa-facebook-f" href="https://www.facebook.com/midipilemobility/" target="_blank"></q-btn>
                  <q-btn flat round color="primary" icon="fab fa-instagram" href="https://www.instagram.com/midipilemobility/" target="_blank"></q-btn>
                  <q-btn flat round color="primary" icon="fab fa-linkedin-in" href="https://fr.linkedin.com/company/midipile-mobility" target="_blank"></q-btn>
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="column items-center">
                  <q-avatar size="36px">
                    <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs"><a href="/profile" class="linkProfile">Profil</a></div>

                  <q-btn
                    flat round color="primary"
                    icon="mdi-power"
                    @click="handleLogout"
                  />

                </div>
              </div>
            </q-menu>
          </q-btn>
          <!-- <q-btn flat round color="white" icon="mdi-exit-to-app">
            <q-menu
              transition-show="jump-down"
              transition-hide="jump-up"
            >
              <q-list style="min-width: 100px">
                <q-item clickable to="/profile">
                  <q-item-section class="items-center">Profil</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="confirm = true">
                  <q-item-section class="items-center">Déconnexion</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn> -->

          <!-- <q-dialog v-model="confirm">
            <q-card>
              <q-card-section class="row items-center">
                <q-avatar icon="warning" color="primary" size="4rem" text-color="white" />
                <span class="q-ml-sm">Êtes-vous sûr de vouloir vous déconnecter ?</span>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Annuler" color="primary" v-close-popup />
                <q-btn flat label="Confirmer" color="primary" to= "/" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog> -->

          <q-dialog v-model="pop">
            <q-card id="card">
              <q-card-section class="row justify-center">
                <!-- <q-icon color="primary" name="mdi-phone-in-talk" /> -->
                <div class="text-h6 q-mb-md">Appelez-nous au :</div>

              </q-card-section>
              <q-card-section class="row justify-center">
                <div class="text-h7 q-mb-md" style="margin-left: 2px; margin-top: 6.5px; margin-bottom: 6.5px;">
                    {{ NumberPhoneAssist }}<br/>
                    <span id="msg" v-if="show">Copié !</span>
                </div>
                <div class="q-ml-sm" id="numPhoneAssist">
                    <q-btn label="Copier" color="primary" @click="setShow"  @click.stop.prevent="copyNumberPhone">
                      <!-- <span class="btn btn-info text-white copy-btn ml-auto" @click="setShow"  @click.stop.prevent="copyNumberPhone">
                      Copier
                    </span> -->
                    <input type="hidden" id="testing-code" :value="NumberPhoneAssist">
                    </q-btn>
                </div>
              </q-card-section>
            </q-card>

          </q-dialog>


        </div>

        <div class="q-py-md q-gutter-sm" v-if="$q.platform.is.mobile">
          <toggle-dark-mode />
          <q-btn flat round color="white">
            <img src="~assets/phone-24px.svg" class="changeColor"/>
            <q-menu
              transition-show="jump-down"
              transition-hide="jump-up"
            >
            <div class="row no-wrap q-pa-md" style="padding-bottom: 4px">
                <div class="line align-center">
                  <div class="text-h6 q-mb-md">Contactez-nous :</div>
                    <q-list style="min-width: 100px">
                      <q-item clickable href="tel:+33788137050" v-if="$q.platform.is.mobile">
                        <q-item-section avatar style="padding-right: 0px; padding-left: 15px;">
                          <q-icon color="primary" name="mdi-phone-in-talk" />
                          <!-- <q-avatar color="primary" text-color="white" icon="mdi-phone-in-talk" /> -->
                        </q-item-section>
                        <q-item-section class="row justify-center">Tel</q-item-section>
                      </q-item>

                      <q-separator />
                      <q-item clickable href="mailto:contactsite@midipile.eu">
                        <q-item-section avatar style="padding-right: 0px; padding-left: 15px;">
                          <q-icon color="primary" name="mdi-email" />
                        </q-item-section>
                        <q-item-section class="row justify-center">Mail</q-item-section>
                      </q-item>
                    </q-list>
                </div>
            </div>
            </q-menu>
          </q-btn>
          <q-btn flat round color="white" icon="mdi-bell-badge">
            <q-menu
              transition-show="scale"
              transition-hide="scale"
            >
              <q-list class="shadow-2 rounded-borders" style="min-width: 100px; padding-top: 1.5%; padding-bottom: 1%;" bordered>
                <q-item><!-- clickable v-ripple pour avoir hover au clique + avoir la main en hover-->
                  <q-item-section avatar thumbnail>
                    <q-icon style="left: 40%" color="primary" name="mdi-bell-ring"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label lines="1" title="Le véhicule N°1 est arrêté dans une zone inhabituelle.">Le véhicule N°1 est arrêté dans une zone inhabituelle.</q-item-label>
                    <q-item-label caption lines="1"> Catégorie : Géofencing</q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-item-label caption>Il y a 5 min</q-item-label>
                    <q-icon name="mdi-clock" color="grey" />
                  </q-item-section>
                </q-item>
                <q-separator spaced inset="item-thumbnail" style="margin-left:9.3%"/>

                <q-item>
                  <q-item-section avatar thumbnail>
                    <q-icon style="left: 40%" color="primary" name="mdi-bell-ring"/>
                  </q-item-section>
                  <q-item-section class="ellipsis-2-lines">
                    <q-item-label lines="1" title="Le véhicule N°3 à une erreur critique batterie.">Le véhicule N°3 à une erreur critique batterie.</q-item-label>
                    <q-item-label caption lines="1"> Catégorie : Géofencing</q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-item-label caption>Il y a 5 min</q-item-label>
                    <q-icon name="mdi-clock" color="grey" />
                  </q-item-section>
                </q-item>
                <q-separator spaced inset="item-thumbnail" style="margin-left:9.3%"/>

                <q-item>
                  <q-item-section avatar thumbnail>
                    <q-icon style="left: 40%" color="primary" name="mdi-bell-ring"/>
                  </q-item-section>
                  <q-item-section class="ellipsis-2-lines">
                    <q-item-label lines="1" title="Le véhicule N°5 est immobile suite à une erreur critique sur la GAP.">Le véhicule N°5 est immobile suite à une erreur critique sur la GAP.</q-item-label>
                    <q-item-label caption lines="1"> Catégorie : Maintenance</q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-item-label caption>Il y a 5 min</q-item-label>
                    <q-icon name="img:statics/wrench-clock.svg" class="filter-grey"/>
                  </q-item-section>
                </q-item>
                <q-separator spaced inset="item-thumbnail" style="margin-left:9.3%"/>
                <q-item>
                  <q-item-section>
                    <q-btn v-bind:style="$q.screen.lt.sm ? {'left': '28px', 'width' : '80%', 'margin-bottom' : '4px' } : {'left' : '33%', 'margin-top' : '1.2%', 'margin-bottom' : '1.2%', 'text-align' : 'center'}"  unelevated rounded color="primary" label="VOIR LES NOTIFICATIONS" to="/seenotifications" align="center" thumbnail />
                  </q-item-section>
                </q-item>


              </q-list>
            </q-menu>
          </q-btn>
          <q-btn flat round color="white" icon="mdi-account-circle">
            <!-- <img src="~assets/followThisOne.svg" /> -->
            <q-menu
              transition-show="jump-down"
              transition-hide="jump-up"
            >
              <div class="row no-wrap q-pa-md" style="padding-bottom: 4px">
                <div class="line align-center">
                  <div class="text-h6 q-mb-md">Suivez-nous :</div>
                  <q-btn flat round color="primary" icon="fab fa-twitter" href="https://twitter.com/midipilem" target="_blank"></q-btn>
                  <q-btn flat round color="primary" icon="fab fa-facebook-f" href="https://www.facebook.com/midipilemobility/" target="_blank"></q-btn>
                  <q-btn flat round color="primary" icon="fab fa-instagram" href="https://www.instagram.com/midipilemobility/" target="_blank"></q-btn>
                  <q-btn flat round color="primary" icon="fab fa-linkedin-in" href="https://fr.linkedin.com/company/midipile-mobility" target="_blank"></q-btn>
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="column items-center">
                  <q-avatar size="36px">
                    <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs"><a href="/profile" class="linkProfile">Profil</a></div>

                  <q-btn
                    flat round color="primary"
                    icon="mdi-power"
                    @click="handleLogout"
                  />

                </div>
              </div>
            </q-menu>
          </q-btn>


          <!-- <q-dialog v-model="handleLogout">
            <q-card>
              <q-card-section class="row items-center">
                <q-avatar icon="warning" color="primary" size="4rem" text-color="white" />
                <span class="q-ml-sm">Êtes-vous sûr de vouloir vous déconnecter ?</span>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Annuler" color="primary" v-close-popup />
                <q-btn flat label="Confirmer" color="primary" to= "/" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog> -->
        </div>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      v-if="$q.platform.is.desktop"
    >
    // <q-img src="statics/logo_valide_paysage.jpg"></q-img>
    <q-list>
        <q-item-label
          header
        >
          Demo 2022
        </q-item-label>

        <q-item to="/dashboardjson" exact>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section>
            Tableau de bord
          </q-item-section>
        </q-item>

        <q-expansion-item icon="bike_scooter" label="Mes véhicules" to="/mesvehiculestab" >
          <q-list dense >
            <q-item to="/midipile01" exact>
              <q-item-section > </q-item-section>
              <q-item-section > Midipile 01 </q-item-section>
              <q-item-section > </q-item-section>
            </q-item>

            <q-item to="/midipile02" exact>
              <q-item-section > </q-item-section>
              <q-item-section > Midipile 02 </q-item-section>
              <q-item-section > </q-item-section>
            </q-item>

            <q-item to="/midipile03" exact>
              <q-item-section > </q-item-section>
              <q-item-section > Midipile 03 </q-item-section>
              <q-item-section > </q-item-section>
            </q-item>

            <q-item to="/midipile04" exact>
              <q-item-section > </q-item-section>
              <q-item-section > Midipile 04 </q-item-section>
              <q-item-section > </q-item-section>
            </q-item>

            <q-item to="/midipile05" exact>
              <q-item-section > </q-item-section>
              <q-item-section > Midipile 05 </q-item-section>
              <q-item-section > </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-item to="/Administration" exact>
          <q-item-section avatar>
            <q-icon name="manage_accounts" />
          </q-item-section>

          <q-item-section> Administration </q-item-section>
        </q-item>


        <q-expansion-item icon="grid_view" label="Composants" v-if=debug >
          <q-expansion-item
            :header-inset-level="1"
            icon="insights"
            label="Charts"
          >
              <q-item to="columnlabel" exact>
                <q-item-section > Colonne simple </q-item-section>
              </q-item>

              <q-item to="stackedcolumn" exact>
                <q-item-section > Colonne multiple </q-item-section>
              </q-item>

              <q-item to="basiccircle" exact>
                <q-item-section > Cercle simple </q-item-section>
              </q-item>

              <q-item to="batteryradial" exact>
                <q-item-section > Batterie (Radial) </q-item-section>
              </q-item>

              <q-item to="minibatteryradial" exact>
                <q-item-section > Mini Batterie (Radial) </q-item-section>
              </q-item>

              <q-item to="radialbarcustom" exact>
                <q-item-section > Jauge multiple </q-item-section>
              </q-item>

              <q-item to="spark" exact>
                <q-item-section > Indicateur Spark </q-item-section>
              </q-item>

              <q-item to="basicline" exact>
                <q-item-section > Graphe ligne simple </q-item-section>
              </q-item>

              <q-item to="semidonut" exact>
                <q-item-section > Semi donut </q-item-section>
              </q-item>

              <q-item to="jsontwolines" exact>
                <q-item-section > 2 Lines </q-item-section>
              </q-item>

          </q-expansion-item>


          <q-expansion-item
            :header-inset-level="1"
            icon="location_on"
            label="Maps"
          >

            <q-item to="simplemap" exact>
              <q-item-section > Carte simple </q-item-section>
            </q-item>

            <q-item to="iconmap" exact>
              <q-item-section > Carte avec multiple icônes </q-item-section>
            </q-item>

            <q-item to="popupmap" exact>
              <q-item-section > Carte avec popup </q-item-section>
            </q-item>

            <q-item to="polylinemap" exact>
              <q-item-section > Carte avec chemin </q-item-section>
            </q-item>

          </q-expansion-item>

          <q-expansion-item
            :header-inset-level="1"
            icon="table_chart"
            label="Tables"
          >

            <q-item to="tableprogress" exact>
              <q-item-section > Suivi des véhicules </q-item-section>
            </q-item>

            <q-item to="tabletripstat" exact>
              <q-item-section > Statistique trajet </q-item-section>
            </q-item>

            <q-item to="tableactu" exact>
              <q-item-section > Flux d'actualités </q-item-section>
            </q-item>

            <q-item to="tableactive" exact>
              <q-item-section > Etat du parc </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item
            :header-inset-level="1"
            icon="dashboard"
            label="Dashboards"
          >

            <q-item to="dashboard1" exact>
              <q-item-section > Dashboard 1 </q-item-section>
            </q-item>

            <q-item to="dashboard2" exact>
              <q-item-section > Dashboard 2 </q-item-section>
            </q-item>

            <q-item to="dashboard3" exact>
              <q-item-section > Dashboard 3 </q-item-section>
            </q-item>

            <q-item to="dashboardjson" exact>
              <q-item-section > Dashboard avec index JSON </q-item-section>
            </q-item>

          </q-expansion-item>

          <q-expansion-item
            :header-inset-level="1"
            icon="bike_scooter"
            label="Trajet M01"
          >

            <q-item to="01trip001" exact>
              <q-item-section > Trajet 001 </q-item-section>
            </q-item>

            <q-item to="01trip002" exact>
              <q-item-section > Trajet 002 </q-item-section>
            </q-item>

            <q-item to="01trip003" exact>
              <q-item-section > Trajet 003 </q-item-section>
            </q-item>
          </q-expansion-item>

        </q-expansion-item>

      </q-list>
    </q-drawer> -->

    <q-drawer
        v-model="drawer"
        show-if-above
        v-if="$q.platform.is.desktop"

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="250"
        :breakpoint="500"
        bordered
        class="bg-grey-3"

      > <!-- v-bind:style= "[$q.dark==false ? {backgroundColor: 'white'} : {backgroundColor: '#121212'}]" -->
        <q-scroll-area class="fit">
          <q-list padding>
            <!-- <q-item-label
              header
            >
              Demo 2022
            </q-item-label> -->
            <q-item to="dashboardevol1" v-ripple>
              <q-item-section avatar>
                <q-icon name="dashboard"/>
              </q-item-section>

              <q-item-section>
                Tableau de bord
              </q-item-section>
            </q-item>


            <!-- <q-expansion-item icon="bike_scooter" label="Mes véhicules" to="/mesvehiculestab" v-ripple >
              <q-list dense >
                <q-item to="/midipile01" v-ripple exact>
                  <q-item-section > </q-item-section>
                  <q-item-section > Midipile 01 </q-item-section>
                  <q-item-section > </q-item-section>
                </q-item>

                <q-item to="/midipile02" exact>
                  <q-item-section > </q-item-section>
                  <q-item-section > Midipile 02 </q-item-section>
                  <q-item-section > </q-item-section>
                </q-item>

                <q-item to="/midipile03" exact>
                  <q-item-section > </q-item-section>
                  <q-item-section > Midipile 03 </q-item-section>
                  <q-item-section > </q-item-section>
                </q-item>

                <q-item to="/midipile04" exact>
                  <q-item-section > </q-item-section>
                  <q-item-section > Midipile 04 </q-item-section>
                  <q-item-section > </q-item-section>
                </q-item>

                <q-item to="/midipile05" exact>
                  <q-item-section > </q-item-section>
                  <q-item-section > Midipile 05 </q-item-section>
                  <q-item-section > </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item> -->

            <q-item to="/mesvehiculestab" v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-bicycle-cargo"/><!--name="img:icons/derVisu2-transparent.png"-->
              </q-item-section>

              <q-item-section>
                Mes véhicules
              </q-item-section>
            </q-item>

            <q-item to="/Administration" v-ripple>
              <q-item-section avatar>
                <q-icon name="manage_accounts"/>
              </q-item-section>

              <q-item-section>
                Administration
              </q-item-section>
            </q-item>
            <!-- Calendar -->
            <!-- <q-item to="/calendar" v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-calendar"/>
              </q-item-section>

              <q-item-section>
                Calendrier
              </q-item-section>
            </q-item> -->

            <q-item to="/dashboardjson" v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-swap-horizontal"/>
              </q-item-section>

              <q-item-section>
                Alternative
              </q-item-section>
            </q-item>

            <!-- <q-separator />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item> -->
          </q-list>
        </q-scroll-area>
      </q-drawer>



    <q-page-container v-bind:style="$q.screen.lt.sm ? {'padding-top': '0px', 'padding-bottom' : '0px' } : {'padding-top': '82px'}">
        <!-- <div class="q-pt-md q-pl-md">
          <ligne-menu v-if="$q.platform.is.desktop"></ligne-menu>
        </div> -->
        <router-view />
    </q-page-container>



      <!--v-bind:style= "[$q.dark==false ? {backgroundColor: 'white'} : {backgroundColor: '#121212'}]" -->
    <!-- footer part -->
    <!-- <q-footer style="display: none;"> -->
    <q-toolbar v-bind:style="$q.screen.lt.sm ? {'margin-bottom': '21.5%'} : {}">
      <q-toolbar-title align="center">
            <div class="text-overline" id="footer" >MWS v0.1 - Copyright © 2022 - </div>
            <a href="https://midipile.eu" target="_blank" id="footer">
              <img src="statics/logo_valide_paysage.svg" style="width:150px; height:50px;"/>
            </a>

      </q-toolbar-title>
    </q-toolbar>


    <!-- </q-footer> -->
    <q-footer v-if="$q.platform.is.mobile">
    <div>
      <q-tabs
        v-model="tab"
        class="bg-primary text-white shadow-2"
        id="tabs"
      >
        <q-route-tab name="dashboard" label="Accueil" icon="dashboard" to="dashboardevol1" />
        <q-route-tab name="mesvehicules" label="Véhicules" icon="bike_scooter" to="/mesvehiculestab" />
        <q-route-tab name="admin" label="Admin" icon="manage_accounts" to="/Administration" />
        <!-- Calendar -->
        <!-- <q-route-tab name="calendar" label="Calendrier" icon="mdi-calendar" to="/calendar" /> -->
        <!-- <q-route-tab name="evol" label="Switch" icon="mdi-swap-horizontal" to="/dashboardjson" /> -->

      </q-tabs>
    </div>
    </q-footer>
  </q-layout>
</template>

<script>

import { defineComponent, defineAsyncComponent, ref, onMounted } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import useApi from 'src/composables/UseApi'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

// copyToClipboard('some text')
//   .then(() => {
//     // success!
//   })
//   .catch(() => {
//     // fail
//   })

export default defineComponent({
  name: 'MainLayout',

  components: {
    // LigneMenu: defineAsyncComponent(() => import('components/Menu/LigneMenu.vue')),
    ToggleDarkMode: defineAsyncComponent(() => import ('components/ToggleDarkMode.vue')),
  },


  setup () {
    // const leftDrawerOpen = ref(false)
    const $q = useQuasar()
    const router = useRouter()
    const { logout } = useAuthUser()
    const { getBrand } = useApi()

    onMounted(() => {
      getBrand()
    })

    const handleLogout = async () => {
      $q.dialog({
        title: 'Déconnexion',
        message: 'Êtes-vous sûr de vouloir vous déconnecter ?',
        ok: 'Valider',
        cancel: 'Annuler',
        color: 'primary',
        focus: 'ok',
        persistent: true,
      }).onOk(async () => {
        await logout()
        router.replace({ name: 'login' })
      })//.then(() => {
      //     this.$q.notify('Vous êtes déconnecté')
      //   }).catch(() => {
      //     this.$q.notify('Disagreed...')
      //   })
    }

    // // get status
    // console.log($q.dark.isActive) // true, false

    // // get configured status
    // console.log($q.dark.mode) // "auto", true, false

    // set status
    // $q.dark.set(false) // or false or "auto"
    // // toggle
    // $q.dark.toggle()
    return {
      debug: false,
      // leftDrawerOpen,
      // toggleLeftDrawer () {
      //   leftDrawerOpen.value = !leftDrawerOpen.value
      // },
      alert: ref(false),
      // confirm: ref(false),
      pop: ref(false),
      // copySucceeded: ref(false),
      // show: ref(false),
      prompt: ref(false),
      address: ref(''),
      handleLogout,
      tab: ref('mails'),
      drawer: ref(false),
      miniState: ref(true),
      // contentStyle: {
      //   backgroundColor: 'rgba(0,0,0,0.02)',
      //   color: '#555'
      // },
      // contentActiveStyle: {
      //   backgroundColor: '#eee',
      //   color: 'black'
      // },
      //  thumbStyle: {
      //   right: '2px',
      //   borderRadius: '5px',
      //   backgroundColor: '#027be3',
      //   width: '5px',
      //   opacity: '0.75'
      // }


    }
  },

  data(){
    return {
      NumberPhoneAssist: "0788137050",
      show: false,
    }
  },
  methods: {

    copyNumberPhone () {
      let NumberPhoneAssistToCopy = document.querySelector('#testing-code')
      NumberPhoneAssistToCopy.setAttribute('type', 'text')
      NumberPhoneAssistToCopy.select()

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        // alert('Testing code was copied ' + msg);
        // $(NumberPhoneAssistToCopy).next().text('text copied');
        // setTimeout(function(){$(NumberPhoneAssistToCopy).next().text('');}, 2000);
      } catch (err) {
        alert('Oops, unable to copy');
      }

      /* unselect the range */
      NumberPhoneAssistToCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    },


    // setTimeout((){
    //   const box = document.getElementById('box');

    //   // 👇️ removes element from DOM
    //   box.style.display = 'none';

    //   // 👇️ hides element (still takes up space on page)
    //   // box.style.visibility = 'hidden';
    // }, 1000); // 👈️ time in milliseconds

    setShow() {
      let msg = document.getElementById('msg');
      this.show = true;
      // msg.style.display = "revert";
      setTimeout(() => {
        this.show = false;
        // 👇️ removes element from DOM
        msg.style.display = "none";
      }, 1000);

    },

  },
})
</script>

<style>

.ma-logo-mobile {
  margin-left: 10px;
  margin-right: 35%;
}

.ma-logo {
  margin-left: 10px;
}

.truncateToolongText{
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  max-width: 450px;
}

.filter-grey {
  filter: invert(72%) sepia(14%) saturate(0%) hue-rotate(236deg) brightness(85%) contrast(92%);
}

#titleLink::before {
  box-shadow: none;
}

#link a {
  text-decoration: none;
  color: white;

}

#linkLogo a {
  text-decoration: none;
}

.linkProfile {
  text-decoration: none;
  color: inherit;
}

.linkProfile:hover {
  text-decoration: underline;
  color: #7198be;
}

/* .q-card.q-card--dark.q-dark.q-dialog-plugin.q-dialog-plugin--dark.q-dark {
  text-align: center;
} */

.changeColor {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(72deg) brightness(104%) contrast(103%);
}

#card {
  width: 250px;
}

#msg {
  /* display: none; */
  margin-left: 18px;
  margin-right: 18px;
}

/* #tabs {
  background-color: inherit !important;
} */

#footer {
  /* background-color: inherit !important; */
  color: #515151;
}

/* .q-focusable
{
	  background: white;
} */

.q-scrollarea--dark {
  background-color: #515151; /*#424242*/
}

/* .q-table__card {
  box-shadow: none;
  border: solid;
} */
/* .q-card__section.q-card__section--vert {
  // box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
  border:solid 2px #41403E;
} */

/* body.body--dark #switchColor {
  background-color: #7198be !important;
}

body.body--dark a.q-item.q-item-type.row.no-wrap.q-item--dark.q-router-link--exact-active.q-router-link--active.q-item--clickable.q-link.cursor-pointer.q-focusable.q-hoverable {
  color: #7198be !important;
}

body.body--dark .q-tab.relative-position.self-stretch.flex.flex-center.text-center.q-tab--active.text-primary.q-focusable.q-hoverable.cursor-pointer.customTab {
  color: #7198be !important;
}

body.body--dark .q-tab__indicator.absolute-bottom.text-primary {
  color:#7198be !important;
}

body.body--dark .q-tab.relative-position.self-stretch.flex.flex-center.text-center.q-tab--active.text-primary.q-focusable.q-hoverable.cursor-pointer {
  color: #7198be !important;
} */

.leaflet-popup-close-button {
  display: none;
}

/* .container {
  position: relative;
  text-align: center;
}

.vertical-center {
  margin: 0;
  top: 100%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
} */

</style>
