<template lang='pug'>
#app
  h1
  input.bingoTtl(v-model='title')
  bingo(:mode='mode', :itemBg='itemBg', :itemCont='itemCont')
  bingoInput(:mode='mode', :itemBg='itemBg', :itemCont='itemCont')
</template>
<script>
import Bingo from './components/Bingo.vue';
import BingoInput from './components/BingoInput.vue'

export default {
  name: 'app',
  components: {
    Bingo,
    BingoInput
  },
  data () {
    return {
      title: '',
      mode: 3,
      itemBg: '#ddd',
      itemCont: this.initItemCont(),
      share: false
    }
  },
  beforeMount: function () {
  },
  methods: {
    initItemCont: () => {
      const itemCont = [];
      for (let i = 0; i < 25; i += 1) {
        itemCont[i] = {};
        itemCont[i].data = '';
        itemCont[i].open = false;
      }
      return itemCont;
    }
  }
};
</script>

<style>
$bingo-border: #2c3e50;

* {
  box-sizing: border-box;
}

#app {
  font-family: 'YuGothic', 'メイリオ', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 64px auto 0;
  max-width: 900px;
  min-width: 555px;
  width: 100%;
}

.bingoTtl {
  border: none;
  border-bottom: 1px solid gray;
  display: block;
  font-size: 20px;
  margin: 0 auto;
  max-width: 500px;
  padding: 10px;
  width: 100%;

  &:focus {
    background-color: aliceblue;
    box-shadow: none;
    outline: none;
  }
}
</style>
