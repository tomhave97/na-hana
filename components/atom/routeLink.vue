<template>
  <NuxtLink
      :class="classes"
      class="text-xl font-semibold leading-none"
      :to="to"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { ref } from 'vue';

import { LinkType } from "~/types/routeLink";

export default defineComponent({
  name: "RouteLink",
  props: {
    to: {
      type: String,
      required: true
    },
    as: {
      type: String as PropType<LinkType>,
      default: LinkType.LINK
    }
  },
  setup(props) {
    const classes = ref(props.as === LinkType.LINK ? '' : '')

    return {
      classes,
    }
  }
})
</script>