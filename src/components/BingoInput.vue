<template lang="pug">
.bingoInput.bingoInput-size3(v-bind:class="{ 'bingoInput-size3': sizeIs3, 'bingoInput-size5': sizeIs5 }")
  .bingoInput-Item(:style="{ backgroundColor: '#' + itemBg }")
    input(v-model="itemCont[0].data")
  .bingoInput-Item
    input(v-model="itemCont[1].data")
  .bingoInput-Item(:style="{ backgroundColor: '#' + itemBg }")
    input(v-model="itemCont[2].data")
  .bingoInput-Item
    input(v-model="itemCont[3].data")
  .bingoInput-Item(:style="{ backgroundColor: '#' + itemBg }")
    input(v-model="itemCont[4].data")
  .bingoInput-Item
    input(v-model="itemCont[5].data")
  .bingoInput-Item(:style="{ backgroundColor: '#' + itemBg }")
    input(v-model="itemCont[6].data")
  .bingoInput-Item
    input(v-model="itemCont[7].data")
  .bingoInput-Item(:style="{ backgroundColor: '#' + itemBg }")
    input(v-model="itemCont[8].data")
  .bingoInput-Item(v-if="sizeIs5")
    input(v-model="itemCont[9].data")
  .bingoInput-Item(v-if="sizeIs5", :style="{ backgroundColor: '#' + itemBg }")
    input(v-model="itemCont[10].data")
  .bingoInput-Item(v-if="sizeIs5")
    input(v-model="itemCont[11].data")
  .bingoInput-Item(v-if="sizeIs5", :style="{ backgroundColor: '#' + itemBg }")
    input(v-model="itemCont[12].data")
  .bingoInput-Item(v-if="sizeIs5")
    input(v-model="itemCont[13].data")
  .bingoInput-Item(v-if="sizeIs5", :style="{ backgroundColor: '#' + itemBg }")
    input(v-model="itemCont[14].data")
  .bingoInput-Item(v-if="sizeIs5")
    input(v-model="itemCont[15].data")
  .bingoInput-Item(v-if="sizeIs5", :style="{ backgroundColor: '#' + itemBg }")
    input(v-model="itemCont[16].data")
  .bingoInput-Item(v-if="sizeIs5")
    input(v-model="itemCont[17].data")
  .bingoInput-Item(v-if="sizeIs5", :style="{ backgroundColor: '#' + itemBg }")
    input(v-model="itemCont[18].data")
  .bingoInput-Item(v-if="sizeIs5")
    input(v-model="itemCont[19].data")
  .bingoInput-Item(v-if="sizeIs5", :style="{ backgroundColor: '#' + itemBg }")
    input(v-model="itemCont[20].data")
  .bingoInput-Item(v-if="sizeIs5")
    input(v-model="itemCont[21].data")
  .bingoInput-Item(v-if="sizeIs5", :style="{ backgroundColor: '#' + itemBg }")
    input(v-model="itemCont[22].data")
  .bingoInput-Item(v-if="sizeIs5")
    input(v-model="itemCont[23].data")
  .bingoInput-Item(v-if="sizeIs5", :style="{ backgroundColor: '#' + itemBg }")
    input(v-model="itemCont[24].data")
</template>
<script>
  export default {
    props: ['mode', 'size', 'itemBg', 'itemCont'],
    computed: {
      sizeIs3: function () {
        return this.size === 3;
      },
      sizeIs5: function () {
        return this.size === 5;
      }
    }
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
  margin: 32px auto 0;

  &.bingoInput-size3 {
    width: 333px;

    .bingoInput-Item {
      width: calc(100% / 3);
    }
  }

  &.bingoInput-size5 {
    width: 555px;

    .bingoInput-Item {
      width: calc(100% / 5);
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
