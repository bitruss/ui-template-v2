<script setup>
import SidebarLayout from "@/layouts/sidebar/SidebarLayout.vue";
import Switch from "../../../components/core/switch/Switch.vue";
</script>

<template>
  <SidebarLayout>
    <div class="space-y-8 divide-y divide-gray-200 divide-gray-200">
      <div>
        <h1 class="text-2xl leading-6">Examples of Switch input</h1>
        <p class="mt-3">Different types of switch styles</p>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">Switch</label>
          <p>different sizes of switch :[sm default lg]</p>
        </div>
        <div class="lg:col-span-2 mt-2 flex items-center">
          <Switch class="sm mr-3" />
          <Switch />
          <Switch class="lg ml-3" />
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
