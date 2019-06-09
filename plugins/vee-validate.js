// import Vue from 'vue'
// import VeeValidate from 'vee-validate'

// Vue.use(VeeValidate,{
//     locale:'fa'
// });

import VeeValidate from 'vee-validate';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import validationMessages from 'vee-validate/dist/locale/fa';

Vue.use(VueI18n);

const i18n = new VueI18n();
i18n.locale = "fa"; // set a default locale (without it, it won't work)

Vue.use(VeeValidate, {
   i18nRootKey: 'validations', // customize the root path for validation messages.
   i18n,
   dictionary: {
    fa: validationMessages
   }
});