<template lang="pug">
footer.Footer
  .Footer-Cont
    ul.Footer-NavList
      li
        a.Footer-Link(href='/', target="_blank") ビンゴを作る
      li
        a.Footer-Link(href="", target="_blank") Web拍手
    p.copyright Bingo-Maker is created by
      =' '
      a(href="") @
</template>
<style>
.Footer {
  margin-top: 64px;
  padding: 16px;
  width: 100%;
}

.Footer-Cont {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
}

.Footer-NavList {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 32px;

  li {
    display: block;
    list-style: none;
    line-height: 100%;
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
}

.Footer-Link {
  color: #666;
  font-size: 12px;

  &:hover {
    opacity: .7;
  }
}

.copyright {
  color: #666;
  font-size: 12px;

  a {
    color: #666;

    &:hover {
      opacity: .7;
    }
  }
}

@media (max-width: 555px) {

  .Footer-Cont {
    flex-direction: column;
  }

  .Footer-NavList {
    margin-right: 0;
  }

  .copyright {
    margin-top: 16px;
  }
}
</style>