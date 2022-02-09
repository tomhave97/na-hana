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

export default defineComponent({
  name: "tasks",
  setup() {
    const taskStore = useTask();
    const activeTask = useActiveTask();

    const tasks = computed(() => taskStore.unDone);

    return {
      tasks,
      openTask: activeTask.set,
    };
  }
})
</script>