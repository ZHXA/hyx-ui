
<template>
  <div :class="cls" >
    <i :class="icon"></i>

  </div>
</template>

<script>
const classnames = require('classnames')

export default {
  name: 'hyx-alert',
  data () {
    return {

    }
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    cls () {
      return classnames('hyx-alert', {[`hyx-alert--${this.type}`]: !!this.type})
    }
  }
}
</script>
