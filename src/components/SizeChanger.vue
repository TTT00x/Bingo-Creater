<template lang="pug">
.sizeChanger-Wrapper
  .sizeChanger
    input.sizeChanger-Input#sizeChanger-3(@change="emitChangeSize", type='radio', name='sizeChanger', value='3', checked)
    label.sizeChanger-Label(for='sizeChanger-3', v-bind:class="{ 'is_active': sizeIs3 }") 3 × 3
    input.sizeChanger-Input#sizeChanger-5(@change="emitChangeSize", type='radio', name='sizeChanger', value='5')
    label.sizeChanger-Label(for='sizeChanger-5', v-bind:class="{ 'is_active': sizeIs5 }") 5 × 5
</template>
<script>
  export default {
    props: ['size'],
    computed: {
      sizeIs3: function () {
        return this.size === 3;
      },
      sizeIs5: function () {
        return this.size === 5;
      }
    },
    methods: {
      emitChangeSize: function(e) {
        const val = e.target.value;
        this.$emit('changeSize', val);
      }
    }
  };
</script>
<style scoped>
$bingo-border: #2c3e50;

.sizeChanger-Wrapper {
  margin-top: 32px;
  position: relative;
}

.sizeChanger {
  border: 1px solid $bingo-border;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 140px;
}

.sizeChanger-Input {
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  -webkit-appearance: none;

  &:focus,
  &:active {
    outline: none;
  }
}

.sizeChanger-Label {
  font-size: 16px;
  line-height: 100%;
  padding: 5px 10px;
  text-align: center;
  width: 70px;

  &.is_active {
    background-color: $bingo-border;
    color: #fff;

    &:hover {
      background-color: $bingo-border;
      cursor: default;
    }
  }

  &:hover {
    background-color: #efefef;
    cursor: pointer;
  }
}

.sizeChanger-Input:focus + .sizeChanger-Label {
  outline: 1px dotted;
}

.sizeChanger-Input:checked + .sizeChanger-Label {

}
</style>
