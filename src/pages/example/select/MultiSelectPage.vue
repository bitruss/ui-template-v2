<script setup>
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";
import { ref } from "vue";
import Treeselect from "vue3-treeselect";

const options = [
  {
    id: "fruits",
    label: "Fruits",
    children: [
      {
        id: "apple",
        label: "Apple 🍎",
        isNew: true,
      },
      {
        id: "grapes",
        label: "Grapes 🍇",
      },
      {
        id: "pear",
        label: "Pear 🍐",
      },
      {
        id: "strawberry",
        label: "Strawberry 🍓",
      },
      {
        id: "watermelon",
        label: "Watermelon 🍉",
      },
    ],
  },
  {
    id: "vegetables",
    label: "Vegetables",
    children: [
      {
        id: "corn",
        label: "Corn 🌽",
      },
      {
        id: "carrot",
        label: "Carrot 🥕",
      },
      {
        id: "eggplant",
        label: "Eggplant 🍆",
      },
      {
        id: "tomato",
        label: "Tomato 🍅",
      },
    ],
  },
];

let value = ref(null);
</script>

<template>
  <SidebarLayout>
    <div class="space-y-8 divide-y divide-gray-200 divide-gray-200">
      <div>
        <h1 class="text-2xl leading-6">Multi Select</h1>
        <p class="mt-3">Multi select example</p>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex"> Multi select </label>
          <p>value:{{ value }}</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <treeselect v-model="value" :multiple="true" :options="options" />
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
