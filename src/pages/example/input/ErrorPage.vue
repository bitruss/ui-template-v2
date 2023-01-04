<script setup>
import validator from "@/utils/index.js";

import { ref, computed } from "vue";

import { EnvelopeIcon, BarsArrowUpIcon, UsersIcon } from "@heroicons/vue/24/outline";

import SidebarLayout from "@/layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "@/components/core/breadcrumb/BreadCrumb.vue";

const breadcrumb_list = [
  { name: "example", href: "#", active: false },
  { name: "input", href: "#", active: false },
  { name: "error", href: "#", active: true },
];

///
let email = ref("");
let validate_email = computed(() => {
  return email.value == "" ? true : validator.validateEmail(email.value);
});
///
</script>

<template>
  <SidebarLayout>
    <BreadCrumb :pages="breadcrumb_list"></BreadCrumb>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <!---->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="email" name="email" id="email" placeholder="input your email" v-model="email" :class="validate_email ? '' : 'border-red-300 focus:ring-red-500 focus:border-red-500 text-red-900'" class="block w-full rounded-md pr-10 border-gray-300 shadow-sm focus:outline-none sm:text-sm" aria-invalid="true" aria-describedby="email-error" />
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
              </div>
            </div>
            <p :class="validate_email ? 'invisible' : ''" class="mt-2 text-sm text-red-600" id="email-error">Please input a correct email</p>
          </div>
          <!---->
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
