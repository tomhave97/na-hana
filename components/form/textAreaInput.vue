<template>
  <div>
    <AtomLabelSmall :label="label" :name="name"/>
    <textarea
        :id="name"
        v-model="formValue"
        class="w-full outline-none overflow-auto"
        :placeholder="placeholder"
        rows="3"
    />
    <span> {{ errorMessage }}</span>
  </div>
</template>

<script>
import { useField } from "vee-validate";
import {defineComponent} from "@vue/runtime-core";
import * as yup from 'yup'

export default defineComponent({
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const { value: formValue, errorMessage } = useField(props.name, yup.string().required(), {
      initialValue: props.value,
      validateOnValueUpdate: false,
    });

    return {
      formValue,
      errorMessage
    };
  }
});
</script>
