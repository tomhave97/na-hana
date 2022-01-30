<template>
  <component :is="`h${size}`">
    <slot />
  </component>
</template>

<script lang="ts">
import {defineComponent, PropType} from "@vue/runtime-core";

export default defineComponent({
  name: "headline",
  props: {
    size: {
      type: Number as PropType<1 | 2 | 3 | 4 | 5>,
      required: true,
    }
  }
})
</script>

<style scoped>

</style>