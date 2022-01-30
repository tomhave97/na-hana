<template>
  <div>
    <Suspense>
      <template #default>
        <div>
          <div class="h-20 border-gray-200 border-b grid grid-cols-2">
            <div>
              Logo
            </div>
            <div class="flex justify-end">
              <span> Search </span>
              <div @click="openAddTask" class="mx-4"> Add Task</div>
              <span> Settings </span>
            </div>
          </div>
          <nav class="">
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

<script>
import Skeleton from "../skeleton";
import {openAddTask} from "../../composables/activeTask";
export default {
  name: "navigation",
  components: {
    Skeleton
  },
  setup() {
    return {
      openAddTask,
    }
  }
}
</script>

<style scoped>

</style>