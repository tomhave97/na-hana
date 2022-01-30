<template>
  <div>
    <Suspense>
      <template #default>
        <div class="hover:shadow-lg shadow cursor-pointer border border-gray-200 rounded-full grid grid-row grid-cols-32 py-2 px-6 items-center">
          <div class="col-span-4 flex justify-center">
            <span @click="markDone(task.id)">Check</span>
          </div>
          <div class="col-span-8">
            <AtomSimpleText :label="task.name" />
          </div>
          <div class="col-span-4 flex justify-center">
            <AtomTag color="red" label="High" />
          </div>
          <div class="col-span-4 flex justify-center">
            <AtomSimpleText :label="task.dueDate"/>
          </div>
          <div class="col-span-4 flex justify-center">
            <AtomProgressBar color="red" :percentage="20"/>
          </div>
          <div class="col-span-4 flex justify-center">
            <AtomSimpleText label="timeLeft"/>
          </div>
        </div>
      </template>

      <template #fallback>
        <skeleton />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import Skeleton from "../skeleton";
import {defineComponent, PropType} from "@vue/runtime-core";
import TaskType from "~/types/task";
import {useTask} from "~/store/tasks";

export default defineComponent({
  name: "task",
  components: { Skeleton },
  props: {
    task: {
      type: Object as PropType<TaskType>,
      required: true,
    }
  },
  setup(props) {
    const taskStore = useTask();

    return {
      markDone: taskStore.markDone,
    }
  }
})
</script>

<style scoped>

</style>