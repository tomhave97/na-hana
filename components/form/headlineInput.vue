<template>
  <div>
    <input
        :class="!formValue ? 'italic' : null"
        class="w-full rounded outline-none bg-transparent resize-none font-semibold text-3xl"
        type="text"
        v-model="formValue"
        :placeholder="placeholder"
        @change="$emit('change', formValue)"
    >
    <span v-if="errorMessage"> {{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {useField} from "vee-validate";

export default defineComponent({
  name: "headlineInput",
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    }
  },
  setup(props) {
    const { value: formValue, errorMessage } = useField(props.name, null, {
      initialValue: props.value,
      validateOnValueUpdate: false,
    })

    return {
      formValue,
      errorMessage,
    }
  }
})
</script>

<style scoped>

</style>