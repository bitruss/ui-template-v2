<script setup>

import api from "@/api"
import useAuthStore from "@/stores/auth";
 

import TopbarNavLayout from "../../layouts/auth/TopbarNavLayout.vue";
import Divider from "../../components/core/divider/Divider.vue";

import { UserPlusIcon, CursorArrowRaysIcon } from "@heroicons/vue/24/solid";
import { EnvelopeIcon, KeyIcon, PaperAirplaneIcon, CalculatorIcon, LockClosedIcon, CheckIcon } from "@heroicons/vue/24/outline";
import captchaImgUrl from "../../assets/captcha.png";

import { ref, computed } from "vue";
import { validator } from "@/utils/index.js";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const pages = [
  { name: "sign_in", href: "/signin", active: false },
  { name: "register", href: "/register", active: true },
  { name: "reset_pass", href: "/resetpass", active: false },
];

/////input ///////
let email = ref("");
let validate_email = computed(() => {
  return email.value == "" ? true : validator.validateEmail(email.value);
});

////
let password = ref("");
let validate_password = computed(() => {
  return password.value == "" ? true : validator.validatePassword(password.value);
});
//
let password_again = ref("");
let validate_password_again = computed(() => {
  return password.value === password_again.value;
});

//
let captcha = ref("");
//
let vcode = ref("");
//
let validate_register_ready = computed(() => {
  if (validate_email.value && email.value != "" &&
   validate_password.value && password.value != "" &&
    validate_password_again.value && password_again.value != "" &&
     captcha.value !== "" && vcode.value !== "") {
    return true;
  }
  return false;
});
////

async function submit_reg() {
  let resp = await api.user.register(email.value, password.value, captcha.value, vcode.value);
    if (resp.err != null || resp.result.meta_status < 0) {
      console.log(resp)
    } else {
      const auth_store = useAuthStore();
      auth_store.setToken(resp.result.token);
      window.location = "/";
    }
}

</script>

<template>
  <TopbarNavLayout :pages="pages">
    <div class="max-w-lg m-auto items-center justify-center px-6 py-12 lg:mt-12">
      <h3 class="text-2xl text-gray-500">{{ t("register") }}</h3>
      <p class="mb-5 text-gray-400">Welcome to register page</p>

      <div class="input-wrap">
        <div class="prefix">
          <EnvelopeIcon class="icon" />
        </div>

        <input id="email" name="email" type="email" autocomplete="email" v-model="email" :class="[validate_email ? '' : 'err', 'rounded relative pl-10']" placeholder="your email" />
        <div :class="validate_email && email != '' ? 'visible' : 'invisible'" class="suffix">
          <CheckIcon class="h-5 w-5 text-success" />
        </div>
      </div>

      <div class="-space-y-px mt-3 mb-3">
        <div class="input-wrap">
          <div class="prefix">
            <LockClosedIcon class="icon" />
          </div>
          <input id="password" name="password" type="password" v-model="password" v-tippy="{ placement: 'right', content: t('password_rule'), trigger: 'focus' }" :class="[validate_password ? '' : 'err', 'relative pl-10 rounded-t']" autocomplete="current-password" placeholder="your password" />

          <div :class="validate_password && password != '' ? 'visible' : 'invisible'" class="suffix">
            <CheckIcon class="h-5 w-5 text-success" />
          </div>
        </div>

        <div class="input-wrap">
          <div class="prefix">
            <LockClosedIcon class="icon" />
          </div>
          <input id="password_again" name="password_again" type="password" v-model="password_again" autocomplete="current-password" :class="[validate_password_again ? '' : 'err', 'relative pl-10 rounded-b']" placeholder="Password again" />
          <div :class="validate_password_again && password_again != '' ? 'visible' : 'invisible'" class="suffix">
            <CheckIcon class="h-5 w-5 text-success" />
          </div>
        </div>
      </div>

      <div class="btn-input-wrap mb-3">
        <div class="input-wrap">
          <div class="prefix">
            <CalculatorIcon class="icon" />
          </div>
          <input type="text" name="captcha" id="captcha" v-model="captcha" class="pl-10" placeholder="input the captcha" />
        </div>
        <div class="btn" v-tippy="{ placement: 'bottom', content: 'click to change captcha' }">
          <img class="captcha" :src="captchaImgUrl" />
        </div>
      </div>

      <div class="btn-input-wrap">
        <div class="input-wrap">
          <div class="prefix">
            <KeyIcon class="icon" />
          </div>
          <input type="text" name="vcode" id="vcode" v-model="vcode" class="pl-10" placeholder="input your v-code" />
        </div>
        <div class="btn" v-tippy="{ placement: 'bottom', content: 'send the v-code to my email' }"><PaperAirplaneIcon /><span>Send</span></div>
      </div>

      <div @click="submit_reg" :class="[validate_register_ready ? '' : 'disabled', ' btn-primary w-full relative mt-3 mb-3']"><UserPlusIcon class="icon dark absolute left-3" />Register</div>

      <Divider>{{ t("or") }}</Divider>

      <router-link to="/signin" class="mt-3 btn-secondary w-full relative">
        <CursorArrowRaysIcon class="icon dark absolute left-3" aria-hidden="true" />
        sign in to an existing account
      </router-link>
    </div>
  </TopbarNavLayout>
</template>
