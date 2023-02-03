<script setup>
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";
import { CreditCardIcon } from "@heroicons/vue/24/outline";
import { reactive } from "vue";

import Tab from "@/components/core/tab/Tab.vue";

const tabs_header = reactive([
  { name: "Step1", href: "#", icon: CreditCardIcon, active: true },
  { name: "Step2", href: "#", icon: CreditCardIcon, active: false },
  { name: "Step3", href: "#", icon: CreditCardIcon, active: false },
  { name: "Step4", href: "#", icon: CreditCardIcon, active: false },
]);
</script>

<template>
  <SidebarLayout>
    <div class="space-y-8">
      <div>
        <h1 class="text-2xl leading-6">Tab of steps</h1>
        <p class="mt-3">demo of a steps</p>
      </div>

      <tab v-model:header="tabs_header" />
      <div v-show="tabs_header[0].active">Step1 content</div>
      <div v-show="tabs_header[1].active">Step2 content</div>
      <div v-show="tabs_header[2].active">Step3 content</div>
      <div v-show="tabs_header[3].active">Step4 content</div>
    </div>
  </SidebarLayout>
</template>
