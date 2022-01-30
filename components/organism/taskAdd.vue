<template>
  <div>
    <Suspense>
      <template #default>
        <form @submit="onSubmit">
          <div class="grid grid-cols-2">
            <div class="col-span-2 mb-4">
              <FormHeadlineInput :size="1" name="name" placeholder="New Task Name..."/>
            </div>

            <div class="col-span-2">
              <FormTextAreaInput name="description" label="Description" placeholder="Your Description..."/>
            </div>
          </div>

          <button type="submit"> Add Task </button>
        </form>
      </template>

      <template #fallback>
        <skeleton />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "@vue/runtime-core";
import TaskType from "~/types/task";
import {useForm} from "vee-validate";
import Skeleton from "~/components/skeleton.vue";
import {useTask} from "~/store/tasks";
import {useActiveTask} from "~/store/activeTask";

export default defineComponent({
  name: "taskEdit",
  components: {Skeleton},
  setup() {
    const taskStore = useTask();
    const activeTaskStore = useActiveTask();
    const lastId = computed(() => taskStore.getLastId);
    const { handleSubmit, values } = useForm<TaskType>();

    const onSubmit = handleSubmit((values: TaskType) => {
      // TODO remove when Server is added
      values.id = lastId.value ? lastId.value + 1 : 1

      const task = taskStore.add(values)
      activeTaskStore.add(task);
    })

    return {
      onSubmit,
      values,
    }
  }
})
</script>