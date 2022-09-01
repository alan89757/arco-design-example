<template>
  <a-space>
    <a-button type="primary">Primary</a-button>
    <a-button>Secondary</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="outline">Outline</a-button>
    <a-button type="text">Text</a-button>
  </a-space>
  <div style="height: 50px;"></div>
  <todo></todo>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import {
    defineComponent,
    ref,
    reactive,
    toRefs,
    onBeforeMount,
    computed,
  } from 'vue'
import Todo from "./Todo.vue";

export default defineComponent({
  components: {
    Todo: Todo,
  },
  setup() {
    
  },
})
</script>

