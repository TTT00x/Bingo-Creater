<template lang="pug">
.Title-Wrapper
  input.Title#title(
    @change='emitChangeTitle',
    @focus="onFocusInput",
    @blur="onBlurInput",
    v-if="inputIsShown",
    v-model="titleInput",
    placeholder='タイトル'
  )
  p(@click="onClickTitle", v-if="!inputIsShown", v-text="title")
</template>
<script>
  export default {
    props: ['title', 'mode'],
    data() {
      return {
        titleInput: '',
        titleIsEditing: false,
        input: null
      }
    },
    computed: {
      inputIsShown: function () {
        return this.modeIsMake && (this.titleIsEmpty || this.titleIsEditing);
      },
      titleIsEmpty: function () {
        return this.titleInput === '';
      },
      modeIsMake: function () {
        return this.mode === 'make';
      }
    },
    mounted: function () {
      this.input = document.getElementById('title');
    },
    methods: {
      onFocusInput: function () {
        this.titleIsEditing = true;
      },
      onBlurInput: function () {
        this.titleIsEditing = false;
      },
      onClickTitle: function () {
        this.titleIsEditing = true;
        this.input.focus();
      },
      emitChangeTitle: function () {
        this.$emit('changeTitle', this.titleInput);
      }
    }
  }
</script>
<style>
.Title {
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
    background-color: #fafafa;
    box-shadow: none;
    outline: none;
  }

  &:placeholder-shown {
    color: #d7d7d7;
  }
  &::-webkit-input-placeholder {
    color: #d7d7d7;
  }
  &:-ms-input-placeholder {
    color: #d7d7d7;
  }
}
</style>