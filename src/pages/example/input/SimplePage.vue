<script setup>
import { EnvelopeIcon, QuestionMarkCircleIcon } from "@heroicons/vue/24/outline";

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
          <input id="email-address" name="email" type="email" autocomplete="email" class="relative rounded-b-none" placeholder="Email address" />
          <input id="email-address" name="email" type="text" required="" class="relative rounded-none" placeholder="mid address" />
          <input id="password" name="password" type="password" autocomplete="current-password" class="relative rounded-md rounded-t-none" placeholder="Password" />
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <legend>Card Details</legend>
        <div class="mt-1 -space-y-px">
          <input type="text" name="card-number" id="card-number" class="relative rounded-b-none" placeholder="Card number" />

          <div class="flex -space-x-px">
            <input type="text" name="card-expiration-date" id="card-expiration-date" class="w-1/2 relative rounded-none rounded-bl-md" placeholder="MM / YY" />
            <input type="text" name="card-cvc" id="card-cvc" class="w-1/2 relative rounded-none rounded-br-md" placeholder="CVC" />
          </div>
        </div>

        <legend class="mt-3">Billing address</legend>
        <div class="mt-1 -space-y-px">
          <select id="country" name="country" autocomplete="country-name" class="relative rounded-none rounded-t-md">
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
          <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="relative rounded-none rounded-b-md" placeholder="ZIP / Postal code" />
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-12">
      <div class="box col-span-12 lg:col-span-6">
        <label>Multi-mini form</label>

        <div class="isolate -space-y-px">
          <div class="relative rounded-md rounded-b-none border border-gray-300 px-3 py-2 focus-within-border:primary">
            <label>Name</label>
            <input type="text" name="name" id="name" class="border-0 p-0 focus:ring-0" placeholder="Jane Smith" />
          </div>

          <div class="relative border border-gray-300 px-3 py-2 focus-within-border:primary">
            <label>Name</label>
            <input type="text" name="name" id="name" class="border-0 p-0 focus:ring-0" placeholder="Jane Smith" />
          </div>

          <div class="relative rounded-md rounded-t-none border border-gray-300 px-3 py-2 focus-within-border:primary">
            <label>Job Title</label>
            <input type="text" name="job-title" id="job-title" class="b border-0 p-0 focus:ring-0" placeholder="Head of Tomfoolery" />
          </div>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
