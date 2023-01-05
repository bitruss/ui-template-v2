<script setup>
import { InformationCircleIcon } from "@heroicons/vue/24/outline";

import SidebarLayout from "@/layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "@/components/core/breadcrumb/BreadCrumb.vue";

const breadcrumb_list = [
  { name: "example", href: "#", active: false },
  { name: "tippy", href: "#", active: false },
];
</script>

<template>
  <SidebarLayout>
    <BreadCrumb :pages="breadcrumb_list"></BreadCrumb>

    <div class="mt-5 grid grid-cols-12">
      <div class="overflow-hidden rounded-lg bg-white shadow col-span-12 lg:col-span-8 2xl:col-span-6">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <label class="text-lg">tippy style1<InformationCircleIcon class="m-1 w-5 h-5" v-tippy="{ content: 'tippy on the right' }"></InformationCircleIcon></label>
            <p class="mt-1">Default tippy on the right</p>
          </div>

          <div>
            <label class="mt-8">tippy style2<InformationCircleIcon class="ml-1 w-5 h-5" v-tippy="{ placement: 'top', content: 'Look at me on the top!' }"></InformationCircleIcon></label>
            <p class="mt-1">Tippy on the top</p>
          </div>

          <div>
            <label class="mt-8">tippy style3<InformationCircleIcon class="ml-1 w-5 h-5" v-tippy="{ placement: 'left', content: 'tippy on the left' }"></InformationCircleIcon></label>
            <p class="mt-1">Tippy on the left</p>
          </div>

          <div>
            <label class="mt-8">tippy style4<InformationCircleIcon class="ml-1 w-5 h-5" v-tippy="{ placement: 'bottom', content: 'tippy on the bottom' }"></InformationCircleIcon></label>
            <p class="mt-1">Tippy on the bottom</p>
          </div>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
