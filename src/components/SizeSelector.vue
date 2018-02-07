<template lang="pug">
.sizeSelector
  input.sizeSelector-Input#sizeSelector-3(v-on:change="emitChangeSize", type='radio', name='sizeSelector', value='3', checked)
  label.sizeSelector-Label(for='sizeSelector-3') 3 * 3
  input.sizeSelector-Input#sizeSelector-5(v-on:change="emitChangeSize", type='radio', name='sizeSelector', value='5')
  label.sizeSelector-Label(for='sizeSelector-5') 5 * 5
</template>
<script>
  export default {
    props: ['size'],
    data() {
      return {
        changedSize: 3
      }
    },
    methods: {
      emitChangeSize: function(e) {
        const val = e.target.value;
        console.log(val);
        this.$emit('changeSize', val);
      }
    }
  };
</script>
<style scoped>
$bingo-border: #2c3e50;

.sizeSelector {
  margin-top: 32px;
  position: relative;
}

.sizeSelector-Input {
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

.sizeSelector-Label {
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

.sizeSelector-Input:focus + .sizeSelector-Label {
  outline: 1px dotted;
}

.sizeSelector-Input:checked + .sizeSelector-Label {

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
