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
    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <label>SimpleStatusSelect</label>
        <SimpleStatusSelect :options="options" v-model="selected" :placeholder="'please select'"></SimpleStatusSelect>
        <p class="mt-2">{{ selected ? selected : "not selected" }}</p>
      </div>
    </div>
  </SidebarLayout>
</template>
