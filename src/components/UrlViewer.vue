<template lang="pug">
  input(v-on:click="load", readonly, value=this.url)
</template>
<script>
  export default {
    props: ['title', 'mode', 'size', 'itemBg', 'itemCont'],
    data() {
      return {
        domain: ''
      }
    },
    methods: {
      load: () => {
        console.log(this.props);
      }
    },
    computed: {
      url: function() {
        return `${this.domain}?${this.encodeTitle}&mode=${this.mode}&size=${this.size}&bg=${this.itemBg}${this.encodeContents}`
      },
      encodeTitle: () => {
        return encodeURIComponent(this.title);
      },
      encodeContents: () => {
        const cont = this.itemCont;
        const len = cont.length;
        let data = '';
        for (let i = 0; i < len; i += 1) {
          const dataItem = encodeURIComponent(cont[i].data);
          if (!dataItem) return;
          data = `${data}&cont${i}=dataItem`
        }
      }
    }
  };
</script>
<style scoped>
  $bingo-border: #2c3e50;

</style>
