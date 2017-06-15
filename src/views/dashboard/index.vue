<template lang="html">
  <div class="dashboard-container">
    <component v-bind:is="currentRole"> </component>
  </div>
</template>

<script>
import EditorDashboard from './editor/index'
export default {
  data () {
    return {
      currentRole: 'EditorDashboard'
    }
  },
  components: { EditorDashboard }
}
</script>

<style lang="css">
</style>
