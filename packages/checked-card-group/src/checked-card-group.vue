
<template>
  <div class="hyx-checked-card-group">
    <slot>

    </slot>
  </div>

</template>

<script>
import emitter from '../../../utils/emitter.js'
export default {
  name: 'hyx-checked-card-group',
  componentName: 'checkedCardGroup',
  data () {
    return {

    }
  },
  mixins: [emitter],
  props: {
    value: {},
    disabled: {
      type: Boolean
    },
    size: {
      type: String,
      validator: function (value) {
        return ['medium', 'small', 'mini', 'tiny'].indexOf(value) !== -1
      }
    }
  }

}
</script>
