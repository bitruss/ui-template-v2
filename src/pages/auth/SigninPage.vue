<script setup>
import TopbarNavLayout from "../../layouts/topbar/TopbarNavLayout.vue";
import Divider from "../../components/core/divider/Divider.vue";
import { EnvelopeIcon, LockClosedIcon, CalculatorIcon, CheckIcon } from "@heroicons/vue/24/outline";
import { UserPlusIcon, LockClosedIcon as LockClosedIconSolid } from "@heroicons/vue/20/solid";

import { ref, computed } from "vue";
import { validator } from "@/utils/index.js";

import captchaImgUrl from "../../assets/captcha.png";
import { useI18n } from "vue-i18n";
import lang from "./auth_lang";
const { t } = useI18n({ messages: lang });

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
</script>

<template>
  <TopbarNavLayout>
    <div class="max-w-lg m-auto items-center justify-center px-6 py-12 lg:mt-12">
      <h3 class="text-2xl text-gray-500">{{ t("sign_in") }}</h3>
      <p class="mb-5 text-gray-400">{{ t("welcome_signin") }}</p>

      <div class="-space-y-px mt-3 mb-3">
        <div class="input-wrap">
          <div class="prefix">
            <EnvelopeIcon class="icon" />
          </div>
          <input id="email" name="email" type="email" autocomplete="email" v-model="email" :class="[validate_email ? '' : 'err', 'relative pl-10 rounded-t']" placeholder="your email" />
          <div :class="validate_email && email != '' ? 'visible' : 'invisible'" class="suffix">
            <CheckIcon class="h-5 w-5 text-success" />
          </div>
        </div>

        <div class="input-wrap">
          <div class="prefix">
            <LockClosedIcon class="icon" />
          </div>
          <input id="password" name="password" type="password" v-model="password" v-tippy="{ placement: 'right', content: t('password_rule'), trigger: 'focus' }" :class="[validate_password ? '' : 'err', 'relative pl-10 rounded-b']" autocomplete="current-password" placeholder="your password" />

          <div :class="validate_password && password != '' ? 'visible' : 'invisible'" class="suffix">
            <CheckIcon class="h-5 w-5 text-success" />
          </div>
        </div>
      </div>

      <div class="btn-input-wrap mb-3">
        <div class="input-wrap">
          <div class="prefix">
            <CalculatorIcon class="icon" />
          </div>
          <input type="text" name="captcha" id="captcha" class="pl-10"  :placeholder="t('input_captcha')" />
        </div>
        <div class="btn" v-tippy="{ placement: 'bottom', content:t('change_captcha') }">
          <img class="captcha" :src="captchaImgUrl" />
        </div>
      </div>

      <router-link to="/resetpass" class="a-primary">{{ t("forget_pass") }}</router-link>

      <div class="btn-primary w-full relative mt-3 mb-3"><LockClosedIconSolid class="icon dark absolute left-3" />{{ t("sign_in") }}</div>

      <Divider>{{ t("or") }}</Divider>

      <router-link to="/register" class="mt-3 btn-secondary w-full relative">
        <UserPlusIcon class="icon dark absolute left-3" />
        {{ t("no_account_yet") }}
      </router-link>
    </div>
  </TopbarNavLayout>
</template>
