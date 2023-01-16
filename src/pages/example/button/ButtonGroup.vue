<script setup>
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "../../../components/core/breadcrumb/BreadCrumb.vue";
import { EnvelopeIcon, PlusIcon } from "@heroicons/vue/24/solid";
import { EnvelopeIcon as EnvelopeOutlineIcon } from "@heroicons/vue/24/outline";

const breadcrumb_list = [
  { name: "example", href: "#", active: false },
  { name: "button", href: "#", active: false },
  { name: "group", href: "#", active: true },
];
</script>

<template>
  <SidebarLayout>
    <BreadCrumb :pages="breadcrumb_list"></BreadCrumb>

    <span class="inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2">
      <label for="select-all" class="sr-only">Select all</label>
      <input id="select-all" type="checkbox" name="select-all" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
    </span>
    <label for="message-type" class="sr-only">Select message type</label>
    <select id="message-type" name="message-type" class="-ml-px block w-full rounded-l-none rounded-r-md border border-gray-300 bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
      <option>Unread messages</option>
      <option>Sent messages</option>
      <option>All messages</option>
    </select>

    
  </SidebarLayout>
</template>
