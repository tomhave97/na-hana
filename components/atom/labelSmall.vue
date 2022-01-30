<template>
  <label :for="name" class="text-lg font-semibold"> {{ label }}</label>
</template>

<script lang="ts">
export default {
  name: "labelSmall",
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }
  }
}
</script>
