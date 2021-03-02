
<template>
  <div class="hyx-fixed-menu">
    <hyx-phone>
      <template  slot="footer">
       <div class="hyx-fixed-menu__content">
         <!--<div class="hyx-fixed-menu__items" >-->
         <div class="hyx-fixed-menu is-bottom">
             <hyx-pull-up-menu
               :menus="item"
               v-for="(item,index) in menus"
               :key="index"
               @handMenuClick="handMenuClick"
               @handMenuItemClick="handMenuItemClick"
             >
           </hyx-pull-up-menu>
           </div>
         </div>
      </template>
       <!--</div>-->
    </hyx-phone>
  </div>

</template>

<script>
export default {
  name: 'hyx-fixed-menu',
  data () {
    return {}
  },
  props: {
    menus: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    handMenuClick (menus) {
      this.$emit('handMenuClick', menus)
    },
    handMenuItemClick (e) {
      this.$emit('handMenuItemClick', e)
    }
  }
}
</script>
