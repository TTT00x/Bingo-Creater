<template lang="pug">
.bingo.bingo-333(v-if='mode === 3')
  p.bingo-Item(:style="{ backgroundColor: itemBg }", v-text="itemCont[0].data")
  p.bingo-Item(v-text="itemCont[1].data")
  p.bingo-Item(:style="{ backgroundColor: itemBg }", v-text="itemCont[2].data")
  p.bingo-Item(v-text="itemCont[3].data")
  p.bingo-Item(:style="{ backgroundColor: itemBg }", v-text="itemCont[4].data")
  p.bingo-Item(v-text="itemCont[5].data")
  p.bingo-Item(:style="{ backgroundColor: itemBg }", v-text="itemCont[6].data")
  p.bingo-Item(v-text="itemCont[7].data")
  p.bingo-Item(:style="{ backgroundColor: itemBg }", v-text="itemCont[8].data")
</template>
<script>
  export default {
    props: ['mode', 'itemBg', 'itemCont']
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

  &.bingo-333 {
    height: 333px;
    width: 333px;

    .bingo-Item {
      height: calc(100% / 3);
      width: calc(100% / 3);
    }
  }

  &.bingo-555 {
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
