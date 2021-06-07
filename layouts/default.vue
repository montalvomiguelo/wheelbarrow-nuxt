<template>
  <div>
    <SiteHeader />
    <Nuxt />
  </div>
</template>

<script>
export default {
  // Called before rendering the layout (even for error page)
  async middleware({ store }) {
    await store.dispatch('fetchLayout')
  },
}
</script>
