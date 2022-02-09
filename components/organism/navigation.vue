<template>
  <div>
    <Suspense>
      <template #default>
        <div>
          <div class="h-20 border-gray-200 border-b grid grid-cols-2 items-center px-8">
            <div>
              Logo
            </div>
            <div class="flex justify-end">
              <span> Search </span>
              <div @click="openAddTask" class="mx-32"> Add Task </div>
              <span> Settings </span>
            </div>
          </div>
          <nav class="px-4 py-4">
            <AtomRouteLink to="/today">Today's Tasks</AtomRouteLink>
            <AtomRouteLink class="mx-4" to="/tasks">All Tasks</AtomRouteLink>
            <AtomRouteLink class="mr-4" to="/calendar">All Tasks</AtomRouteLink>
            <AtomRouteLink to="/performance">Performance</AtomRouteLink>
          </nav>
        </div>
      </template>

      <template #fallback>
        <skeleton />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import Skeleton from "../skeleton.vue";
import {openAddTask} from "~/composables/activeTask";
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "navigation",
  components: {
    Skeleton
  },
  setup() {
    return {
      openAddTask,
    }
  }
})
</script>

<style scoped>

</style>