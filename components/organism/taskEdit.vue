<template>
  <div>
    <Suspense>
      <template #default>
        <form @submit="onSubmit">
          <div class="grid grid-cols-2">

            <div class="col-span-2">
              <FormHeadlineInput @change="(event) => changeValue()" :size="1" name="name" :value="values.name"/>
            </div>

            <div class="col-span-2 flex flex-row">
              <div v-for="tag in values.tags" :key="tag">
                <AtomTag :label="tag.label" :color="tag.color"/>
              </div>
            </div>

            <div class="col-span-2">
              <FormTextAreaInput :value="values.description" name="description" label="Description"/>
            </div>

            <div class="col-span-2">
              <AtomToggleZone label="Dependents">
                Dependent 1
                Dependent 2
              </AtomToggleZone>
            </div>

          </div>
        </form>
      </template>

      <template #fallback>
        <skeleton />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, watch} from "@vue/runtime-core";
import TaskType from "~/types/task";
import {useForm} from "vee-validate";
import Skeleton from "~/components/skeleton.vue";
import {useTask} from "~/store/tasks";

export default defineComponent({
  name: "taskEdit",
  components: {Skeleton},
  props: {
    task: {
      type: Object as PropType<TaskType>,
      required: true
    }
  },
  setup(props) {
    const propertyValues = computed(() => props.task)
    const taskStore = useTask();

    const { handleSubmit, values, setValues } = useForm<TaskType>({
      initialValues: {
        ...props.task
      }
    });

    watch(propertyValues, (newValue: TaskType) => {
      console.log(newValue);
      setValues(newValue)
    })

    const onSubmit = handleSubmit((values) => {
      console.log(values);
    })

    const changeValue = (key: string, value: any) => {
      taskStore.changeValue(propertyValues.value.id, key, value)
    }



    return {
      onSubmit,
      values,
      changeValue,
    }
  }
})
</script>

<style scoped>

</style>