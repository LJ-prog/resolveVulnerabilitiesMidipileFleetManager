
const routes = [
  { path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'loginDefault', component: () => import('pages/login.vue') },
      { path: 'login', name: 'login', component: () => import('pages/login.vue') },
      { path: 'register', name: 'register', component: () => import('pages/Register.vue') },
      { path: 'email-confirmation', name: 'email-confirmation', component: () => import('pages/EmailConfirmation.vue') },
      { path: 'forgot-password', name: 'forgot-password', component: () => import('pages/ForgotPassword.vue') },
      { path: 'reset-password', name: 'reset-password', component: () => import('pages/ResetPassword.vue') },
      { path: 'validate-registration', name: 'validate-registration', component: () => import('src/pages/RegistrationValidation.vue') },
    ]

  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/index', component: () => import('pages/Index.vue') },
      { path: '/mesvehiculestab', component: () => import('src/pages/mesvehiculesTab.vue') },
      { path: '/mesvehicules', component: () => import('src/pages/mesvehiculesCard.vue') },
      { path: '/midipile01', component: () => import('src/pages/vehicules/Midipile01.vue') },
      { path: '/oldmidipile01', component: () => import('src/pages/vehicules/OldMidipile01.vue') },
      { path: '/midipile02', component: () => import('src/pages/vehicules/Midipile02.vue') },
      { path: '/oldmidipile02', component: () => import('src/pages/vehicules/OldMidipile02.vue') },
      { path: '/midipile03', component: () => import('src/pages/vehicules/Midipile03.vue') },
      { path: '/oldmidipile03', component: () => import('src/pages/vehicules/OldMidipile03.vue') },
      { path: '/midipile04', component: () => import('src/pages/vehicules/Midipile04.vue') },
      { path: '/oldmidipile04', component: () => import('src/pages/vehicules/OldMidipile04.vue') },
      { path: '/midipile05', component: () => import('src/pages/vehicules/Midipile05.vue') },
      { path: '/oldmidipile05', component: () => import('src/pages/vehicules/OldMidipile05.vue') },

      //Composants : Charts
      { path: '/columnlabel', component: () => import('pages/charts/ColumnLabelPage.vue') },
      { path: '/stackedcolumn', component: () => import('pages/charts/StackedColumnPage.vue') },
      { path: '/basiccircle', component: () => import('pages/charts/BasicCirclePage.vue') },
      { path: '/batteryradial', component: () => import('pages/charts/BatteryRadialPage.vue') },
      { path: '/minibatteryradial', component: () => import('pages/charts/MiniBatteryRadialPage.vue') },
      { path: '/radialbarcustom', component: () => import('pages/charts/RadialBarCustomPage.vue') },
      { path: '/spark', component: () => import('pages/charts/SparkPage.vue') },
      { path: '/basicline', component: () => import('pages/charts/BasicLinePage.vue') },
      { path: '/semidonut', component: () => import('pages/charts/SemiDonutPage.vue') },
      { path: '/jsontwolines', component: () => import('pages/charts/JSONTwoLinesPage.vue') },

      //Composants : Cartes
      { path: '/simplemap', component: () => import('pages/maps/SimpleMapPage.vue') },
      { path: '/iconmap', component: () => import('pages/maps/IconMapPage.vue') },
      { path: '/popupmap', component: () => import('pages/maps/PopupMapPage.vue') },
      { path: '/polylinemap', component: () => import('pages/maps/PolylineMapPage.vue') },
      { path: '/jsonsourcemap', component: () => import('pages/maps/JSONSourceMapPage.vue') },

      //Composants : Table
      { path: '/tableprogress', component: () => import('pages/table/TableProgressPage.vue') },
      { path: '/tabletripstat', component: () => import('pages/table/TableTripStatPage.vue') },
      { path: '/tableactu', component: () => import('pages/table/TableActuPage.vue') },
      { path: '/tableactive', component: () => import('pages/table/TableActivePage.vue') },

      //Dashboards
      { path: '/dashboard1', component: () => import('pages/dashboards/Dashboard1.vue') },
      { path: '/dashboard2', component: () => import('pages/dashboards/Dashboard2.vue') },
      { path: '/dashboard3', component: () => import('pages/dashboards/Dashboard3.vue') },
      { path: '/dashboardjson', component: () => import('pages/dashboards/DashboardJSON.vue') },
      { path: 'dashboardevol1', component: () => import('pages/dashboards/DashboardEvol1.vue') },

      //Détail voyage
      { path: '/01trip001', component: () => import('pages/midipile01/trip001.vue') },
      { path: '/01trip002', component: () => import('pages/midipile01/trip002.vue') },
      { path: '/01trip003', component: () => import('pages/midipile01/trip003.vue') },
      { path: '/1110101107_route14', component: () => import('pages/trip/1110101107_route14.vue') },
      { path: '/1110101115_route14', component: () => import('pages/trip/1110101115_route14.vue') },
      { path: '/1110102109_route17', component: () => import('pages/trip/1110102109_route17.vue') },
      { path: '/1110102117_route10', component: () => import('pages/trip/1110102117_route10.vue') },
      { path: '/1110103110_route06', component: () => import('pages/trip/1110103110_route06.vue') },
      { path: '/1110103117_route09', component: () => import('pages/trip/1110103117_route09.vue') },
      { path: '/1110104109_route06', component: () => import('pages/trip/1110104109_route06.vue') },
      { path: '/1110104116_route09', component: () => import('pages/trip/1110104116_route09.vue') },
      { path: '/1110105108_route03', component: () => import('pages/trip/1110105108_route03.vue') },
      { path: '/1110105117_route16', component: () => import('pages/trip/1110105117_route16.vue') },
      { path: '/1110106108_route14', component: () => import('pages/trip/1110106108_route14.vue') },
      { path: '/1110106116_route15', component: () => import('pages/trip/1110106116_route15.vue') },
      { path: '/1110107108_route14', component: () => import('pages/trip/1110107108_route14.vue') },
      { path: '/1110107115_route10', component: () => import('pages/trip/1110107115_route10.vue') },
      { path: '/1110108107_route12', component: () => import('pages/trip/1110108107_route12.vue') },
      { path: '/1111126109_route13', component: () => import('pages/trip/1111126109_route13.vue') },
      { path: '/1111126116_route18', component: () => import('pages/trip/1111126116_route18.vue') },
      { path: '/1111127108_route18', component: () => import('pages/trip/1111127108_route18.vue') },
      { path: '/1111127115_route15', component: () => import('pages/trip/1111127115_route15.vue') },
      { path: '/1111128107_route06', component: () => import('pages/trip/1111128107_route06.vue') },
      { path: '/1111128116_route18', component: () => import('pages/trip/1111128116_route18.vue') },
      { path: '/2111126109_route01', component: () => import('pages/trip/2111126109_route01.vue') },
      { path: '/2111126116_route14', component: () => import('pages/trip/2111126116_route14.vue') },
      { path: '/2111127109_route17', component: () => import('pages/trip/2111127109_route17.vue') },
      { path: '/2111127117_route13', component: () => import('pages/trip/2111127117_route13.vue') },
      { path: '/2111128109_route15', component: () => import('pages/trip/2111128109_route15.vue') },
      { path: '/2111128114_route06', component: () => import('pages/trip/2111128114_route06.vue') },
      { path: '/3111126114_route12', component: () => import('pages/trip/3111126114_route12.vue') },
      { path: '/3111127107_route18', component: () => import('pages/trip/3111127107_route18.vue') },
      { path: '/3111127117_route08', component: () => import('pages/trip/3111127117_route08.vue') },
      { path: '/3111128107_route05', component: () => import('pages/trip/3111128107_route05.vue') },
      { path: '/3111128116_route02', component: () => import('pages/trip/3111128116_route02.vue') },
      { path: '/4111126116_route11', component: () => import('pages/trip/4111126116_route11.vue') },
      { path: '/4111127107_route01', component: () => import('pages/trip/4111127107_route01.vue') },
      { path: '/4111127117_route01', component: () => import('pages/trip/4111127117_route01.vue') },
      { path: '/4111128108_route02', component: () => import('pages/trip/4111128108_route02.vue') },
      { path: '/4111128114_route09', component: () => import('pages/trip/4111128114_route09.vue') },
      { path: '/5111126114_route05', component: () => import('pages/trip/5111126114_route05.vue') },
      { path: '/5111127109_route10', component: () => import('pages/trip/5111127109_route10.vue') },
      { path: '/5111127115_route14', component: () => import('pages/trip/5111127115_route14.vue') },
      { path: '/5111128107_route13', component: () => import('pages/trip/5111128107_route13.vue') },
      { path: '/5111128114_route13', component: () => import('pages/trip/5111128114_route13.vue') },

      //Administration
      { path: '/administration', component: () => import('pages/Administration.vue') },
      //Notification
      { path: '/seenotifications', component: () => import('pages/SeeNotifications.vue') },
      { path: '/addalerts', component: () => import('pages/AddAlerts.vue') },
      { path: '/profile', component: () => import('pages/Profile.vue') },

      // Calendar
      { path: '/calendar', component: () => import('pages/Calendar.vue') }


    ],
    meta: {
      requiresAuth: true
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
