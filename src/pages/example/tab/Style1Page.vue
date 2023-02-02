<script setup>
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";
import { UserIcon, CreditCardIcon, UsersIcon } from "@heroicons/vue/24/outline";
import { reactive } from "vue";

import Tab from "@/components/core/tab/Tab.vue";

const tabs_header = reactive([
  { name: "Applied", href: "#", icon: UserIcon, count: "52", active: true },
  { name: "Interview", href: "#", icon: UsersIcon, count: "4", active: false },
  { name: "Offer", href: "#", icon: CreditCardIcon, count: "1999", active: false },
  { name: "Disqualified", href: "#", icon: CreditCardIcon, count: "0", active: false },
]);
</script>

<template>
  <SidebarLayout>
    <div class="space-y-8">
      <div>
        <h1 class="text-2xl leading-6">Tab</h1>
        <p class="mt-3">demo of a tab</p>
      </div>
      
      <tab v-model:header="tabs_header" />
      <div :class="[tabs_header[0].active ? '' : 'hidden']">Applied content</div>
      <div :class="[tabs_header[1].active ? '' : 'hidden']">Interview content</div>
      <div :class="[tabs_header[2].active ? '' : 'hidden']">Offer content</div>
      <div :class="[tabs_header[3].active ? '' : 'hidden']">Disqualified content</div>
    </div>
  </SidebarLayout>
</template>
