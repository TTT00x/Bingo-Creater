<template lang="pug">
.playBtn-Wrapper
  button.playBtn(@click="emitChangePlayMode") このビンゴで遊ぶ
</template>
<script>
export default {
  methods: {
    emitChangePlayMode: function () {
      this.$emit('changeMode', 'play');
    }
  }
}
</script>
<style scoped>
$bingo-border: #2c3e50;

.playBtn-Wrapper {
  margin-top: 32px;
}

.playBtn {
  display: block;
  font-size: 14px;
  padding: 5px 10px;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid $bingo-border;
  color: $bingo-border;
  margin: 0 auto;

  &:hover {
    background-color: $bingo-border;
    color: #fff;
    cursor: pointer;
  }
}
</style>