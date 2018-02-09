<template lang="pug">
.UrlViewer-Wrapper
  p.UrlViewer-Description
    |{{ description }}
    br
    span (現在のURLでは内容を共有できません。下記のURLを共有してください。)
  textarea.UrlViewer#urlViewer(@focus="select", v-model="url", readonly)
  .UrlViewer-BtnWrapper
    button.UrlViewer-Btn_Copy(@click="copy") コピーする
    a.UrlViewer-Btn_Tweet(:href="tweetHref", rel="nofollow", target="_blank") Tweetする
  .UrlViewer-Notification(v-if="copyComplete")
    p コピーしました
</template>
<script>
  export default {
    props: ['title', 'mode', 'size', 'itemBg', 'itemCont'],
    data() {
      return {
        domain: 'http://' + document.domain,
        copyComplete: false
      }
    },
    methods: {
      select: (e) => {
        e.currentTarget.select();
      },
      copy: function () {
        const textArea = document.getElementById('urlViewer');
        textArea.select();
        document.execCommand('copy');
        this.copyComplete = true;
        setTimeout(() => {
          this.copyComplete = false;
        }, 3000);
      }
    },
    computed: {
      modeIsMake: function () {
        return this.mode === 'make';
      },
      modeIsShare: function () {
        return this.mode === 'share';
      },
      modeIsResult: function () {
        return this.mode === 'result';
      },
      description: function () {
        if (this.modeIsMake) {
          return 'ビンゴを共有する'
        } else if (this.modeIsShare) {
          return '結果を共有する'
        }
      },
      url: function() {
        return `${this.domain}/?title=${this.encodeTitle}&mode=${this.nextMode}&size=${this.size}${this.encodeContents}`
      },
      nextMode: function () {
        if (this.modeIsMake) {
          return 'share';
        } else if (this.modeIsShare) {
          return 'result';
        } else if (this.modeIsResult) {
          return this.mode;
        }
      },
      encodeTitle: function () {
        return encodeURIComponent(this.title);
      },
      encodeContents: function () {
        const cont = this.itemCont;
        const len = cont.length;
        let data = '';
        for (let i = 0; i < len; i += 1) {
          let dataItem = encodeURIComponent(cont[i].data);
          if (dataItem) {
            data = `${data}&cont${i}=${dataItem}`;
          }
        }
        return data;
      },
      tweetHref: function () {
        let description;
        if (this.modeIsMake) {
          description = 'ビンゴを作りました！';
        } else if (this.modeIsShare) {
          description = 'ビンゴで遊びました！'
        }
        description = encodeURI(`${description} | `);
        const text = description + this.encodeTitle;
        return `http://twitter.com/share?text=${text}&url=${this.url}`
      }
    }
  };
</script>
<style scoped>
$bingo-border: #2c3e50;

.UrlViewer-Wrapper {
  margin: 48px auto 0;
  max-width: 500px;
  width: 100%;
}

.UrlViewer-Description {
  font-size: 14px;
  text-align: center;
  line-height: 140%;

  span {
    color: #5b5b5b;
    font-size: 12px;
  }
}

.UrlViewer {
  border: 1px solid $bingo-border;
  font-size: 14px;
  line-height: 160%;
  margin-top: 8px;
  padding: 10px;
  resize: none;
  text-align: left;
  width: 100%;
  word-break: break-all;

  &:focus {
    background-color: aliceblue;
    outline: none;
  }
}

.UrlViewer-BtnWrapper {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

.UrlViewer-Btn_Copy {
  background-color: #fff;
  border: 1px solid $bingo-border;
  color: $bingo-border;
  display: block;
  font-size: 14px;
  margin-right: 16px;
  padding: 5px 10px;

  &:hover {
    background-color: $bingo-border;
    color: #fff;
    cursor: pointer;
  }
}

.UrlViewer-Btn_Tweet {
  background-color: $bingo-border;
  border: 1px solid $bingo-border;
  color: #fff;
  display: block;
  font-size: 14px;
  padding: 5px 10px;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    color: $bingo-border;
    cursor: pointer;
  }
}

.UrlViewer-Notification {
  background-color: $bingo-border;
  border-radius: 4px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: calc(50% - 25px);
  left: calc(50% - 95px);
  font-size: 14px;
  height: 50px;
  padding: 10px;
  text-align: center;
  width: 190px;
}
</style>
