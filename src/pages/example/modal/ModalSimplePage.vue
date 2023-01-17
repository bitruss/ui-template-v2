<script setup>
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";

import { DialogTitle } from "@headlessui/vue";
import { ref, watch } from "vue";
import Modal from "../../../components/core/modal/Modal.vue";
import { CheckIcon } from "@heroicons/vue/24/outline";

const open = ref(true);

watch(open, (new_open) => {
  console.log("modal new open :" + new_open);
});

function setopen(){
  open.value=true
}

</script>

<template>
  <SidebarLayout>

    <button class="btn-primary" @click="setopen">Open Modal Window</button>

    <Modal v-model:open="open">
      <template v-slot:default>
        <div>
          <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Payment Successful xxx</DialogTitle>
            <div class="mt-2">
              <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <button type="button" class=" w-full justify-center w-full btn-primary " @click="open = false">Go back to dashboard</button>
        </div>
      </template>

      <template v-slot:footer>
        <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false">Deactivate</button>
        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false" ref="cancelButtonRef">Cancel</button>
      </template>
    </Modal>
  </SidebarLayout>
</template>
