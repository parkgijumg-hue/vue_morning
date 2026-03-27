<template>
  <div @keyup.enter="calcAdd">
    x: <input type="text" v-model.number="x" />
    <br />
    y: <input type="text" v-model.number="y" />
    <br />
    <button @click="calcAdd">계산</button>
    <br />
    <div>결과: {{ result }}</div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  name: 'Calc',
  setup() {
    const x = ref();
    const y = ref();
    const result = ref();
    const calcAdd = () => {
      result.value = x.value + y.value;
    };
    return { x, y, result, calcAdd };
  },
};
</script>
