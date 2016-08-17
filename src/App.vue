<template>
  <div class="contaier">
    <p>
      <a v-on:click="goTop">Go to Top</a>
    </p>
  </div>
</template>

<script>
export default {
  components: {
  },

  methods: {
    goTop () {
      console.log('goTop')
      this.$route.router.go('/top')
    }
  }
}
</script>

<style>
html {
  height: 100%;
}
</style>
