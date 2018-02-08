<template lang="pug">
.bingo.bingo-size3(v-bind:class="{ 'bingo-size3': sizeIs3, 'bingo-size5': sizeIs5 }")
  p.bingo-Item(:style="{ backgroundColor: '#' + itemBg }", v-text="itemCont[0].data")
  p.bingo-Item(v-text="itemCont[1].data")
  p.bingo-Item(:style="{ backgroundColor: '#' + itemBg }", v-text="itemCont[2].data")
  p.bingo-Item(v-text="itemCont[3].data")
  p.bingo-Item(:style="{ backgroundColor: '#' + itemBg }", v-text="itemCont[4].data")
  p.bingo-Item(v-text="itemCont[5].data")
  p.bingo-Item(:style="{ backgroundColor: '#' + itemBg }", v-text="itemCont[6].data")
  p.bingo-Item(v-text="itemCont[7].data")
  p.bingo-Item(:style="{ backgroundColor: '#' + itemBg }", v-text="itemCont[8].data")
  p.bingo-Item(v-if="sizeIs5", v-text="itemCont[9].data")
  p.bingo-Item(v-if="sizeIs5", :style="{ backgroundColor: '#' + itemBg }", v-text="itemCont[10].data")
  p.bingo-Item(v-if="sizeIs5", v-text="itemCont[11].data")
  p.bingo-Item(v-if="sizeIs5", :style="{ backgroundColor: '#' + itemBg }", v-text="itemCont[12].data")
  p.bingo-Item(v-if="sizeIs5", v-text="itemCont[12].data")
  p.bingo-Item(v-if="sizeIs5", :style="{ backgroundColor: '#' + itemBg }", v-text="itemCont[14].data")
  p.bingo-Item(v-if="sizeIs5", v-text="itemCont[15].data")
  p.bingo-Item(v-if="sizeIs5", :style="{ backgroundColor: '#' + itemBg }", v-text="itemCont[16].data")
  p.bingo-Item(v-if="sizeIs5", v-text="itemCont[17].data")
  p.bingo-Item(v-if="sizeIs5", :style="{ backgroundColor: '#' + itemBg }", v-text="itemCont[18].data")
  p.bingo-Item(v-if="sizeIs5", v-text="itemCont[19].data")
  p.bingo-Item(v-if="sizeIs5", :style="{ backgroundColor: '#' + itemBg }", v-text="itemCont[20].data")
  p.bingo-Item(v-if="sizeIs5", v-text="itemCont[21].data")
  p.bingo-Item(v-if="sizeIs5", :style="{ backgroundColor: '#' + itemBg }", v-text="itemCont[22].data")
  p.bingo-Item(v-if="sizeIs5", v-text="itemCont[23].data")
  p.bingo-Item(v-if="sizeIs5", :style="{ backgroundColor: '#' + itemBg }", v-text="itemCont[24].data")
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

.bingo {
  border-top: 1px solid $bingo-border;
  border-left: 1px solid $bingo-border;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  margin: 32px auto;

  &.bingo-size3 {
    height: 333px;
    width: 333px;

    .bingo-Item {
      height: calc(100% / 3);
      width: calc(100% / 3);
    }
  }

  &.bingo-size5 {
    height: 555px;
    width: 555px;

    .bingo-Item {
      height: calc(100% / 5);
      width: calc(100% / 5);
    }
  }
}

.bingo-Item {
  border-right: 1px solid $bingo-border;
  border-bottom: 1px solid $bingo-border;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  &.is_open {
    position: relative;

    &:after {
      background-color: crimson;
      border-radius: 50%;
      content: '';
      display: block;
      opacity: .3;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      height: 80%;
      width: 80%;
    }
  }
}
</style>
