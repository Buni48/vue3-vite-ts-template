## Components

Insert your vue components here using camel case names.
Components in this directory will be registered and imported automatically on-demand, powered by [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components).

### Folder structure

You can also create folders to structure your components.
Components which are only used by a specific parent component can be nested into an own `components` folder.
Services that are only used by a specific component can be nested into an own `services` folder.

```markdown
├── components                      # This folder here
│   ├── my-component                # Folder for a component which needs sub-components
│   │   ├── components              # Folder to group sub-components of `my-component`
│   │   │   ├── SubComponent.vue    # A sub-component only used in `MyComponent.vue`
│   │   ├── services                # Folder to group the services of `my-component`
│   │   │   ├── someService.ts      # A service only used in `MyComponent.vue` (use pascal case if it's a class)
│   │   ├── MyComponent.vue         # The parent component of the sub-components
│   └── AnotherComponent.vue        # A component which doesn't have sub-components
```

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
