<script setup>
import TopbarNavLayout from "../../layouts/auth/TopbarNavLayout.vue";
import Divider from "../../components/core/divider/Divider.vue";
import { EnvelopeIcon, KeyIcon } from "@heroicons/vue/24/outline";
import { UserPlusIcon, LockClosedIcon } from "@heroicons/vue/20/solid";

const pages = [
  { name: "Dashboard", href: "/", active: false },
  { name: "Sign in", href: "/signin", active: true },
  { name: "Register", href: "/register", active: false },
];
</script>

<template>
  <TopbarNavLayout :pages="pages">
    <div class="max-w-lg m-auto items-center justify-center px-6 py-12 lg:mt-12  ">
      <h3 class="text-2xl text-gray-500">Login</h3>
      <p class="mb-5 text-gray-400">Welcome to login page</p>

      <div class="-space-y-px rounded-md mt-3 mb-5">
        <div class="input-wrap">
          <div class="prefix">
            <EnvelopeIcon class="icon" />
          </div>
          <input id="email" name="email" type="email" autocomplete="email" class="relative pl-10 rounded-t" placeholder="your email" />
        </div>

        <div class="input-wrap">
          <div class="prefix">
            <KeyIcon class="icon" />
          </div>
          <input id="password" name="password" type="password" autocomplete="current-password" class="relative pl-10 rounded-b" placeholder="your password" />
        </div>
      </div>

      <div class="flex justify-between">
        <label class="mr-1 text-sm"><input id="remember-me" name="remember-me" type="checkbox" class="mr-2" />Remember me</label>
        <a href="#" class="a-primary">Forgot your password?</a>
      </div>

      <div class="btn-primary w-full relative mt-3 mb-3"><LockClosedIcon class="icon dark absolute left-3" />Login</div>

      <Divider>Or</Divider>

      <router-link to="/register" class="mt-3 btn-secondary w-full relative">
        <UserPlusIcon class="icon dark absolute left-3" aria-hidden="true" />
        no account yet? register a new account
      </router-link>
    </div>
  </TopbarNavLayout>
</template>
