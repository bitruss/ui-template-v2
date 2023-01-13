<script setup>
import SidebarLayout from "../../../layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "../../../components/core/breadcrumb/BreadCrumb.vue";

const breadcrumb_list = [
  { name: "example", href: "#", active: false },
  { name: "form", href: "#", active: false },
  { name: "style4", href: "#", active: true },
];
</script>

<template>
  <SidebarLayout>
    <BreadCrumb :pages="breadcrumb_list"></BreadCrumb>
  </SidebarLayout>
</template>
