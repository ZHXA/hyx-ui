<template>
  <button
    @click="$emit('click')"
    class="hyx-button"
    :disabled="disabled"
    :class="[
    'hyx-button--'+type,
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round},
    'hyx-button--'+size
    ]"
  >
    <i v-if="icon !== ''" :class="icon"></i>
    <slot>{{msg}}</slot>
  </button>
</template>
<script>
export default{
  name: 'hyxButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    plain: Boolean,
    disabled: Boolean,
    round: Boolean
  },
  data () {
    return {
      msg: 'button'
    }
  }
}
</script>
