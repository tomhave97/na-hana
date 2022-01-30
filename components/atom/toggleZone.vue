<template>
  <div>
    <!-- TODO add arrow svg -->
    <span @click="toggle"> {{ label }}  \/</span>
    <div v-show="isOpen">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";

export default defineComponent({
  name: "toggleZone",
  props: {
    label: {
      type: String,
      required: true,
    },
    default: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  setup(props) {
    const isOpen = ref<boolean>(props.default);

    const toggle = () => {
      isOpen.value = !isOpen.value;
    }

    return {
      toggle,
      isOpen
    }
  }
})
</script>

<style scoped>

</style>