<template lang='pug'>
#app
  h1
  input.bingoTtl(v-model='title')
  size-selector(v-on:changeSize='changeSize', :mode='mode', :size='size')
  bingo(:mode='mode', :size='size', :itemBg='itemBg', :itemCont='itemCont')
  bingo-input(v-if="mode === 'make'", :mode='mode', :size='size', :itemBg='itemBg', :itemCont='itemCont')
  url-viewer(:title='title', :mode='mode', :size='size', :itemBg='itemBg', :itemCont='itemCont')
  vue-footer
</template>
<script>
import Bingo from './components/Bingo';
import BingoInput from './components/BingoInput';
import SizeSelector from './components/SizeSelector';
import UrlViewer from './components/UrlViewer';
import VueFooter from './components/VueFooter';

export default {
  name: 'app',
  components: {
    Bingo,
    BingoInput,
    SizeSelector,
    UrlViewer,
    VueFooter
  },
  data () {
    return {
      title: '',
      mode: 'make',
      size: 3,
      itemBg: 'ddd',
      itemCont: this.initItemCont()
    }
  },
  created: function () {
    this.checkParam();
  },
  beforeMount: function () {
  },
  methods: {
    checkParam: function () {
      const param = location.search.substring(1).split('&');
      if (param[0] === '') return;
      const paramLen = param.length;
      const arg = {};
      arg.cont = {};
      for(let i = 0; i < paramLen; i += 1) {
        let kv = param[i].split('=');
        if (kv[0].indexOf('cont') === 0) {
          let contIndex = kv[0].replace('cont', '');
          arg.cont[contIndex]=kv[1]
        } else if (kv[0] === 'size') {
          arg[kv[0]] = parseInt(kv[1]);
        } else {
          arg[kv[0]] = kv[1];
        }
      }
      this.setData(arg);
    },
    setData: function (arg) {
      this.title = arg.title;
      this.mode = arg.mode;
      this.size = arg.size;
      const cont = arg.cont;
      for (let prop in cont) {
        this.itemCont[prop].data = decodeURI(cont[prop]);
      }
    },
    initItemCont: () => {
      const itemCont = [];
      for (let i = 0; i < 25; i += 1) {
        itemCont[i] = {};
        itemCont[i].data = '';
        itemCont[i].open = false;
      }
      return itemCont;
    },
    changeSize: function (val) {
      this.size = parseInt(val);
    }
  }
};
</script>

<style>
$bingo-border: #2c3e50;

* {
  box-sizing: border-box;
  backface-visibility: hidden;
}

html, body, div, span, h1, h2, h3, h4, h5, h6, p,
blockquote, pre, a, address, img, q, sub, sup, i,
dl, dt, dd, ol, ul, li, form, label, button, table,
caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
}

html {
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

body {
  width: 100%;
}

table {
  border-collapse: separate;
  border-spacing: 0;
}

a {

  &:focus,
  &:active {
    outline: 1px dotted;
  }
}

input,
select,
option,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus,
  &:active {
    outline: 1px dotted;
  }
}

button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  font: inherit;

  &:focus,
  &:active {
    outline: 1px dotted;
  }
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
  text-align: center;
  width: 100%;

  &:focus {
    background-color: aliceblue;
    box-shadow: none;
    outline: none;
  }
}
</style>
