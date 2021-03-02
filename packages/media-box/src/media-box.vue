
<template>
  <div class="hyx-media-box">
    <div class="hyx-media-box__top">
      <div class="hyx-media-box__title">{{title}}</div>
      <!--<div class="hyx-media-box__action">-->
        <!--<hyx-button-more    v-bind="$attrs" >-->
          <!--<i class="icon-more"></i>-->
        <!--</hyx-button-more>-->
      <!--</div>-->
    </div>
    <div class="hyx-media-box__content">
    <slot></slot>
    </div>
    <div class="hyx-media-box__bottom">
      <slot name="footer">
        <hyx-action  v-bind="$attrs" ></hyx-action>
      </slot>
    </div>
  </div>
</template>

<script>
import emitter from '../../../utils/emitter.js'
export default {
  name: 'hyx-media-box',
  componentName: 'parent',
  data () {
    return {

    }
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  mixins: [emitter],
  methods: {
    name () {

    }
  }
}
</script>
