<script setup>
import { ref } from "vue";
import SidebarLayout from "../../../../layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "../../../../components/core/breadcrumb/BreadCrumb.vue";
import SimplePlainSelect from "../../../../components/core/select/SimplePlainSelect.vue";

const breadcrumb_list = [
  { name: "example", href: "#", active: false },
  { name: "form", href: "#", active: false },
  { name: "simple_status_select", href: "#", active: true },
];

var options = ["xx1", "xx2", "xx3"];

//const selected = ref(null)  //if no selected item yet
const selected = ref("xx2");
</script>

<template>
  <SidebarLayout>
    <BreadCrumb :pages="breadcrumb_list"></BreadCrumb>
    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="box">
        <label>SimplePlainSelect</label>
        <SimplePlainSelect :options="options" v-model="selected" :placeholder="'please select'"></SimplePlainSelect>
        <p class="mt-2">selected value: {{ selected ? selected : "not selected" }}</p>
      </div>
    </div>
  </SidebarLayout>
</template>
