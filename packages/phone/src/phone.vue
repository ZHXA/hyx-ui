
<template>
    <div class="hyx-phone">
      <div class="hyx-phone__content">
        <slot></slot>
      </div>
      <div class="hyx-phone__footer">
        <slot name="footer"></slot>
      </div>

    </div>
</template>

<script>
export default {
  name: 'hyxPhone',
  data () {
    return {

    }
  }
}
</script>
