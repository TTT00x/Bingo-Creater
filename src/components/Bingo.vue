<template lang="pug">
.bingo.bingo-size3(v-bind:class="{ 'is_share': modeIsShare, 'bingo-size3': sizeIs3, 'bingo-size5': sizeIs5 }")
  p.bingo-Item(
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[0].open }",
    :style="{ backgroundColor: '#' + itemBg }"
    )
    span(v-text="itemCont[0].data")
  p.bingo-Item(
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[1].open }"
    )
    span(v-text="itemCont[1].data")
  p.bingo-Item(
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[2].open }",
    :style="{ backgroundColor: '#' + itemBg }"
    )
    span(v-text="itemCont[2].data")
  p.bingo-Item(
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[3].open }"
    )
    span(v-text="itemCont[3].data")
  p.bingo-Item(
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[4].open }",
    :style="{ backgroundColor: '#' + itemBg }"
    )
    span(v-text="itemCont[4].data")
  p.bingo-Item(
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[5].open }"
    )
    span(v-text="itemCont[5].data")
  p.bingo-Item(
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[6].open }",
    :style="{ backgroundColor: '#' + itemBg }"
    )
    span(v-text="itemCont[6].data")
  p.bingo-Item(
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[7].open }"
    )
    span(v-text="itemCont[7].data")
  p.bingo-Item(
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[8].open }",
    :style="{ backgroundColor: '#' + itemBg }"
    )
    span(v-text="itemCont[8].data")
  p.bingo-Item(
    v-if="sizeIs5",
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[9].open }"
    )
    span(v-text="itemCont[9].data")
  p.bingo-Item(
    v-if="sizeIs5",
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[10].open }",
    :style="{ backgroundColor: '#' + itemBg }"
    )
    span(v-text="itemCont[10].data")
  p.bingo-Item(
    v-if="sizeIs5",
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[11].open }"
    )
    span(v-text="itemCont[11].data")
  p.bingo-Item(
    v-if="sizeIs5",
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[12].open }",
    :style="{ backgroundColor: '#' + itemBg }"
    )
    span(v-text="itemCont[12].data")
  p.bingo-Item(
    v-if="sizeIs5",
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[13].open }"
    )
    span(v-text="itemCont[13].data")
  p.bingo-Item(
    v-if="sizeIs5",
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[14].open }",
    :style="{ backgroundColor: '#' + itemBg }"
    )
    span(v-text="itemCont[14].data")
  p.bingo-Item(
    v-if="sizeIs5",
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[15].open }"
    )
    span(v-text="itemCont[15].data")
  p.bingo-Item(
    v-if="sizeIs5",
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[16].open }",
    :style="{ backgroundColor: '#' + itemBg }"
    )
    span(v-text="itemCont[16].data")
  p.bingo-Item(
    v-if="sizeIs5",
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[17].open }"
    )
    span(v-text="itemCont[17].data")
  p.bingo-Item(
    v-if="sizeIs5",
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[18].open }",
    :style="{ backgroundColor: '#' + itemBg }"
    )
    span(v-text="itemCont[18].data")
  p.bingo-Item(
    v-if="sizeIs5",
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[19].open }"
    )
    span(v-text="itemCont[19].data")
  p.bingo-Item(
    v-if="sizeIs5",
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[20].open }",
    :style="{ backgroundColor: '#' + itemBg }"
    )
    span(v-text="itemCont[20].data")
  p.bingo-Item(
    v-if="sizeIs5",
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[21].open }"
    )
    span(v-text="itemCont[21].data")
  p.bingo-Item(
    v-if="sizeIs5",
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[22].open }",
    :style="{ backgroundColor: '#' + itemBg }"
    )
    span(v-text="itemCont[22].data")
  p.bingo-Item(
    v-if="sizeIs5",
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[23].open }"
    )
    span(v-text="itemCont[23].data")
  p.bingo-Item(
    v-if="sizeIs5",
    @click="emitSwitchHoleStatus",
    v-bind:class="{ 'is_open': itemCont[24].open }",
    :style="{ backgroundColor: '#' + itemBg }"
    )
    span(v-text="itemCont[24].data")
</template>
<script>
  export default {
    props: ['mode', 'size', 'itemBg', 'itemCont'],
    data() {
      return {
        bingoElements: null
      }
    },
    computed: {
      modeIsShare: function () {
        return this.mode === 'share';
      },
      sizeIs3: function () {
        return this.size === 3;
      },
      sizeIs5: function () {
        return this.size === 5;
      }
    },
    mounted: function () {
      this.getDom();
    },
    methods: {
      getDom: function () {
        this.bingoElements = Array.prototype.slice.call(document.querySelectorAll('.bingo-Item'));
      },
      emitSwitchHoleStatus: function (e) {
        if (!this.modeIsShare) return;
        const current = e.currentTarget;
        const index = this.bingoElements.indexOf(current);
        this.$emit('switchHoleStatus', index);
      }
    }
  };
</script>
<style scoped>
$bingo-border: #2c3e50;
$hilight: #f5bebe;

.bingo {
  border-top: 1px solid $bingo-border;
  border-left: 1px solid $bingo-border;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  margin: 32px auto;

  &.is_share {

    .bingo-Item {
      &:hover {
        cursor: pointer;
      }
    }
  }

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
  position: relative;

  span {
    position: absolute;
    z-index: 5;
  }

  &.is_open {

    &:after {
      background-color: $hilight;
      border-radius: 50%;
      content: '';
      display: block;
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
