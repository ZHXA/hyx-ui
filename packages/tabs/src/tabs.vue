
<template>
  <div :class="tabCls">
    <div v-for="(item,index) of dataSource "  @click="trigger(item, index)"
         @mouseenter="mouseenter(index,item)"
         @mouseleave="mouseleave(index,item)"
         :key="item[key]" :class="{'hyx-tabs__selected':item[key]==value,'hyx-tabs__item--selected':item[key] == value}" class="hyx-tabs__item">
      <span v-if="!$scopedSlots.item">{{item[title]}}</span>
      <slot v-else :tab="item" name="item"></slot>
    </div>
  </div>

</template>

<script>
const prefix = 'hyx-tabs'
export default {
  name: 'hyx-tabs',
  data () {
    return {
      key: this.keyName,
      title: this.titleName
    }
  },
  props: {
    dataSource: {
      type: [Array, Object],
      default: () => []
    },
    className: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    },
    value: [String, Number],
    keyName: {
      type: String,
      default: 'key'
    },
    titleName: {
      type: String,
      default: 'value'
    },
  },
  methods: {
    trigger (data, index) {
      if (this.value !== data[this.key]) {
        this.$emit('input', data[this.key])
        this.$emit('change', data, index)
      }
      this.$emit('click', data, index)
    },
    mouseenter (index, item) {
      this.$emit('mouseenter', index, item)
    },
    mouseleave (index, item) {
      this.$emit('mouseleave', index, item)
    }

  },
  computed: {
    tabCls () {
      return {
        [`${prefix}`]: true,
        [`${prefix}--${this.type}`]: !!this.type && !this.className,
        [this.className]: !!this.className
      }
    }
  }

}
</script>
