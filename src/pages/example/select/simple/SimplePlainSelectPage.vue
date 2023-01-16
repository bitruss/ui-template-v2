<script setup>
import { ref } from "vue";
import SidebarLayout from "../../../../layouts/sidebar/SidebarLayout.vue";

import SimplePlainSelect from "../../../../components/core/select/SimplePlainSelect.vue";

var options = ["xx1", "xx2", "xx3"];

//const selected = ref(null)  //if no selected item yet
const selected = ref("xx2");
</script>

<template>
  <SidebarLayout>
    <div class="space-y-8 divide-y divide-gray-200 divide-gray-200">
      <div>
        <h1 class="text-2xl leading-6">SimplePlainSelect</h1>
        <p class="mt-3">demo of a simple plain select</p>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">SimplePlainSelect</label>
          <p class="mt-2">selected value: {{ selected ? selected : "not selected" }}</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <SimplePlainSelect :options="options" v-model="selected" :placeholder="'please select'"></SimplePlainSelect>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
