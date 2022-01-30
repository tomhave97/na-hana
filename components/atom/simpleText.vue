<template>
  <span class=""> {{ label }}</span>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "simpleText",
  props: {
    label: {
      type: String,
      required: true
    }
  }
})
</script>