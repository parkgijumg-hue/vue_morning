<template>
  <div>
    <input
      type="checkbox"
      :value="id"
      :checked="checked"
      @change="$emit('check-changed', { id, checked: $event.target.checked })"
    />
    <slot name="label" :checked="checked" :label="label">
      <span
        v-if="checked === true"
        style="color: blue; text-decoration: underline"
      >
        <i>{{ label }}</i>
      </span>
      <span v-else style="color: gray">{{ label }}</span>
    </slot>
    <!--
    부모 슬롯 사용 예시(주석):
    <template v-slot:label="{ checked, label }">
      <span v-if="checked" style="color: blue; text-decoration: underline">
        <i>{{ label }}</i>
      </span>
      <span v-else style="color: gray">{{ label }}</span>
    </template>
    -->
  </div>
</template>
<script>
export default {
  name: 'CheckBox1',
  props: ['id', 'checked', 'label'],
};
</script>
<!--
slot 적용:
- 부모가 <template v-slot:label>...</template>를 넘기면 그 내용이 표시됨
- 부모가 안 넘기면 위의 기본(span) 내용이 fallback으로 표시됨
- slot props로 checked/label을 전달했으므로
  부모에서 v-slot:label="{ checked, label }" 형태로 받을 수 있음
-->
