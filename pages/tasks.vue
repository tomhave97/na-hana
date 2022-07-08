<template>
  <div>
    <div v-for="task in tasks">
      <MoleculeTask :key="task.id" @click="openTask(task)" class="mb-4" :task="task"/>
    </div>
  </div>
</template>

<script lang="ts">
import {useActiveTask} from "~/store/activeTask";
import {useTask} from "~/store/tasks";
import {computed, defineComponent} from "@vue/runtime-core";
import {useTasksQuery} from "~/generated/operations";

export default defineComponent({
  name: "tasks",
  async setup() {
    const taskStore = useTask();
    const activeTask = useActiveTask();

    const { result, error } = await useTasksQuery()

    return {
      tasks: result,
      openTask: activeTask.set,
    };
  }
})
</script>