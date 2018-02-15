<template lang='pug'>
#app
  h1
  title-changer(@changeTitle="changeTitle", :title="title", :mode="mode")
  size-changer(v-if="mode === 'make'", @changeSize='changeSize', :mode='mode', :size='size')
  bingo-btns(v-if="mode === 'play'", @changeMode="changeMode", @clearHoleStatus="clearHoleStatus", :mode='mode')
  bingo(@switchHoleStatus='switchHoleStatus', :mode='mode', :size='size', :itemBg='itemBg', :itemCont='itemCont')
  bingo-input(v-if="mode === 'make'", :mode='mode', :size='size', :itemBg='itemBg', :itemCont='itemCont')
  clear-cont-btn(v-if="mode === 'make'", @clearItemCont="clearItemCont")
  url-viewer(v-if="mode !== 'result'", :title='title', :mode='mode', :size='size', :itemBg='itemBg', :itemCont='itemCont')
  play-btn(v-if="mode === 'result'", @changeMode="changeMode")
  vue-footer
</template>
<script>
import Bingo from './components/Bingo';
import BingoInput from './components/BingoInput';
import TitleChanger from './components/TitleChanger';
import SizeChanger from './components/SizeChanger';
import ClearContBtn from './components/ClearContBtn';
import BingoBtns from './components/BingoBtns/BingoBtns';
import PlayBtn from './components/PlayBtn';
import UrlViewer from './components/UrlViewer';
import VueFooter from './components/VueFooter';

export default {
  name: 'app',
  components: {
    Bingo,
    BingoInput,
    TitleChanger,
    SizeChanger,
    ClearContBtn,
    BingoBtns,
    PlayBtn,
    UrlViewer,
    VueFooter
  },
  data () {
    return {
      title: '',
      mode: 'make',
      size: 3,
      itemBg: 'efefef',
      itemCont: this.initItemCont()
    }
  },
  created: function () {
    this.checkParam();
  },
  methods: {
    checkParam: function () {
      const param = location.search.substring(1).split('&');
      if (param[0] === '') return;
      const paramLen = param.length;
      const arg = {};
      arg.itemCont = [];
      for(let i = 0; i < paramLen; i += 1) {
        let kv = param[i].split('=');
        if (kv[0].indexOf('cont') === 0) {
          let contIndex = kv[0].replace('cont', '');
          arg.itemCont[contIndex] = {};
          arg.itemCont[contIndex].data =kv[1]
        } else if (kv[0].indexOf('open') === 0) {
          let openIndex = kv[0].replace('open', '');
          if (arg.itemCont[openIndex]) {
            arg.itemCont[openIndex].open = parseInt(kv[1]) === 1;
          }
        } else if (kv[0] === 'size') {
          arg[kv[0]] = parseInt(kv[1]);
        } else {
          arg[kv[0]] = kv[1];
        }
      }
      this.setData(arg);
    },
    setData: function (arg) {
      this.title =  decodeURI(arg.title);
      this.mode = arg.mode;
      this.size = arg.size;
      const cont = arg.itemCont;
      for (let prop in cont) {
        this.itemCont[prop].data = decodeURI(cont[prop].data);
        this.itemCont[prop].open = cont[prop].open ? decodeURI(cont[prop].open) : false;
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
    changeTitle: function (val) {
      this.title = val;
    },
    changeMode: function (val) {
      this.mode = val;
    },
    changeSize: function (val) {
      this.size = parseInt(val);
    },
    switchHoleStatus: function (index) {
      const status = this.itemCont[index].open;
      this.itemCont[index].open = !status;
    },
    clearItemCont: function () {
      this.itemCont = this.initItemCont();
    },
    clearHoleStatus: function () {
      for (let i = 0; i < 25; i += 1) {
        this.itemCont[i].open = false;
      }
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
  color: #333;
  margin: 64px auto 0;
  max-width: 900px;
  padding: 0 10px;
  width: 100%;
}
</style>
