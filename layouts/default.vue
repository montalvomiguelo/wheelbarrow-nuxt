<template>
  <div>
    <SiteHeader />
    <Nuxt />
  </div>
</template>

<script>
export default {
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchMainNavigation', $prismic)
  },
}
</script>
