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

function setopen() {
  open.value = true;
}
</script>

<template>
  <SidebarLayout>
    <button class="btn-primary" @click="setopen">Open Modal Window</button>

    <Modal v-model:open="open" :disable-close="true">
      <template v-slot:body>
        
        <div class="mt-5">
          <label>A disable close style modal</label>
          <p> you can only click buttons below to close modal window </p>
        </div>
      </template>

      <template v-slot:footer>
        <button type="button" class="btn-err mr-3" @click="open = false">Deactivate</button>
        <button type="button" class="btn-secondary mr-3" @click="open = false">Cancel</button>
      </template>
    </Modal>
  </SidebarLayout>
</template>
