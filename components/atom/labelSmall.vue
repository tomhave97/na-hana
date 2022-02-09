<template>
  <label for="name" class="text-lg font-semibold" > {{ label }}</label>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "labelSmall",
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true, 

      asda: "asd",
    }
  }
})
</script>
