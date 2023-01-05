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
    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <label>SimpleSecondarySelect</label>
        <SimpleSecondarySelect :options="options" v-model="selected" :placeholder="'please select'"></SimpleSecondarySelect>
        <p class="mt-2">{{ selected ? selected : "not selected" }}</p>
      </div>
    </div>
  </SidebarLayout>
</template>
