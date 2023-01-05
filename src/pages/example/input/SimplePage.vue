<script setup>
import { EnvelopeIcon, BarsArrowUpIcon, UsersIcon, QuestionMarkCircleIcon } from "@heroicons/vue/24/outline";

import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "../../../components/core/breadcrumb/BreadCrumb.vue";

const breadcrumb_list = [
  { name: "example", href: "#", active: false },
  { name: "input", href: "#", active: false },
  { name: "simple", href: "#", active: true },
];
</script>

<template>
  <SidebarLayout>
    <BreadCrumb :pages="breadcrumb_list"></BreadCrumb>

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <label for="email">Email1</label>
        <input type="email" name="email" id="email" class="mt-1" placeholder="you@example.com" />
      </div>
    </div>

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <label for="email">Email2</label>
        <input type="email" name="email" id="email" class="mt-1" placeholder="you@example.com" />
        <p class="mt-2">We'll only use this for spam.</p>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <div class="flex justify-between">
          <label for="email">Email3</label>
          <p id="email-optional">Optional</p>
        </div>
        <input type="email" name="email" id="email" class="mt-1" placeholder="you@example.com" />
      </div>
    </div>

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <label for="email">Email4</label>
        <input type="email" name="email" id="email" value="you@example.com" disabled="" class="disabled mt-1" placeholder="you@example.com" />
      </div>
    </div>

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <label for="email">Email5</label>
        <div class="input-wrap mt-1">
          <div class="prefix">
            <EnvelopeIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input type="email" name="email" id="email" class="pl-10" placeholder="you@example.com" />
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <label>Account number</label>
        <div class="input-wrap mt-1">
          <input type="text" name="account-number" id="account-number" placeholder="000-00-0000" />
          <div class="suffix">
            <QuestionMarkCircleIcon class="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>

     

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <label for="company-website" class="block text-sm font-medium text-gray-700">Company Website</label>
        <div class="input-wrap mt-1">
          <div class="prefix">http://</div>
          <input type="text" name="company-website" id="company-website" class="pl-14" placeholder="www.example.com" />
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <label for="price">Price</label>
        <div class="input-wrap mt-1">
          <div class="prefix">$</div>
          <input type="text" name="price" id="price" class="pl-7 pr-12" placeholder="0.00" />
          <div class="suffix">USD</div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <label for="phone-number">Phone Number</label>
        <div class="input-wrap">
          <div class="prefix">
            <select id="country" name="country" autocomplete="country">
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
          </div>
          <input type="text" name="phone-number" id="phone-number" class="pl-18" placeholder="+1 (555) 987-6543" />
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <label for="price">Price</label>
        <div class="input-wrap">
          <span class="prefix">$</span>
          <input type="text" name="price" id="price" class="pl-7 pr-12" placeholder="0.00" />
          <div class="suffix">
            <select id="currency" name="currency">
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <div class="mt-1 input-wrap">
          <input type="text" name="name" id="name" class="bg-gray-50" placeholder="Jane Smith" />
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <label>Quick search</label>
        <div class="input-wrap">
          <input type="text" name="search" id="search" />
          <div class="suffix">
            <kbd>⌘K</kbd>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <label for="search">Multi-compressed form</label>
        <div class="-space-y-px rounded-md shadow-sm">
          <input id="email-address" name="email" type="email" autocomplete="email" required="" class="relative rounded-md rounded-b-none focus:z-10" placeholder="Email address" />
          <input id="email-address" name="email" type="text" required="" class="relative rounded-b-none rounded-t-none focus:z-10" placeholder="mid address" />
          <input id="password" name="password" type="password" autocomplete="current-password" required="" class="relative rounded-md rounded-t-none focus:z-10" placeholder="Password" />
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-12">
      <div class="overflow-hidden rounded-lg bg-white shadow col-span-12 lg:col-span-6">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <fieldset>
              <legend class="block text-sm font-medium text-gray-700">Card Details</legend>
              <div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                <div>
                  <label for="card-number" class="sr-only">Card number</label>
                  <input type="text" name="card-number" id="card-number" class="relative block w-full rounded-none rounded-t-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Card number" />
                </div>
                <div class="flex -space-x-px">
                  <div class="w-1/2 min-w-0 flex-1">
                    <label for="card-expiration-date" class="sr-only">Expiration date</label>
                    <input type="text" name="card-expiration-date" id="card-expiration-date" class="relative block w-full rounded-none rounded-bl-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="MM / YY" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <label for="card-cvc" class="sr-only">CVC</label>
                    <input type="text" name="card-cvc" id="card-cvc" class="relative block w-full rounded-none rounded-br-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="CVC" />
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset class="mt-6 bg-white">
              <legend class="block text-sm font-medium text-gray-700">Billing address</legend>
              <div class="mt-1 -space-y-px rounded-md shadow-sm">
                <div>
                  <label for="country" class="sr-only">Country</label>
                  <select id="country" name="country" autocomplete="country-name" class="relative block w-full rounded-none rounded-t-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <div>
                  <label for="postal-code" class="sr-only">ZIP / Postal code</label>
                  <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="relative block w-full rounded-none rounded-b-md border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="ZIP / Postal code" />
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-12">
      <div class="overflow-hidden rounded-lg bg-white shadow col-span-12 xl:col-span-6">
        <div class="px-4 py-5 sm:p-6">
          <label for="search" class="block text-sm font-medium text-gray-700 mb-3">Multi-mini form</label>

          <div class="isolate -space-y-px rounded-md shadow-sm">
            <div class="relative rounded-md rounded-b-none border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
              <label for="name" class="block text-xs font-medium text-gray-900">Name</label>
              <input type="text" name="name" id="name" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Jane Smith" />
            </div>

            <div class="relative border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
              <label for="name" class="block text-xs font-medium text-gray-900">Name</label>
              <input type="text" name="name" id="name" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Jane Smith" />
            </div>

            <div class="relative rounded-md rounded-t-none border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
              <label for="job-title" class="block text-xs font-medium text-gray-900">Job Title</label>
              <input type="text" name="job-title" id="job-title" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Head of Tomfoolery" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
