<script>
export default {
  name: "SidebarMenu",
};
</script>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { set_active } from "./MenuConfig";

defineProps(["navigation"]);
</script>

<template>
  <div v-for="item in navigation" :key="item.name">
    <div v-if="!item.children">
      <router-link :to="item.href" @click="set_active(item.mid)"  :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md']">
        <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
        {{ item.name }}
      </router-link>
    </div>
    <Disclosure as="div" v-else class="space-y-1" v-slot="{ open }" :defaultOpen="item.open">
      <DisclosureButton :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500']">
        <component :is="item.icon" class="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
        <span class="flex-1">{{ item.name }}</span>
        <svg :class="[open ? 'text-gray-400 rotate-90' : 'text-gray-300', 'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400']" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
        </svg>
      </DisclosureButton>
      <DisclosurePanel class="space-y-1">
        <template v-for="subItem in item.children" :key="subItem.name">
          <router-link v-if="!subItem.children" @click="set_active(subItem.mid)" :to="subItem.href" :class="[subItem.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900']">{{ subItem.name }}</router-link>
          <Disclosure as="div" v-else class="space-y-1" v-slot="{ open }" :defaultOpen="subItem.open">
            <DisclosureButton :class="[subItem.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pl-11 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500']">
              <component :is="subItem.icon" class="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              <span class="flex-1">{{ subItem.name }}</span>
              <svg :class="[open ? 'text-gray-400 rotate-90' : 'text-gray-300', 'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400']" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
              </svg>
            </DisclosureButton>
            <DisclosurePanel class="space-y-1 pl-12">
              <SidebarMenu :navigation="subItem.children"></SidebarMenu>
            </DisclosurePanel>
          </Disclosure>
        </template>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>
