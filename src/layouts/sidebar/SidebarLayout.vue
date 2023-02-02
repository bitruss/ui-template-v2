<script setup>
import SidebarLayout_ from "./SidebarLayout_.vue";
</script>

<template>
  <Suspense>
    <SidebarLayout_>
      <slot></slot>
    </SidebarLayout_>
  </Suspense>
</template>
