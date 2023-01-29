<script setup>
import { reactive } from "vue";

import TopbarNavLayout from "../../layouts/topbar/TopbarNavLayout.vue";
import Divider from "../../components/core/divider/Divider.vue";

import { UserPlusIcon, CursorArrowRaysIcon } from "@heroicons/vue/24/solid";
import { EnvelopeIcon, KeyIcon, PaperAirplaneIcon, CalculatorIcon, LockClosedIcon } from "@heroicons/vue/24/outline";

import captchaImgUrl from "../../assets/captcha.png";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const pages = [
  { name: "sign_in", href: "/signin", active: false },
  { name: "register", href: "/register", active: false },
  { name: "reset_pass", href: "/resetpass", active: true },
];
</script>

<template>
  <TopbarNavLayout :pages="pages" :test="test">
    <div class="max-w-lg m-auto items-center justify-center px-6 py-12 lg:mt-12">
      <h3 class="text-2xl text-gray-500">{{ t("reset_pass") }}</h3>
      <p class="mb-5 text-gray-400">Welcome to reset password page</p>

      <div class="input-wrap">
        <div class="prefix">
          <EnvelopeIcon class="icon" />
        </div>
        <input class="rounded pl-10" type="email" name="email" id="email" placeholder="you@email" />
      </div>

      <div class="-space-y-px mt-3 mb-3">
        <div class="input-wrap">
          <div class="prefix">
            <LockClosedIcon class="icon" />
          </div>
          <input id="new_password" name="new_password" type="password" class="relative pl-10 rounded-t" placeholder="new password" />
        </div>

        <div class="input-wrap">
          <div class="prefix">
            <LockClosedIcon class="icon" />
          </div>
          <input id="new_password_again" name="new_password_again" type="password" class="relative pl-10 rounded-b" placeholder="new password again" />
        </div>
      </div>

      <div class="btn-input-wrap mb-3">
        <div class="input-wrap">
          <div class="prefix">
            <CalculatorIcon class="icon" />
          </div>
          <input type="email" name="email" id="email" class="pl-10" placeholder="input the captcha" />
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
          <input type="email" name="email" id="email" class="pl-10" placeholder="input your v-code" />
        </div>
        <div class="btn" v-tippy="{ placement: 'bottom', content: 'send the v-code to my email' }"><PaperAirplaneIcon /><span>Send</span></div>
      </div>

      <div class="btn-primary w-full relative mt-3 mb-3"><UserPlusIcon class="icon dark absolute left-3" />Reset</div>

      <Divider>{{ t("or") }}</Divider>

      <router-link to="/signin" class="mt-3 btn-secondary w-full relative">
        <CursorArrowRaysIcon class="icon dark absolute left-3" aria-hidden="true" />
        sign in to an existing account
      </router-link>
    </div>
  </TopbarNavLayout>
</template>
