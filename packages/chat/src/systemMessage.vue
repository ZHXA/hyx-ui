
<template>
  <div class="SystemMessage">
    <hyx-template v-width="322"
                 v-bind="$attrs"
                 :footer="false"
    >
      <hyx-fold v-width="207"  v-if="type==='card'">
        <hyx-card v-width="196" v-bind="$attrs" ></hyx-card>
      </hyx-fold>
      <hyx-media v-else v-width="224" v-height="144" v-bind="$attrs"></hyx-media>
    </hyx-template>

  </div>

</template>

<script>
export default {
  name: 'systemMessage',
  data () {
    return {

    }
  },
  props: {
    data: {
      type: Array,
      default: () => [{
        name: '标签一',
        color: 'primary'
      }, {
        name: '标sdsdsddgsgs签四',
        color: 'success'
      }, {
        name: '标sdsdsddgsgs签四',
        color: 'info'
      }
      ]
    },
    type: String

  }
}
</script>
