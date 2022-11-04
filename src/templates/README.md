## Templates

Enter your component templates you will got open if custom routing rules using pascal case.
So i.e. `/imprint` will laod the `Imprint.vue` view.
For vue views with regular routing use the `views` folder instead.

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
