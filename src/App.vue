<template lang="pug">
  #app
    h1 {{ msg }}
    .bingo.bingo-333(v-if='mode === 333')
      p.bingo-Item(:style="{ backgroundColor: itemBg }", v-text="itemCont[0].data")
      p.bingo-Item(v-text="itemCont[1].data")
      p.bingo-Item(:style="{ backgroundColor: itemBg }", v-text="itemCont[2].data")
      p.bingo-Item(v-text="itemCont[3].data")
      p.bingo-Item(:style="{ backgroundColor: itemBg }", v-text="itemCont[4].data")
      p.bingo-Item(v-text="itemCont[5].data")
      p.bingo-Item(:style="{ backgroundColor: itemBg }", v-text="itemCont[6].data")
      p.bingo-Item(v-text="itemCont[7].data")
      p.bingo-Item(:style="{ backgroundColor: itemBg }", v-text="itemCont[8].data")
    .bingoInput.bingoInput-333
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
  name: 'app',
  data () {
    return {
      msg: '',
      mode: 333,
      itemBg: '#ddd',
      itemCont: [
        {
          data: '',
          open: false
        },
        {
          data: '',
          open: false
        },
        {
          data: '',
          open: false
        },
        {
          data: '',
          open: false
        },
        {
          data: '',
          open: false
        },
        {
          data: '',
          open: false
        },
        {
          data: '',
          open: false
        },
        {
          data: '',
          open: false
        },
        {
          data: '',
          open: false
        }
      ],
      share: false
    }
  }
}
</script>

<style scoped>
$bingo-border: #2c3e50;

* {
  box-sizing: border-box;
}

#app {
  font-family: 'YuGothic', 'メイリオ', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  max-width: 900px;
  width: 100%;
}

.bingo {
  border-top: 1px solid $bingo-border;
  border-left: 1px solid $bingo-border;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;

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
