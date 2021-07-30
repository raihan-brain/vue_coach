<template>
  <label :for="uuid" class="form-label" v-if="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="placeholder"
    :id="uuid"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UniqueID from "../utilities/uniqueID";
export default defineComponent({
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup() {
    const uuid = UniqueID().getID();
    return {
      uuid,
    };
  },
});
</script>

<style></style>
