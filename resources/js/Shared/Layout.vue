<template>
  <navbar></navbar>
  <div class="flex items-center justify-center w-full h-screen bg-gray-100">
    <slot />
  </div>
</template>

<script>
import navbar from './navbar.vue';

export default {
  components: { navbar },
  data() {
    return {

    }
  },
  methods: {},
};
</script>