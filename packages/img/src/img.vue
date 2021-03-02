
<template>
  <div class="hyx-img">
    <el-image v-width="'100%'"  v-height="'100%'"  v-bind="$attrs" :src="src"></el-image>
    <div class="hyx-img__title" v-if="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'hyx-img',
  data () {
    return {

    }
  },
  props: {
    title: String,
    src: String
  },
  created () {
    console.log(this)
  }
}
</script>
