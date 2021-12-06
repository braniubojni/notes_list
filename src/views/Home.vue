<template>
  <div class="home">
    <span class="header1">Kanban Board</span
  ><span class="header2">:Project tracker</span>
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
