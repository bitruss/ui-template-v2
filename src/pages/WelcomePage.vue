<script setup>
import SidebarLayout from "../layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "../components/core/breadcrumb/BreadCrumb.vue";

const pages = [
  { name: "welcome", href: "#", active: true },
];
</script>

<template>
  <SidebarLayout>
    <BreadCrumb :pages="pages"></BreadCrumb>
  </SidebarLayout>
</template>
