<script setup>
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";
import { UserIcon, CreditCardIcon, UsersIcon } from "@heroicons/vue/24/outline";
import { reactive } from "vue";

const tabs = reactive({
  Applied: { href: "#", icon: UserIcon, count: "52", active: true },
  Interview: { href: "#", icon: UsersIcon, count: "4", active: false },
  Offer: { href: "#", icon: CreditCardIcon, count: "1999", active: false },
  Disqualified: { href: "#", icon: CreditCardIcon, count: "0", active: false },
});

function tab_click(tab_name) {
  for (var name in tabs) {
    tabs[name].active = false;
  }
  tabs[tab_name].active = true;
}
</script>

<template>
  <SidebarLayout>
    <div class="space-y-8">
      <div>
        <h1 class="text-2xl leading-6">Tab</h1>
        <p class="mt-3">demo of a tab</p>
      </div>

      <nav class="tab">
        <a v-for="(tab, name) in tabs" :key="name" href="#" @click="tab_click(name)" :class="[tab.active ? 'active' : 'inactive']">
          <component :is="tab.icon" :class="[tab.active ? 'active' : 'inactive']" />
          {{ name }}
          <span v-if="tab.count" :class="[tab.active ? 'active' : 'inactive']">{{ tab.count }}</span>
        </a>
      </nav>

      <div :class="[tabs['Applied'].active ? '' : 'hidden']">Applied content</div>
      <div :class="[tabs['Interview'].active ? '' : 'hidden']">Interview content</div>
      <div :class="[tabs['Offer'].active ? '' : 'hidden']">Offer content</div>
      <div :class="[tabs['Disqualified'].active ? '' : 'hidden']">Disqualified content</div>
    </div>
  </SidebarLayout>
</template>
