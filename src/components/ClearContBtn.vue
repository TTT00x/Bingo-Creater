<template lang="pug">
.clearBtn-Wrapper
  button.clearBtn(@click="emitClearItemCont") ビンゴをクリア
</template>
<script>
  export default {
    methods: {
      emitClearItemCont: function () {
        this.$emit('clearItemCont');
      }
    }
  }
</script>
<style scoped>
$bingo-border: #2c3e50;

.clearBtn-Wrapper {
  margin-top: 16px;
}

.clearBtn {
  border-bottom: 1px solid $bingo-border;
  color: $bingo-border;
  display: block;
  font-size: 12px;
  margin: 0 auto;
  padding: 3px;

  &:hover {
    cursor: pointer;
    opacity: .7;
  }
}
</style>