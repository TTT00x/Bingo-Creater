<template lang="pug">
#app
  h1 {{ msg }}
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
      msg: '',
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
  margin: 60px auto 0;
  max-width: 900px;
  width: 100%;
}
</style>
