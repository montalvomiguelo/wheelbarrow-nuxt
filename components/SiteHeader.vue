<template>
  <header>
    <NuxtLink to="/">
      <PrismicImage :field="$store.state.layout.logo" />
    </NuxtLink>
    <nav>
      <ul>
        <li
          v-for="(menuItem, index) in $store.state.layout.menu_items"
          :key="index"
        >
          <PrismicLink :field="menuItem.link">{{ menuItem.name }}</PrismicLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      layout: (state) => state.layout,
    }),
  },
}
</script>
