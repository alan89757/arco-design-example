<template>
  <div>
    <arco-space>
      <arco-button type="primary">Primary</arco-button>
      <arco-button>Secondary</arco-button>
      <arco-button type="dashed">Dashed</arco-button>
      <arco-button type="outline">Outline</arco-button>
      <arco-button type="text">Text</arco-button>
    </arco-space>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { Button } from '@arco-design/web-vue';

export default defineComponent({
  components: {
    ArcoButton: Button
  },
  setup() {
    
  },
})
</script>

