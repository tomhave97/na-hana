<template>
  <!-- TODO use backgroundColor -->
  <span class="bg-primary px-4 h-6 rounded-full inline-flex items-center justify-center text-white font-md">
    {{ label }}
  </span>
</template>

<script>
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "tag",
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const backgroundColor = `bg-${props.color}`;

    return {
      backgroundColor,
    };
  }
})
</script>

<style scoped>

</style>