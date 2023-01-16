<script setup>
import { validator } from "@/utils/index.js";

import { ref, computed } from "vue";

import { ExclamationCircleIcon, InformationCircleIcon, CheckIcon } from "@heroicons/vue/24/outline";

import SidebarLayout from "@/layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "@/components/core/breadcrumb/BreadCrumb.vue";

const breadcrumb_list = [
  { name: "example", href: "#", active: false },
  { name: "input", href: "#", active: false },
  { name: "checkbox", href: "#", active: true },
];
</script>

<template>
  <SidebarLayout>
    <BreadCrumb :pages="breadcrumb_list"></BreadCrumb>

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <label for="email">Email1</label>
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
      </div>
    </div>
  </SidebarLayout>
</template>
