<template lang="pug">
  button.clearBtn(@click="emitClearHoleStatus") クリア
</template>
<script>
export default {
  methods: {
    emitClearHoleStatus: function () {
      this.$emit('clearHoleStatus');
    }
  }
}
</script>
<style scoped>
$bingo-border: #2c3e50;

.clearBtn {
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