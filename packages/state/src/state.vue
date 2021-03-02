<template>
   <div v-if="size=='small'"  :class="cls">
     <slot></slot>
   </div>
   <div v-else :class="cls">
     <span class="hyx-state__radius"></span>
     <span class="hyx-state__title"><slot></slot></span>
   </div>
</template>

<script>
const classnames = require('classnames')
const prefix = 'hyx-state'
export default {
  name: 'hyx-state',
  data () {
    return {
      prefix
    }
  },
  props: {
    type: {
      type: String,
      default: 'success'
    },
    size: {
      type: String,
      default: 'mini'
    }
  },
  computed: {
    cls () {
      const cls = classnames(prefix, {
        [`${prefix}--${this.type}`]: this.size !== 'small',
        [`${prefix}--${this.size}`]: true,
        [`${prefix}--${this.size}--${this.type}`]: this.size === 'small'
      })
      return cls
    }
  }
}
</script>
