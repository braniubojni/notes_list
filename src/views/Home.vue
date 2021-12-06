<template>
  <div class="home">
    <h2>Notes list</h2>
    <RenderNotes />
  </div>
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
