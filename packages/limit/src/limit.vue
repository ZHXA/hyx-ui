
<template>
  <div class="hyx-limit">
    <el-input v-focus  autofocus  v-bind="$attrs" :type="type"  v-model="currentValue" @input="input" ></el-input>
    <span class="hyx-limit--over" v-if="limit&&isText">
      <span class="hyx-limit__text" ref="limit">
         <span class="hyx-limit__count" >
               <span :class="{'hyx-limit--isOver':isOver}">{{count}}</span>/<span>{{limit}}</span>
         </span>
      </span>
    </span>
    <span class="hyx-limit--textOver" v-if="limit&&!isText" ref="limit">
     <span :class="{'hyx-limit--isOver':isOver}">{{count}}</span>/<span>{{limit}}</span>
    </span>

  </div>
</template>

<script>
import {mixin} from '../../../utils/minxin'
export default {
  name: 'hyxLimit',
  data () {
    return {
      currentValue: ''
    }
  },
  mixins: [mixin],
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    limit: {
      type: [String, Number],
      default: 20
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    input (value) {
      this.$emit('input', value)
      this.$emit('change', value)

      if (this.isOver) this.$emit('overText', value)
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    isOver () {
      return this.count > this.limit
    },
    count () {
      return this.currentValue ? this.currentValue.length : 0
    },
    isText () {
      return this.type !== 'textarea'
    }
  }

}
</script>
