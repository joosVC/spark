<template>
      <div class="absolute-bottom">
        <svg
          :viewBox="'0 0 ' + $q.screen.width + ' 200'"
          style="margin-bottom: -100px"
        >
          <path
            :d="
              'M 0,107 Q ' +
              $q.screen.width / 2 +
              ',' +
              bend +
              ' ' +
              $q.screen.width +
              ',107'
            "
            :fill="scrollInfo.direction === 'up' ? colorUp : colorDown"
          />
        </svg>
      </div>
</template>

<script>
    export default {
        props: { scrollInfo: Object, colorUp: String, colorDown: String },
        data() {
            return {
            }
        },
          computed: {
    bend() {
      if (this.scrollInfo.delta === undefined) {
        return 0;
      } else {
        if (Math.abs(this.scrollInfo.delta.top) > 10) {
          if (this.scrollInfo.delta.top < 0) {
            return 200;
          } else {
            return 0;
          }
        } else {
          return 100 - 7 * this.scrollInfo.delta.top;
        }
      }
    },
  },
  methods: {
    onScroll(info) {
      this.scrollInfo = info;
    },
  },
    }
</script>

<style lang="css" scoped>

</style>