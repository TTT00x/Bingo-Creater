<template lang="pug">
.modeChanger-Wrapper
  button.modeChanger(@click="emitChangeMakeMode") このビンゴを編集する
</template>
<script>
  export default {
    props: ['mode'],
    methods: {
      emitChangeMakeMode: function() {
        console.log('change');
        this.$emit('changeMode', 'make');
      }
    }
  };
</script>
<style scoped>
$bingo-border: #2c3e50;

.modeChanger-Wrapper {
  margin-top: 32px;
}

.modeChanger {
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid $bingo-border;
  color: $bingo-border;
  display: block;
  font-size: 12px;
  margin: 0 auto;
  padding: 3px;

  &:hover {
    background-color: $bingo-border;
    border: 1px solid $bingo-border;
    color: #fff;
    cursor: pointer;
    padding: 3px;
  }
}
</style>
