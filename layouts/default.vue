<template>
  <div>
    <OrganismNavigation />

    <div :class="showSidebar ? 'grid grid-cols-12' : 'p-32'">
      <div :class="showSidebar ? 'col-span-7 p-16 py-32' : ''">
        <slot />
      </div>
      <div v-if="showSidebar" class="bg-white border-l border-gray-200 h-full p-16 col-span-5">
        <OrganismTaskEdit v-if="!!activeTask" :task="activeTask"/>
        <OrganismTaskAdd v-else />
      </div>
    </div>

    <AtomModal>
      Hier ist Content
    </AtomModal>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "@vue/runtime-core";
import {ref} from "vue";

import {useActiveTask} from "~/store/activeTask";

export default defineComponent({
  name: "default",
  setup() {
    const showSidebar = ref(true);

    const activeTaskStore = useActiveTask();
    const activeTask = computed(() => activeTaskStore.activeTask);

    return {
      showSidebar,
      activeTask,
    }
  }
})
</script>