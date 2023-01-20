<script setup>
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";
import { InformationCircleIcon, ArrowDownIcon, ArrowUpIcon, UsersIcon, EnvelopeOpenIcon, CursorArrowRaysIcon } from "@heroicons/vue/24/outline";

const stats = [
  { id: 1, name: "Total Subscribers", stat: "71,897", icon: UsersIcon, change: "122", changeType: "increase" },
  { id: 2, name: "Avg. Open Rate", stat: "58.16%", icon: EnvelopeOpenIcon, change: "5.4%", changeType: "increase" },
  { id: 3, name: "Avg. Click Rate", stat: "24.57%", icon: CursorArrowRaysIcon, change: "3.2%", changeType: "decrease" },
];
</script>

<template>
  <SidebarLayout>
    <div class="space-y-8">
      <div>
        <h1 class="text-2xl leading-6">Card with grid</h1>
        <p class="mt-3">card with different grid style</p>
      </div>

      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <div v-for="item in stats" :key="item.name" class="card px-5 pt-3 pb-4">
          <p class="flex">{{ item.name }} <InformationCircleIcon class="ml-1 icon inline-flex" v-tippy="{ placement: 'top', content: 'Look at me on the top!' }"></InformationCircleIcon></p>
          <p>some sub text description about the title</p>
          <label class="text-2xl mt-1">{{ item.stat }}</label>
        </div>
      </div>

      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <div v-for="item in stats" class="relative px-6 pt-6 pb-12 card">
          <dt>
            <div class="absolute card-primary p-3">
              <component :is="item.icon" class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p class="ml-16 truncate text-sm font-medium text-gray-500">{{ item.name }}</p>
          </dt>
          <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p class="text-2xl font-semibold text-gray-900">{{ item.stat }}</p>
            <p :class="[item.changeType === 'increase' ? 'text-green-600' : 'text-red-600', 'ml-2 flex items-baseline text-sm font-semibold']">
              <ArrowUpIcon v-if="item.changeType === 'increase'" class="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
              <ArrowDownIcon v-else class="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
              <span class="sr-only"> {{ item.changeType === "increase" ? "Increased" : "Decreased" }} by </span>
              {{ item.change }}
            </p>
            <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                  View all<span class="sr-only"> {{ item.name }} stats</span></a
                >
              </div>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  </SidebarLayout>
</template>
