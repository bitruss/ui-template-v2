<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { LanguageIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { inject } from "vue";
const setLang = inject("setLang");

const supported_langs = {
  en: "English",
  zh: "中文",
};
</script>

<template>
  <Menu as="div" class="relative ml-3">
    <div>
      <MenuButton type="button" class="rounded-full bg-white p-1 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <span class="sr-only">View notifications</span>
        <LanguageIcon class="h-6 w-6" aria-hidden="true" />
      </MenuButton>
    </div>
    <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuItem v-for="(langtxt, lancode) in supported_langs" v-slot="{ active }">
          <a href="#" @click="setLang(lancode)" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ langtxt }}</a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
