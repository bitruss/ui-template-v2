<script setup>
import { EnvelopeIcon,BarsArrowUpIcon,UsersIcon } from "@heroicons/vue/24/outline";

import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "../../../components/core/breadcrumb/BreadCrumb.vue";

const breadcrumb_list = [
  { name: "example", href: "#", active: false },
  { name: "input", href: "#", active: false },
  { name: "style1", href: "#", active: true },
];
</script>

<template>
  <SidebarLayout>
    <BreadCrumb :pages="breadcrumb_list"></BreadCrumb>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="mt-1">
              <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="mt-1">
              <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com" aria-describedby="email-description" />
            </div>
            <p class="mt-2 text-sm text-gray-500" id="email-description">We'll only use this for spam.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <div class="flex justify-between">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <span class="text-sm text-gray-500" id="email-optional">Optional</span>
            </div>
            <div class="mt-1">
              <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com" aria-describedby="email-optional" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="email" name="email" id="email" class="block w-full rounded-md border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm" placeholder="you@example.com" value="adamwathan" aria-invalid="true" aria-describedby="email-error" />
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
              </div>
            </div>
            <p class="mt-2 text-sm text-red-600" id="email-error">Your password must be less than 4 characters.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="mt-1">
              <input type="email" name="email" id="email" value="you@example.com" disabled="" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 sm:text-sm" placeholder="you@example.com" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <EnvelopeIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <label for="account-number" class="block text-sm font-medium text-gray-700">Account number</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input type="text" name="account-number" id="account-number" class="block w-full rounded-md border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="000-00-0000" />
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <QuestionMarkCircleIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <label for="company-website" class="block text-sm font-medium text-gray-700">Company Website</label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">http://</span>
              <input type="text" name="company-website" id="company-website" class="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="www.example.com" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <label for="company-website" class="block text-sm font-medium text-gray-700">Company Website</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">http://</span>
              </div>
              <input type="text" name="company-website" id="company-website" class="block w-full rounded-md border-gray-300 pl-16 focus:border-indigo-500 focus:ring-indigo-500 sm:pl-14 sm:text-sm" placeholder="www.example.com" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">$</span>
              </div>
              <input type="text" name="price" id="price" class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0.00" aria-describedby="price-currency" />
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span class="text-gray-500 sm:text-sm" id="price-currency">USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <label for="phone-number" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label for="country" class="sr-only">Country</label>
                <select id="country" name="country" autocomplete="country" class="h-full rounded-md border-transparent bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
              </div>
              <input type="text" name="phone-number" id="phone-number" class="block w-full rounded-md border-gray-300 pl-16 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="+1 (555) 987-6543" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">$</span>
              </div>
              <input type="text" name="price" id="price" class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0.00" />
              <div class="absolute inset-y-0 right-0 flex items-center">
                <label for="currency" class="sr-only">Currency</label>
                <select id="currency" name="currency" class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <option>USD</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Search candidates</label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <div class="relative flex flex-grow items-stretch focus-within:z-10">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <UsersIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input type="email" name="email" id="email" class="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="John Smith" />
              </div>
              <button type="button" class="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                <BarsArrowUpIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                <span>Sort</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
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

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div class="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
            <label for="name" class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900">Name</label>
            <input type="text" name="name" id="name" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Jane Smith" />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <div class="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
              <input type="text" name="name" id="name" class="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm" placeholder="Jane Smith" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div>
            <label for="search" class="block text-sm font-medium text-gray-700">Quick search</label>
            <div class="relative mt-1 flex items-center">
              <input type="text" name="search" id="search" class="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <kbd class="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">⌘K</kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-1 xl:grid-cols-2">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <div class="isolate -space-y-px rounded-md shadow-sm">
            <div class="relative rounded-md rounded-b-none border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
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
