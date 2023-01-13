<script setup>
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "../../../components/core/breadcrumb/BreadCrumb.vue";

const breadcrumb_list = [
  { name: "example", href: "#", active: false },
  { name: "form", href: "#", active: false },
  { name: "style1", href: "#", active: true },
];
</script>

<template>
  <SidebarLayout>
    <BreadCrumb :pages="breadcrumb_list"></BreadCrumb>

    <div class="space-y-8 divide-y divide-gray-200 divide-gray-200">
      <div>
        <h1 class="text-xl leading-6">Buttons with different main usecases</h1>
        <p class="mt-3">success->green,primary->purple,info->blue,warning->yellow,err->red,secondary->gray</p>
      </div>

      <div class="pt-5 lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <label for="username" class="flex">Primary Button</label>
          <p>Primary button of purple color</p>
        </div>
        <div class="lg:col-span-2 mt-2">
          <button type="button" class="btn-primary">Button text</button>
        </div>
      </div>
      
    </div>
  </SidebarLayout>
</template>
