<template>
  <header>
    <NuxtLink to="/">
      <PrismicImage :field="$store.state.mainNavigation.logo" />
    </NuxtLink>
    <nav>
      <ul>
        <li
          v-for="(menuItem, index) in $store.state.mainNavigation.menu_items"
          :key="index"
        >
          <PrismicLink :field="menuItem.link">{{ menuItem.name }}</PrismicLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
