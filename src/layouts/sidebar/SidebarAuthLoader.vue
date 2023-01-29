<script async setup>
import { onBeforeMount } from "vue";
import api from "@/api";
import useAuthStore from "@/stores/auth";
const auth_store = useAuthStore();

// if (auth_store.token == null || auth_store.token == "") {
//   window.location = "/signin";
// }

// onBeforeMount(async () => {
//   //get user detail
//   if (auth_store.user == null) {
//     let resp = await api.user.detail(auth_store.token);
//     if (resp.err != null || resp.result.meta_status < 0) {
//       window.location = "/signin";
//     } else {
//       auth_store.setUser(resp.result.user);
//     }
//   }
// });
</script>
<template>
   
</template>
