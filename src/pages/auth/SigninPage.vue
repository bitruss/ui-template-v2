<script setup>
import TopbarNavLayout from "../../layouts/auth/TopbarNavLayout.vue";
import LoginForm from "./signin_form.vue";

const pages = [
  { name: "dashboard", href: "/", active: false },
  { name: "sign in", href: "/signin", active: true },
  { name: "register", href: "/register", active: false },
];
</script>

<template>
  <TopbarNavLayout :pages="pages">
    <LoginForm />
  </TopbarNavLayout>
</template>
