<script setup>
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";

import { TvIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <SidebarLayout>
    <div class="space-y-8 divide-y divide-gray-200 divide-gray-200">
      <div>
        <h1 class="text-2xl leading-6">Icon exmaple</h1>
        <p class="mt-3">icon with different sytles</p>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">Simple Icon</label>
        </div>
        <div class="lg:col-span-2 inline-flex">
          <div class="card click block m-3">
            <TvIcon class="h-5 w-5 m-auto" />
            <div>Iconxxx</div>
          </div>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
