<script setup>
import { RouterView } from "vue-router";
import Spinner from "@/components/core/overlay/Spinner.vue";
</script>

<template>
  <spinner>
    <RouterView></RouterView>
  </spinner>
</template>
