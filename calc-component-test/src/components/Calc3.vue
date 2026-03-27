<template>
  <div @keyup.enter="CalcAdd">
    x: <input type="text" v-model.number="state.x" />
    <!-- x: <input type="text" v-model.number="useTransitionState.x" /> -->
    <br />
    y: <input type="text" v-model.number="state.y" />
    <!-- y: <input type="text" v-model.number="useTransitionState.y" /> -->
    <br />
    <button @click="CalcAdd">계산</button>
    <br />
    {{ state.result }}
  </div>
</template>
<script>
import { reactive } from 'vue';
export default {
  name: 'Calc3',
  setup() {
    const state = reactive({ x: '', y: '', result: '' });
    const CalcAdd = () => {
      state.result = state.x + state.y;
    };
    return { state, CalcAdd };
  },
};
</script>
