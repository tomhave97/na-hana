<template>
  <div class="shadow w-full bg-gray-200 rounded-full">
    <div
        :class="
        `bg-${color} text-xs leading-none py-1 text-center text-white rounded-full shadow-smallBottom`
      "
        :style="`width: ${percentage}%`"
    ></div>
  </div>
</template>

<script>
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "progressBar",
  props: {
    color: {
      type: String,
      required: true
    },
    percentage: {
      type: Number,
      required: true
    }
  }
});
</script>
