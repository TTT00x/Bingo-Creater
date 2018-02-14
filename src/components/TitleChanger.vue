<template lang="pug">
.Title-Wrapper
  input.Title#title(
    @change='emitChangeTitle',
    @focus="onFocusInput",
    @blur="onBlurInput",
    v-show="inputIsShown",
    v-model="titleValue",
    placeholder='タイトル'
  )
  p.Title-view(@click="onClickTitle", v-show="!inputIsShown", v-text="title")
</template>
<script>
  export default {
    props: ['title', 'mode'],
    data() {
      return {
        titleValue: this.title,
        titleIsEditing: false,
        input: null
      }
    },
    computed: {
      inputIsShown: function () {
        return this.modeIsMake && (this.titleIsEmpty || this.titleIsEditing);
      },
      titleIsEmpty: function () {
        return this.titleValue === '';
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
        setTimeout(() => {
          this.input.focus();
        }, 40)
      },
      emitChangeTitle: function () {
        this.$emit('changeTitle', this.titleValue);
      }
    }
  }
</script>
<style scoped>
.Title {
  border: none;
  border-bottom: 1px solid gray;
  display: block;
  font-family: inherit;
  font-size: 20px;
  line-height: 100%;
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

.Title-view {
  border-bottom: 1px solid gray;
  display: block;
  font-size: 20px;
  line-height: 140%;
  margin: 0 auto;
  max-width: 500px;
  padding: 11px 10px;
  text-align: center;
  width: 100%;
}
</style>