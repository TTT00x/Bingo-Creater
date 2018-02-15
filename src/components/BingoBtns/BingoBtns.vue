<template lang="pug">
.bingoBtns
  edit-bingo-btn(v-if="mode === 'play'", @changeMode="emitChangeMakeMode", @clearHoleStatus="emitClearHoleStatus", mode='mode')
  clear-hole-status-btn(v-if="mode === 'play'", @clearHoleStatus="emitClearHoleStatus")
</template>
<script>
import EditBingoBtn from './EditBingoBtn';
import ClearHoleStatusBtn from './ClearHoleStatusBtn';

export default {
  props: ['mode'],
  components: {
    EditBingoBtn,
    ClearHoleStatusBtn
  },
  methods: {
    emitChangeMakeMode: function() {
      this.$emit('changeMode', 'make');
    },
    emitClearHoleStatus: function () {
      this.$emit('clearHoleStatus');
    }
  }
};
</script>
<style scoped>
$bingo-border: #2c3e50;

.bingoBtns {
  display: flex;
  justify-content: center;
  margin: 16px auto 0;
  max-width: 500px;
  width: 100%;

  button {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
