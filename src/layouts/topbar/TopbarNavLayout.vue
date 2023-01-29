<script setup>
import Fade from "@/components/core/overlay/Fade.vue";

import LanMenu from "../right_menu/LanMenu.vue";
import AuthMenu from "../right_menu/AuthMenu.vue";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import Footer from "../Footer.vue";

import logImgUrl from "../../assets/logo.svg";

import { useI18n } from "vue-i18n";
import lang_message from "./topbar_lang"
const { t } = useI18n({messages:lang_message});

const props = defineProps(["pages"]);
</script>

<template>
  <div class="topbar">
    <Disclosure as="nav" class="nav" v-slot="{ open }">
      <div class="top-wrap">
        <div class="mobile-top">
          <!-- Mobile menu button -->
          <DisclosureButton class="btn-wrap">
            <Bars3Icon v-if="!open" />
            <XMarkIcon v-else />
          </DisclosureButton>
        </div>

        <div class="middle">
          <div class="logo">
            <img  :src="logImgUrl" />
          </div>
          <div class="text-wrap">
            <router-link :to="page.href" v-for="page in pages" v-bind:class="{ ' border-b-2  border-indigo-500': page.active }" class="link">{{ t(page.name) }}</router-link>
          </div>
        </div>

        <div class="right">
          <LanMenu />
          <AuthMenu />
        </div>
      </div>

      <DisclosurePanel class="mobile-menu">
        <router-link to="/register" class="link">{{ t("register") }}</router-link>
        <router-link to="/signin" class="link">{{ t("sign_in") }}</router-link>
        <router-link to="/signout" class="link">{{ t("sign_out") }}</router-link>
      </DisclosurePanel>
    </Disclosure>

    <fade>
      <main>
        <slot></slot>
      </main>
    </fade>
  </div>
  <Footer></Footer>
</template>
