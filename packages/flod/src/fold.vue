
<template>
    <div class="hyx-fold"  >
      <slot></slot>
      <div  class="hyx-fold__shadow" ref="shadow"></div>
    </div>
</template>

<script>
export default {
  name: 'hyx-fold',
  data () {
    return {
      height: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.height = this.$el.offsetHeight * 0.87
      let dom = this.$el.querySelector('.hyx-fold__shadow')
      dom.style.height = this.height + 'px'
    })
  },
  computed: {

  }
}
</script>
