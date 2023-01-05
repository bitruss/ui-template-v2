<script setup>
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "../../../components/core/breadcrumb/BreadCrumb.vue";

const breadcrumb_list = [
  { name: "example", href: "#", active: false },
  { name: "form", href: "#", active: false },
  { name: "style3", href: "#", active: true },
];
</script>

<template>
  <SidebarLayout>
    <BreadCrumb :pages="breadcrumb_list"></BreadCrumb>
    <div class="mt-5 grid grid-cols-12">
      <div class="overflow-hidden rounded-lg bg-white shadow col-span-12 xl:col-span-8">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">We'll always let you know about important changes, but you pick what else you want to hear about.</p>
          </div>
          <div class="space-y-6 divide-y divide-gray-200 sm:space-y-5">
            <div class="pt-6 sm:pt-5">
              <div role="group" aria-labelledby="label-email">
                <div class="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                  <div>
                    <div class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="label-email">By Email</div>
                  </div>
                  <div class="mt-4 sm:col-span-2 sm:mt-0">
                    <div class="max-w-lg space-y-4">
                      <div class="relative flex items-start">
                        <div class="flex h-5 items-center">
                          <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="comments" class="font-medium text-gray-700">Comments</label>
                          <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                        </div>
                      </div>
                      <div class="relative flex items-start">
                        <div class="flex h-5 items-center">
                          <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                          <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                        </div>
                      </div>
                      <div class="relative flex items-start">
                        <div class="flex h-5 items-center">
                          <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="offers" class="font-medium text-gray-700">Offers</label>
                          <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-6 sm:pt-5">
              <div role="group" aria-labelledby="label-notifications">
                <div class="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                  <div>
                    <div class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="label-notifications">Push Notifications</div>
                  </div>
                  <div class="sm:col-span-2">
                    <div class="max-w-lg">
                      <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                      <div class="mt-4 space-y-4">
                        <div class="flex items-center">
                          <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700">Everything</label>
                        </div>
                        <div class="flex items-center">
                          <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700">Same as email</label>
                        </div>
                        <div class="flex items-center">
                          <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label for="push-nothing" class="ml-3 block text-sm font-medium text-gray-700">No push notifications</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
