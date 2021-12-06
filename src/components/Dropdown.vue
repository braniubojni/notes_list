<template lang="">
  <div class="MainContentWrapper">
    <span @click="togglerFunc">...</span>
    <ul v-show="toggler">
      <li>Archive List</li>
      <li @click="removeTaskList">Remove List</li>
      <li>Clear List</li>
    </ul>
  </div>
</template>
<script>
import { defineComponent, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const toggler = ref(false);
    const togglerFunc = () => (toggler.value = !toggler.value);
    const removeTaskList = (id) =>
      store.getters.removeTaskList({
        id,
      });
    return {
      toggler,
      togglerFunc,
      removeTaskList,
    };
  },
});
</script>
<style scoped>
span {
  cursor: pointer;
}
.MainContentWrapper {
  display: flex;
  justify-content: flex-end;
  position: relative;
}
ul {
  position: absolute;
  background-color: #607c88;
  padding: 0;
  list-style: none;
  margin-right: -80px;
  padding: 5px;
}
li {
  padding: 5px 0;
  cursor: pointer;
}
</style>
