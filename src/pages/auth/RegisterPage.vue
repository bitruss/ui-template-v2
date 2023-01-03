<script setup>
import TopbarNavLayout from "../../layouts/auth/TopbarNavLayout.vue";
import RegisterForm from "./register_form.vue";

const pages = [
  { name: "dashboard", href: "/", active: false },
  { name: "sign in", href: "/signin", active: false },
  { name: "register", href: "/register", active: true },
];
</script>

<template>
  <TopbarNavLayout :pages="pages">
    <RegisterForm />
  </TopbarNavLayout>
</template>
