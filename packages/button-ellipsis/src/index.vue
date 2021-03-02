
<template>
  <div class="hyx-button-ellipsis"  :style="style">
    <div class="hyx-button-ellipsis__buttons">
      <span ref="button"  :key="index"  v-for="(item,index) in data" class="hyx-button-ellipsis__button">
          <slot v-if="getComp"  :item="item" ></slot>
          <hyx-tag v-else v-bind="$attrs">{{item.name}}</hyx-tag>
      </span>
    </div>
    <div :style="style" v-if="count" class="hyx-button-ellipsis__number" >+{{count}}</div>
  </div>

</template>

<script>
  export default {
    name: 'hyx-button-ellipsis',
    data () {
      return {
        count: 0
      }
    },
    props: {
      height: {
        type: [Number, String],
        default: 30
      },
      data: {
        type: Array,
        default: () => []
      }
    },
    mounted () {
      setTimeout(() => {
        this.$refs.button && this.$refs.button.forEach((item) => {
          item.offsetTop >= item.offsetHeight && this.count++
        })
      }, 0)
    },
    computed: {
      style () {
        return {height: `${this.height}px`, lineHeight: `${this.height}px`}
      },
      getComp () {
        return this.$scopedSlots.default
      }
    },
    watch: {

    }
  }
</script>
