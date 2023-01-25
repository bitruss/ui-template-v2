<script setup>
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";

///multi-lan
import { useI18n } from "vue-i18n";
import lang_message from "./welcome_lang";
const { t } = useI18n({ messages: lang_message });
//
</script>

<template>
  <SidebarLayout>
    <div class="space-y-8">
      <div>
        <h1 class="text-2xl leading-6">Welcome</h1>
        <p class="mt-3">this is a weclome page</p>
      </div>

      <label>{{ t("msg") }}</label>
    </div>
  </SidebarLayout>
</template>
