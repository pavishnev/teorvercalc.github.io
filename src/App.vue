<template>
  <div class="wrapper">
    <tvc-header />
    <router-view />
  </div>
</template>

<script>
import { TvcHeader } from "@/components";
export default {
  components: {
    TvcHeader
  }
};
</script>

<style src="@/styles/general.css" />

<style src="@/styles/main.css" />
