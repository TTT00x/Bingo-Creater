<template lang="pug">
button.modeChanger(@click="emitChangeMakeMode") このビンゴを編集する
</template>
<script>
export default {
  props: ['mode'],
  methods: {
    emitChangeMakeMode: function() {
      this.$emit('changeMode', 'make');
    }
  }
};
</script>
<style scoped>
$bingo-border: #2c3e50;

.modeChanger {
  border-bottom: 1px solid $bingo-border;
  color: $bingo-border;
  display: block;
  font-size: 12px;
  padding: 3px;

  &:hover {
    cursor: pointer;
    opacity: .7;
  }
}
</style>
