
<template>
    <div :class="cls">
       <div class="hyx-action__item" v-for="(item,index) in actions" :key="item.text" @click="actionClick(item)" >
         <i :class='{"hyx-action__icon":true,[`${item.icon}`]:!!item.icon}'></i>
         <span class="hyx-action__text">{{item.text}}</span>
         <el-divider class="hyx-action__divider" direction="vertical" v-if="actions.length-1!==index"></el-divider>
       </div>
    </div>
</template>

<script>
import emitter from '../../../utils/emitter.js'
const classnames = require('classnames')
export default {
  name: 'hyx-action',
  data () {
    return {

    }
  },
  mixins: [emitter],
  props: {
    className: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    actionClick (item) {
      if (this.isParent) {
        this.dispatch('parent', item.key, item)
      } else {
        this.$emit(item.key, item)
      }
    }
  },
  computed: {
    cls () {
      const className = classnames('hyx-action', {
        [`hyx-action--${this.type}`]: !!this.type,
        [this.className]: !!this.className
      })
      return className
    },
    isParent () {
      let parent = this.$parent
      while (parent) {
        const parentComponentName = parent.$options.componentName
        const isGroup = parentComponentName === 'parent'
        if (isGroup) {
          return true
        } else {
          parent = parent.$parent
        }
      }
      return false
    }
  }
}
</script>
