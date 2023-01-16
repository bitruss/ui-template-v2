<script setup>
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "../../../components/core/breadcrumb/BreadCrumb.vue";
import { EnvelopeIcon, PlusIcon } from "@heroicons/vue/24/solid";
import { EnvelopeIcon as EnvelopeOutlineIcon } from "@heroicons/vue/24/outline";

const breadcrumb_list = [
  { name: "example", href: "#", active: false },
  { name: "button", href: "#", active: false },
  { name: "main", href: "#", active: true },
];
</script>

<template>
  <SidebarLayout>
    <BreadCrumb :pages="breadcrumb_list"></BreadCrumb>

    <div class="space-y-8 divide-y divide-gray-200 divide-gray-200">
      <div>
        <h1 class="text-xl leading-6">Buttons with different styles</h1>
        <p class="mt-3">primary->purple,info->blue,secondary->gray</p>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">Primary Button</label>
          <p>Primary button of purple color</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <button type="button" class="btn-primary sm m-2">Button text</button>
          <button type="button" class="btn-primary md m-2">Button text</button>
          <button type="button" class="btn-primary m-2">Button text</button>
          <button type="button" class="btn-primary lg m-2">Button text</button>
          <button type="button" class="btn-primary xl m-2">Button text</button>
        </div>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">Primary Icon-Button </label>
          <p>Primary button with prefix-icon</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <button type="button" class="btn-primary sm m-2"><EnvelopeIcon class="prefix-icon" />Button text</button>
          <button type="button" class="btn-primary md m-2"><EnvelopeIcon class="prefix-icon" />Button text</button>
          <button type="button" class="btn-primary m-2"><EnvelopeIcon class="prefix-icon" />Button text</button>
          <button type="button" class="btn-primary lg m-2"><EnvelopeIcon class="prefix-icon" />Button text</button>
          <button type="button" class="btn-primary xl m-2"><EnvelopeIcon class="prefix-icon" />Button text</button>
        </div>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">Primary Icon-Button </label>
          <p>Primary button with suffix-icon</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <button type="button" class="btn-primary sm m-2">Button text<EnvelopeIcon class="suffix-icon" /></button>
          <button type="button" class="btn-primary md m-2">Button text<EnvelopeIcon class="suffix-icon" /></button>
          <button type="button" class="btn-primary m-2">Button text<EnvelopeIcon class="suffix-icon" /></button>
          <button type="button" class="btn-primary lg m-2">Button text<EnvelopeIcon class="suffix-icon" /></button>
          <button type="button" class="btn-primary xl m-2">Button text<EnvelopeIcon class="suffix-icon" /></button>
        </div>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">Secondary Button</label>
          <p>secondary button with prefix-icon</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <button type="button" class="btn-secondary sm m-2"><EnvelopeOutlineIcon class="prefix-icon" />Button text</button>
          <button type="button" class="btn-secondary md m-2"><EnvelopeOutlineIcon class="prefix-icon" />Button text</button>
          <button type="button" class="btn-secondary m-2"><EnvelopeOutlineIcon class="prefix-icon" />Button text</button>
          <button type="button" class="btn-secondary lg m-2"><EnvelopeOutlineIcon class="prefix-icon" />Button text</button>
          <button type="button" class="btn-secondary xl m-2"><EnvelopeOutlineIcon class="prefix-icon" />Button text</button>
        </div>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">Info Button</label>
          <p>blue info button</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <button type="button" class="btn-info sm m-2">Button text</button>
          <button type="button" class="btn-info md m-2">Button text</button>
          <button type="button" class="btn-info m-2">Button text</button>
          <button type="button" class="btn-info lg m-2">Button text</button>
          <button type="button" class="btn-info xl m-2">Button text</button>
        </div>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">Round Button</label>
          <p>round button of secondary style</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <button type="button" class="btn-secondary inline-flex rounded-full sm m-2">Button text</button>
          <button type="button" class="btn-secondary inline-flex rounded-full md m-2">Button text</button>
          <button type="button" class="btn-secondary inline-flex rounded-full m-2">Button text</button>
          <button type="button" class="btn-secondary inline-flex rounded-full lg m-2">Button text</button>
          <button type="button" class="btn-secondary inline-flex rounded-full xl m-2">Button text</button>
        </div>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">Icon Button</label>
          <p>secondary button with no text only icon</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <button type="button" class="btn-secondary rounded-full no-text sm m-2"><EnvelopeOutlineIcon class="icon" /></button>
          <button type="button" class="btn-secondary rounded-full no-text md m-2"><EnvelopeOutlineIcon class="icon" /></button>
          <button type="button" class="btn-secondary rounded-full no-text m-2"><EnvelopeOutlineIcon class="icon" /></button>
          <button type="button" class="btn-secondary rounded-full no-text lg m-2"><EnvelopeOutlineIcon class="icon" /></button>
          <button type="button" class="btn-secondary rounded-full no-text xl m-2"><EnvelopeOutlineIcon class="icon" /></button>
        </div>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">Icon Button</label>
          <p>primary button with no text only icon</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <button type="button" class="btn-primary rounded-full no-text sm m-2"><PlusIcon class="icon" /></button>
          <button type="button" class="btn-primary rounded-full no-text md m-2"><PlusIcon class="icon" /></button>
          <button type="button" class="btn-primary rounded-full no-text m-2"><PlusIcon class="icon" /></button>
          <button type="button" class="btn-primary rounded-full no-text lg m-2"><PlusIcon class="icon" /></button>
          <button type="button" class="btn-primary rounded-full no-text xl m-2"><PlusIcon class="icon" /></button>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
