
<template>
   <div class="hyx-plain-card"  v-if="plain||size==='mini'">

     <hyx-media v-height="126"  :title="title" :src="src" v-bind="$attrs" :fit="fit"></hyx-media>
     <div class="hyx-plain-card__container" :style="bodyStyle">
       <div class="hyx-plain-card__des">  {{ desc }}</div>
       <!--<div class="hyx-plain-card__content" ><slot></slot></div>-->
     </div>
   </div>
   <div :class="cls" v-else-if="size==='small'">
     <hyx-media v-height="144"  :src="src" v-bind="$attrs" :fit="fit"></hyx-media>
     <div class="hyx-card--small-container" :style="bodyStyle">
        <div class="hyx-card--small-title">{{title}}</div>
        <div class="hyx-card--small-des">{{ desc }}</div>
     </div>
   </div>

   <div v-else :class="cls" >
    <slot name="header"></slot>
    <slot v-if="$slots.default"></slot>
    <div v-else class="hyx-card__body" >
      <div class="hyx-card__header">
        <hyx-media :src="src" v-bind="$attrs" :fit="fit"></hyx-media>
      </div>
      <div class="hyx-card__content" :style="bodyStyle">
        <div class="hyx-card__title">
          {{ title }}
        </div>
        <div class="hyx-card__desc">
          {{ desc }}
        </div>
        <div class="hyx-card__footer">
           <hyx-tag class="hyx-card__action" round  type="plain" v-for="action in actions" :key="action">
             {{action}}
           </hyx-tag>
        </div>
      </div>
    </div>
    <slot name="footer"></slot>

  </div>

</template>

<script>
const classnames = require('classnames')
export default {
  name: 'hyxCard',
  data () {
    return {

    }
  },
  props: {
    bodyStyle: Object,
    shadow: String,
    border: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      default: ''
    },
    desc: String,
    time: String,
    actions: Array,
    title: String,
    plain: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: (value) => {
        return ['medium', 'small', 'mini'].indexOf(value) !== -1
      },
      default: 'medium'
    },
    fit: {
      type: String,
      default: 'contain'
    }
  },
  computed: {
    cls () {
      const className = classnames('hyx-card', {[`hyx-card--${this.size}`]: !!this.size})
      return className
    },
    getBodyStyle () {
      return { padding: '0px', ...this.bodyStyle}
    }

  }
}
</script>
