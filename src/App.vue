<template lang="pug">
v-app
  v-toolbar(app)
    v-toolbar-title(v-text='title')
    cb-menu.cbMenu
  v-content
    v-container
      router-view
  v-footer(fixed app)
    span © 2017
</template>

<script>
import cbMenu from "@/components/menu"

export default {
  components: {
    cbMenu
  },
  data () {
    return {
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      title: 'Book Crossing'
    }
  }
}
</script>

<style lang="stylus" scoped>
.cbMenu
  margin 0 auto
</style>
