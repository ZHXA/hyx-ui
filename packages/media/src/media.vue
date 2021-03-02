
<template>

  <div class="hyx-media">

    <hyx-audio   v-if="type.indexOf('audio')>-1" :src="src" v-bind="$attrs"></hyx-audio>

    <hyx-video  v-if="type.indexOf('video')>-1"  :src="src"  v-bind="$attrs"></hyx-video>

    <el-image   v-width="'100%'" v-height="'100%'"  v-if="type.indexOf('image')>-1" :src="src"  v-bind="$attrs"></el-image>

    <div class="hyx-media__title" v-if="title">{{title}}</div>
  </div>

</template>

<script>
import { matchType } from '../../../utils/tool'
export default {
  name: 'hyx-media',
  data () {
    return {

    }
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    defaultCover: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    type () {
      return matchType(this.src)
    }
  }
}
</script>
