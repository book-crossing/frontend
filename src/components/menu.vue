<template lang="pug">
ul.nav
  li.item: router-link.link(:to="{ name: 'library' }") Библиотека
  li.item: router-link.link(:to="{ name: 'search' }") Поиск
</template>

<style lang="stylus" scoped>
.nav
  margin-top 0
  margin-bottom 0
  padding 0
  list-style none
  display flex
  height 100%

.item
  height 100%

.link
  text-decoration none
  padding 0 23px
  display flex
  align-items center
  height 100%
  color #302119
  font-size 16px
  &:hover
    background-color #eee
  &.link-active
    color #4264fd
</style>
