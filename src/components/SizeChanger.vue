<template lang="pug">
.sizeChanger
  input.sizeChanger-Input#sizeChanger-3(v-on:change="emitChangeSize", type='radio', name='sizeChanger', value='3', checked)
  label.sizeChanger-Label(for='sizeChanger-3') 3 × 3
  input.sizeChanger-Input#sizeChanger-5(v-on:change="emitChangeSize", type='radio', name='sizeChanger', value='5')
  label.sizeChanger-Label(for='sizeChanger-5') 5 × 5
</template>
<script>
  export default {
    props: ['size'],
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

.sizeChanger {
  margin-top: 32px;
  position: relative;
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
  padding: 5px 5px 5px 20px;
  position: relative;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    height: 11px;
    width: 11px;
    border: 2px solid $bingo-border;
    border-radius: 50%;
  }
}

.sizeChanger-Input:focus + .sizeChanger-Label {
  outline: 1px dotted;
}

.sizeChanger-Input:checked + .sizeChanger-Label {

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 4px;
    bottom: 0;
    margin: auto;
    height: 7px;
    width: 7px;
    background-color: $bingo-border;
    border-radius: 50%;
  }
}
</style>
