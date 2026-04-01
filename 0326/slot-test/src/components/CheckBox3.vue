<template>
  <div>
    <slot name="icon"></slot>
    <input
      type="checkbox"
      :value="id"
      :checked="checked"
      @change="$emit('check-changed', { id, checked: $event.target.checked })"
    />
    <slot name="label">Item</slot>
    <!--
    슬롯을 사용하지 않는 경우(부모가 아무 슬롯도 안 넣을 때):
    - icon 슬롯: 비어 있음 (아무것도 표시되지 않음)
    - label 슬롯: fallback "Item"이 표시됨
    -->
  </div>
</template>
<script>
export default {
  name: 'CheckBox3',
  props: ['id', 'checked'],
};
</script>
