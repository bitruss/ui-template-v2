<script setup>
import SidebarLayout from "../layouts/sidebar/SidebarLayout.vue";
import BreadCrumb from "../components/breadcrumb/BreadCrumb.vue";

const pages = [
  { name: "baidu.com", href: "https://baidu.com", active: false },
  { name: "aaa", href: "#", active: true },
];
</script>

<template>
  <SidebarLayout>
    <BreadCrumb :pages="pages"></BreadCrumb>
  </SidebarLayout>
</template>
