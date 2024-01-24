import VueLazyload from 'vue-lazyload';
import AOS from "aos";
import i18n from '../i18n';
import BackToTop from 'vue-backtotop';
import router from '../router';
import store from "../store";
AOS.init({
  once: true,
  disable: "phone",
  duration: 600,
  easing: "ease-out-sine",
});
const GlobalComponents={
  install (Vue) {
    Vue.use(i18n)
    Vue.use(AOS)
    Vue.use(BackToTop)
    Vue.use(router)
    Vue.use(store)
    Vue.use(VueLazyload, {
      preLoad: 1.3,
      error: require('../assets/images/error.png'),
      loading: require('../assets/images/fading-loader.gif'),
      attempt: 1,
    })
  }
}

window.i18n=i18n;
export default GlobalComponents
