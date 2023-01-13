<script setup>
import { ref } from "vue";
import SidebarLayout from "../../../../layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "../../../../components/core/breadcrumb/BreadCrumb.vue";
import SimpleStatusSelect from "../../../../components/core/select/SimpleStatusSelect.vue";

const breadcrumb_list = [
  { name: "example", href: "#", active: false },
  { name: "form", href: "#", active: false },
  { name: "simple_status_select", href: "#", active: true },
];

var options = [
  { name: "txt1", active: false },
  { name: "txt2", active: false },
  { name: "txt3", active: true },
];

//const selected = ref(null)  //if no selected item yet
const selected = ref(options[1]);
</script>

<template>
  <SidebarLayout>
    <BreadCrumb :pages="breadcrumb_list"></BreadCrumb>

    <div class="space-y-8 divide-y divide-gray-200 divide-gray-200">
      <div>
        <h1 class="text-xl leading-6">SimpleStatusSelect</h1>
        <p class="mt-3">demo of a simple select with status</p>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">SimpleStatusSelect</label>
          <p>{{ selected ? selected : "not selected" }}</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <SimpleStatusSelect :options="options" v-model="selected" :placeholder="'please select'"></SimpleStatusSelect>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
