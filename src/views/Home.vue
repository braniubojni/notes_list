<template>
  <RenderNotes />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RenderNotes from "@/components/RenderNotes.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    RenderNotes,
  },
});
</script>
<style>
* {
  background: #f5fafb;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
