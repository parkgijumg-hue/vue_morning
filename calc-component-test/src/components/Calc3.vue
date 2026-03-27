<template>
  <div @keyup.enter="CalcAdd">
    x:
    <input
      type="text"
      v-model.number="state.x"
      style="background-color: yellow"
    />
    <!-- x: <input type="text" v-model.number="useTransitionState.x" /> -->
    <br />
    y:
    <input
      type="text"
      v-model.number="state.y"
      style="background-color: yellow"
    />
    <!-- y: <input type="text" v-model.number="useTransitionState.y" /> -->
    <br />
    <button @click="CalcAdd" class="btn btn-primary">계산</button>
    <br />
    <div class="btn btn-success">{{ state.result }}</div>
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
