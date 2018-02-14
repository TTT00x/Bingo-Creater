<template lang="pug">
  footer.Footer
    p Bingo-Maker is created by
      =' '
      a(href="") @
</template>
<style>
.Footer {
  display: flex;
  justify-content: center;
  margin-top: 64px;
  padding: 16px;
  width: 100%;

  p {
    color: #666;
    font-size: 12px;
  }

  a {
    color: #666;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>