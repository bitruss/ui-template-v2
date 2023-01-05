<script setup>
import { validator } from "@/utils/index.js";

import { ref, computed } from "vue";

import { ExclamationCircleIcon, InformationCircleIcon } from "@heroicons/vue/24/outline";

import SidebarLayout from "@/layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "@/components/core/breadcrumb/BreadCrumb.vue";

console.log(validator);

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

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <!---->
        <div>
          <label for="email">
            Email
            <InformationCircleIcon class="ml-1 w-5 h-5" v-tippy="{ content: 'display error when email format is wrong' }"></InformationCircleIcon>
          </label>
          <div class="input-wrap">
            <input type="email" name="email" id="email" placeholder="input your email" v-model="email" :class="validate_email ? '' : 'err'" />
            <div :class="validate_email ? 'invisible' : ''" class="suffix">
              <ExclamationCircleIcon class="h-5 w-5 text-err" />
            </div>
          </div>
          <p :class="validate_email ? 'invisible' : ''" class="mt-2 text-err">Please input a correct email</p>
        </div>
        <!---->
      </div>
    </div>
  </SidebarLayout>
</template>
