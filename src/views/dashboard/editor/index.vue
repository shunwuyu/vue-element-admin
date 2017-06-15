<template>
  <div class="dashboard-editor-container">
    <div class="clearfix">
      <PanThumb style="float: left" :image="avatar"> 你的权限:
        <span class="pan-info-roles" v-for="item in roles">{{item}}</span>
      </PanThumb>
    </div>
  </div>
</template>
<script>
import PanThumb from 'components/PanThumb'
export default {
  data () {
    return {
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      roles: ['编辑']
    }
  },
  components: {
    PanThumb
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
