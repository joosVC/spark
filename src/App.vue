<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted(){
    this.$store.dispatch("posts/loadPosts");
    this.$store.dispatch("labels/loadLabels");
  }
}
</script>
<style lang="css">

</style>
