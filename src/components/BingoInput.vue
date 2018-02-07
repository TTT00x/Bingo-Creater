<template lang="pug">
.bingoInput.bingoInput-333(v-if="mode === 'make'")
  .bingoInput-Item(:style="{ backgroundColor: itemBg }")
    input(v-model="itemCont[0].data")
  .bingoInput-Item
    input(v-model="itemCont[1].data")
  .bingoInput-Item(:style="{ backgroundColor: itemBg }")
    input(v-model="itemCont[2].data")
  .bingoInput-Item
    input(v-model="itemCont[3].data")
  .bingoInput-Item(:style="{ backgroundColor: itemBg }")
    input(v-model="itemCont[4].data")
  .bingoInput-Item
    input(v-model="itemCont[5].data")
  .bingoInput-Item(:style="{ backgroundColor: itemBg }")
    input(v-model="itemCont[6].data")
  .bingoInput-Item
    input(v-model="itemCont[7].data")
  .bingoInput-Item(:style="{ backgroundColor: itemBg }")
    input(v-model="itemCont[8].data")
</template>
<script>
  export default {
    props: ['mode', 'size', 'itemBg', 'itemCont']
  };
</script>
<style scoped>
$bingo-border: #2c3e50;
.bingoInput {
  border-top: 1px solid $bingo-border;
  border-left: 1px solid $bingo-border;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  margin: 30px auto;

  &.bingoInput-333 {
    width: 333px;

    .bingoInput-Item {
      width: calc(100% / 3);
    }
  }
}

.bingoInput-Item {
  border-right: 1px solid $bingo-border;
  border-bottom: 1px solid $bingo-border;
  padding: 10px;

  input {
    border: 1px solid $bingo-border;
    color: #000;
    font-size: 14px;
    padding: 7px;
    -webkit-appearance: none;
    width: 100%;

    &:focus,
    &:active {
      background-color: aliceblue;
      box-shadow: none;
      outline: none;
    }
  }
}
</style>
