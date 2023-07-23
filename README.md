# Vue3 Vite Typescript Project Template

A basic starter template for a Vue3 website using Vite, TypeScript and SCSS.

## Used technologies

- [Vue 3](https://vuejs.org/) (using [`<script setup>` SFCs](https://vuejs.org/api/sfc-script-setup.html))
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- [pnpm](https://pnpm.io/)

### Used packages

- [Vue Router](https://router.vuejs.org/)
- [VueUse](https://vueuse.org/)
- [Vite Plugin Pages](https://github.com/hannoeru/vite-plugin-pages)
- [Vite SSG](https://github.com/antfu/vite-ssg)
- [Unplugin Vue Components](https://www.npmjs.com/package/unplugin-vue-components)

This template uses static-site generation (SSG). If you want client-side rendering (CSR) instead checkout the `csr` branch.

## Recommended IDE Setup

The recommended IDE is [VSCode](https://code.visualstudio.com/) using the following extensions:

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project setup

```bash
npm i -g pnpm # install pnpm
pnpm i
```

### Compiles and hot-reloads for development

Just run and visit http://localhost:3000

```bash
pnpm dev
```

### Build for production site

```bash
pnpm build
```

### Update dependencies

```bash
# add --latest to update ignoring ranges specified in package.json
pnpm up
```
