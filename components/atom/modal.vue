<template>
  <div v-if="isActive" class="absolute top-0 left-0 bg-gray-transparent h-screen w-full">
    <div ref="target" class="h-[32rem] w-[32rem] absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 rounded-lg bg-white z-100">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject, onMounted, Ref} from "@vue/runtime-core";
import {ref} from "vue";
import {onClickOutside} from "@vueuse/core";

export default defineComponent({
  name: "modal",
  setup() {
    const isActive = inject<Ref<boolean>>('modalState', ref(true))
    const target = ref<HTMLElement | null>(null);

    onClickOutside(target, () => {
      isActive.value = !isActive.value
    })

    return {
      isActive,
      target,
    }
  }
})
</script>

<style scoped>

</style>