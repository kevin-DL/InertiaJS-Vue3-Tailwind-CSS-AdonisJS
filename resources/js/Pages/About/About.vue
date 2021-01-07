<template>
  <layout
    ><div class="space-y-2 text-center">
      <h1 class="font-bold text-transparent text-9xl bg-gradient-to-r bg-clip-text from-purple-400 via-green-400 to-purple-600">About US</h1>
      <h2 class="text-3xl font-semibold">{{ Text }} 🖖</h2>
    </div>
  </layout>
</template>

<script>
import Layout from "../../Shared/Layout.vue";

export default {
  props: ["Text"],
  components: {
      layout: Layout,
  },
};
</script>

<style>
</style>