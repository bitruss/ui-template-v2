<script setup>
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";

import { ref, watch } from "vue";
import Modal from "../../../components/core/modal/Modal.vue";

const open = ref(false);
const open_withclose = ref(false);

const father = ref(false);
const child = ref(false);
</script>

<template>
  <SidebarLayout>
    <div class="space-y-8 divide-y divide-gray-200 divide-gray-200">
      <div>
        <h1 class="text-2xl leading-6">Examples of Modal</h1>
        <p class="mt-3">Different types of modal</p>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">Modal with close</label>
          <p>A modal window with margin-click close</p>
          <p>and right top close btn</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <button class="btn-primary" @click="open_withclose = true">Open Closable Modal Window</button>
          <Modal v-model:open="open_withclose">
            <template v-slot:body>
              <div class="mt-5">
                <label>A disable close style modal</label>
                <p>you can click buttons or dark space to close modal window</p>
              </div>
            </template>
            <template v-slot:footer>
              <button type="button" class="btn-err mr-3" @click="open_withclose = false">Deactivate</button>
              <button type="button" class="btn-secondary mr-3" @click="open_withclose = false">Cancel</button>
            </template>
          </Modal>
        </div>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">Modal without close</label>
          <p>A modal window without margin-click close</p>
          <p>and right top close btn</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <button class="btn-primary" @click="open = true">Open Modal Window without close btn</button>
          <Modal v-model:open="open" :disable-close="true">
            <template v-slot:body>
              <div class="mt-5">
                <label>A disable close style modal</label>
                <p>you can only click buttons below to close modal window</p>
              </div>
            </template>
            <template v-slot:footer>
              <button type="button" class="btn-err mr-3" @click="open = false">Deactivate</button>
              <button type="button" class="btn-secondary mr-3" @click="open = false">Cancel</button>
            </template>
          </Modal>
        </div>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">Modal of father-child</label>
          <p>A modal window with child</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <button class="btn-primary" @click="father = true">Open father modal</button>
          <Modal v-model:open="father">
            <template v-slot:body>
              <div class="mt-5">
                <label>father - child window</label>
                <p>this is the father window</p>
              </div>
            </template>
            <template v-slot:footer>
              <button type="button" class="btn-secondary mr-3" @click="father = false">cancel</button>
              <button type="button" class="btn-primary mr-3" @click="child = true">Open child modal</button>
            </template>
          </Modal>
          <Modal v-model:open="child">
            <template v-slot:body>
              <div class="mt-5">
                <label>father - child window</label>
                <p>this is the child window</p>
              </div>
            </template>
            <template v-slot:footer>
              <button type="button" class="btn-secondary mr-3" @click="child = false">Cancel</button>
            </template>
          </Modal>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>