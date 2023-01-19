<script setup>
import { ref } from "vue";
import { CheckCircleIcon } from "@heroicons/vue/24/outline";
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";
import Notification from "../../../components/core/notification/Notification.vue";

const notification1_open = ref(true);
</script>

<template>
  <SidebarLayout>
    <template v-slot:notification_holder>
      <Notification v-model:open="notification1_open">
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" />
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm font-medium text-gray-900">Successfully saved!</p>
              <p class="mt-1 text-sm text-gray-500">Anyone with a link can now view this file.</p>
            </div>
          </div>
        </div>
      </Notification>
    </template>

    <template>
      <div class="space-y-8 divide-y divide-gray-200 divide-gray-200">
        <div>
          <h1 class="text-2xl leading-6">Examples of Modal</h1>
          <p class="mt-3">Different types of modal</p>
        </div>
      </div>
    </template>
  </SidebarLayout>
</template>
