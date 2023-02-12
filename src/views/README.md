## Views

Enter your vue views here using kebab case. Every view will automatically added to the routing, powered by [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages).

### Routing rules with examples

- `/test` will load the `test.vue` view
- `/folder/test` will load the `folder/test.vue` view

Within every folder as well directly in the `views` folder you can create the follwing files:

| Vue file name  | Description                                   | Example                                     |
| -------------- | --------------------------------------------- | ------------------------------------------- |
| `index.vue`    | Matches if nothing (else) is added to the url | `/folder/` will load the `folder/index.vue` |
| `[id].vue`     | Matches if an id is added to the url          | `/folder/2` will load the `folder/[id].vue` |
| `[...all].vue` | Matches if no match is found                  | -                                           |

### File structure

Use the [`<script setup>` SFCs](https://vuejs.org/api/sfc-script-setup.html) using the following order:

```vue
<script setup lang="ts"></script>

<template>
  <div>
    <h1>Title</h1>
  </div>
</template>

<style lang="scss" scoped></style>
```
