<script setup>
import { validator } from "@/utils/index.js";

import { ref, computed } from "vue";

import { ExclamationCircleIcon, InformationCircleIcon, CheckIcon } from "@heroicons/vue/24/outline";

import SidebarLayout from "@/layouts/sidebar/SidebarLayout.vue";
</script>

<template>
  <SidebarLayout>
    <div class="space-y-8 divide-y divide-gray-200 divide-gray-200">
      <div>
        <h1 class="text-2xl leading-6">Examples of Checkbox input</h1>
        <p class="mt-3">Different types of checkbox styles</p>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">Sizes</label>
          <p>Checkbox with different size</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <input type="checkbox" class="sm mr-3" />
          <input type="checkbox" class="mr-3" />
          <input type="checkbox" class="lg mr-3" />
          <input type="checkbox" class="xl mr-3" />
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
