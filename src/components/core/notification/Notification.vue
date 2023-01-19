<script setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";
const props = defineProps(["open"]);
const emit = defineEmits(["update:open"]);

function setclose() {
  emit("update:open", false);
}
</script>
<template>
  <transition v-if="props.open" enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
    <div class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 relative">
      <button type="button" @click="setclose" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 absolute right-2 top-2">
        <span class="sr-only">Close</span>
        <XMarkIcon class="h-5 w-5" aria-hidden="true" />
      </button>
      <slot></slot>
    </div>
  </transition>
</template>
