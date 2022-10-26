// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from 'vuex'
import VueCookies from 'vue-cookies';
import VueGtag from "vue-gtag";

import DefaultLayout from '~/layouts/Default.vue'
import LayoutCourse from '~/layouts/Course.vue'
import AcademyList from '~/components/List.vue'
import LessonResult from '~/components/LessonResult.vue'

import '~/assets/css/index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { 
  faAward, 
  faCircleChevronRight, 
  faFlagCheckered, 
  faPlus, 
  faGraduationCap, 
  faArrowPointer, 
  faFile,
  faClock,
  faScrewdriverWrench,
  faBars,
  faCircleXmark,
  faForward,
  faArrowRightLong,
  faArrowLeftLong,
  // faRobot
 } from '@fortawesome/free-solid-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import default styles for code highlighting and lib itself */ 
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/default.css'

export default function (Vue, { router, head, isClient, appOptions }) {
  // Implementing code highlighting blocks
  Vue.use(VueHighlightJS);
  Vue.use(Vuex)
  Vue.use(VueCookies, { expire: '30d'});

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('LayoutCourse', LayoutCourse)
  Vue.component('List', AcademyList)
  Vue.component('Result', LessonResult)
  /* add font awesome icon component */
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  /* add icons to the library */
  library.add(
    faAward, 
    faCircleChevronRight, 
    faFlagCheckered, 
    faPlus, 
    faGraduationCap, 
    faArrowPointer, 
    faFile,
    faClock,
    faScrewdriverWrench,
    faBars,
    faCircleXmark,
    faForward,
    faArrowRightLong,
    faArrowLeftLong
    // faRobot
  )

  Vue.prototype.$discord = 'https://discord.gg/kFPqNktKrJ'
  Vue.prototype.$website = 'https://robonomics.academy'

    
  appOptions.store = new Vuex.Store({
    state: {
      userTracker: {},
      showHeader: true,
    },
   mutations: {
      SET_USER_TRACKER(state, userTracker) {
        state.userTracker = userTracker;
      },
      TOGGLE_SHOW_HEADER(state, showHeader) {
        state.showHeader = showHeader
      }
   },
  });

  Vue.use(VueGtag, {
    config: { id: "AW-844066363" }
  });
  
}
