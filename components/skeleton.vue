<template>
  <div class="skeleton h-4 w-full rounded-full"></div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "skeleton",
  props: {
    height: {
      type: String,
      default: '8',
    },
    width: {
      type: String,
      default: 'full',
    }
  },
})
</script>

<style scoped>
  .skeleton {
    animation: skeleton 3s infinite ease-in-out;
    -webkit-animation: skeleton 3s infinite ease-in-out;
  }

  @keyframes skeleton {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  @-webkit-keyframes skeleton {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
</style>