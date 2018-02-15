<template lang="pug">
.bingoBtns
  edit-bingo-btn(v-if="mode === 'play'", @changeMode="emitChangeMakeMode", mode='mode')
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
  margin-top: 16px;

  button {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
