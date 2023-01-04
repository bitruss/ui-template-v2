<script setup>
 
import { ref } from "vue";
import SidebarLayout from "../../../../layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "../../../../components/breadcrumb/BreadCrumb.vue";
import SimpleStatusSelect from "../../../../components/select/SimpleStatusSelect.vue";
 

const breadcrumb_list = [
  { name: "example", href: "#", active: false },
  { name: "form", href: "#", active: false },
  { name: "simple_status_select", href: "#", active: true },
];

 
var options=[
  {text:"txt1",active:false},
  {text:"txt2",active:false},
  {text:"txt3",active:true},
]

//const selected = ref(null)  //if no selected item yet
const selected = ref(options[1])  
</script>

<template>
  <SidebarLayout>
    <BreadCrumb :pages="breadcrumb_list"></BreadCrumb>
    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class=" rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <h2>#1</h2>
          <SimpleStatusSelect :options="options" v-model="selected" :placeholder='"please select"' ></SimpleStatusSelect>
          <div>{{selected?selected:"not selected"}}</div>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
