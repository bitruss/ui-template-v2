<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { UserCircleIcon, UserPlusIcon, PowerIcon, CursorArrowRaysIcon } from "@heroicons/vue/24/outline";
import useAuthStore from "@/stores/auth";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

function signout(){
  const auth_store = useAuthStore();
  auth_store.clear()
  window.location="/signin"
}

</script>

<template>
  <Menu as="div" class="relative ml-3">
    <div>
      <MenuButton type="button" class="rounded-full bg-white p-1 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <span class="sr-only">View notifications</span>
        <UserCircleIcon class="h-6 w-6" aria-hidden="true" />
      </MenuButton>
    </div>
    <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuItem v-slot="{ active }">
          <router-link to="/register" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
            <UserPlusIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
            {{t("register")}}
          </router-link>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <router-link to="/signin" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
            <CursorArrowRaysIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
            {{t("sign_in")}}
          </router-link>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <router-link @click="signout" to="/" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
            <PowerIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
            {{t("sign_out")}}
          </router-link>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
