<template>
  <div>
    <input type="text" v-model="formValue">
    <span v-if="errorMessage"> {{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {useField} from "vee-validate";
import * as yup from 'yup';

export default defineComponent({
  name: "textInput",
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    name: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const { value: formValue, errorMessage } = useField(props.name, yup.string().required(), {
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