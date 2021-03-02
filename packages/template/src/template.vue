<template>
  <div :class="cls">
    <div v-if="isEdit&&(disabled || isChecked)" :class="getModelType"></div>
    <div class="hyx-template__header">
      <div class="hyx-template__name">
        <span class="hyx-label mr5">模板名称:</span>{{ name }}
      </div>
      <el-checkbox
        v-if="isEdit"
        :label="label"
        :disabled="disabled"
        style="margin-right: -10px"
        >&nbsp</el-checkbox
      >
    </div>
    <!--<div class="hyx-template__title">-->
      <!--<span class="hyx-label mr5">模板ID:</span>{{ id }}-->
    <!--</div>-->
    <div></div>
    <div class="hyx-template__content" :style="bodyStyle">
      <slot> </slot>
    </div>
    <div class="hyx-template__des">
      <hyx-button-ellipsis size="mini" :data="buttons"> </hyx-button-ellipsis>
    </div>
    <div class="hyx-template__footer mt20" v-if="state">
      <div class="hyx-template__state">
        <span
          class="hyx-template__circle mr6"
          v-if="stateColor"
          v-bg-color="stateColor"
        ></span>
        <span>{{ state }}</span>
      </div>
      <hyx-button-more :menus="menus" class="hyx-template__menus">
        <i class="icon-more"></i>
      </hyx-button-more>
    </div>
       <slot name="footer"  v-else ></slot>

  </div>
</template>

<script>
import emitter from '../../../utils/emitter.js'
const prefix = 'hyx-template'
const classnames = require('classnames')
export default {
  name: 'hyx-template',
  componentName: 'parent',
  data () {
    return {
      prefix
    }
  },
  mixins: [emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    modelType: {
      type: String,
      default: 'primary'
    },
    buttons: {
      type: Array,
      default: () => []
    },
    stateColor: {
      type: String,
      default: ''
    },
    state: {
      type: String,
      default: ''
    },
    menus: {
      type: Array,
      default: () => []
    },
    label: {},
    isEdit: {},
    value: {},
    id: {},
    name: {},
    footer: {
      type: Boolean,
      default: false
    },
    bodyStyle: {
      type: Boolean
    }
  },
  computed: {
    cls () {
      const cls = classnames('hyx-template', {
        'hyx-template--disabled': this.isEdit && this.disabled,
        'hyx-template--border': this.isEdit && this.isChecked
      })

      return cls
    },
    getModelType () {
      const cls = classnames('hyx-mask', {
        'hyx-mask--disabled': this.isEdit && this.disabled,
        [`hyx-mask--${this.modelType}`]: this.isEdit && this.isChecked
      })
      return cls
    },
    _checkboxGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName !== 'ElCheckboxGroup') {
          parent = parent.$parent
        } else {
          return parent
        }
      }
      return false
    },
    store () {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value
    },
    isChecked () {
      return this._checkboxGroup && this.store.includes(this.label)
    }
  }
}
</script>
