<template lang="">
  <li class="todoItem">{{ todo }}</li>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    todo: {
      type: String,
      required: true,
      default: "",
    },
    class: {
      type: String,
      required: true,
      default: "",
    },
  },
  setup(props) {
    console.log(props.class);
  },
});
</script>
