## Views

Enter your vue views here using pascal case. Every view will automatically added to the routing.
So i.e. `/imprint` will load the `Imprint.vue` view.
For component templates you will got open if custom routing rules match use the `templates` folder instead.

### File structure

Use the [`<script setup>` SFCs](https://vuejs.org/api/sfc-script-setup.html) using the following order:

```vue
<script setup lang="ts">
</script>

<template>
  <div>
    <h1>Title</h1>
  </div>
</template>

<style lang="scss" scoped>
</style>
```
