<script setup>
import TopbarNavLayout from "../../layouts/topbar/TopbarNavLayout.vue";
import Divider from "../../components/core/divider/Divider.vue";

import { UserPlusIcon, CursorArrowRaysIcon } from "@heroicons/vue/24/solid";
import { EnvelopeIcon, KeyIcon, PaperAirplaneIcon, CalculatorIcon, LockClosedIcon } from "@heroicons/vue/24/outline";

import captchaImgUrl from "../../assets/captcha.png";
import { useI18n } from "vue-i18n";
import lang from "./auth_lang";
const { t } = useI18n({ messages: lang });
</script>

<template>
  <TopbarNavLayout>
    <div class="max-w-lg m-auto items-center justify-center px-6 py-12 lg:mt-12">
      <h3 class="text-2xl text-gray-500 mb-3">{{ t("reset_pass") }}</h3>
      <div class="input-wrap">
        <div class="prefix">
          <EnvelopeIcon class="icon" />
        </div>
        <input class="rounded pl-10" type="email" name="email" id="email" placeholder="email" />
      </div>

      <div class="-space-y-px mt-3 mb-3">
        <div class="input-wrap">
          <div class="prefix">
            <LockClosedIcon class="icon" />
          </div>
          <input id="new_password" name="new_password" type="password" class="relative pl-10 rounded-t" :placeholder="t('new_password')" />
        </div>

        <div class="input-wrap">
          <div class="prefix">
            <LockClosedIcon class="icon" />
          </div>
          <input id="new_password_again" name="new_password_again" type="password" class="relative pl-10 rounded-b" :placeholder="t('new_password_again')" />
        </div>
      </div>

      <div class="btn-input-wrap mb-3">
        <div class="input-wrap">
          <div class="prefix">
            <CalculatorIcon class="icon" />
          </div>
          <input type="text" name="captcha" id="captcha" v-model="captcha" class="pl-10"  :placeholder="t('input_captcha')" />
        </div>
        <div class="btn" v-tippy="{ placement: 'bottom', content: t('change_captcha') }">
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
        <div class="btn" v-tippy="{ placement: 'bottom', content: t('send_vcode_to_email') }"><PaperAirplaneIcon /><span>{{ t('send') }}</span></div>
      </div>

      <div class="btn-primary w-full relative mt-3 mb-3"><UserPlusIcon class="icon dark absolute left-3" />{{ t("submit") }}</div>

      <Divider>{{ t("or") }}</Divider>

      <router-link to="/signin" class="mt-3 btn-secondary w-full relative">
        <CursorArrowRaysIcon class="icon dark absolute left-3" aria-hidden="true" />
        {{t("sign_in_exist")}}
      </router-link>
    </div>
  </TopbarNavLayout>
</template>
