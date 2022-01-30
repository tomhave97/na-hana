<template>
  <div>
    <div v-for="task in tasks">
      <MoleculeTask :key="task.id" @click="openTask(task)" class="mb-4" :task="task"/>
    </div>
  </div>
</template>

<script lang="ts">
import TaskType from "~/types/task";
import {useActiveTask} from "~/store/activeTask";
import {useTask} from "~/store/tasks";
import {computed} from "@vue/runtime-core";

export default {
  name: "tasks",
  setup() {
    const taskStore = useTask();

    const tasks = computed(() => taskStore.unDone);

    const activeTask = useActiveTask();

    // @TODO make as composable
    const openTask = (task: TaskType) => {
      activeTask.add(task)
    }

    return {
      tasks,
      openTask,
    };
  }
}
</script>