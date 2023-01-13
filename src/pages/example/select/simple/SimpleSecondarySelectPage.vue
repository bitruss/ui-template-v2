<script setup>
import { ref } from "vue";
import SidebarLayout from "../../../../layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "../../../../components/core/breadcrumb/BreadCrumb.vue";
import SimpleSecondarySelect from "../../../../components/core/select/SimpleSecondarySelect.vue";

const breadcrumb_list = [
  { name: "example", href: "#", active: false },
  { name: "select", href: "#", active: false },
  { name: "simple_secondary_select", href: "#", active: true },
];

var options = [
  { name: "txt1", secondary: "s-1" },
  { name: "txt2", secondary: "s-2" },
  { name: "txt3", secondary: "s-3" },
];

const selected = ref(null); //if no selected item yet
//const selected = ref(options[1]);
</script>

<template>
  <SidebarLayout>
    <BreadCrumb :pages="breadcrumb_list"></BreadCrumb>

    <div class="space-y-8 divide-y divide-gray-200 divide-gray-200">
      <div>
        <h1 class="text-xl leading-6">SimpleSecondarySelect</h1>
        <p class="mt-3">Select with a secondary label</p>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">SimpleSecondarySelect</label>
          <p>{{ selected ? selected : "not selected" }}</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <SimpleSecondarySelect :options="options" v-model="selected" :placeholder="'please select'"></SimpleSecondarySelect>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
